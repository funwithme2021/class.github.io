// food.js
const foodData = [
    {
      time: "2025-03-10",
      city: "台北市",
      district: "信義區",
      storeName: "牛排店A",
      category: "餐廳",
      priceLevel: "$$",
       // 地圖用 (示例座標)
      lat: 25.036, 
      lng: 121.565,
      // 各細項評分 (0~100)
      taste: 95,        // 口味
      freshness: 90,    // 食材新鮮度
      texture: 88,      // 口感
      appearance: 90,   // 外觀
      smell: 85,        // 氣味
      portion: 80,      // 分量
      uniqueness: 75,   // 獨特性
      price: 70,        // 價格
      environment: 85,  // 環境
      attitude: 80,     // 態度
      others: 70        // 其他
    },
    {
      time: "2025-03-15",
      city: "台北市",
      district: "信義區",
      storeName: "牛排店2",
      category: "餐廳",
      priceLevel: "$$",
      // 地圖用 (示例座標)
      lat: 25.036, 
      lng: 121.565,
      // 各細項評分 (0~100)
      taste: 90,
      freshness: 85,
      texture: 95,
      appearance: 90,
      smell: 88,
      portion: 75,
      uniqueness: 75,
      price: 70,
      environment: 88,
      attitude: 100,
      others: 100
    },
    {
      time: "2025-03-12",
      city: "新北市",
      district: "板橋區",
      storeName: "牛排店3", // 模擬「同店名」不同縣市，也要計入平均
      category: "餐廳",
      priceLevel: "$$",
       // 地圖用 (示例座標)
       lat: 25.036, 
       lng: 121.565,
       // 各細項評分 (0~100)
      taste: 92,
      freshness: 90,
      texture: 93,
      appearance: 90,
      smell: 90,
      portion: 85,
      uniqueness: 80,
      price: 80,
      environment: 90,
      attitude: 92,
      others: 85
    },
    {
      time: "2025-01-08",
      city: "台北市",
      district: "大安區",
      storeName: "咖啡廳B",
      category: "咖啡廳",
      priceLevel: "$$",
      // 地圖用 (示例座標)
      lat: 24.036, 
      lng: 120.565,
      // 各細項評分 (0~100)
      taste: 85,
      freshness: 88,
      texture: 80,
      appearance: 85,
      smell: 82,
      portion: 70,
      uniqueness: 70,
      price: 78,
      environment: 88,
      attitude: 90,
      others: 77
    },
    {
      time: "2025-02-01",
      city: "新北市",
      district: "板橋區",
      storeName: "甜點店C",
      category: "甜點",
      priceLevel: "$$$",
      // 地圖用 (示例座標)
      lat: 25.036, 
      lng: 120.565,
      // 各細項評分 (0~100)
      taste: 70,
      freshness: 68,
      texture: 65,
      appearance: 75,
      smell: 72,
      portion: 73,
      uniqueness: 60,
      price: 68,
      environment: 70,
      attitude: 70,
      others: 65
    },
    {
        time: "2025-02-01",
        city: "新北市",
        district: "板橋區",
        storeName: "甜點店8",
        category: "甜點",
        priceLevel: "$$$",
        // 地圖用 (示例座標)
        lat: 25.036, 
        lng: 120.565,
        // 各細項評分 (0~100)
        taste: 100,
        freshness: 68,
        texture: 65,
        appearance: 75,
        smell: 72,
        portion: 73,
        uniqueness: 60,
        price: 68,
        environment: 70,
        attitude: 70,
        others: 65
      },
    {
      time: "2025-03-17",
      city: "桃園市",
      district: "中壢區",
      storeName: "炸雞攤D",
      category: "街邊",
      priceLevel: "$",
      // 地圖用 (示例座標)
      lat: 23.036, 
      lng: 121.565,
      // 各細項評分 (0~100)
      taste: 65,
      freshness: 60,
      texture: 70,
      appearance: 55,
      smell: 58,
      portion: 80,
      uniqueness: 50,
      price: 50,
      environment: 55,
      attitude: 60,
      others: 40
    }
  ];
  