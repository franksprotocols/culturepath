import type { VocabularyItem } from "@/lib/db";

export const japanCultureVocab: VocabularyItem[] = [
  // ============================================================
  // History-derived (jp-cult-001 to jp-cult-010)
  // ============================================================
  {
    id: "jp-cult-001",
    languageId: "japanese",
    word: "武士道",
    reading: "bushidō",
    translation_en: "Way of the Warrior",
    translation_zh: "武士道",
    context_en:
      "Bushidō was the unwritten moral code governing the behavior of samurai, emphasizing loyalty, honor, martial arts mastery, and self-discipline.",
    context_zh:
      "武士道是一套不成文的道德准则，规范武士的行为举止，强调忠诚、荣誉、武艺精通和自律精神。",
    culturalNote_en:
      "Though codified during the Edo period (1603–1868), bushidō continues to shape modern Japanese values around duty, perseverance, and respect. Its seven core virtues — righteousness, courage, benevolence, respect, honesty, honor, and loyalty — still echo in corporate culture and sports like kendō and jūdō.",
    culturalNote_zh:
      "虽然武士道在江户时代（1603–1868年）被系统化，但它至今仍深刻影响着日本人关于责任、毅力和尊重的价值观。其七大核心美德——义、勇、仁、礼、诚、名誉、忠——至今仍在企业文化和剑道、柔道等运动中回响。",
    category: "culture_history",
    difficulty: 3,
  },
  {
    id: "jp-cult-002",
    languageId: "japanese",
    word: "将軍",
    reading: "shōgun",
    translation_en: "Military commander / Shogun",
    translation_zh: "将军 / 幕府将军",
    context_en:
      "The shōgun was the de facto ruler of Japan for nearly seven centuries, holding supreme military authority while the emperor remained a ceremonial figurehead.",
    context_zh:
      "将军是日本近七百年间的实际统治者，掌握最高军事权力，而天皇仅保留礼仪性的元首地位。",
    culturalNote_en:
      "The full title is 征夷大将軍 (sei-i taishōgun), meaning 'Commander-in-Chief of the Expeditionary Force Against the Barbarians.' Three great shogunates — Kamakura, Muromachi, and Tokugawa — defined Japan's feudal era. The Tokugawa shōgunate alone lasted 265 years of relative peace.",
    culturalNote_zh:
      "全称为「征夷大将军」，意为「征讨夷族远征军总司令」。三大幕府——�的仓幕府、室町幕府和德川幕府——定义了日本的封建时代。仅德川幕府就维持了265年的相对和平。",
    category: "culture_history",
    difficulty: 3,
  },
  {
    id: "jp-cult-003",
    languageId: "japanese",
    word: "天皇",
    reading: "tennō",
    translation_en: "Emperor of Japan",
    translation_zh: "天皇",
    context_en:
      "The tennō is the ceremonial head of state and the symbol of the unity of the Japanese people, with the imperial lineage considered the oldest continuing hereditary monarchy in the world.",
    context_zh:
      "天皇是日本的礼仪性国家元首和国民团结的象征，皇室血脉被认为是世界上现存最古老的世袭君主制。",
    culturalNote_en:
      "According to tradition, the imperial line descends from the sun goddess Amaterasu, and the first emperor Jimmu ascended the throne in 660 BCE. While the emperor held divine status until the end of World War II, the postwar constitution redefined the role as purely symbolic — yet the institution retains deep cultural reverence.",
    culturalNote_zh:
      "据传说，皇室血统源自太阳女神天照大神，第一位天皇神武天皇于公元前660年登基。虽然天皇在二战结束前拥有神圣地位，但战后宪法将其角色重新定义为纯粹的象征——然而这一制度仍享有深厚的文化崇敬。",
    category: "culture_history",
    difficulty: 3,
  },
  {
    id: "jp-cult-004",
    languageId: "japanese",
    word: "鎖国",
    reading: "sakoku",
    translation_en: "National isolation / Closed country policy",
    translation_zh: "锁国 / 闭关锁国政策",
    context_en:
      "Sakoku was the Tokugawa shogunate's foreign policy of severely restricting foreign trade and forbidding most Japanese from leaving the country, lasting from 1633 to 1853.",
    context_zh:
      "锁国是德川幕府严格限制对外贸易并禁止大多数日本人出国的外交政策，从1633年持续到1853年。",
    culturalNote_en:
      "During sakoku, only the Dutch and Chinese were permitted limited trade through the tiny artificial island of Dejima in Nagasaki harbor. This isolation preserved unique Japanese cultural development but also meant Japan fell behind technologically. The policy ended when Commodore Matthew Perry's 'Black Ships' forced the opening of Japanese ports in 1853.",
    culturalNote_zh:
      "锁国期间，仅允许荷兰人和中国人通过长崎港的小型人工岛出岛进行有限贸易。这种隔离保存了独特的日本文化发展，但也导致日本在技术上落后。1853年，美国海军准将马修·佩里的「黑船」迫使日本开放港口，该政策才告终结。",
    category: "culture_history",
    difficulty: 4,
  },
  {
    id: "jp-cult-005",
    languageId: "japanese",
    word: "浮世絵",
    reading: "ukiyo-e",
    translation_en: "Woodblock prints / Pictures of the floating world",
    translation_zh: "浮世绘",
    context_en:
      "Ukiyo-e are colorful woodblock prints and paintings depicting the 'floating world' of entertainment, beauty, kabuki actors, sumo wrestlers, landscapes, and everyday life during the Edo period.",
    context_zh:
      "浮世绘是描绘江户时代「浮世」——娱乐、美人、歌舞伎演员、相扑力士、风景和日常生活的彩色木版画和绘画。",
    culturalNote_en:
      "Masters like Hokusai (The Great Wave off Kanagawa) and Hiroshige (The Fifty-three Stations of the Tōkaidō) created iconic works that later profoundly influenced Western Impressionists including Monet and Van Gogh. The term 'ukiyo' originally carried Buddhist connotations of the transience of worldly pleasures.",
    culturalNote_zh:
      "葛饰北斋（《神奈川冲浪里》）和�的川广重（《东海道五十三次》）等大师创作了标志性作品，后来深刻影响了莫奈和梵高等西方印象派画家。「浮世」一词最初带有佛教关于世俗享乐无常的含义。",
    category: "culture_history",
    difficulty: 3,
  },
  {
    id: "jp-cult-006",
    languageId: "japanese",
    word: "明治",
    reading: "Meiji",
    translation_en: "Enlightened rule (era name)",
    translation_zh: "明治（年号，意为「英明的统治」）",
    context_en:
      "The Meiji era (1868–1912) saw Japan transform from a feudal society into a modern industrialized nation, adopting Western technology, institutions, and military organization at breathtaking speed.",
    context_zh:
      "明治时代（1868–1912年）见证了日本从封建社会向现代工业化国家的转变，以惊人的速度引进西方技术、制度和军事组织。",
    culturalNote_en:
      "The Meiji Restoration ended 265 years of Tokugawa rule and returned power to the emperor. Japan's slogan 富国強兵 (fukoku kyōhei, 'enrich the country, strengthen the military') drove rapid modernization. Within decades, Japan defeated China (1895) and Russia (1905), shocking the Western world and establishing itself as a major power.",
    culturalNote_zh:
      "明治维新结束了德川幕府265年的统治，将权力归还天皇。「富国强兵」的口号推动了快速现代化。短短数十年内，日本先后击败中国（1895年）和俄罗斯（1905年），震惊西方世界，确立了自身的大国地位。",
    category: "culture_history",
    difficulty: 3,
  },
  {
    id: "jp-cult-007",
    languageId: "japanese",
    word: "戦国",
    reading: "sengoku",
    translation_en: "Warring States (period)",
    translation_zh: "战国（时代）",
    context_en:
      "The Sengoku period (roughly 1467–1615) was an era of near-constant civil war among feudal lords (daimyō) vying for control of Japan, ultimately unified by Oda Nobunaga, Toyotomi Hideyoshi, and Tokugawa Ieyasu.",
    context_zh:
      "战国时代（约1467–1615年）是各封建领主（大名）争夺日本控制权的近乎持续内战的时代，最终由织田信长、丰臣秀吉和德川家康完成统一。",
    culturalNote_en:
      "This tumultuous era produced Japan's most legendary warriors and tacticians. It remains the most popular period in Japanese historical fiction, games, and media. A famous saying captures the three unifiers' personalities: Nobunaga says 'If the bird won't sing, kill it'; Hideyoshi says 'make it sing'; Ieyasu says 'wait for it to sing.'",
    culturalNote_zh:
      "这个动荡的时代诞生了日本最传奇的武将和军事家。它至今仍是日本历史小说、游戏和媒体中最受欢迎的时代。一句名言概括了三位统一者的性格：信长说「杜鹃不啼则杀之」；秀吉说「使之啼」；家康说「等其啼」。",
    category: "culture_history",
    difficulty: 4,
  },
  {
    id: "jp-cult-008",
    languageId: "japanese",
    word: "城",
    reading: "shiro",
    translation_en: "Castle",
    translation_zh: "城 / 城堡",
    context_en:
      "Japanese castles served as military strongholds, political centers, and symbols of a daimyō's power, featuring distinctive multi-tiered towers (天守, tenshu), stone walls, and moats.",
    context_zh:
      "日本城堡兼具军事要塞、政治中心和大名权力象征的功能，以独特的多层天守阁、石墙和护城河为特征。",
    culturalNote_en:
      "Of the thousands of castles built during Japan's feudal era, only twelve retain their original wooden keeps. Himeji Castle, known as the 'White Heron' for its elegant white exterior, is a UNESCO World Heritage Site and considered the finest surviving example. Many destroyed castles have been rebuilt in concrete as museums and landmarks.",
    culturalNote_zh:
      "在日本封建时代建造的数千座城堡中，仅有十二座保留了原始的木制天守阁。�的路城因其优雅的白色外观被称为「白鹭城」，是联合国教科文组织世界遗产，被认为是现存最精美的范例。许多被毁的城堡已用混凝土重建，作为博物馆和地标。",
    category: "culture_history",
    difficulty: 2,
  },
  {
    id: "jp-cult-009",
    languageId: "japanese",
    word: "刀",
    reading: "katana",
    translation_en: "Japanese sword / Katana",
    translation_zh: "刀 / 日本刀",
    context_en:
      "The katana is a curved, single-edged blade that became the iconic weapon of the samurai class, prized for its sharpness, strength, and elegant craftsmanship.",
    context_zh:
      "日本刀是一种弧形单刃刀剑，成为武士阶层的标志性武器，以其锋利、坚韧和精美工艺著称。",
    culturalNote_en:
      "Swordsmithing is considered a sacred art in Japan. Master smiths follow rituals of Shinto purification before forging. The process of repeatedly folding and hammering the steel creates the distinctive wavy pattern (波紋, hamon) along the blade. A katana was said to embody the samurai's soul, and today certified swordsmiths still practice the ancient techniques.",
    culturalNote_zh:
      "铸剑在日本被视为一门神圣的艺术。铸剑大师在锻造前要进行神道净化仪式。反复折叠和锤打钢材的工艺在刀刃上形成了独特的波浪形纹路（波纹，hamon）。日本刀被称为武士之魂，如今经认证的铸剑师仍在实践古老的锻造技艺。",
    category: "culture_history",
    difficulty: 2,
  },
  {
    id: "jp-cult-010",
    languageId: "japanese",
    word: "平和",
    reading: "heiwa",
    translation_en: "Peace",
    translation_zh: "和平",
    context_en:
      "Heiwa is a deeply resonant word in modern Japan, reflecting the nation's constitutional commitment to pacifism and its collective memory of the devastation of World War II.",
    context_zh:
      "「和平」在现代日本是一个深刻而充满共鸣的词汇，反映了国家宪法对和平主义的承诺以及对二战毁灭性后果的集体记忆。",
    culturalNote_en:
      "Article 9 of Japan's postwar constitution renounces war and the maintenance of war potential. The Peace Memorial Parks in Hiroshima and Nagasaki draw millions of visitors annually. Every August 6th and 9th, ceremonies are held with the ringing of peace bells, paper crane offerings, and the declaration 'never again.' The concept of heiwa is woven into Japan's modern national identity.",
    culturalNote_zh:
      "日本战后宪法第九条放弃战争和维持战争能力。广岛和长崎的和平纪念公园每年吸引数百万游客。每年8月6日和9日都会举行仪式，敲响和平之钟、献上纸鹤、宣告「永不再战」。和平的概念已融入日本的现代国家认同。",
    category: "culture_history",
    difficulty: 2,
  },

  // ============================================================
  // Daily Life-derived (jp-cult-011 to jp-cult-020)
  // ============================================================
  {
    id: "jp-cult-011",
    languageId: "japanese",
    word: "温泉",
    reading: "onsen",
    translation_en: "Hot spring / Hot spring bath",
    translation_zh: "温泉",
    context_en:
      "Onsen are natural hot spring baths found throughout Japan's volcanic landscape, serving as places of relaxation, healing, and social bonding for centuries.",
    context_zh:
      "温泉是遍布日本火山地貌的天然热泉浴场，数百年来一直是放松身心、疗养和社交联谊的场所。",
    culturalNote_en:
      "Japan has over 27,000 hot spring sources and roughly 3,000 onsen resorts. Bathing etiquette is strict: you must wash thoroughly before entering the communal bath, tattoos are often prohibited (due to yakuza associations), and swimsuits are not worn. Many onsen have separate male and female areas. The experience of soaking in an outdoor bath (露天風呂, rotenburo) while gazing at snow-covered mountains is considered one of life's great pleasures.",
    culturalNote_zh:
      "日本有超过27,000个温泉源和约3,000个温泉度假区。泡汤礼仪十分严格：入浴前必须彻底清洗身体，纹身通常被禁止（因与黑道相关），且不能穿泳衣。许多温泉设有男女分浴区。在露天温泉（露天风吕）中一边泡澡一边眺望白雪覆盖的群山，被视为人生至高的享受之一。",
    category: "culture_daily",
    difficulty: 2,
  },
  {
    id: "jp-cult-012",
    languageId: "japanese",
    word: "祭り",
    reading: "matsuri",
    translation_en: "Festival",
    translation_zh: "祭典 / 节日",
    context_en:
      "Matsuri are traditional Japanese festivals, often linked to Shinto shrines or Buddhist temples, featuring processions, music, dancing, and food stalls throughout the year.",
    context_zh:
      "祭典是日本传统节日，通常与神社或佛寺相关，全年各地都有巡游、音乐、舞蹈和美食摊位。",
    culturalNote_en:
      "Japan holds an estimated 300,000 festivals annually, ranging from small neighborhood celebrations to massive events like Kyoto's Gion Matsuri (dating to 869 CE) and Tokushima's Awa Odori dance festival. Matsuri often involve carrying elaborate portable shrines (神輿, mikoshi) through the streets, with participants chanting 'wasshoi!' Festivals serve as vital community bonds and preserve centuries-old traditions.",
    culturalNote_zh:
      "据估计日本每年举办约30万场祭典，从小型社区庆祝活动到大型盛事——如京都的祇园祭（始于公元869年）和德岛的阿波舞节。祭典常包含抬着精美的神轿（神舆）穿过街道，参与者齐喊「wasshoi！」祭典是重要的社区纽带，传承着数百年的古老传统。",
    category: "culture_daily",
    difficulty: 2,
  },
  {
    id: "jp-cult-013",
    languageId: "japanese",
    word: "お土産",
    reading: "omiyage",
    translation_en: "Souvenir / Travel gift",
    translation_zh: "伴手礼 / 旅行纪念品",
    context_en:
      "Omiyage are gifts, typically local specialty foods or crafts, that Japanese travelers bring back from trips to share with family, friends, and coworkers.",
    context_zh:
      "伴手礼是日本旅行者从旅途中带回来分享给家人、朋友和同事的礼物，通常是当地特色食品或工艺品。",
    culturalNote_en:
      "Unlike Western souvenirs bought for oneself, omiyage are obligatory gifts for others. Every train station, airport, and tourist area sells beautifully packaged local specialties — often individually wrapped sweets perfect for distributing at the office. Forgetting to bring omiyage from a trip is considered a social faux pas. This tradition reflects the Japanese emphasis on maintaining harmonious relationships through gift-giving.",
    culturalNote_zh:
      "与西方人为自己购买的纪念品不同，伴手礼是必须带给他人的礼物。每个火车站、机场和旅游景点都出售包装精美的当地特产——通常是独立包装的甜点，非常适合在办公室分发。旅行后忘记带伴手礼被视为社交失礼。这一传统体现了日本人通过送礼维系和谐人际关系的重视。",
    category: "culture_daily",
    difficulty: 2,
  },
  {
    id: "jp-cult-014",
    languageId: "japanese",
    word: "花見",
    reading: "hanami",
    translation_en: "Cherry blossom viewing",
    translation_zh: "花见 / 赏花（尤指赏樱）",
    context_en:
      "Hanami is the centuries-old tradition of gathering under blooming cherry blossom trees to enjoy their fleeting beauty with food, drinks, and the company of friends.",
    context_zh:
      "花见是一项延续数百年的传统——聚集在盛开的樱花树下，与朋友一起享用美食美酒，欣赏樱花短暂的美丽。",
    culturalNote_en:
      "Cherry blossoms (桜, sakura) bloom for only about one to two weeks, and the Japanese Meteorological Agency tracks the 'cherry blossom front' (桜前線) as it moves northward from late March to May. The brief, beautiful blossoming and falling of petals embodies the concept of 物の哀れ (mono no aware) — the bittersweet awareness of impermanence. Companies and groups reserve prime spots in parks days in advance.",
    culturalNote_zh:
      "樱花（桜）的花期仅约一到两周，日本气象厅会追踪从3月下旬到5月由南向北推进的「樱花前线」。短暂而美丽的花开花落体现了「物の哀れ」（物哀）的概念——对无常的苦乐交织的感悟。公司和团体会提前数天在公园里占据最佳位置。",
    category: "culture_daily",
    difficulty: 2,
  },
  {
    id: "jp-cult-015",
    languageId: "japanese",
    word: "紅葉",
    reading: "momiji",
    translation_en: "Autumn leaves / Fall foliage",
    translation_zh: "红叶 / 秋叶",
    context_en:
      "Momiji refers to the brilliant red and golden autumn foliage that transforms Japan's landscapes, celebrated through the practice of 紅葉狩り (momijigari, 'leaf hunting').",
    context_zh:
      "红叶指的是将日本景观装点得绚丽多彩的秋季红色和金色落叶，人们通过「红叶狩」来赏红叶。",
    culturalNote_en:
      "Like hanami in spring, momijigari in autumn is a beloved seasonal tradition dating back over a thousand years. The Japanese maple (楓, kaede) is especially prized for its vivid red color. Kyoto's temples surrounded by crimson foliage are among the most photographed scenes in Japan. The autumn foliage front moves from north to south, opposite to the cherry blossom front — together they frame the Japanese year with natural beauty.",
    culturalNote_zh:
      "就像春天的花见一样，秋天的红叶狩也是一项深受喜爱的季节传统，已有一千多年的历史。日本枫树（楓）因其鲜艳的红色而格外珍贵。京都寺庙被绯红落叶环绕的景色是日本最常被拍摄的画面之一。红叶前线从北向南推进，与樱花前线方向相反——两者共同以自然之美框定了日本的四季轮回。",
    category: "culture_daily",
    difficulty: 2,
  },
  {
    id: "jp-cult-016",
    languageId: "japanese",
    word: "畳",
    reading: "tatami",
    translation_en: "Straw mat flooring",
    translation_zh: "榻榻米",
    context_en:
      "Tatami are thick, woven rush straw mats used as flooring in traditional Japanese rooms, providing a soft, natural surface for sitting, sleeping, and daily life.",
    context_zh:
      "榻榻米是用编织灯心草制成的厚实草垫，用作传统日式房间的地板，为坐卧和日常生活提供柔软自然的表面。",
    culturalNote_en:
      "Tatami mats have standardized sizes that vary by region, and room sizes in Japan are still often measured in tatami units (畳, jō) — a six-tatami room is roughly 10 square meters. You must always remove shoes before stepping on tatami. The fresh, grassy scent of new tatami is deeply nostalgic for many Japanese. Even modern apartments often have at least one tatami room (和室, washitsu) for tradition's sake.",
    culturalNote_zh:
      "榻榻米有标准化的尺寸（因地区而异），日本的房间大小至今仍常以榻榻米为单位（畳）来衡量——六畳的房间约为10平方米。踏上榻榻米前必须脱鞋。新榻榻米清新的草香味让许多日本人感到无比怀念。即使是现代公寓，为了传统，通常也至少保留一间榻榻米房间（和室）。",
    category: "culture_daily",
    difficulty: 2,
  },
  {
    id: "jp-cult-017",
    languageId: "japanese",
    word: "玄関",
    reading: "genkan",
    translation_en: "Entrance hall / Entryway",
    translation_zh: "玄关 / 门厅",
    context_en:
      "The genkan is the recessed entryway area in Japanese homes and buildings where people remove their shoes before stepping up into the main living space.",
    context_zh:
      "玄关是日本住宅和建筑中下沉式的入口区域，人们在此脱鞋后才能踏上主要的生活空间。",
    culturalNote_en:
      "The genkan represents a critical boundary between the outside world (外, soto) and the inside world (内, uchi) — a distinction fundamental to Japanese culture. Shoes are placed neatly facing the door. Stepping into the house with shoes on is one of the worst social offenses a visitor can commit. Many homes provide guest slippers (スリッパ, surippa), and there are often separate toilet slippers as well.",
    culturalNote_zh:
      "玄关代表着外部世界（外，soto）和内部世界（内，uchi）之间的关键界限——这一区分是日本文化的根本。鞋子应整齐地摆放朝向门口。穿鞋进屋是访客可能犯的最严重的社交失礼之一。许多家庭会为客人准备拖鞋（スリッパ），而且通常还备有专用的卫生间拖鞋。",
    category: "culture_daily",
    difficulty: 2,
  },
  {
    id: "jp-cult-018",
    languageId: "japanese",
    word: "コンビニ",
    reading: "konbini",
    translation_en: "Convenience store",
    translation_zh: "便利店",
    context_en:
      "Konbini are Japan's ubiquitous 24-hour convenience stores — including 7-Eleven, Lawson, and FamilyMart — that serve as essential infrastructure for daily Japanese life.",
    context_zh:
      "便利店是日本无处不在的24小时便利商店——包括7-Eleven、罗森和全家——已成为日本日常生活不可或缺的基础设施。",
    culturalNote_en:
      "With over 56,000 locations nationwide, konbini are far more than snack shops. They serve as bill payment centers, ATM access points, ticket vendors, print and copy stations, and parcel pickup locations. Their food quality is remarkably high — freshly made onigiri, sandwiches, and seasonal bento rival restaurant fare. Many visitors are astonished that a 'convenience store' can produce such excellent meals.",
    culturalNote_zh:
      "全日本超过56,000家门店，便利店远不止是零食店。它们还是缴费中心、ATM取款点、售票处、打印复印站和包裹自提点。其食品品质极高——现做的饭团、三明治和季节性便当可与餐厅媲美。许多游客对「便利店」竟然能提供如此美味的餐食感到惊叹不已。",
    category: "culture_daily",
    difficulty: 1,
  },
  {
    id: "jp-cult-019",
    languageId: "japanese",
    word: "電車",
    reading: "densha",
    translation_en: "Train / Electric train",
    translation_zh: "电车 / 列车",
    context_en:
      "Densha are the backbone of Japanese public transportation, connecting cities, suburbs, and rural areas with legendary punctuality and efficiency.",
    context_zh:
      "电车是日本公共交通的骨干，以传奇般的准点率和效率连接着城市、郊区和农村地区。",
    culturalNote_en:
      "Japan's rail network is world-famous for its precision — the average delay of the Shinkansen (bullet train) is measured in seconds, not minutes. Tokyo's rail system carries over 13 million passengers daily. Train etiquette includes keeping phone calls silent, not eating on local trains, and following orderly queuing lines marked on platforms. If a train is even one minute late, the railway company may issue a formal delay certificate (遅延証明書) for passengers to show their employers.",
    culturalNote_zh:
      "日本铁路网以精确闻名世界——新干线的平均延误以秒而非分钟来衡量。东京的铁路系统每天运送超过1,300万乘客。乘车礼仪包括保持手机静音、在普通列车上不进食、以及按照站台上标记的排队线有序排队。如果列车哪怕晚点一分钟，铁路公司都可能发放正式的延误证明书（遅延証明書），供乘客向雇主出示。",
    category: "culture_daily",
    difficulty: 1,
  },
  {
    id: "jp-cult-020",
    languageId: "japanese",
    word: "弁当",
    reading: "bentō",
    translation_en: "Packed lunch box / Bento",
    translation_zh: "便当 / 盒饭",
    context_en:
      "Bentō are packed meals in compartmentalized boxes, ranging from simple home-prepared lunches to elaborate artistic creations sold at train stations and department stores.",
    context_zh:
      "便当是装在分格盒子里的打包餐食，从简单的家庭自制午餐到火车站和百货公司出售的精致艺术创作，应有尽有。",
    culturalNote_en:
      "The art of bentō-making is a cherished tradition, with parents (often mothers) spending considerable time crafting 'character bentō' (キャラ弁, kyaraben) featuring food shaped into anime characters and animals. Train station bentō, called 駅弁 (ekiben), showcase regional specialties and are a beloved part of rail travel. The attention to color balance, nutrition, and presentation reflects the Japanese principle that food should delight the eyes as much as the palate.",
    culturalNote_zh:
      "制作便当是一项珍贵的传统，家长（通常是母亲）会花费大量时间制作「卡通便当」（キャラ弁），将食物做成动漫角色和动物的形状。火车站便当称为「站弁」（駅弁），展示各地特色美食，是铁路旅行中深受喜爱的一部分。对色彩搭配、营养均衡和摆盘呈现的讲究，体现了日本人认为食物应同时愉悦眼睛和味蕾的理念。",
    category: "culture_daily",
    difficulty: 1,
  },

  // ============================================================
  // Philosophy-derived (jp-cult-021 to jp-cult-025)
  // ============================================================
  {
    id: "jp-cult-021",
    languageId: "japanese",
    word: "侘寂",
    reading: "wabi-sabi",
    translation_en: "Beauty in imperfection and transience",
    translation_zh: "侘寂（在不完美与无常中发现美）",
    context_en:
      "Wabi-sabi is the quintessential Japanese aesthetic philosophy that finds profound beauty in imperfection, impermanence, and incompleteness — the cracked tea bowl, the weathered wood, the fading blossom.",
    context_zh:
      "侘寂是最具日本特色的美学哲学，在不完美、无常和不完整中发现深邃的美——破裂的茶碗、风化的木头、凋零的花朵。",
    culturalNote_en:
      "Wabi originally meant the loneliness of living in nature, while sabi referred to the beauty of age and wear. Together, they represent an entire worldview rooted in Buddhist teachings on impermanence. The famous tea master Sen no Rikyū embodied wabi-sabi by elevating rustic simplicity over ornate luxury. In practice, wabi-sabi manifests in the gold-repaired pottery of kintsugi, the asymmetry of raku ceramics, and the deliberate simplicity of the tea ceremony.",
    culturalNote_zh:
      "「侘」最初意为独居自然中的孤寂，而「寂」指岁月和磨损带来的美。两者结合，代表了根植于佛教无常教义的完整世界观。著名茶道大师千利休将质朴简约置于华丽奢侈之上，完美诠释了侘寂之美。在实践中，侘寂体现在金缮修复的陶器、乐烧陶瓷的不对称之美，以及茶道刻意追求的朴素之中。",
    category: "culture_philosophy",
    difficulty: 4,
  },
  {
    id: "jp-cult-022",
    languageId: "japanese",
    word: "生き甲斐",
    reading: "ikigai",
    translation_en: "Reason for being / Life purpose",
    translation_zh: "生存的价值 / 人生意义",
    context_en:
      "Ikigai is a Japanese concept meaning one's reason for getting up in the morning — the intersection of what you love, what you're good at, what the world needs, and what you can be paid for.",
    context_zh:
      "生き甲斐是一个日本概念，意为每天早晨起床的理由——你所热爱的、你所擅长的、世界所需要的和能获得报酬的事物之间的交汇点。",
    culturalNote_en:
      "While the Western 'Venn diagram' interpretation of ikigai has gone viral, in Japan the concept is much simpler and more humble. It doesn't require a grand life mission — it can be as small as a morning cup of tea, tending a garden, or chatting with neighbors. Research on Okinawa, one of the world's 'Blue Zones' of longevity, suggests that having a clear ikigai contributes to the islanders' remarkably long and healthy lives.",
    culturalNote_zh:
      "虽然西方用「维恩图」解读生き甲斐的方式已在全球广泛传播，但在日本这个概念要简单和谦逊得多。它不需要宏大的人生使命——可以简单到早晨的一杯茶、打理花园或与邻居闲聊。对冲绳（世界「蓝色地带」长寿区之一）的研究表明，拥有明确的生き甲斐有助于当地居民拥有令人瞩目的健康长寿。",
    category: "culture_philosophy",
    difficulty: 3,
  },
  {
    id: "jp-cult-023",
    languageId: "japanese",
    word: "物の哀れ",
    reading: "mono no aware",
    translation_en: "The pathos of things / Sensitivity to ephemerality",
    translation_zh: "物哀 / 对世间万物无常的感慨",
    context_en:
      "Mono no aware is the bittersweet awareness of the transience of all things — the gentle sadness and deep appreciation that arises from knowing that beauty, life, and moments are fleeting.",
    context_zh:
      "物哀是对万物无常的苦乐交织的感知——因知晓美丽、生命和时光都是短暂的而产生的淡淡哀愁和深深珍惜。",
    culturalNote_en:
      "Coined by the Edo-period scholar Motoori Norinaga to describe the emotional essence of The Tale of Genji, mono no aware captures something central to the Japanese sensibility. It explains why the Japanese treasure cherry blossoms precisely because they fall, why autumn's decline is more moving than summer's fullness, and why a beautiful sunset brings a tinge of sadness. This aesthetic underpins much of Japanese literature, film, and art.",
    culturalNote_zh:
      "「物哀」由江户时代学者本居宣长创造，用来描述《源氏物语》的情感本质，它捕捉了日本审美感受的核心。它解释了为什么日本人珍视樱花恰恰因为它会凋落，为什么秋天的衰退比夏天的丰盛更动人，为什么美丽的日落会带来一丝忧伤。这种美学是日本文学、电影和艺术的重要基础。",
    category: "culture_philosophy",
    difficulty: 5,
  },
  {
    id: "jp-cult-024",
    languageId: "japanese",
    word: "間",
    reading: "ma",
    translation_en: "Negative space / Interval / Pause",
    translation_zh: "间 / 留白 / 间隔",
    context_en:
      "Ma is the Japanese concept of meaningful emptiness — the purposeful pause in music, the empty space in a painting, the silence between words that gives them power.",
    context_zh:
      "「间」是日本关于有意义的空白的概念——音乐中有意的停顿、画作中的留白、言语之间赋予其力量的沉默。",
    culturalNote_en:
      "Ma is not mere absence but pregnant emptiness that gives form to everything around it. In architecture, it's the open room that can become anything; in conversation, it's the contemplative silence that communicates respect; in martial arts, it's the critical distance between opponents. The concept pervades Japanese gardens (empty gravel spaces), ikebana (the space around flowers), and Noh theater (where long pauses build dramatic tension). Understanding ma is key to understanding Japanese aesthetics.",
    culturalNote_zh:
      "「间」不是单纯的空无，而是孕育万物的充实空白，赋予周围一切以形态。在建筑中，它是可以变成任何空间的开放房间；在对话中，它是传达尊重的沉思性沉默；在武道中，它是对手之间至关重要的距离。这一概念渗透在日本庭园（空旷的砾石空间）、花道（花朵周围的空间）和能剧（以漫长停顿构建戏剧张力）之中。理解「间」是理解日本美学的关键。",
    category: "culture_philosophy",
    difficulty: 5,
  },
  {
    id: "jp-cult-025",
    languageId: "japanese",
    word: "しょうがない",
    reading: "shōganai",
    translation_en: "It can't be helped / C'est la vie",
    translation_zh: "没办法 / 无可奈何",
    context_en:
      "Shōganai expresses acceptance of situations beyond one's control — a philosophical resignation that encourages moving forward rather than dwelling on what cannot be changed.",
    context_zh:
      "「しょうがない」表达对自己无法控制的情况的接受——一种鼓励向前看而非纠结于无法改变之事的哲学释然。",
    culturalNote_en:
      "Often misunderstood as passive fatalism, shōganai actually reflects a pragmatic wisdom: spend energy on what you can change, not on lamenting what you cannot. It helped communities cope after the 2011 earthquake and tsunami, demonstrating remarkable resilience. The phrase is deeply rooted in Buddhist acceptance of suffering and impermanence. In daily life, it's used for everything from bad weather to missed trains — a gentle reminder to accept and adapt.",
    culturalNote_zh:
      "「しょうがない」常被误解为消极的宿命论，但实际上它反映了一种务实的智慧：把精力用在可以改变的事情上，而不是为无法改变的事情哀叹。在2011年地震和海啸之后，这种态度帮助社区展现了非凡的韧性。这个短语深深植根于佛教对苦难和无常的接受。在日常生活中，它用于从坏天气到错过列车的一切情况——温和地提醒人们接受并适应。",
    category: "culture_philosophy",
    difficulty: 3,
  },

  // ============================================================
  // Religion-derived (jp-cult-026 to jp-cult-030)
  // ============================================================
  {
    id: "jp-cult-026",
    languageId: "japanese",
    word: "神社",
    reading: "jinja",
    translation_en: "Shinto shrine",
    translation_zh: "神社",
    context_en:
      "Jinja are Shinto shrines dedicated to kami (divine spirits), serving as places of worship, prayer, and celebration of life events such as birth, marriage, and seasonal festivals.",
    context_zh:
      "神社是供奉神明（神灵）的神道教圣地，是进行祈祷、参拜和庆祝出生、婚礼及季节性祭典等人生大事的场所。",
    culturalNote_en:
      "Japan has over 80,000 Shinto shrines, from tiny roadside altars to the grand Ise Jingū, which is ritually rebuilt every 20 years. Visitors follow specific protocols: pass through the torii gate, purify hands and mouth at the water basin (手水舎, temizuya), then approach the main hall to bow twice, clap twice, pray silently, and bow once more. Shrines are distinguished from temples by the torii gate and the shimenawa (sacred rope).",
    culturalNote_zh:
      "日本有超过80,000座神社，从路边的小祠到宏伟的伊势神宫——后者每20年进行一次仪式性的重建。参拜者需遵循特定礼仪：穿过�的居门、在手水舎净手漱口，然后走向正殿二鞠躬、二拍手、默祷、再一鞠躬。神社与寺庙的区别在于鸟居门和注连绳（神圣的草绳）。",
    category: "culture_religion",
    difficulty: 2,
  },
  {
    id: "jp-cult-027",
    languageId: "japanese",
    word: "寺",
    reading: "tera",
    translation_en: "Buddhist temple",
    translation_zh: "寺 / 佛寺",
    context_en:
      "Tera (or o-tera with honorific) are Buddhist temples that serve as places of meditation, worship, and funeral rites, housing Buddha statues and often featuring distinctive pagodas and zen gardens.",
    context_zh:
      "寺（或敬称お寺）是佛教寺庙，作为冥想、礼佛和丧葬仪式的场所，供奉佛像，常以独特的宝塔和禅庭为特色。",
    culturalNote_en:
      "Buddhism arrived in Japan in the 6th century and coexists harmoniously with Shinto in a unique arrangement: many Japanese visit shrines for life celebrations and temples for death-related rituals. There are roughly 77,000 Buddhist temples in Japan, belonging to various sects including Zen, Pure Land, and Shingon. The temple stay experience (宿坊, shukubō) allows visitors to experience monastic life, including early morning chanting and vegetarian cuisine (精進料理, shōjin ryōri).",
    culturalNote_zh:
      "佛教在6世纪传入日本，与神道教以独特的方式和谐共存：许多日本人去神社庆祝人生喜事，去寺庙处理与死亡相关的仪式。日本约有77,000座佛教寺庙，分属禅宗、净土宗和真言宗等多个宗派。寺庙住宿体验（宿坊）让游客能体验寺院生活，包括清晨诵经和素斋（精进料理）。",
    category: "culture_religion",
    difficulty: 2,
  },
  {
    id: "jp-cult-028",
    languageId: "japanese",
    word: "鳥居",
    reading: "torii",
    translation_en: "Shrine gate",
    translation_zh: "鸟居（神社门）",
    context_en:
      "Torii are the iconic vermilion gates that mark the entrance to Shinto shrines, symbolizing the boundary between the mundane world and the sacred space of the kami.",
    context_zh:
      "鸟居是标志性的朱红色门楼，标志着神社的入口，象征着世俗世界与神灵圣域之间的界限。",
    culturalNote_en:
      "The most famous torii is the 'floating' gate of Itsukushima Shrine on Miyajima Island, which appears to stand on water at high tide. Fushimi Inari Taisha in Kyoto is renowned for its tunnel of over 10,000 vermilion torii donated by businesses and individuals. The word 'torii' may derive from 鳥居 meaning 'bird perch,' as roosters in the Shinto creation myth called the sun goddess out of hiding. Passing through a torii is said to purify the visitor.",
    culturalNote_zh:
      "最著名的鸟居是宫岛严岛神社的「海上浮鸟居」，涨潮时看似矗立在水面上。京都的伏见稻荷大社以其由企业和个人捐赠的超过10,000座朱红鸟居组成的隧道闻名。「鸟居」一词可能源自「鸟的栖息处」，因为在神道创世神话中，公鸡的啼叫将太阳女神从隐匿处唤出。据说穿过鸟居能净化参拜者的身心。",
    category: "culture_religion",
    difficulty: 2,
  },
  {
    id: "jp-cult-029",
    languageId: "japanese",
    word: "禅",
    reading: "zen",
    translation_en: "Zen Buddhism / Meditation",
    translation_zh: "禅 / 禅宗",
    context_en:
      "Zen is a school of Mahayana Buddhism emphasizing meditation (座禅, zazen) and direct insight into one's own nature as the path to enlightenment, rather than reliance on scripture.",
    context_zh:
      "禅是大乘佛教的一个流派，强调通过打坐冥想（座禅）和对自性的直接洞察来达到觉悟，而非依赖经文。",
    culturalNote_en:
      "Zen profoundly shaped Japanese culture across domains: the austere rock gardens (枯山水, karesansui) of Ryōan-ji, the disciplined aesthetics of the tea ceremony, the spontaneous brushwork of calligraphy, and even the minimalism of modern Japanese design all bear Zen influence. The practice of zazen — sitting in stillness, watching thoughts arise and pass — remains central. Zen koans (paradoxical riddles) like 'What is the sound of one hand clapping?' aim to shatter logical thinking and provoke sudden awakening.",
    culturalNote_zh:
      "禅深刻塑造了日本各领域的文化：龙安寺的枯山水庭园、茶道的严谨美学、书法的随性笔触，甚至现代日本设计的极简主义都带有禅的印记。座禅——静坐观察念头的生起和消逝——仍是核心修行方式。禅宗公案（悖论式谜题），如「单手拍掌是什么声音？」旨在打破逻辑思维，引发顿悟。",
    category: "culture_religion",
    difficulty: 3,
  },
  {
    id: "jp-cult-030",
    languageId: "japanese",
    word: "初詣",
    reading: "hatsumōde",
    translation_en: "First shrine visit of the new year",
    translation_zh: "初诣 / 新年首次参拜",
    context_en:
      "Hatsumōde is the tradition of making the first visit to a shrine or temple in the new year to pray for good fortune, health, and success in the coming twelve months.",
    context_zh:
      "初诣是新年期间首次参拜神社或寺庙的传统，祈求来年好运、健康和成功。",
    culturalNote_en:
      "In the first three days of January, an estimated 80 to 90 million people visit shrines and temples across Japan — one of the largest annual religious gatherings in the world. Popular sites like Meiji Jingū in Tokyo draw over three million visitors. Traditions include drawing fortune slips (おみくじ, omikuji), buying protective charms (お守り, omamori), and returning old charms to be ritually burned. Despite Japan's reputation as secular, hatsumōde demonstrates the enduring role of Shinto and Buddhist traditions in cultural life.",
    culturalNote_zh:
      "在1月的头三天，估计有8,000万至9,000万人参拜日本各地的神社和寺庙——这是世界上规模最大的年度宗教活动之一。东京明治神宫等热门场所吸引超过300万参拜者。传统包括抽签（おみくじ）、购买护身符（お守り）以及将旧护身符送回焚烧。尽管日本以世俗化著称，初诣展示了神道和佛教传统在文化生活中的持久影响力。",
    category: "culture_religion",
    difficulty: 3,
  },

  // ============================================================
  // People/Arts-derived (jp-cult-031 to jp-cult-035)
  // ============================================================
  {
    id: "jp-cult-031",
    languageId: "japanese",
    word: "物語",
    reading: "monogatari",
    translation_en: "Tale / Story / Narrative",
    translation_zh: "物语 / 故事",
    context_en:
      "Monogatari literally means 'telling of things' and refers to a narrative tradition stretching from the world's first novel, The Tale of Genji, to modern anime series.",
    context_zh:
      "物语字面意思是「讲述事物」，代表了一个从世界上第一部小说《源氏物语》延续到现代动画系列的叙事传统。",
    culturalNote_en:
      "The Tale of Genji (源氏物語), written by the court lady Murasaki Shikibu around 1010 CE, is widely considered the world's first novel. The monogatari tradition continued through classics like The Tale of the Heike (平家物語), which recounts the Genpei War. Today, the word appears in countless titles — from Bakemonogatari (anime) to everyday usage. This tradition of rich, layered storytelling remains central to Japanese creative expression across all media.",
    culturalNote_zh:
      "《源氏物语》由宫廷女官紫式部于约1010年创作，被广泛认为是世界上第一部小说。物语传统延续至《平家物语》等经典作品，后者讲述了源平合战。如今，这个词出现在无数标题中——从《化物语》（动画）到日常用语。这种丰富而层次分明的叙事传统仍然是日本各类媒体中创意表达的核心。",
    category: "culture_arts",
    difficulty: 3,
  },
  {
    id: "jp-cult-032",
    languageId: "japanese",
    word: "芸術",
    reading: "geijutsu",
    translation_en: "Art / Fine arts",
    translation_zh: "艺术",
    context_en:
      "Geijutsu encompasses the full spectrum of artistic expression in Japan, from traditional forms like calligraphy, ceramics, and lacquerwork to cutting-edge contemporary installations.",
    context_zh:
      "艺术涵盖了日本艺术表达的全部光谱，从书法、陶艺和漆器等传统形式到前卫的当代装置艺术。",
    culturalNote_en:
      "In Japan, the boundary between 'art' and 'craft' is more blurred than in the West. A master potter, swordsmith, or kimono dyer can be designated a Living National Treasure (人間国宝, ningen kokuhō) — officially recognized by the government for preserving intangible cultural assets. Contemporary Japanese artists like Yayoi Kusama, Takashi Murakami, and teamLab have achieved global recognition, often by merging traditional Japanese aesthetics with modern techniques and pop culture sensibilities.",
    culturalNote_zh:
      "在日本，「艺术」和「工艺」之间的界限比西方更为模糊。顶尖的陶艺家、铸剑师或和服染色师可以被认定为「人间国宝」——由政府正式认定其对无形文化遗产的保护贡献。草间弥生、村上隆和teamLab等日本当代艺术家已获得全球认可，他们常常将日本传统美学与现代技法和流行文化感性融合在一起。",
    category: "culture_arts",
    difficulty: 3,
  },
  {
    id: "jp-cult-033",
    languageId: "japanese",
    word: "映画",
    reading: "eiga",
    translation_en: "Movie / Film",
    translation_zh: "电影",
    context_en:
      "Eiga refers to film and cinema, a medium in which Japan has made extraordinary contributions through directors, studios, and genres that have shaped world cinema.",
    context_zh:
      "电影指的是影片和电影艺术，日本在这一媒介中通过导演、制片厂和独特类型对世界电影做出了非凡贡献。",
    culturalNote_en:
      "Akira Kurosawa's films like Seven Samurai (1954) and Rashomon (1950) revolutionized filmmaking worldwide — Seven Samurai directly inspired The Magnificent Seven, and Star Wars drew heavily from The Hidden Fortress. Yasujirō Ozu mastered quiet domestic drama, while Hayao Miyazaki elevated animation to high art. Japan's unique film genres include kaijū (monster films like Godzilla) and the deeply introspective 'Japanese New Wave.' Even today, films by Hirokazu Kore-eda and anime features regularly compete at Cannes and the Oscars.",
    culturalNote_zh:
      "黑泽明的《七武士》（1954年）和《罗生门》（1950年）等影片彻底改变了世界电影——《七武士》直接启发了《豪勇七蛟龙》，《星球大战》大量借鉴了《战国英豪》。小津安二郎精通安静的家庭剧，宫崎骏则将动画提升为高雅艺术。日本独有的电影类型包括怪兽片（如哥斯拉）和深刻内省的「日本新浪潮」。时至今日，是枝裕和的影片和动画长片仍定期在戛纳电影节和奥斯卡奖上角逐。",
    category: "culture_arts",
    difficulty: 2,
  },
  {
    id: "jp-cult-034",
    languageId: "japanese",
    word: "アニメ",
    reading: "anime",
    translation_en: "Animation / Anime",
    translation_zh: "动漫 / 日本动画",
    context_en:
      "Anime refers to the distinctive style of Japanese animation that has become a global cultural phenomenon, encompassing everything from children's shows to complex adult narratives.",
    context_zh:
      "动漫指的是日本独特风格的动画，已成为全球性的文化现象，涵盖从儿童节目到复杂成人叙事的一切。",
    culturalNote_en:
      "Japan's anime industry generates over $25 billion annually and has created a massive global fanbase. Pioneered by Osamu Tezuka (the 'God of Manga'), anime evolved from Astro Boy (1963) to sophisticated works like Neon Genesis Evangelion, Studio Ghibli's masterpieces, and modern hits like Demon Slayer. Unlike Western animation, anime covers every genre and demographic. The word 'anime' in Japanese simply means all animation, but internationally it specifically refers to the Japanese style.",
    culturalNote_zh:
      "日本动画产业年产值超过250亿美元，在全球拥有庞大的粉丝群体。由手冢治虫（「漫画之神」）开创，动画从《铁臂阿童木》（1963年）发展到《新世纪福音战士》《吉卜力工作室》的杰作以及《鬼灭之刃》等现代热门作品。与西方动画不同，日本动画涵盖所有类型和受众群体。「アニメ」在日语中泛指所有动画，但在国际上特指日本风格的动画。",
    category: "culture_arts",
    difficulty: 1,
  },
  {
    id: "jp-cult-035",
    languageId: "japanese",
    word: "漫画",
    reading: "manga",
    translation_en: "Comics / Manga",
    translation_zh: "漫画",
    context_en:
      "Manga are Japanese comics and graphic novels, read from right to left, covering an enormous range of genres and demographics — from action-adventure to romance, horror to cooking.",
    context_zh:
      "漫画是日本的连环画和图文小说，从右向左阅读，涵盖极其广泛的类型和受众——从动作冒险到恋爱、恐怖到烹饪。",
    culturalNote_en:
      "Manga is big business: the Japanese manga market is worth over $6 billion, and manga comprises roughly 25% of all printed publications in Japan. The medium is segmented by audience: shōnen (boys), shōjo (girls), seinen (adult men), and josei (adult women). Classic series like Dragon Ball, One Piece, and Naruto have sold hundreds of millions of copies worldwide. Manga cafés (漫画喫茶, manga kissa) allow customers to read from vast libraries for an hourly fee — some people even sleep there overnight.",
    culturalNote_zh:
      "漫画是一门大生意：日本漫画市场价值超过60亿美元，漫画约占日本所有印刷出版物的25%。这一媒介按受众细分：少年漫画（男孩）、少女漫画（女孩）、青年漫画（成年男性）和女性漫画（成年女性）。《龙珠》《海贼王》和《火影忍者》等经典系列在全球售出数亿册。漫画咖啡厅（漫画喫茶）让顾客按小时付费阅读海量藏书——有些人甚至在那里过夜。",
    category: "culture_arts",
    difficulty: 1,
  },

  // ============================================================
  // Ideas-derived (jp-cult-036 to jp-cult-040)
  // ============================================================
  {
    id: "jp-cult-036",
    languageId: "japanese",
    word: "改善",
    reading: "kaizen",
    translation_en: "Continuous improvement",
    translation_zh: "改善 / 持续改进",
    context_en:
      "Kaizen is the philosophy of continuous, incremental improvement applied to business processes, manufacturing, and personal development — the idea that small daily changes lead to major long-term gains.",
    context_zh:
      "改善是一种将持续渐进式改进应用于商业流程、制造业和个人发展的哲学——认为日积月累的小变化会带来重大的长期收益。",
    culturalNote_en:
      "Originally developed in post-WWII Japanese manufacturing — most famously at Toyota — kaizen became a cornerstone of the 'Japanese economic miracle.' The Toyota Production System's emphasis on eliminating waste (無駄, muda), empowering every worker to suggest improvements, and never accepting the status quo revolutionized global manufacturing. Today, kaizen principles are applied worldwide in healthcare, software development (agile methodology echoes kaizen), education, and personal productivity.",
    culturalNote_zh:
      "改善最初在二战后的日本制造业中发展起来——最著名的是在丰田——成为「日本经济奇迹」的基石。丰田生产方式强调消除浪费（無駄，muda）、赋予每位工人提出改进建议的权力、永不接受现状，这彻底革新了全球制造业。如今，改善原则被广泛应用于全球的医疗保健、软件开发（敏捷方法论呼应了改善理念）、教育和个人生产力提升。",
    category: "culture_ideas",
    difficulty: 3,
  },
  {
    id: "jp-cult-037",
    languageId: "japanese",
    word: "おもてなし",
    reading: "omotenashi",
    translation_en: "Selfless hospitality / Wholehearted service",
    translation_zh: "款待之道 / 无私的待客之心",
    context_en:
      "Omotenashi is the Japanese art of wholehearted hospitality — anticipating guests' needs before they are expressed and serving with genuine care, without expectation of reward.",
    context_zh:
      "おもてなし是日本全心全意待客的艺术——在客人开口前就预见其需求，以真诚的关怀提供服务，不期待回报。",
    culturalNote_en:
      "Omotenashi gained international attention during Tokyo's bid for the 2020 Olympics. It differs from Western hospitality in its selflessness — there is no tipping culture in Japan because excellent service is the default, not something earned by extra payment. Examples abound: taxi doors that open automatically, hot towels (おしぼり, oshibori) at restaurants, department store staff who bow as you leave. The roots trace to the tea ceremony, where the host devotes meticulous attention to every detail of the guest's experience.",
    culturalNote_zh:
      "おもてなし在东京申办2020年奥运会期间获得了国际关注。它与西方的热情好客不同，强调无私——日本没有小费文化，因为优质服务是默认标准，而非通过额外付费换取。例子比比皆是：自动打开的出租车门、餐厅的热毛巾（おしぼり）、百货公司员工在你离开时鞠躬。其根源可追溯到茶道，主人对客人体验的每个细节都倾注了一丝不苟的关注。",
    category: "culture_ideas",
    difficulty: 3,
  },
  {
    id: "jp-cult-038",
    languageId: "japanese",
    word: "物作り",
    reading: "monozukuri",
    translation_en: "The art of making things / Craftsmanship",
    translation_zh: "造物精神 / 制造工艺",
    context_en:
      "Monozukuri represents the Japanese philosophy of dedicated craftsmanship — the pride, passion, and meticulous attention to detail that go into creating products of exceptional quality.",
    context_zh:
      "物作り代表了日本的匠心精神——投入到创造卓越品质产品中的自豪感、热情和对细节一丝不苟的关注。",
    culturalNote_en:
      "Monozukuri goes beyond mere manufacturing — it embodies a spiritual devotion to the craft. Whether it's a master carpenter joining wood without nails, a chef spending years perfecting rice preparation, or engineers at Honda refining an engine, the philosophy is the same: the maker's soul enters the product. Japan's 'artisan towns' (職人町, shokunin machi) preserve generations of specialized knowledge. This ethos explains why Japanese products — from kitchen knives to cars to whisky — consistently rank among the world's finest.",
    culturalNote_zh:
      "物作り超越了单纯的制造——它体现了对工艺的精神奉献。无论是不用钉子接合木材的木匠大师、花数年时间完善米饭烹饪的厨师，还是在本田精益求精调校发动机的工程师，哲学都是相同的：制作者的灵魂融入了产品之中。日本的「匠人町」保存了世代相传的专业知识。这种精神解释了为什么日本产品——从厨刀到汽车再到威士忌——始终跻身世界顶级之列。",
    category: "culture_ideas",
    difficulty: 3,
  },
  {
    id: "jp-cult-039",
    languageId: "japanese",
    word: "こだわり",
    reading: "kodawari",
    translation_en: "Attention to detail / Obsessive dedication to quality",
    translation_zh: "执着 / 对品质的极致追求",
    context_en:
      "Kodawari is the uncompromising commitment to quality and attention to the finest details — the ramen chef who simmers broth for 48 hours, the barista who calibrates water temperature to the exact degree.",
    context_zh:
      "こだわり是对品质的毫不妥协的承诺和对最细微之处的关注——熬煮48小时高汤的拉面师傅、将水温精确校准到每一度的咖啡师。",
    culturalNote_en:
      "Originally, kodawari had a negative connotation of being stubbornly fixated, but it has evolved into a badge of honor. A restaurant proudly advertising its 'kodawari' is declaring its obsessive commitment to every ingredient and technique. This mindset pervades Japanese culture: the sushi master who trains for ten years before being allowed to prepare fish, the stationery company that perfects a pen's ink flow over decades. Kodawari is why seemingly simple Japanese products — a pencil, a rice cooker, a pair of scissors — often feel incomparably refined.",
    culturalNote_zh:
      "「こだわり」最初带有固执己见的负面含义，但如今已演变为一种荣誉标签。一家餐厅自豪地宣传其「こだわり」，就是在宣告对每种食材和技法的执着追求。这种心态渗透在日本文化中：寿司师傅经过十年训练才被允许处理鱼材、文具公司花数十年完善钢笔的墨水流畅度。こだわり解释了为什么看似简单的日本产品——一支铅笔、一个电饭煲、一把剪刀——往往有着无可比拟的精致感。",
    category: "culture_ideas",
    difficulty: 4,
  },
  {
    id: "jp-cult-040",
    languageId: "japanese",
    word: "もったいない",
    reading: "mottainai",
    translation_en: "What a waste / Too precious to waste",
    translation_zh: "太可惜了 / 浪费可耻",
    context_en:
      "Mottainai expresses a deep sense of regret over waste — not just of physical resources, but of time, talent, opportunity, and anything that has inherent value.",
    context_zh:
      "「もったいない」表达了对浪费的深切遗憾——不仅是物质资源的浪费，还包括时间、才能、机会以及一切具有内在价值之物的浪费。",
    culturalNote_en:
      "Rooted in Buddhist respect for the interconnectedness of all things, mottainai carries spiritual weight beyond simple frugality. Kenyan Nobel laureate Wangari Maathai championed the word internationally as encapsulating the three Rs (reduce, reuse, recycle) in a single concept. In Japan, mottainai manifests in practices like furoshiki (wrapping cloth reused endlessly), kintsugi (repairing broken pottery with gold), and the cultural expectation of finishing every grain of rice in your bowl. It represents an entire ethical framework of gratitude for resources and responsibility not to squander them.",
    culturalNote_zh:
      "「もったいない」根植于佛教对万物相互关联的尊重，其精神内涵超越了简单的节俭。肯尼亚诺贝尔和平奖得主旺加里·马塔伊在国际上推广这个词，认为它将「减少、重复使用、回收」三个概念凝聚于一词之中。在日本，もったいない体现在风吕敷（可反复使用的包裹布）、金缮（用金粉修复破碎陶器）以及吃完碗里每一粒米的文化期望等实践中。它代表了一整套感恩资源、不可浪费的伦理框架。",
    category: "culture_ideas",
    difficulty: 3,
  },
];
