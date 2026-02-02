const TDX_CONFIG = {
    clientId: 'r36144112-d7b2ebdd-ce4c-40c3',
    clientSecret: '141d81d1-a450-4610-9309-412c8151cc3d'
};

window.trainSchedule = {}; 
let accessToken = "";
window.stationMap = {}; 

// 1. 取得 Access Token
async function getAccessToken() {
    try {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        params.append('client_id', TDX_CONFIG.clientId);
        params.append('client_secret', TDX_CONFIG.clientSecret);
        const res = await fetch("https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token", {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params
        });
        const data = await res.json();
        accessToken = data.access_token;
        console.log("Token 取得成功");
        return accessToken;
    } catch (error) {
        console.error("Token Error:", error);
    }
}

// 2. 初始化車站資料 (V2)
async function initStationMap() {
    if (!accessToken) await getAccessToken();
    try {
        const res = await fetch("https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/Station?$format=JSON", {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        const data = await res.json();
        window.stationMap = {};
        data.forEach(s => {
            window.stationMap[s.StationID] = s.StationName.Zh_tw;
        });
        console.log("高鐵車站清單 (V2) 初始化成功");
    } catch (error) {
        console.error("車站資料抓取失敗:", error);
    }
}

// 3. 抓取時刻表 (修正跨日資料處理邏輯)
async function fetchRealData(date) {
    if (!accessToken) await getAccessToken();
    if (Object.keys(window.stationMap || {}).length === 0) await initStationMap();

    try {
        const url = `https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/DailyTimetable/TrainDate/${date}?$format=JSON`;
        const res = await fetch(url, { headers: { 'Authorization': `Bearer ${accessToken}` } });
        
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        
        const data = await res.json();
        const translated = {};

        data.forEach(item => {
            const trainNo = item.DailyTrainInfo.TrainNo;
            translated[trainNo] = {
                '車站時間': item.StopTimes.map(stop => ([
                    stop.StationName.Zh_tw,
                    stop.DepartureTime, 
                    stop.ArrivalTime
                ]))
            };
        });

        // 將結果存入全域，供 test.html 使用
        window.trainSchedule = translated;
        console.log(`THSR ${date} 時刻表轉換成功！車次總數:`, Object.keys(translated).length);
        return translated;
    } catch (error) {
        console.error("時刻表解析失敗:", error);
        return {};
    }
}

// 4. 抓取剩餘座位 (加入參數安全性檢查，防止 400 錯誤)
window.fetchSeatStatusOD = async function(date, originID, destinationID) {
    // 關鍵修正：確保所有參數都存在且不是空字串，避免產生無效網址導致 400 錯誤
    if (!date || !originID || !destinationID || originID === "" || destinationID === "") {
        return {};
    }
    
    if (!accessToken) await getAccessToken();
    const url = `https://tdx.transportdata.tw/api/basic/v2/Rail/THSR/AvailableSeatStatus/Train/OD/${originID}/to/${destinationID}/TrainDate/${date}?$format=JSON`;
    
    try {
        const res = await fetch(url, { headers: { 'Authorization': `Bearer ${accessToken}` } });
        if (!res.ok) return {}; 
        
        const data = await res.json();
        const results = {};
        const items = data.AvailableSeats || [];
        items.forEach(item => {
            // 回傳原始代碼 O/L/X，由前端渲染圖示
            results[String(item.TrainNo)] = {
                standard: item.StandardSeatStatus,
                business: item.BusinessSeatStatus
            };
        });
        return results;
    } catch (error) {
        console.error("座位 API 請求失敗:", error);
        return {};
    }
};

// 5. 移除不再需要的誤點與優惠邏輯
async function updateLiveDelay() {
    return Promise.resolve();
}
}
