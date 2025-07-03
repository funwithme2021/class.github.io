/* ty.js ── 颱風資料 */
const storms = [
  {
    name: "2503木恩(MUN)-輕度颱風",
    centerPressure: 995,
    windSpeed: 20,
    gust: 28,
    seven: 100,
    ten: 0,
    movement: "北西 20 公里/時",
    time: "2025/07/04 02:00",
    pastPath: [
      { coords: [22.5, 148.7], intensity: "TD", time: "01日14時" },
      { coords: [23.5, 148.3], intensity: "TD", time: "01日20時" },
      { coords: [23.8, 148.1], intensity: "TD", time: "02日02時" },
      { coords: [24.4, 147.1], intensity: "TD", time: "02日08時" },
      { coords: [25.5, 146.8], intensity: "TD", time: "02日14時" },
      { coords: [26.2, 146.4], intensity: "TD", time: "02日20時" },
      { coords: [26.8, 145.6], intensity: "TS", time: "03日02時" },
      { coords: [27.0, 145.2], intensity: "TS", time: "03日08時" },
      { coords: [27.6, 145.4], intensity: "TS", time: "03日14時" },
      { coords: [28.4, 145.4], intensity: "TS", time: "03日20時" },
      { coords: [28.6, 145.2], intensity: "TS", time: "04日02時" },

    ],
    currentData: {
      coords: [28.6, 145.2],
      intensity: "TS",
      r7:  { ne: 100, nw: 90, se: 80, sw: 110 },/* ne: 東北, nw: 東南, se: 西北, sw: 西南 */
      r10: { ne: 0,  nw: 0,  se: 0,  sw: 0  },
      time: "現在"
    },
    futurePath: [
      {
        coords:[29.5, 145.1],
        intensity:"TS",
        time:"04日08時",
        r7:{ne:100,nw:100,se:100,sw:100},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[30.0, 145.3],
        intensity:"TS",
        time:"04日14時",
        r7:{ne:100,nw:100,se:100,sw:100},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[30.5, 146.0],
        intensity:"TS",
        time:"05日02時",
        r7:{ne:100,nw:100,se:100,sw:100},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[32.2, 148.9],
        intensity:"TS",
        time:"06日02時",
        r7:{ne:100,nw:100,se:100,sw:100},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[35.8, 150.3],
        intensity:"TS",
        time:"07日02時",
        r7:{ne:100,nw:100,se:100,sw:100},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[40.1, 150.8],
        intensity:"TS",
        time:"08日02時",
        r7:{ne:100,nw:100,se:100,sw:100},
        r10:{ne:0,nw:0,se:0,sw:0}
      },

    ]
  },
  {
    name: "25TD04(NONAME)-熱帶性低氣壓",
    centerPressure: 1004,
    windSpeed: 12,
    gust: 20,
    seven: 0,
    ten: 0,
    movement: "北西 21 公里/時",
    time: "2025/06/26 08:00",
    pastPath: [
      { coords:[15.8, 116.7], intensity:"TD", time:"24日08時" },{ coords:[16.2, 116.0], intensity:"TD", time:"24日14時" },{ coords:[16.3, 116.0], intensity:"TD", time:"24日20時" },{ coords:[17.1, 115.1], intensity:"TD", time:"25日02時" },
      { coords:[17.9, 114.5], intensity:"TD", time:"25日08時" },{ coords:[18.6, 113.3], intensity:"TD", time:"25日14時" },{ coords:[19.0, 112.5], intensity:"TD", time:"25日20時" },{ coords:[19.3, 111.5], intensity:"TD", time:"26日02時" },
      { coords:[20.0, 110.8], intensity:"TD", time:"26日08時" },
    ],
  },
    {
    name: "2502聖帕(SEPAT)-輕度颱風",
    centerPressure: 1002,
    windSpeed: 15,
    gust: 23,
    seven: 80,
    ten: 0,
    movement: "北西 9 公里/時",
    time: "2025/06/25 02:00",
    pastPath: [
      { coords: [23.0, 146.0], intensity: "TD", time: "22日14時" },
      { coords: [23.5, 145.8], intensity: "TD", time: "22日20時" },
      { coords: [24.0, 145.2], intensity: "TD", time: "23日02時" },
      { coords: [26.0, 143.8], intensity: "TS", time: "23日14時" },
      { coords: [27.1, 143.4], intensity: "TS", time: "23日20時" },
      { coords: [28.6, 142.1], intensity: "TS", time: "24日02時" },
      { coords: [29.3, 141.0], intensity: "TS", time: "24日08時" },
      { coords: [29.9, 140.5], intensity: "TS", time: "24日14時" },
      { coords: [30.6, 140.1], intensity: "TS", time: "24日20時" },
      { coords: [31.0, 140.0], intensity: "TD", time: "25日02時" },
    ],
  },
    {
    name: "25TD02(NONAME)-熱帶性低氣壓",
    centerPressure: 1005,
    windSpeed: 10,
    gust: 15,
    seven: 0,
    ten: 0,
    movement: "北北西 35 公里/時",
    time: "2025/06/13 02:00",
    pastPath: [
      { coords:[15.2, 127.5], intensity:"TD", time:"11日18時" },
      { coords:[15.7, 126.9], intensity:"TD", time:"11日14時" },
      { coords:[17.8, 125.5], intensity:"TD", time:"11日20時" },
      { coords:[19.1, 123.8], intensity:"TD", time:"12日02時" },
      { coords:[21.0, 122.2], intensity:"TD", time:"12日08時" },
      { coords:[22.3, 121.7], intensity:"TD", time:"12日14時" },
      { coords:[23.2, 121.6], intensity:"TD", time:"12日20時" },
      { coords:[25.0, 120.9], intensity:"TD", time:"13日02時" }
    ],
    
  },
  {
    name: "2501蝴蝶(WUTIP)-輕度颱風",
    centerPressure: 985,
    windSpeed: 25,
    gust: 33,
    seven: 120,
    ten: 0,
    movement: "西北 12 公里/時",
    time: "2025/06/13 02:00",
    pastPath: [
      { coords: [15.5, 115.0], intensity: "TD", time: "10日02時" },
      { coords: [15.3, 114.8], intensity: "TD", time: "10日14時" },
      { coords: [15.3, 114.5], intensity: "TD", time: "10日20時" },
      { coords: [15.3, 114.3], intensity: "TD", time: "11日02時" },
      { coords: [15.5, 113.6], intensity: "TS", time: "11日08時" },
      { coords: [16.6, 112.5], intensity: "TS", time: "11日14時" },
      { coords: [16.5, 111.6], intensity: "TS", time: "11日20時" },
      { coords: [16.5, 111.0], intensity: "TS", time: "12日02時" },
      { coords: [17.0, 110.7], intensity: "TS", time: "12日08時" },
      { coords: [17.0, 109.6], intensity: "TS", time: "12日14時" },
      { coords: [17.4, 109.2], intensity: "TS", time: "12日20時" },
      { coords: [17.8, 108.9], intensity: "TS", time: "13日02時" },
      { coords: [18.3, 108.7], intensity: "TS", time: "13日08時" },
      { coords: [18.8, 108.3], intensity: "TS", time: "13日14時" },
      { coords: [19.3, 108.4], intensity: "TS", time: "13日20時" },
      { coords: [19.8, 108.7], intensity: "TS", time: "14日02時" },
      { coords: [20.6, 109.1], intensity: "TS", time: "14日08時" },
      { coords: [21.5, 109.8], intensity: "TS", time: "14日14時" },
      { coords: [22.3, 110.4], intensity: "TS", time: "14日20時" },
      { coords: [23.2, 111.1], intensity: "TD", time: "15日02時" },
    ],
  },
  
];
