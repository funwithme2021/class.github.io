// 店鋪資料和其他位置的租金資料
var locations = [
  // 西屯
  { name: '美甲店A', lat: 24.1579, lng: 120.6423, rent: 30000, type: 'nail salon', area: '西屯區' }, 
  { name: '美甲店B', lat: 24.1375, lng: 120.6165, rent: 20000, type: 'nail salon', area: '西屯區' }, 
  { name: '美甲店C', lat: 24.1788, lng: 120.6847, rent: 35000, type: 'nail salon', area: '西屯區' },

  // 北屯
  { name: 'Naily studio北屯同榮店', lat: 24.1946, lng: 120.6613, rent: 36000, type: 'nail salon', area: '北屯區' }, 
  { name: '啾鳥美甲', lat: 24.1890, lng: 120.6633, rent: 36000, type: 'nail salon', area: '北屯區' }, 
  { name: '橙研時尚', lat: 24.1852, lng: 120.6665, rent: 36000, type: 'nail salon', area: '北屯區' },
  { name: '沐希美甲', lat: 24.1754, lng: 120.6793, rent: 35000, type: 'nail salon', area: '北屯區' },
  { name: '嫚妮時尚', lat: 24.1738, lng: 120.6846, rent: 35000, type: 'nail salon', area: '北屯區' },
  { name: '1010NAIL', lat: 24.1777, lng: 120.6840, rent: 35000, type: 'nail salon', area: '北屯區' },
  { name: '柚斯美甲崇德店', lat: 24.1754, lng: 120.6860, rent: 40000, type: 'nail salon', area: '北屯區' },
  { name: 'MIRAR', lat: 24.1759, lng: 120.6863, rent: 38000, type: 'nail salon', area: '北屯區' },
  { name: 'W美學美甲', lat: 24.1789, lng: 120.6869, rent: 35000, type: 'nail salon', area: '北屯區' },
  { name: 'Q Nail', lat: 24.1815, lng: 120.6873, rent:45000, type: 'nail salon', area: '北屯區' },
  { name: 'Nail Nail', lat: 24.1862, lng: 120.6861, rent: 33000, type: 'nail salon', area: '北屯區' },
  { name: '艾利美學', lat: 24.1759, lng: 120.6868, rent: 38000, type: 'nail salon', area: '北屯區' },
  { name: '日美甲', lat: 24.1916, lng: 120.6831, rent: 33000, type: 'nail salon', area: '北屯區' },
  { name: 'Labi Nails', lat: 24.1833, lng: 120.6919, rent: 30000, type: 'nail salon', area: '北屯區' },
  { name: '雪莉', lat: 24.1821, lng: 120.6900, rent: 42000, type: 'nail salon', area: '北屯區' },
  { name: '斯朵利松竹二', lat: 24.1832, lng: 120.6930, rent: 46000, type: 'nail salon', area: '北屯區' },
  { name: '斯朵利松竹', lat: 24.1833, lng: 120.6939, rent: 50000, type: 'nail salon', area: '北屯區' },
  { name: '角落公主', lat: 24.1811, lng: 120.6924, rent: 41000, type: 'nail salon', area: '北屯區' },
  { name: '自我空間', lat: 24.1799, lng: 120.6932, rent: 30000, type: 'nail salon', area: '北屯區' },
  { name: '杉莯美甲', lat: 24.1758, lng: 120.6931, rent: 32000, type: 'nail salon', area: '北屯區' },
  { name: 'Day Dream', lat: 24.17582, lng: 120.6931, rent: 32000, type: 'nail salon', area: '北屯區' },
  { name: 'Gracias', lat: 24.1740, lng: 120.6924, rent: 38000, type: 'nail salon', area: '北屯區' },
  

  // 南屯
  { name: '美甲店G', lat: 24.1579, lng: 120.6420, rent: 10000, type: 'nail salon', area: '南屯區' },
  { name: '美甲店H', lat: 24.1579, lng: 120.6433, rent: 45000, type: 'nail salon', area: '南屯區' },
  { name: '美甲店I', lat: 24.1579, lng: 120.6523, rent: 55000, type: 'nail salon', area: '南屯區' },
  { name: '美甲店J', lat: 24.1579, lng: 120.6183, rent: 38000, type: 'nail salon', area: '南屯區' },
  { name: '美甲店K', lat: 24.1579, lng: 120.6333, rent: 20000, type: 'nail salon', area: '南屯區' },
];
