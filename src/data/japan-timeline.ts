import type { TimelineEvent } from "@/lib/db";

export const japanTimeline: TimelineEvent[] = [
  // ============================================================
  // 1. Jomon Period (14000–300 BCE)
  // ============================================================
  {
    id: "jp-tl-001",
    nationId: "japan",
    year: -14000,
    yearEnd: -300,
    era: "Jomon",
    title_en: "Jomon Period",
    title_zh: "绳文时代",
    summary_en:
      "One of the world\u2019s earliest pottery cultures thrived for over ten thousand years, with hunter-gatherers crafting flame-shaped vessels of astonishing complexity.",
    summary_zh:
      "世界上最早的陶器文化之一延续了一万多年，狩猎采集者制作出令人惊叹的火焰形陶器。",
    type: "era",
    icon: "🏺",
    linkedCardIds: ["jp-hist-001"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-002",
    nationId: "japan",
    year: -10000,
    era: "Jomon",
    title_en: "Earliest Known Pottery",
    title_zh: "最早的已知陶器",
    summary_en:
      "The Jomon people produced some of the oldest pottery ever discovered, predating ceramics in the Middle East by thousands of years.",
    summary_zh:
      "绳文人制作了迄今发现的最古老的陶器，比中东的陶瓷早了数千年。",
    type: "cultural",
    icon: "🫙",
    linkedCardIds: ["jp-hist-001"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-003",
    nationId: "japan",
    year: -3000,
    era: "Jomon",
    title_en: "Dogu Figurines and Spiritual Life",
    title_zh: "土偶与精神信仰",
    summary_en:
      "Mysterious clay figurines called dogu hint at a rich spiritual world\u2014some scholars believe they served as vessels for healing rituals or representations of nature spirits.",
    summary_zh:
      "被称为「土偶」的神秘陶俑暗示着丰富的精神世界——一些学者认为它们是治愈仪式的载体或自然神灵的化身。",
    type: "cultural",
    icon: "🗿",
    linkedCardIds: ["jp-hist-001"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },

  // ============================================================
  // 2. Yayoi Period (300 BCE–300 CE)
  // ============================================================
  {
    id: "jp-tl-004",
    nationId: "japan",
    year: -300,
    yearEnd: 300,
    era: "Yayoi",
    title_en: "Yayoi Period",
    title_zh: "弥生时代",
    summary_en:
      "Wet-rice agriculture arrived from the Asian mainland, transforming Japan from a land of foragers into a society of settled farmers and emerging chieftains.",
    summary_zh:
      "水稻农业从亚洲大陆传入，将日本从采集者的土地转变为定居农民和新兴首领的社会。",
    type: "era",
    icon: "🌾",
    linkedCardIds: ["jp-hist-001"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-005",
    nationId: "japan",
    year: -300,
    era: "Yayoi",
    title_en: "Introduction of Wet-Rice Agriculture",
    title_zh: "水稻种植技术的传入",
    summary_en:
      "Rice paddies spread across Kyushu and Honshu, fueling population growth and the rise of stratified communities with warrior elites.",
    summary_zh:
      "稻田遍布九州和本州，推动了人口增长以及拥有武士精英的分层社会的崛起。",
    type: "event",
    icon: "🍚",
    linkedCardIds: ["jp-hist-001"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-006",
    nationId: "japan",
    year: 180,
    era: "Yayoi",
    title_en: "Queen Himiko Rules Yamatai",
    title_zh: "卑弥呼女王统治邪马台国",
    summary_en:
      "The shamanistic queen Himiko united dozens of warring states under her rule, becoming the first named ruler in Japanese history through Chinese chronicles.",
    summary_zh:
      "萨满女王卑弥呼统一了数十个交战国家，通过中国史书记载成为日本历史上第一位有名可考的统治者。",
    type: "person",
    icon: "👑",
    linkedCardIds: ["jp-hist-001"],
    linkedPeopleIds: ["jp-ppl-001"],
    linkedCityIds: [],
    linkedVocabIds: [],
  },

  // ============================================================
  // 3. Kofun / Asuka Period (300–710)
  // ============================================================
  {
    id: "jp-tl-007",
    nationId: "japan",
    year: 300,
    yearEnd: 710,
    era: "Kofun-Asuka",
    title_en: "Kofun and Asuka Periods",
    title_zh: "古坟与飞鸟时代",
    summary_en:
      "Massive keyhole-shaped burial mounds signaled the rise of a powerful Yamato court, which then embraced Buddhism and Chinese-style governance to forge a unified state.",
    summary_zh:
      "巨大的前方后圆坟标志着强大的大和朝廷的崛起，随后引入佛教和中国式治理以建立统一国家。",
    type: "era",
    icon: "⛩️",
    linkedCardIds: ["jp-hist-002"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-002"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-008",
    nationId: "japan",
    year: 538,
    era: "Kofun-Asuka",
    title_en: "Buddhism Arrives in Japan",
    title_zh: "佛教传入日本",
    summary_en:
      "Buddhist scriptures and a golden statue were sent from the Korean kingdom of Baekje, igniting a cultural revolution that would reshape Japanese art, philosophy, and politics.",
    summary_zh:
      "佛经和一尊金佛像从朝鲜半岛百济王国传入，引发了一场重塑日本艺术、哲学和政治的文化革命。",
    type: "event",
    icon: "☸️",
    linkedCardIds: ["jp-hist-002", "jp-phil-001"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-002"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-009",
    nationId: "japan",
    year: 574,
    yearEnd: 622,
    era: "Kofun-Asuka",
    title_en: "Prince Shotoku\u2019s Reforms",
    title_zh: "圣德太子的改革",
    summary_en:
      "Prince Shotoku championed Buddhism, authored a seventeen-article constitution, and sent envoys to Sui China, laying the groundwork for Japan\u2019s first centralized government.",
    summary_zh:
      "圣德太子弘扬佛教、制定十七条宪法并派遣使者前往隋朝，为日本第一个中央集权政府奠定了基础。",
    type: "person",
    icon: "📜",
    linkedCardIds: ["jp-hist-002", "jp-phil-001"],
    linkedPeopleIds: ["jp-ppl-002"],
    linkedCityIds: ["jp-city-002"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-010",
    nationId: "japan",
    year: 645,
    era: "Kofun-Asuka",
    title_en: "Taika Reforms",
    title_zh: "大化改新",
    summary_en:
      "A dramatic coup led to sweeping reforms modeled on Tang China\u2019s bureaucracy, nationalizing land and creating Japan\u2019s first true central government.",
    summary_zh:
      "一场戏剧性的政变引发了以唐朝官僚制度为蓝本的全面改革，将土地国有化并建立了日本第一个真正的中央政府。",
    type: "event",
    icon: "⚖️",
    linkedCardIds: ["jp-hist-002"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-002"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 4. Nara Period (710–794)
  // ============================================================
  {
    id: "jp-tl-011",
    nationId: "japan",
    year: 710,
    yearEnd: 794,
    era: "Nara",
    title_en: "Nara Period",
    title_zh: "奈良时代",
    summary_en:
      "Japan\u2019s first permanent capital at Nara became a cosmopolitan hub where Buddhist temples rivaled those of Tang China and the nation\u2019s oldest histories were compiled.",
    summary_zh:
      "日本第一个永久首都奈良成为国际化中心，佛教寺庙可与唐朝媲美，国家最古老的史书也在此编纂。",
    type: "era",
    icon: "🦌",
    linkedCardIds: ["jp-hist-002"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-003"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-012",
    nationId: "japan",
    year: 712,
    era: "Nara",
    title_en: "Kojiki Recorded",
    title_zh: "《古事记》编纂",
    summary_en:
      "Japan\u2019s oldest surviving chronicle was set down in writing, preserving myths of sun goddesses, divine creation, and the legendary origins of the imperial line.",
    summary_zh:
      "日本现存最古老的编年史被记录成文，保存了太阳女神、神圣创世和皇室传说起源的神话。",
    type: "cultural",
    icon: "📖",
    linkedCardIds: ["jp-hist-002"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-003"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-013",
    nationId: "japan",
    year: 752,
    era: "Nara",
    title_en: "Great Buddha of Todai-ji Completed",
    title_zh: "东大寺大佛落成",
    summary_en:
      "The colossal bronze Buddha at Todai-ji\u2014still the world\u2019s largest bronze statue in a wooden building\u2014was consecrated in a ceremony attended by dignitaries from across Asia.",
    summary_zh:
      "东大寺的巨型铜佛——至今仍是世界上木结构建筑中最大的铜像——在亚洲各国使节参加的仪式中开光。",
    type: "cultural",
    icon: "🧘",
    linkedCardIds: ["jp-hist-002", "jp-phil-001"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-003"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 5. Heian Period (794–1185)
  // ============================================================
  {
    id: "jp-tl-014",
    nationId: "japan",
    year: 794,
    yearEnd: 1185,
    era: "Heian",
    title_en: "Heian Period",
    title_zh: "平安时代",
    summary_en:
      "The imperial court moved to Kyoto and cultivated a golden age of aesthetics\u2014women writers invented new literary forms while aristocrats turned life itself into art.",
    summary_zh:
      "皇室迁都京都，开创了美学的黄金时代——女性作家发明了新的文学形式，贵族们将生活本身变成了艺术。",
    type: "era",
    icon: "🌸",
    linkedCardIds: ["jp-hist-003"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-001"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-015",
    nationId: "japan",
    year: 1008,
    era: "Heian",
    title_en: "The Tale of Genji",
    title_zh: "《源氏物语》",
    summary_en:
      "Lady Murasaki Shikibu penned what many consider the world\u2019s first novel, a sweeping exploration of love, loss, and political intrigue in the imperial court.",
    summary_zh:
      "紫式部写下了被许多人认为是世界上第一部小说的作品，深入描绘了皇宫中的爱情、失落与政治阴谋。",
    type: "cultural",
    icon: "✍️",
    linkedCardIds: ["jp-hist-003"],
    linkedPeopleIds: ["jp-ppl-003"],
    linkedCityIds: ["jp-city-001"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-016",
    nationId: "japan",
    year: 800,
    era: "Heian",
    title_en: "Invention of Kana Writing",
    title_zh: "假名文字的发明",
    summary_en:
      "Japanese scribes simplified Chinese characters into hiragana and katakana, giving the language its own phonetic scripts and unleashing a wave of vernacular literature.",
    summary_zh:
      "日本书吏将汉字简化为平假名和片假名，赋予日语自己的表音文字，掀起了一波白话文学浪潮。",
    type: "cultural",
    icon: "🔤",
    linkedCardIds: ["jp-hist-003"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-001"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-017",
    nationId: "japan",
    year: 1000,
    era: "Heian",
    title_en: "Fujiwara Regency and Court Culture",
    title_zh: "藤原摄政与宫廷文化",
    summary_en:
      "The Fujiwara clan dominated politics through marriage alliances while the court perfected incense-blending, poetry contests, and an elaborate aesthetic of mono no aware.",
    summary_zh:
      "藤原氏通过联姻掌控政治，而宫廷则在调香、诗歌竞赛和「物之哀」的精致美学中达到顶峰。",
    type: "event",
    icon: "🏯",
    linkedCardIds: ["jp-hist-003", "jp-phil-002"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-001"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 6. Kamakura Period (1185–1333)
  // ============================================================
  {
    id: "jp-tl-018",
    nationId: "japan",
    year: 1185,
    yearEnd: 1333,
    era: "Kamakura",
    title_en: "Kamakura Period",
    title_zh: "镰仓时代",
    summary_en:
      "Warriors seized power from the court, establishing Japan\u2019s first military government and a culture that prized loyalty, discipline, and Zen austerity.",
    summary_zh:
      "武士从朝廷手中夺取权力，建立了日本第一个武家政权，形成了崇尚忠诚、纪律和禅宗朴素的文化。",
    type: "era",
    icon: "⚔️",
    linkedCardIds: ["jp-hist-004"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-004"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-019",
    nationId: "japan",
    year: 1192,
    era: "Kamakura",
    title_en: "Minamoto no Yoritomo Becomes First Shogun",
    title_zh: "源赖朝成为第一位征夷大将军",
    summary_en:
      "After crushing the rival Taira clan, Yoritomo established the Kamakura shogunate\u2014a dual government that would define Japanese politics for nearly seven centuries.",
    summary_zh:
      "在击败竞争对手平氏之后，源赖朝建立了�的仓幕府——一种定义日本政治近七百年的双重政权体制。",
    type: "person",
    icon: "🏹",
    linkedCardIds: ["jp-hist-004"],
    linkedPeopleIds: ["jp-ppl-004"],
    linkedCityIds: ["jp-city-004"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-020",
    nationId: "japan",
    year: 1274,
    era: "Kamakura",
    title_en: "Mongol Invasions and the Divine Wind",
    title_zh: "蒙古入侵与神风",
    summary_en:
      "Kublai Khan\u2019s massive fleets attacked Japan twice, only to be scattered by devastating typhoons the Japanese called kamikaze\u2014divine wind.",
    summary_zh:
      "忽必烈的庞大舰队两次进攻日本，却被日本人称为「神风」的毁灭性台风击散。",
    type: "event",
    icon: "🌊",
    linkedCardIds: ["jp-hist-004"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-021",
    nationId: "japan",
    year: 1200,
    era: "Kamakura",
    title_en: "Zen Buddhism Flourishes",
    title_zh: "禅宗兴盛",
    summary_en:
      "Eisai and Dogen brought Zen from China, profoundly shaping the warrior ethos, tea ceremony, garden design, and the Japanese pursuit of simplicity.",
    summary_zh:
      "荣西和道元从中国引入禅宗，深刻影响了武士精神、茶道、庭园设计以及日本人对简朴之美的追求。",
    type: "cultural",
    icon: "🍵",
    linkedCardIds: ["jp-hist-004", "jp-phil-001", "jp-phil-002"],
    linkedPeopleIds: ["jp-ppl-005"],
    linkedCityIds: ["jp-city-004"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 7. Muromachi Period (1336–1573)
  // ============================================================
  {
    id: "jp-tl-022",
    nationId: "japan",
    year: 1336,
    yearEnd: 1573,
    era: "Muromachi",
    title_en: "Muromachi Period",
    title_zh: "室町时代",
    summary_en:
      "The Ashikaga shoguns presided over an era of civil strife yet extraordinary cultural refinement, giving birth to Noh drama, ink painting, and the tea ceremony.",
    summary_zh:
      "足利将军统治着一个内战频发却文化极度繁荣的时代，孕育了能剧、水墨画和茶道。",
    type: "era",
    icon: "🎭",
    linkedCardIds: ["jp-hist-004"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-001"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-023",
    nationId: "japan",
    year: 1397,
    era: "Muromachi",
    title_en: "Kinkaku-ji: The Golden Pavilion",
    title_zh: "金阁寺建成",
    summary_en:
      "Shogun Ashikaga Yoshimitsu built the dazzling Golden Pavilion in Kyoto, a shimmering symbol of Muromachi wealth that blends Zen simplicity with aristocratic splendor.",
    summary_zh:
      "将军足利义满在京都建造了耀眼的金阁寺，这座闪耀的建筑融合了禅宗的简约与贵族的华丽。",
    type: "cultural",
    icon: "✨",
    linkedCardIds: ["jp-hist-004"],
    linkedPeopleIds: ["jp-ppl-006"],
    linkedCityIds: ["jp-city-001"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-024",
    nationId: "japan",
    year: 1375,
    era: "Muromachi",
    title_en: "Zeami Perfects Noh Theater",
    title_zh: "世阿弥完善能剧",
    summary_en:
      "Actor and playwright Zeami transformed folk performance into the hauntingly beautiful Noh theater, writing treatises on art that remain influential to this day.",
    summary_zh:
      "演员兼剧作家世阿弥将民间表演升华为令人沉醉的能剧艺术，其艺术论著至今仍具有深远影响。",
    type: "person",
    icon: "🎶",
    linkedCardIds: ["jp-hist-004"],
    linkedPeopleIds: ["jp-ppl-007"],
    linkedCityIds: ["jp-city-001"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 8. Sengoku Period (1467–1615)
  // ============================================================
  {
    id: "jp-tl-025",
    nationId: "japan",
    year: 1467,
    yearEnd: 1615,
    era: "Sengoku",
    title_en: "Sengoku Period",
    title_zh: "战国时代",
    summary_en:
      "Japan fractured into warring domains as ambitious warlords battled for supremacy, transforming castles, weaponry, and the very meaning of loyalty.",
    summary_zh:
      "日本分裂为交战的领地，野心勃勃的战国大名争夺霸权，改变了城堡、武器以及忠诚的意义。",
    type: "era",
    icon: "🔥",
    linkedCardIds: ["jp-hist-005"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-026",
    nationId: "japan",
    year: 1560,
    era: "Sengoku",
    title_en: "Oda Nobunaga Begins Unification",
    title_zh: "织田信长开始统一大业",
    summary_en:
      "The ruthless and visionary Nobunaga won the stunning Battle of Okehazama, then deployed firearms and radical tactics to crush rivals and begin reunifying Japan.",
    summary_zh:
      "冷酷而富有远见的信长在桶狭间之战中取得惊人胜利，随后运用火器和激进战术击败对手，开始统一日本。",
    type: "person",
    icon: "🗡️",
    linkedCardIds: ["jp-hist-005"],
    linkedPeopleIds: ["jp-ppl-008"],
    linkedCityIds: [],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-027",
    nationId: "japan",
    year: 1543,
    era: "Sengoku",
    title_en: "Portuguese Arrive with Firearms",
    title_zh: "葡萄牙人带来火器",
    summary_en:
      "Portuguese traders shipwrecked on Tanegashima introduced firearms to Japan, revolutionizing warfare and connecting the islands to global trade networks for the first time.",
    summary_zh:
      "葡萄牙商人在种子岛遇难后将火器引入日本，彻底改变了战争方式，并首次将日本列岛与全球贸易网络相连。",
    type: "event",
    icon: "🔫",
    linkedCardIds: ["jp-hist-005"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },

  // ============================================================
  // 9. Edo Period (1603–1868)
  // ============================================================
  {
    id: "jp-tl-028",
    nationId: "japan",
    year: 1603,
    yearEnd: 1868,
    era: "Edo",
    title_en: "Edo Period",
    title_zh: "江户时代",
    summary_en:
      "The Tokugawa shoguns imposed 250 years of peace under strict social order, during which uniquely Japanese arts like ukiyo-e, kabuki, and haiku blossomed.",
    summary_zh:
      "德川将军在严格的社会秩序下实现了250年的和平，浮世绘、歌舞伎和俳句等独特的日本艺术在此期间蓬勃发展。",
    type: "era",
    icon: "🏯",
    linkedCardIds: ["jp-hist-005", "jp-hist-006"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-029",
    nationId: "japan",
    year: 1639,
    era: "Edo",
    title_en: "Sakoku: Japan Closes Its Doors",
    title_zh: "锁国：日本关闭国门",
    summary_en:
      "The shogunate banned nearly all foreign contact for over two centuries, creating an isolated crucible in which a distinctive Japanese culture evolved without outside influence.",
    summary_zh:
      "幕府禁止几乎所有对外交流长达两个多世纪，创造了一个与世隔绝的环境，使独特的日本文化在没有外来影响的情况下发展。",
    type: "event",
    icon: "🚪",
    linkedCardIds: ["jp-hist-005"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-030",
    nationId: "japan",
    year: 1689,
    era: "Edo",
    title_en: "Matsuo Basho\u2019s Narrow Road to the Interior",
    title_zh: "松尾芭蕉《奥之细道》",
    summary_en:
      "The wandering poet Basho set out on his most famous journey, distilling the beauty and melancholy of the Japanese landscape into seventeen-syllable masterpieces.",
    summary_zh:
      "游吟诗人芭蕉踏上了他最著名的旅程，将日本风景的美与哀愁凝练成十七音节的杰作。",
    type: "person",
    icon: "🐸",
    linkedCardIds: ["jp-hist-006"],
    linkedPeopleIds: ["jp-ppl-009"],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-031",
    nationId: "japan",
    year: 1831,
    era: "Edo",
    title_en: "Hokusai\u2019s Great Wave",
    title_zh: "葛饰北斋《神奈川冲浪里》",
    summary_en:
      "Katsushika Hokusai published his iconic Great Wave off Kanagawa, a woodblock print that would become one of the most recognized images in world art history.",
    summary_zh:
      "葛饰北斋发表了标志性的《神奈川冲浪里》木版画，它后来成为世界艺术史上最广为人知的图像之一。",
    type: "person",
    icon: "🎨",
    linkedCardIds: ["jp-hist-006"],
    linkedPeopleIds: ["jp-ppl-010"],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 10. Meiji Period (1868–1912)
  // ============================================================
  {
    id: "jp-tl-032",
    nationId: "japan",
    year: 1868,
    yearEnd: 1912,
    era: "Meiji",
    title_en: "Meiji Period",
    title_zh: "明治时代",
    summary_en:
      "In a breathtaking transformation, Japan reinvented itself from a feudal society into a modern industrial power in barely a generation, stunning the world.",
    summary_zh:
      "在令人惊叹的转变中，日本在短短一代人的时间里从封建社会蜕变为现代工业强国，震惊了世界。",
    type: "era",
    icon: "🚂",
    linkedCardIds: ["jp-hist-006", "jp-hist-007"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-033",
    nationId: "japan",
    year: 1868,
    era: "Meiji",
    title_en: "The Meiji Restoration",
    title_zh: "明治维新",
    summary_en:
      "Young samurai overthrew the shogunate and restored imperial rule, then launched a feverish campaign to learn from the West while preserving Japan\u2019s unique identity.",
    summary_zh:
      "年轻的武士推翻了幕府，恢复了天皇统治，随后发起了向西方学习同时保持日本独特身份的狂热运动。",
    type: "event",
    icon: "🌅",
    linkedCardIds: ["jp-hist-006", "jp-hist-007"],
    linkedPeopleIds: ["jp-ppl-011"],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-034",
    nationId: "japan",
    year: 1905,
    era: "Meiji",
    title_en: "Japan Defeats Russia",
    title_zh: "日本击败俄国",
    summary_en:
      "Japan\u2019s shocking naval victory at Tsushima made it the first Asian nation to defeat a European great power, reshaping global perceptions of the East.",
    summary_zh:
      "日本在对马海战中的惊人海军胜利使其成为第一个击败欧洲强国的亚洲国家，重塑了全球对东方的认知。",
    type: "event",
    icon: "⚓",
    linkedCardIds: ["jp-hist-007"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },

  // ============================================================
  // 11. Taisho Period (1912–1926)
  // ============================================================
  {
    id: "jp-tl-035",
    nationId: "japan",
    year: 1912,
    yearEnd: 1926,
    era: "Taisho",
    title_en: "Taisho Period",
    title_zh: "大正时代",
    summary_en:
      "A brief era of democratic idealism and cosmopolitan culture saw Japan embrace jazz, cinema, and Western fashion while experimenting with parliamentary government.",
    summary_zh:
      "一个短暂的民主理想主义和国际化文化时代，日本拥抱爵士乐、电影和西方时尚，同时尝试议会政治。",
    type: "era",
    icon: "🎷",
    linkedCardIds: ["jp-hist-007"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-036",
    nationId: "japan",
    year: 1920,
    era: "Taisho",
    title_en: "Taisho Democracy and Jazz Culture",
    title_zh: "大正民主与爵士文化",
    summary_en:
      "Tokyo\u2019s cafes buzzed with modern girls, avant-garde artists, and political activists as Japan experienced its most liberal and culturally open decade before World War II.",
    summary_zh:
      "东京的咖啡馆里挤满了摩登女郎、前卫艺术家和政治活动家，日本经历了二战前最自由、文化最开放的十年。",
    type: "cultural",
    icon: "💃",
    linkedCardIds: ["jp-hist-007"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-037",
    nationId: "japan",
    year: 1923,
    era: "Taisho",
    title_en: "Great Kanto Earthquake",
    title_zh: "关东大地震",
    summary_en:
      "A catastrophic 7.9-magnitude earthquake and ensuing firestorms devastated Tokyo and Yokohama, killing over 100,000 people and reshaping both cities from the ground up.",
    summary_zh:
      "一场7.9级的灾难性地震及随后的火灾风暴摧毁了东京和横滨，造成超过10万人死亡，两座城市被彻底重建。",
    type: "event",
    icon: "🌋",
    linkedCardIds: ["jp-hist-007"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005", "jp-city-006"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 12. Showa Pre-war (1926–1945)
  // ============================================================
  {
    id: "jp-tl-038",
    nationId: "japan",
    year: 1926,
    yearEnd: 1945,
    era: "Showa-prewar",
    title_en: "Showa Period (Pre-war)",
    title_zh: "昭和时代（战前）",
    summary_en:
      "Militarists hijacked Japan\u2019s government, plunging the nation into imperial expansion across Asia and ultimately into a devastating world war.",
    summary_zh:
      "军国主义者劫持了日本政府，将国家拖入亚洲的帝国扩张，最终卷入了一场毁灭性的世界大战。",
    type: "era",
    icon: "⚠️",
    linkedCardIds: ["jp-hist-007", "jp-hist-008"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-039",
    nationId: "japan",
    year: 1937,
    era: "Showa-prewar",
    title_en: "Second Sino-Japanese War Begins",
    title_zh: "全面侵华战争爆发",
    summary_en:
      "Japan\u2019s full-scale invasion of China marked a tragic escalation that would engulf East Asia in years of suffering and permanently alter the region\u2019s political landscape.",
    summary_zh:
      "日本全面侵华标志着悲剧性的升级，使东亚陷入多年苦难，并永久改变了该地区的政治格局。",
    type: "event",
    icon: "💔",
    linkedCardIds: ["jp-hist-008"],
    linkedPeopleIds: [],
    linkedCityIds: [],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-040",
    nationId: "japan",
    year: 1945,
    era: "Showa-prewar",
    title_en: "Atomic Bombings and Surrender",
    title_zh: "原子弹轰炸与投降",
    summary_en:
      "The atomic bombings of Hiroshima and Nagasaki brought history\u2019s most destructive war to a shattering end, leaving Japan in ruins but also seeding a profound commitment to peace.",
    summary_zh:
      "广岛和长崎的原子弹轰炸以令人震撼的方式终结了历史上最具破坏性的战争，使日本沦为废墟，但也播下了对和平的深刻承诺。",
    type: "event",
    icon: "☮️",
    linkedCardIds: ["jp-hist-008"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-007", "jp-city-008"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 13. Showa Post-war (1945–1989)
  // ============================================================
  {
    id: "jp-tl-041",
    nationId: "japan",
    year: 1945,
    yearEnd: 1989,
    era: "Showa-postwar",
    title_en: "Showa Period (Post-war)",
    title_zh: "昭和时代（战后）",
    summary_en:
      "Rising from ashes to economic superpower, post-war Japan stunned the world with the fastest sustained growth in modern history while reinventing itself as a pacifist democracy.",
    summary_zh:
      "从废墟中崛起为经济超级大国，战后日本以现代史上最快的持续增长震惊世界，同时将自身重塑为和平主义民主国家。",
    type: "era",
    icon: "📈",
    linkedCardIds: ["jp-hist-008"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-042",
    nationId: "japan",
    year: 1964,
    era: "Showa-postwar",
    title_en: "Tokyo Olympics",
    title_zh: "东京奥运会",
    summary_en:
      "The 1964 Tokyo Olympics announced Japan\u2019s triumphant return to the world stage, showcasing bullet trains, futuristic architecture, and a nation reborn from wartime devastation.",
    summary_zh:
      "1964年东京奥运会宣告日本凯旋回归世界舞台，展示了新干线、未来主义建筑和一个从战争废墟中重生的国家。",
    type: "event",
    icon: "🏅",
    linkedCardIds: ["jp-hist-008"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-043",
    nationId: "japan",
    year: 1954,
    era: "Showa-postwar",
    title_en: "Kurosawa\u2019s Seven Samurai",
    title_zh: "黑泽明《七武士》",
    summary_en:
      "Akira Kurosawa\u2019s epic masterpiece redefined cinema worldwide, proving that Japanese storytelling could captivate global audiences and inspiring countless filmmakers from George Lucas to Sergio Leone.",
    summary_zh:
      "黑泽明的史诗巨作重新定义了世界电影，证明日本叙事能够征服全球观众，启发了从乔治·卢卡斯到塞尔吉奥·莱昂内的无数电影人。",
    type: "person",
    icon: "🎬",
    linkedCardIds: ["jp-hist-008"],
    linkedPeopleIds: ["jp-ppl-012"],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 14. Heisei Period (1989–2019)
  // ============================================================
  {
    id: "jp-tl-044",
    nationId: "japan",
    year: 1989,
    yearEnd: 2019,
    era: "Heisei",
    title_en: "Heisei Period",
    title_zh: "平成时代",
    summary_en:
      "The bubble economy burst, ushering in decades of economic stagnation\u2014yet Japan\u2019s cultural soft power exploded globally through anime, manga, video games, and cuisine.",
    summary_zh:
      "泡沫经济破裂，开启了数十年的经济停滞——但日本的文化软实力通过动漫、漫画、电子游戏和美食在全球爆发。",
    type: "era",
    icon: "📺",
    linkedCardIds: ["jp-hist-008"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-045",
    nationId: "japan",
    year: 1995,
    era: "Heisei",
    title_en: "Anime Goes Global",
    title_zh: "动漫走向世界",
    summary_en:
      "From Evangelion to Studio Ghibli\u2019s Oscar-winning Spirited Away, Japanese animation conquered international audiences and became one of the nation\u2019s greatest cultural exports.",
    summary_zh:
      "从《新世纪福音战士》到吉卜力工作室获奥斯卡奖的《千与千寻》，日本动画征服了国际观众，成为日本最伟大的文化输出之一。",
    type: "cultural",
    icon: "🎌",
    linkedCardIds: ["jp-hist-008"],
    linkedPeopleIds: ["jp-ppl-013"],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-046",
    nationId: "japan",
    year: 2011,
    era: "Heisei",
    title_en: "Tohoku Earthquake and Fukushima Disaster",
    title_zh: "东日本大地震与福岛核灾难",
    summary_en:
      "A magnitude-9.0 earthquake and tsunami devastated northeastern Japan and triggered the Fukushima nuclear crisis, testing the nation\u2019s resilience and sparking a global debate on nuclear energy.",
    summary_zh:
      "9.0级地震和海啸摧毁了日本东北部并引发福岛核危机，考验了国家的韧性，并引发了全球关于核能的辩论。",
    type: "event",
    icon: "🌏",
    linkedCardIds: ["jp-hist-008"],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-009"],
    linkedVocabIds: [],
  },

  // ============================================================
  // 15. Reiwa Period (2019–present)
  // ============================================================
  {
    id: "jp-tl-047",
    nationId: "japan",
    year: 2019,
    era: "Reiwa",
    title_en: "Reiwa Period",
    title_zh: "令和时代",
    summary_en:
      "Emperor Naruhito\u2019s accession opened a new era whose name means \u201Cbeautiful harmony,\u201D as Japan navigates demographic challenges, technological innovation, and its evolving global role.",
    summary_zh:
      "德仁天皇即位开启了名为「美丽和谐」的新时代，日本在人口挑战、技术创新和不断变化的全球角色中前行。",
    type: "era",
    icon: "🌐",
    linkedCardIds: [],
    linkedPeopleIds: ["jp-ppl-014"],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
  {
    id: "jp-tl-048",
    nationId: "japan",
    year: 2021,
    era: "Reiwa",
    title_en: "Tokyo 2020 Olympics (Held 2021)",
    title_zh: "2020东京奥运会（2021年举办）",
    summary_en:
      "Delayed by the global pandemic, the Tokyo Olympics became an unprecedented event held without spectators, symbolizing both human perseverance and the surreal nature of the times.",
    summary_zh:
      "因全球疫情推迟的东京奥运会成为史无前例的无观众赛事，象征着人类的坚韧和那个超现实时代。",
    type: "event",
    icon: "🏟️",
    linkedCardIds: [],
    linkedPeopleIds: [],
    linkedCityIds: ["jp-city-005"],
    linkedVocabIds: [],
  },
];
