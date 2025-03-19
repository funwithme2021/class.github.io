// food.js
const foodData = [
    {
      time: "2025-03-10",
      city: "台南市",
      district: "東區",
      storeName: "阿桂嬤養生湯",
      category: "夜市",
      priceLevel: "$$",
       // 地圖用 (示例座標)
      lat: 22.982575, 
      lng: 120.219317,
      // 各細項評分 (0~100)
      taste: 97.5,        // 口味
      freshness: 90,    // 食材新鮮度
      texture: 90,      // 口感
      appearance: 87,   // 外觀
      smell: 97,        // 氣味
      portion: 89.5,      // 分量
      uniqueness: 85,   // 獨特性
      price: 85,        // 價格
      environment: 85,  // 環境
      attitude: 85.5,     // 態度
      others: 85,        // 其他
      // ★★ 加入 Google Maps 連結 ★★
      gmapUrl: "https://maps.app.goo.gl/hwyrdy2E14PkHSrp7"
    },
    {
        time: "2025-03-10",
        city: "台中市",
        district: "南區",
        storeName: "鴨娘當歸鴨",
        category: "店面",
        priceLevel: "$$",
         // 地圖用 (示例座標)
        lat: 24.129834, 
        lng: 120.682950,
        // 各細項評分 (0~100)
        taste: 87,        // 口味
        freshness: 97,    // 食材新鮮度
        texture: 92,      // 口感
        appearance: 87,   // 外觀
        smell: 90,        // 氣味
        portion: 91.5,      // 分量
        uniqueness: 85,   // 獨特性
        price: 86,        // 價格
        environment: 86,  // 環境
        attitude: 97,     // 態度
        others: 90,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/5DVdH4tme2sM9DYa7"
      },
      {
        time: "2025-03-10",
        city: "台南市",
        district: "中西區",
        storeName: "下大道蘭米糕",
        category: "店面",
        priceLevel: "$$",
         // 地圖用 (示例座標)
        lat: 22.989864, 
        lng: 120.193899,
        // 各細項評分 (0~100)
        taste: 85,        // 口味
        freshness: 87,    // 食材新鮮度
        texture: 88,      // 口感
        appearance: 90,   // 外觀
        smell: 89,        // 氣味
        portion: 90,      // 分量
        uniqueness: 90,   // 獨特性
        price: 88.5,        // 價格
        environment: 85,  // 環境
        attitude: 85,     // 態度
        others: 85,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/DyXR6d874Q86c5xXA"
      },
      {
        time: "2025-03-10",
        city: "台南市",
        district: "中西區",
        storeName: "阿蓮牛肉湯-台南公園店",
        category: "店面",
        priceLevel: "$$$",
         // 地圖用 (示例座標)
        lat: 22.994914, 
        lng: 120.205419,
        // 各細項評分 (0~100)
        taste: 86,        // 口味
        freshness: 90,    // 食材新鮮度
        texture: 87,      // 口感
        appearance: 87,   // 外觀
        smell: 87,        // 氣味
        portion: 90,      // 分量
        uniqueness: 88.5,   // 獨特性
        price: 90,        // 價格
        environment: 90,  // 環境
        attitude: 85,     // 態度
        others: 85,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/YuESVaq61BnMcG5f8"
      },
      {
        time: "2025-03-10",
        city: "台南市",
        district: "中西區",
        storeName: "大勇街無名鹹粥",
        category: "店面",
        priceLevel: "$$",
         // 地圖用 (示例座標)
        lat: 22.989813, 
        lng:  120.193300,
        // 各細項評分 (0~100)
        taste: 88,        // 口味
        freshness: 88,    // 食材新鮮度
        texture: 85.5,      // 口感
        appearance: 87,   // 外觀
        smell: 83,        // 氣味
        portion: 87,      // 分量
        uniqueness: 85,   // 獨特性
        price: 86,        // 價格
        environment: 82,  // 環境
        attitude: 85,     // 態度
        others: 85,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/6xvyCiFyx8k3mLPv7"
      },
      {
        time: "2025-03-10",
        city: "台南市",
        district: "中西區",
        storeName: "阿川紅燒青蛙（方家老牌炒鱔魚）",
        category: "店面",
        priceLevel: "$$",
         // 地圖用 (示例座標)
        lat: 22.998888, 
        lng:  120.200684,
        // 各細項評分 (0~100)
        taste: 85,        // 口味
        freshness: 85.5,    // 食材新鮮度
        texture: 85,      // 口感
        appearance: 83.5,   // 外觀
        smell: 85.5,        // 氣味
        portion: 85.5,      // 分量
        uniqueness: 85,   // 獨特性
        price: 85,        // 價格
        environment: 82.5,  // 環境
        attitude: 88,     // 態度
        others: 87,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/tNfxtAzhmupsTbSCA"
      },
      {
        time: "2025-03-10",
        city: "台南市",
        district: "中西區",
        storeName: "集品蝦仁飯",
        category: "店面",
        priceLevel: "$$",
         // 地圖用 (示例座標)
        lat: 22.990217, 
        lng:  120.195199,
        // 各細項評分 (0~100)
        taste: 88,        // 口味
        freshness: 83,    // 食材新鮮度
        texture: 84.5,      // 口感
        appearance: 86,   // 外觀
        smell: 85,        // 氣味
        portion: 82.5,      // 分量
        uniqueness: 86.5,   // 獨特性
        price: 84,        // 價格
        environment: 79,  // 環境
        attitude: 82,     // 態度
        others: 82,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/u3cBtLV5pM7NbYgs8"
      },
      {
        time: "2025-03-10",
        city: "台中市",
        district: "南區",
        storeName: "老陳海南雞飯 復興總店",
        category: "店面",
        priceLevel: "$$$",
         // 地圖用 (示例座標)
        lat: 24.132236, 
        lng:  120.677916,
        // 各細項評分 (0~100)
        taste: 85.5,        // 口味
        freshness: 85,    // 食材新鮮度
        texture: 82.5,      // 口感
        appearance: 87,   // 外觀
        smell: 83.5,        // 氣味
        portion: 86,      // 分量
        uniqueness: 82.5,   // 獨特性
        price: 81.5,        // 價格
        environment: 85,  // 環境
        attitude: 83.5,     // 態度
        others: 84,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/RyA4Pc3uVtQVpmQH9"
      },
      {
        time: "2025-03-10",
        city: "台南市",
        district: "中西區",
        storeName: "矮仔成蝦仁飯",
        category: "店面",
        priceLevel: "$$",
         // 地圖用 (示例座標)
        lat: 22.989013, 
        lng:  120.195156,
        // 各細項評分 (0~100)
        taste: 84.5,        // 口味
        freshness: 83,    // 食材新鮮度
        texture: 85,      // 口感
        appearance: 83.5,   // 外觀
        smell: 82.5,        // 氣味
        portion: 81,      // 分量
        uniqueness: 86.5,   // 獨特性
        price: 82,        // 價格
        environment: 90,  // 環境
        attitude: 89,     // 態度
        others: 83,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/hMMFhydaDtig4P6i8"
      },
      {
        time: "2025-03-10",
        city: "台南市",
        district: "中西區",
        storeName: "品味鱔魚意麵",
        category: "店面",
        priceLevel: "$$$",
         // 地圖用 (示例座標)
        lat: 22.991815, 
        lng:  120.195307,
        // 各細項評分 (0~100)
        taste: 85.5,        // 口味
        freshness: 85.5,    // 食材新鮮度
        texture: 84.5,      // 口感
        appearance: 83,   // 外觀
        smell: 84,        // 氣味
        portion: 83,      // 分量
        uniqueness: 83.5,   // 獨特性
        price: 83,        // 價格
        environment: 81,  // 環境
        attitude: 82,     // 態度
        others: 82,        // 其他
        // ★★ 加入 Google Maps 連結 ★★
        gmapUrl: "https://maps.app.goo.gl/pzNKGh76vQZRGAvh6"
      },
    
  ];
  