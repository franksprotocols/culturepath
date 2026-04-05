export interface WorldNation {
  id: string;
  name_en: string;
  name_zh: string;
  flag: string;
  region: "East Asia" | "Southeast Asia" | "South Asia" | "Central Asia" | "Middle East" | "Europe" | "North Africa" | "Sub-Saharan Africa" | "North America" | "Central America" | "South America" | "Oceania";
  svgX: number;
  svgY: number;
  capital_en: string;
  capital_zh: string;
  languageId: string;
}

export const worldNationsRegistry: WorldNation[] = [
  // East Asia
  { id: "japan", name_en: "Japan", name_zh: "日本", flag: "🇯🇵", region: "East Asia", svgX: 862, svgY: 178, capital_en: "Tokyo", capital_zh: "东京", languageId: "japanese" },
  { id: "china", name_en: "China", name_zh: "中国", flag: "🇨🇳", region: "East Asia", svgX: 790, svgY: 185, capital_en: "Beijing", capital_zh: "北京", languageId: "mandarin" },
  { id: "south-korea", name_en: "South Korea", name_zh: "韩国", flag: "🇰🇷", region: "East Asia", svgX: 840, svgY: 186, capital_en: "Seoul", capital_zh: "首尔", languageId: "korean" },
  { id: "mongolia", name_en: "Mongolia", name_zh: "蒙古", flag: "🇲🇳", region: "East Asia", svgX: 770, svgY: 155, capital_en: "Ulaanbaatar", capital_zh: "乌兰巴托", languageId: "mongolian" },

  // Southeast Asia
  { id: "vietnam", name_en: "Vietnam", name_zh: "越南", flag: "🇻🇳", region: "Southeast Asia", svgX: 800, svgY: 240, capital_en: "Hanoi", capital_zh: "河内", languageId: "vietnamese" },
  { id: "thailand", name_en: "Thailand", name_zh: "泰国", flag: "🇹🇭", region: "Southeast Asia", svgX: 778, svgY: 248, capital_en: "Bangkok", capital_zh: "曼谷", languageId: "thai" },
  { id: "indonesia", name_en: "Indonesia", name_zh: "印度尼西亚", flag: "🇮🇩", region: "Southeast Asia", svgX: 810, svgY: 300, capital_en: "Jakarta", capital_zh: "雅加达", languageId: "indonesian" },
  { id: "philippines", name_en: "Philippines", name_zh: "菲律宾", flag: "🇵🇭", region: "Southeast Asia", svgX: 835, svgY: 255, capital_en: "Manila", capital_zh: "马尼拉", languageId: "filipino" },

  // South Asia
  { id: "india", name_en: "India", name_zh: "印度", flag: "🇮🇳", region: "South Asia", svgX: 728, svgY: 235, capital_en: "New Delhi", capital_zh: "新德里", languageId: "hindi" },
  { id: "nepal", name_en: "Nepal", name_zh: "尼泊尔", flag: "🇳🇵", region: "South Asia", svgX: 740, svgY: 215, capital_en: "Kathmandu", capital_zh: "加德满都", languageId: "nepali" },
  { id: "sri-lanka", name_en: "Sri Lanka", name_zh: "斯里兰卡", flag: "🇱🇰", region: "South Asia", svgX: 730, svgY: 270, capital_en: "Colombo", capital_zh: "科伦坡", languageId: "sinhala" },

  // Middle East
  { id: "iran", name_en: "Iran", name_zh: "伊朗", flag: "🇮🇷", region: "Middle East", svgX: 660, svgY: 198, capital_en: "Tehran", capital_zh: "德黑兰", languageId: "persian" },
  { id: "turkey", name_en: "Turkey", name_zh: "土耳其", flag: "🇹🇷", region: "Middle East", svgX: 610, svgY: 185, capital_en: "Ankara", capital_zh: "安卡拉", languageId: "turkish" },
  { id: "israel", name_en: "Israel", name_zh: "以色列", flag: "🇮🇱", region: "Middle East", svgX: 605, svgY: 205, capital_en: "Jerusalem", capital_zh: "耶路撒冷", languageId: "hebrew" },

  // Europe
  { id: "france", name_en: "France", name_zh: "法国", flag: "🇫🇷", region: "Europe", svgX: 478, svgY: 155, capital_en: "Paris", capital_zh: "巴黎", languageId: "french" },
  { id: "italy", name_en: "Italy", name_zh: "意大利", flag: "🇮🇹", region: "Europe", svgX: 502, svgY: 168, capital_en: "Rome", capital_zh: "罗马", languageId: "italian" },
  { id: "germany", name_en: "Germany", name_zh: "德国", flag: "🇩🇪", region: "Europe", svgX: 498, svgY: 145, capital_en: "Berlin", capital_zh: "柏林", languageId: "german" },
  { id: "spain", name_en: "Spain", name_zh: "西班牙", flag: "🇪🇸", region: "Europe", svgX: 462, svgY: 170, capital_en: "Madrid", capital_zh: "马德里", languageId: "spanish" },
  { id: "united-kingdom", name_en: "United Kingdom", name_zh: "英国", flag: "🇬🇧", region: "Europe", svgX: 470, svgY: 135, capital_en: "London", capital_zh: "伦敦", languageId: "english" },
  { id: "greece", name_en: "Greece", name_zh: "希腊", flag: "🇬🇷", region: "Europe", svgX: 530, svgY: 175, capital_en: "Athens", capital_zh: "雅典", languageId: "greek" },
  { id: "russia", name_en: "Russia", name_zh: "俄罗斯", flag: "🇷🇺", region: "Europe", svgX: 600, svgY: 125, capital_en: "Moscow", capital_zh: "莫斯科", languageId: "russian" },
  { id: "norway", name_en: "Norway", name_zh: "挪威", flag: "🇳🇴", region: "Europe", svgX: 498, svgY: 110, capital_en: "Oslo", capital_zh: "奥斯陆", languageId: "norwegian" },

  // North Africa
  { id: "egypt", name_en: "Egypt", name_zh: "埃及", flag: "🇪🇬", region: "North Africa", svgX: 570, svgY: 215, capital_en: "Cairo", capital_zh: "开罗", languageId: "arabic" },
  { id: "morocco", name_en: "Morocco", name_zh: "摩洛哥", flag: "🇲🇦", region: "North Africa", svgX: 455, svgY: 200, capital_en: "Rabat", capital_zh: "拉巴特", languageId: "arabic" },

  // Sub-Saharan Africa
  { id: "ethiopia", name_en: "Ethiopia", name_zh: "埃塞俄比亚", flag: "🇪🇹", region: "Sub-Saharan Africa", svgX: 600, svgY: 270, capital_en: "Addis Ababa", capital_zh: "亚的斯亚贝巴", languageId: "amharic" },
  { id: "nigeria", name_en: "Nigeria", name_zh: "尼日利亚", flag: "🇳🇬", region: "Sub-Saharan Africa", svgX: 498, svgY: 270, capital_en: "Abuja", capital_zh: "阿布贾", languageId: "yoruba" },
  { id: "kenya", name_en: "Kenya", name_zh: "肯尼亚", flag: "🇰🇪", region: "Sub-Saharan Africa", svgX: 600, svgY: 295, capital_en: "Nairobi", capital_zh: "内罗毕", languageId: "swahili" },

  // North America
  { id: "mexico", name_en: "Mexico", name_zh: "墨西哥", flag: "🇲🇽", region: "North America", svgX: 218, svgY: 225, capital_en: "Mexico City", capital_zh: "墨西哥城", languageId: "spanish" },
  { id: "united-states", name_en: "United States", name_zh: "美国", flag: "🇺🇸", region: "North America", svgX: 220, svgY: 175, capital_en: "Washington D.C.", capital_zh: "华盛顿", languageId: "english" },
  { id: "canada", name_en: "Canada", name_zh: "加拿大", flag: "🇨🇦", region: "North America", svgX: 230, svgY: 130, capital_en: "Ottawa", capital_zh: "渥太华", languageId: "english" },

  // Central America
  { id: "colombia", name_en: "Colombia", name_zh: "哥伦比亚", flag: "🇨🇴", region: "Central America", svgX: 260, svgY: 275, capital_en: "Bogotá", capital_zh: "波哥大", languageId: "spanish" },

  // South America
  { id: "brazil", name_en: "Brazil", name_zh: "巴西", flag: "🇧🇷", region: "South America", svgX: 320, svgY: 310, capital_en: "Brasília", capital_zh: "巴西利亚", languageId: "portuguese" },
  { id: "peru", name_en: "Peru", name_zh: "秘鲁", flag: "🇵🇪", region: "South America", svgX: 260, svgY: 315, capital_en: "Lima", capital_zh: "利马", languageId: "spanish" },
  { id: "argentina", name_en: "Argentina", name_zh: "阿根廷", flag: "🇦🇷", region: "South America", svgX: 290, svgY: 380, capital_en: "Buenos Aires", capital_zh: "布宜诺斯艾利斯", languageId: "spanish" },

  // Oceania
  { id: "australia", name_en: "Australia", name_zh: "澳大利亚", flag: "🇦🇺", region: "Oceania", svgX: 860, svgY: 365, capital_en: "Canberra", capital_zh: "堪培拉", languageId: "english" },
  { id: "new-zealand", name_en: "New Zealand", name_zh: "新西兰", flag: "🇳🇿", region: "Oceania", svgX: 920, svgY: 400, capital_en: "Wellington", capital_zh: "惠灵顿", languageId: "english" },
];

export const allRegions = [
  "East Asia",
  "Southeast Asia",
  "South Asia",
  "Middle East",
  "Europe",
  "North Africa",
  "Sub-Saharan Africa",
  "North America",
  "Central America",
  "South America",
  "Oceania",
] as const;

export type Region = (typeof allRegions)[number];
