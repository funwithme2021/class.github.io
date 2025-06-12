/* ty.js ── 颱風資料 */
const storms = [
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
    ],
    currentData: {
      coords: [17.8, 108.9],
      intensity: "TS",
      r7:  { ne: 100, nw: 140, se: 100, sw: 120 },/* ne: 東北, nw: 東南, se: 西北, sw: 西南 */
      r10: { ne: 0,  nw: 0,  se: 0,  sw: 0  },
      time: "現在"
    },
    futurePath: [
      {
        coords:[18.8,108.5],
        intensity:"TS",
        time:"13日14時",
        r7:{ne:120,nw:120,se:120,sw:120},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[19.3,108.5],
        intensity:"TS",
        time:"13日20時",
        r7:{ne:120,nw:120,se:120,sw:120},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[19.8,108.7],
        intensity:"TS",
        time:"14日02時",
        r7:{ne:120,nw:120,se:120,sw:120},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[21.5,109.7],
        intensity:"TS",
        time:"14日14時",
        r7:{ne:100,nw:100,se:100,sw:100},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[23.2,111.1],
        intensity:"TS",
        time:"15日02時",
        r7:{ne:80,nw:80,se:80,sw:80},
        r10:{ne:0,nw:0,se:0,sw:0}
      },
      {
        coords:[27.1,117.3],
        intensity:"TD",
        time:"16日02時",
        r7:{ne:0,nw:0,se:0,sw:0},
        r10:{ne:0,nw:0,se:0,sw:0}
      }
    ]
  },
  
];
