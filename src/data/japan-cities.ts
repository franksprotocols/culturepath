import type { City } from "@/lib/db";

export const japanCities: City[] = [
  // ============================================================
  // jp-city-001 — Tokyo (Capital)
  // ============================================================
  {
    id: "jp-city-001",
    nationId: "japan",
    name_native: "東京",
    name_reading: "Tokyo",
    name_en: "Tokyo",
    name_zh: "东京",
    region_en: "Kanto",
    region_zh: "关东",
    type: "capital",
    overview_en:
      "Tokyo is a city of impossible contrasts. In Asakusa, incense drifts from Senso-ji, a Buddhist temple founded in 628 CE, while just across the Sumida River the Tokyo Skytree pierces the sky at 634 meters. Shibuya Crossing floods with thousands of pedestrians every few minutes, yet five minutes away you can sit in perfect silence in the gardens of Meiji Shrine, surrounded by 100,000 trees donated from every corner of Japan. This is the paradox that makes Tokyo endlessly fascinating: hyper-modernity and deep tradition exist not in tension, but in seamless conversation.\n\nWith over 13 million people in the city proper and nearly 40 million in the greater metropolitan area, Tokyo is the world's most populous urban region. It serves as Japan's political capital, economic engine, and cultural laboratory. The city has reinvented itself repeatedly — from the shoguns' castle town of Edo, to the earthquake-flattened wasteland of 1923, to the firebombed ruins of 1945, to the futuristic Olympic host of 1964 and 2021. Each destruction brought reconstruction with even greater ambition.\n\nTokyo's neighborhoods are like distinct villages, each with its own personality. Shinjuku is neon-drenched nightlife and the busiest train station on Earth. Akihabara pulses with anime, manga, and gaming culture. Ginza gleams with luxury boutiques. Yanaka preserves the atmosphere of old Edo with narrow lanes and family-run shops. Harajuku reinvents street fashion every weekend. No single visit can capture Tokyo — it reveals itself in layers, rewarding those who return again and again.",
    overview_zh:
      "东京是一座充满不可思议的对比之城。在浅草，香烟从创建于公元628年的浅草寺袅袅升起，而就在隅田川对岸，634米高的东京晴空塔直插云霄。涩谷十字路口每隔几分钟就涌过数千行人，然而五分钟之外，你可以在明治神宫的庭院中安然静坐，被来自日本各地捐赠的十万棵树木环绕。这就是让东京永远令人着迷的悖论：超现代与深厚传统并非对立，而是无缝交织。\n\n东京市区人口超过1300万，大都市圈人口近4000万，是世界上人口最密集的城市区域。它是日本的政治首都、经济引擎和文化实验室。这座城市一次又一次地重塑自己——从幕府将军的城下町「江户」，到1923年被地震夷为平地，到1945年被空袭化为废墟，再到1964年和2021年充满未来感的奥运会主办城市。每一次毁灭都带来更宏大的重建。\n\n东京的各个街区就像一个个独立的村落，各具个性。新宿是霓虹灯下的不夜城和世界上最繁忙的火车站。秋叶原跳动着动漫、漫画和游戏文化的脉搏。银座闪耀着奢华精品店的光芒。谷中以狭窄的小巷和家庭经营的店铺保留着旧江户的氛围。原宿每个周末都在重新定义街头时尚。一次到访无法领略东京的全貌——它层层展开，回报每一个再次归来的人。",
    whyVisit_en:
      "Tokyo is where Japan's past, present, and future collide in the most exhilarating way possible. You can pray at a 1,400-year-old temple in the morning, eat the world's best sushi for lunch at a Michelin-starred counter with only eight seats, browse cutting-edge technology in the afternoon, and lose yourself in a tiny golden-lit yakitori alley at night. The city has more Michelin stars than Paris, the most efficient public transit system ever built, and a cultural depth that ranges from imperial palaces to robot restaurants. Tokyo does not just meet expectations — it demolishes them.",
    whyVisit_zh:
      "东京是日本的过去、现在和未来以最令人振奋的方式碰撞的地方。你可以早上在一座1400年历史的寺庙参拜，午餐在只有八个座位的米其林寿司台前享用世界顶级寿司，下午浏览最前沿的科技产品，夜晚迷失在灯光昏黄的小小烤串巷弄里。这座城市拥有比巴黎更多的米其林星级餐厅、人类历史上最高效的公共交通系统，以及从皇居到机器人餐厅的文化纵深。东京不只是满足期待——它彻底颠覆期待。",
    highlights_en: [
      "Senso-ji Temple in Asakusa — Tokyo's oldest temple with the iconic Kaminarimon thunder gate",
      "Meiji Shrine and its forested approach in the heart of Harajuku",
      "Tsukiji Outer Market for the freshest sushi and street food in the world",
      "Shibuya Crossing — the world's busiest pedestrian intersection, best viewed from above",
      "The Imperial Palace East Gardens — free entry into the former Edo Castle grounds",
      "Shinjuku Golden Gai — a labyrinth of over 200 tiny bars, each seating fewer than ten people",
    ],
    highlights_zh: [
      "浅草寺——东京最古老的寺庙，标志性的雷门",
      "明治神宫及其位于原宿中心的林荫参道",
      "筑地场外市场——世界上最新鲜的寿司和街头美食",
      "涩谷十字路口——世界上最繁忙的行人十字路口，从高处俯瞰最佳",
      "皇居东御苑——免费进入昔日江户城遗址",
      "新宿黄金街——由200多家小酒吧组成的迷宫，每家不到十个座位",
    ],
    linkedTimelineIds: ["jp-tl-meiji", "jp-tl-edo", "jp-tl-postwar"],
    linkedPeopleIds: ["jp-person-tokugawa-ieyasu"],
    linkedVocabIds: [],
    coordinates: { lat: 35.6762, lng: 139.6503 },
  },

  // ============================================================
  // jp-city-002 — Kyoto (Historic)
  // ============================================================
  {
    id: "jp-city-002",
    nationId: "japan",
    name_native: "京都",
    name_reading: "Kyoto",
    name_en: "Kyoto",
    name_zh: "京都",
    region_en: "Kansai",
    region_zh: "关西",
    type: "historic",
    overview_en:
      "Kyoto was Japan's imperial capital for over a thousand years, from 794 to 1868, and it remains the spiritual heart of the nation. When Emperor Kanmu moved the court here, he named it Heian-kyo — the Capital of Peace and Tranquility. The city was deliberately modeled on China's Tang Dynasty capital Chang'an, with a perfect grid layout that you can still trace in today's streets. Unlike most Japanese cities, Kyoto was largely spared from World War II bombing, preserving an extraordinary concentration of pre-modern architecture.\n\nThe numbers alone are staggering: 17 UNESCO World Heritage Sites, over 2,000 temples and shrines, and hundreds of traditional machiya townhouses. But Kyoto is far more than an open-air museum. It is a living repository of Japanese arts — tea ceremony, flower arrangement, kimono weaving, Noh theater, kaiseki cuisine — practiced not as tourist performances but as daily disciplines passed down through generations. The geiko (Kyoto's term for geisha) of Gion still train for years in dance, music, and conversation.\n\nKyoto's beauty is inseparable from the seasons. Spring brings cherry blossoms to the Philosopher's Path. Summer lights up with Gion Matsuri, one of Japan's greatest festivals. Autumn transforms the maple gardens of Tofuku-ji into seas of crimson. Winter dusts the golden pavilion of Kinkaku-ji with snow. Each season reveals a different Kyoto, and the city teaches you to see beauty in impermanence — the very essence of mono no aware.",
    overview_zh:
      "京都是日本长达千年的皇都，从794年到1868年，至今仍是这个国家的精神核心。桓武天皇迁都于此时，将其命名为平安京——和平与安宁之都。这座城市刻意以中国唐代都城长安为蓝本，采用完美的棋盘格局，至今仍可从街道中辨认出来。与大多数日本城市不同，京都在二战中基本未遭轰炸，保存了极其集中的前现代建筑遗产。\n\n仅数字就令人叹为观止：17处联合国教科文组织世界遗产、2000多座寺庙和神社、数百栋传统町屋。但京都远不只是一座露天博物馆。它是日本艺术的活态宝库——茶道、花道、和服织造、能剧、怀石料理——这些并非面向游客的表演，而是代代相传的日常修行。祇园的芸妓（京都对艺伎的称呼）至今仍需经年累月地学习舞蹈、音乐和谈话艺术。\n\n京都之美与四季密不可分。春天，樱花盛开在哲学之道。夏天，祇园祭点亮夜空，是日本最盛大的节日之一。秋天，东福寺的枫叶庭院化为一片绯红的海洋。冬天，薄雪覆盖金阁寺的金色屋顶。每个季节展现不同的京都，这座城市教你在无常中发现美——这正是「物の哀れ」的精髓。",
    whyVisit_en:
      "If you only visit one city in Japan to understand its soul, it must be Kyoto. This is where every strand of Japanese culture — Zen Buddhism, the tea ceremony, samurai history, imperial tradition, exquisite cuisine — comes together in a setting of breathtaking beauty. Walking through the thousands of vermillion torii gates at Fushimi Inari at dawn, sitting in a centuries-old Zen garden as raked gravel seems to ripple like water, or glimpsing a geiko disappearing down a lantern-lit alley in Gion — these are moments that change how you understand Japan forever.",
    whyVisit_zh:
      "如果你只能去日本的一座城市来理解它的灵魂，那一定是京都。禅宗佛教、茶道、武士历史、皇室传统、精致料理——日本文化的每一条脉络都在这座绝美的城市中汇聚。黎明时分穿行于伏见稻荷数千座朱红色鸟居之间，在数百年历史的枯山水庭院中静坐，看砂砾仿佛水波荡漾，或在祇园灯笼照亮的小巷中瞥见一位芸妓的身影——这些瞬间将永远改变你对日本的理解。",
    highlights_en: [
      "Fushimi Inari Taisha — thousands of vermillion torii gates winding up a sacred mountain",
      "Kinkaku-ji (Golden Pavilion) — a Zen temple covered in gold leaf reflected in a mirror pond",
      "Arashiyama Bamboo Grove — an otherworldly walk through towering bamboo stalks",
      "Gion district — Kyoto's legendary geiko quarter with traditional wooden teahouses",
      "Kiyomizu-dera — a hillside temple with a massive wooden stage offering panoramic city views",
      "Ryoan-ji — home to Japan's most famous Zen rock garden",
    ],
    highlights_zh: [
      "伏见稻荷大社——数千座朱红色鸟居蜿蜒上山",
      "金阁寺——覆盖金箔的禅寺倒映在镜池中",
      "岚山竹林——在参天竹林中如入异境的漫步",
      "祇园——京都传奇的芸妓街区，传统木造茶屋林立",
      "清水寺——依山而建的寺庙，巨大的木造舞台俯瞰全城",
      "龙安寺——日本最著名的枯山水庭院所在地",
    ],
    linkedTimelineIds: ["jp-tl-heian", "jp-tl-nara", "jp-tl-muromachi"],
    linkedPeopleIds: ["jp-person-murasaki-shikibu", "jp-person-sen-no-rikyu"],
    linkedVocabIds: [],
    coordinates: { lat: 35.0116, lng: 135.7681 },
  },

  // ============================================================
  // jp-city-003 — Nara (Historic)
  // ============================================================
  {
    id: "jp-city-003",
    nationId: "japan",
    name_native: "奈良",
    name_reading: "Nara",
    name_en: "Nara",
    name_zh: "奈良",
    region_en: "Kansai",
    region_zh: "关西",
    type: "historic",
    overview_en:
      "Nara was Japan's first permanent capital, established in 710 CE, and it holds the distinction of being where Japanese civilization truly began to crystallize into a unified state. During the Nara period (710-794), Japan enthusiastically absorbed Chinese culture on a massive scale — Buddhism, Confucian government, Chinese writing, urban planning — and Nara was the crucible where these imported elements fused with indigenous Shinto traditions to create something uniquely Japanese.\n\nToday, Nara is one of Japan's most enchanting cities, smaller and more relaxed than Kyoto but equally rich in historical treasures. Eight UNESCO World Heritage Sites cluster within its compact center. The Great Buddha (Daibutsu) at Todai-ji, cast in 752 CE, remains one of the largest bronze statues in the world, housed in the largest wooden building on Earth. Over 1,200 sacred deer roam freely through Nara Park and the temple grounds, bowing to visitors for rice crackers — they have been considered divine messengers of the Kasuga Shrine for over a thousand years.\n\nNara rewards the unhurried visitor. Beyond the famous temples, you can wander through the ancient Naramachi merchant district with its latticed townhouses, hike the primeval forests of Mount Kasuga where sunlight filters through centuries-old cedars, or sit quietly in Isuien Garden watching koi drift beneath maple branches. The city whispers of an era when Japan was young and everything was being discovered for the first time.",
    overview_zh:
      "奈良是日本第一个永久首都，建立于公元710年，是日本文明真正凝聚为统一国家的发端之地。在奈良时代（710-794），日本大规模热情地吸收中国文化——佛教、儒家治理、汉字书写、城市规划——而奈良正是这些外来元素与本土神道传统熔铸为独特日本文化的坩埚。\n\n今天的奈良是日本最迷人的城市之一，比京都更小更悠闲，但历史宝藏同样丰厚。八处联合国教科文组织世界遗产集中在紧凑的市中心。东大寺的大佛铸造于公元752年，至今仍是世界上最大的青铜佛像之一，安放在世界上最大的木造建筑之中。超过1200头神鹿在奈良公园和寺庙境内自由漫步，向游客鞠躬讨要鹿仙贝——它们被视为春日大社的神使已逾千年。\n\n奈良奖赏不急不躁的旅人。在著名寺庙之外，你可以漫步古老的奈良町商人街区，欣赏格子门窗的町屋；徒步春日山原始森林，阳光透过百年古杉洒落；或在依水园静坐，看锦鲤在枫枝下悠然游过。这座城市低语着一个日本还年轻、一切都在初次被发现的时代。",
    whyVisit_en:
      "Nara offers something no other Japanese city can: the chance to stand face-to-face with the origins of Japanese civilization in a setting of pastoral calm. Bowing deer greet you as you walk toward a 15-meter-tall bronze Buddha in the world's largest wooden building. Ancient shrines sit in primeval forests where stone lanterns line mossy paths. Unlike busy Kyoto, Nara lets you absorb Japan's deep history at your own pace, in a city that feels timeless and unhurried.",
    whyVisit_zh:
      "奈良提供了其他日本城市无法给予的体验：在田园般的宁静中，与日本文明的源头面对面。鞠躬的小鹿在你走向世界最大木造建筑中15米高青铜大佛的路上迎接你。古老的神社坐落在原始森林中，石灯笼排列在苔藓覆盖的小径旁。不像繁忙的京都，奈良让你以自己的节奏沉浸在日本的深厚历史中，感受一座超越时间的悠然之城。",
    highlights_en: [
      "Todai-ji Temple and the Great Buddha — a 15-meter bronze statue in the world's largest wooden hall",
      "Nara Park — home to over 1,200 sacred free-roaming deer",
      "Kasuga Taisha — a Shinto shrine famous for thousands of stone and bronze lanterns",
      "Horyu-ji — the world's oldest surviving wooden structures, dating to the 7th century",
      "Naramachi — a preserved Edo-period merchant quarter with charming latticed townhouses",
    ],
    highlights_zh: [
      "东大寺与大佛——世界最大木造殿堂中的15米青铜佛像",
      "奈良公园——1200多头神鹿自由漫步的家园",
      "春日大社——以数千座石灯笼和铜灯笼闻名的神社",
      "法隆寺——世界上现存最古老的木造建筑群，可追溯到7世纪",
      "奈良町——保存完好的江户时代商人街区，格子门窗的町屋别具韵味",
    ],
    linkedTimelineIds: ["jp-tl-nara", "jp-tl-asuka"],
    linkedPeopleIds: ["jp-person-shotoku-taishi"],
    linkedVocabIds: [],
    coordinates: { lat: 34.6851, lng: 135.8048 },
  },

  // ============================================================
  // jp-city-004 — Kamakura (Historic)
  // ============================================================
  {
    id: "jp-city-004",
    nationId: "japan",
    name_native: "鎌倉",
    name_reading: "Kamakura",
    name_en: "Kamakura",
    name_zh: "镰仓",
    region_en: "Kanto",
    region_zh: "关东",
    type: "historic",
    overview_en:
      "Kamakura is where samurai rule began. In 1185, Minamoto no Yoritomo established Japan's first military government (bakufu) here, deliberately choosing this small coastal town ringed by forested hills because its natural defenses made it virtually impregnable. For nearly 150 years (1185-1333), Kamakura was the true seat of power in Japan, and the austere, disciplined warrior culture that would define the nation for centuries was forged in this seaside setting.\n\nThe Kamakura period was also a golden age of Japanese Buddhism. New, accessible schools of Buddhism — Zen, Pure Land, and Nichiren — emerged to serve not just aristocrats but common people. Zen Buddhism in particular found its perfect home in Kamakura, where warrior-monks valued its emphasis on direct experience, mental discipline, and acceptance of death. The city's Five Great Zen Temples (Kamakura Gozan) became centers of learning that shaped everything from architecture to the tea ceremony.\n\nToday Kamakura is a beloved escape from Tokyo, just an hour south by train. Its Great Buddha (Kamakura Daibutsu), an 11-meter bronze Amida Buddha that has sat serenely in the open air since a tsunami destroyed its hall in 1498, is one of Japan's most iconic images. Surfers catch waves at Yuigahama Beach while hikers traverse forested trails connecting ancient temples. Kamakura proves that profound history and laid-back beach-town charm can coexist beautifully.",
    overview_zh:
      "镰仓是武士统治开始的地方。1185年，源赖朝在此建立了日本第一个军事政权（幕府），他刻意选择了这座被林木覆盖的丘陵环绕的海边小镇，因为其天然地势使之几乎固若金汤。近150年间（1185-1333），镰仓是日本真正的权力中心，而那种定义了此后数百年国民性格的严肃、自律的武士文化，正是在这个海滨之地锻造成型的。\n\n镰仓时代也是日本佛教的黄金时期。禅宗、净土宗、日莲宗等新兴、易于接近的佛教流派涌现，不再只服务于贵族，也面向平民百姓。禅宗尤其在镰仓找到了完美的归宿，武士僧侣看重它对直接体验、心智磨练和坦然面对死亡的强调。镰仓五山（五大禅寺）成为学术中心，影响了从建筑到茶道的方方面面。\n\n今天的镰仓是深受喜爱的东京近郊度假地，乘火车南行仅需一小时。镰仓大佛——一尊11米高的青铜阿弥陀佛像，自1498年海啸摧毁佛殿后便静静地端坐在露天之中——是日本最具标志性的景象之一。冲浪者在由比滨海滩追逐浪花，徒步者穿行于连接古寺的林间小径。镰仓证明了深厚的历史和悠闲的海滨小镇风情可以完美共存。",
    whyVisit_en:
      "Kamakura offers the rare combination of world-class historical sites and a relaxed beach-town atmosphere, all within an easy day trip from Tokyo. Stand before the Great Buddha as it gazes serenely across the centuries, hike through bamboo-lined trails between Zen temples, and finish your day with fresh shirasu (whitebait) overlooking the Pacific. Kamakura is where you feel the warrior spirit of medieval Japan while sea breezes cool your face.",
    whyVisit_zh:
      "镰仓将世界级历史遗迹与轻松的海滨小镇氛围罕见地结合在一起，而且从东京出发一日即可往返。站在大佛面前，感受它穿越数百年的宁静注视；穿行于竹林掩映的禅寺步道；最后面朝太平洋品尝新鲜的吻仔鱼来结束一天。在镰仓，你在海风拂面中感受中世纪日本的武士精神。",
    highlights_en: [
      "Kamakura Daibutsu (Great Buddha) — an iconic 11-meter open-air bronze Amida Buddha",
      "Tsurugaoka Hachimangu — the city's grand Shinto shrine at the center of Kamakura",
      "Hokoku-ji (Bamboo Temple) — a Zen temple with a stunning bamboo grove and matcha tea house",
      "Enoshima Island — a picturesque island with shrines, caves, and ocean views just offshore",
      "The Great Buddha Hiking Trail — forested paths connecting temples across Kamakura's hills",
    ],
    highlights_zh: [
      "镰仓大佛——标志性的11米高露天青铜阿弥陀佛像",
      "鹤冈八幡宫——位于镰仓中心的宏伟神社",
      "报国寺（竹寺）——拥有绝美竹林和抹茶茶室的禅寺",
      "江之岛——近海的风景如画的小岛，有神社、洞窟和海景",
      "大佛远足步道——穿越镰仓丘陵连接各寺庙的林间小径",
    ],
    linkedTimelineIds: ["jp-tl-kamakura", "jp-tl-sengoku"],
    linkedPeopleIds: ["jp-person-minamoto-yoritomo"],
    linkedVocabIds: [],
    coordinates: { lat: 35.3192, lng: 139.5467 },
  },

  // ============================================================
  // jp-city-005 — Osaka (Major City)
  // ============================================================
  {
    id: "jp-city-005",
    nationId: "japan",
    name_native: "大阪",
    name_reading: "Osaka",
    name_en: "Osaka",
    name_zh: "大阪",
    region_en: "Kansai",
    region_zh: "关西",
    type: "major_city",
    overview_en:
      "If Tokyo is Japan's head, Osaka is its stomach — and its heart. Known as tenka no daidokoro (the nation's kitchen), Osaka has been Japan's culinary capital for centuries. The city's unofficial motto is kuidaore: eat until you drop. And Osakans mean it. From the sizzling takoyaki (octopus balls) stalls of Dotonbori to the Michelin-starred kappo restaurants of Kitashinchi, food is not just sustenance here — it is identity, art form, and social glue.\n\nOsaka's character is strikingly different from Tokyo's. Where Tokyo is reserved and polite, Osaka is loud, funny, and warmly direct. Osakans greet strangers, crack jokes with shopkeepers, and have produced a disproportionate number of Japan's comedians. The city's merchant-class heritage (it was the commercial capital during the Edo period, when it was called the Manchester of the East) created a culture that values practical wit over aristocratic refinement. The Osaka dialect (Osaka-ben) is considered the funniest in Japan, and locals are genuinely proud of it.\n\nHistorically, Osaka is inseparable from Toyotomi Hideyoshi, the peasant-born unifier who made it his power base and built the magnificent Osaka Castle in 1583. The castle was the largest in Japan and remains the city's defining landmark. Today Osaka is a booming modern metropolis and Japan's second-largest economy, but it never loses its street-level warmth and raucous energy.",
    overview_zh:
      "如果说东京是日本的头脑，那么大阪就是它的胃——也是它的心脏。大阪被称为「天下の台所」（天下的厨房），数百年来一直是日本的美食之都。这座城市的非官方格言是「食い倒れ」：吃到倒下为止。大阪人是认真的。从道顿堀滋滋作响的章鱼烧摊位到北新地的米其林星级割烹餐厅，食物在这里不仅是果腹之物——它是身份认同、艺术形式和社交纽带。\n\n大阪的性格与东京截然不同。东京内敛有礼，大阪则热闹、幽默、直爽温暖。大阪人会主动和陌生人打招呼，跟店主插科打诨，培养出了日本数量极不成比例的喜剧演员。这座城市的商人阶层传统（江户时代它是商业之都，被称为「东方曼彻斯特」）塑造了一种重视实用机智胜过贵族优雅的文化。大阪方言（大阪弁）被认为是日本最有趣的方言，当地人对此由衷自豪。\n\n从历史上看，大阪与丰臣秀吉密不可分，这位出身农民的统一者将此地作为权力根据地，于1583年建造了宏伟的大阪城。大阪城曾是日本最大的城堡，至今仍是这座城市的标志性地标。今天的大阪是一个蓬勃发展的现代大都市和日本第二大经济体，但它从未失去街头巷尾的温暖和喧腾的活力。",
    whyVisit_en:
      "Osaka is the most fun city in Japan — full stop. It is where you eat the best street food on Earth, experience Japanese culture at its most open and friendly, and discover a city that refuses to take itself too seriously. Dotonbori at night, with its giant neon crab signs and canal reflections, is sensory overload in the best way. Osaka Castle grounds are magnificent. And the warmth of Osakans will make you feel welcome in a way that no guidebook can prepare you for.",
    whyVisit_zh:
      "大阪是日本最好玩的城市——没有之一。在这里你能吃到世界上最棒的街头美食，体验最开放友好的日本文化，发现一座拒绝一本正经的城市。夜晚的道顿堀，巨大的霓虹螃蟹招牌和运河倒影让感官欢愉到极致。大阪城气势恢宏。而大阪人的热情会让你感受到任何旅游指南都无法预告的宾至如归。",
    highlights_en: [
      "Dotonbori — the neon-lit canal street that is Osaka's food and nightlife epicenter",
      "Osaka Castle — Hideyoshi's magnificent fortress surrounded by moats and cherry-blossom parks",
      "Kuromon Market — the 'Osaka Kitchen' with 170+ stalls of fresh seafood, street food, and produce",
      "Shinsekai — a retro entertainment district centered around the iconic Tsutenkaku Tower",
      "Universal Studios Japan — one of the world's top theme parks, featuring the Wizarding World of Harry Potter",
    ],
    highlights_zh: [
      "道顿堀——霓虹灯闪烁的运河街，大阪美食与夜生活的震中",
      "大阪城——秀吉的宏伟城堡，护城河与樱花公园环绕",
      "黑门市场——「大阪的厨房」，170多个摊位售卖鲜活海鲜、街头小吃和农产品",
      "新世界——以标志性通天阁为中心的复古娱乐街区",
      "日本环球影城——世界顶级主题乐园之一，设有哈利·波特魔法世界",
    ],
    linkedTimelineIds: ["jp-tl-sengoku", "jp-tl-edo"],
    linkedPeopleIds: ["jp-person-toyotomi-hideyoshi"],
    linkedVocabIds: [],
    coordinates: { lat: 34.6937, lng: 135.5023 },
  },

  // ============================================================
  // jp-city-006 — Hiroshima (Major City)
  // ============================================================
  {
    id: "jp-city-006",
    nationId: "japan",
    name_native: "広島",
    name_reading: "Hiroshima",
    name_en: "Hiroshima",
    name_zh: "广岛",
    region_en: "Chugoku",
    region_zh: "中国地方",
    type: "major_city",
    overview_en:
      "Hiroshima is forever marked by August 6, 1945 — the day an atomic bomb destroyed the city and killed an estimated 140,000 people by the end of that year. But what defines Hiroshima today is not the tragedy itself, but the extraordinary way the city chose to respond to it. Rather than harboring bitterness, Hiroshima dedicated itself to becoming an international symbol of peace. The Hiroshima Peace Memorial Park, built at ground zero, is one of the most moving places on Earth — a space where history's darkest moment is transformed into an urgent plea for a world without nuclear weapons.\n\nBut Hiroshima is much more than its wartime history. It is a vibrant, forward-looking city of 1.2 million people, famous for its friendly residents, hearty local cuisine (especially okonomiyaki — savory layered pancakes), and a lively street culture. The city sits on a beautiful river delta where six rivers flow to the Seto Inland Sea, giving it an open, airy feel rare among Japanese cities.\n\nJust a short ferry ride from Hiroshima lies Miyajima (Itsukushima Island), one of Japan's three most celebrated scenic views. Its great vermillion torii gate appears to float on the water at high tide, and has been a sacred site since at least the 6th century. The combination of Hiroshima's peace legacy and Miyajima's timeless beauty makes this one of the most profound travel experiences Japan offers.",
    overview_zh:
      "广岛永远铭刻着1945年8月6日——那一天，一颗原子弹摧毁了这座城市，到当年年底估计造成14万人死亡。但今天定义广岛的不是悲剧本身，而是这座城市选择回应悲剧的非凡方式。广岛没有心怀怨恨，而是致力于成为国际和平的象征。建在爆心地的广岛和平纪念公园是地球上最令人动容的地方之一——在这个空间里，历史最黑暗的时刻被化为对无核世界的急切呼唤。\n\n但广岛远不止于战争历史。它是一座充满活力、面向未来的120万人口的城市，以友善的居民、丰盛的地方美食（尤其是广岛烧——层层叠叠的咸味煎饼）和热闹的街头文化闻名。这座城市坐落在美丽的河口三角洲上，六条河流汇入濑户内海，赋予它在日本城市中少见的开阔通透感。\n\n从广岛乘短途渡轮即可到达宫岛（严岛），日本三景之一。那座巨大的朱红色鸟居在涨潮时仿佛漂浮在水面上，自至少6世纪起就是神圣之地。广岛的和平遗产与宫岛的永恒之美相结合，构成了日本最深刻的旅行体验之一。",
    whyVisit_en:
      "Visiting Hiroshima changes you. The Peace Memorial Museum, the skeletal Atomic Bomb Dome, and the Children's Peace Monument draped in thousands of paper cranes are experiences that stay with you forever. But Hiroshima then surprises you with its warmth, its incredible okonomiyaki, and its infectious optimism. And when you take the ferry to Miyajima and see that floating torii gate emerge from the sea mist, you understand why the Japanese revere this landscape as sacred. Hiroshima teaches the most important lesson a city can: how to transform unimaginable suffering into hope.",
    whyVisit_zh:
      "来到广岛会改变你。和平纪念资料馆、骨架般的原爆圆顶屋、挂满数千只纸鹤的原爆之子像——这些体验将伴你一生。但广岛随后以它的温暖、令人难以置信的广岛烧和感染力十足的乐观精神给你惊喜。当你乘渡轮前往宫岛，看到那座浮在海雾中的鸟居缓缓显现，你就理解了为什么日本人将这片风景视为神圣。广岛传授了一座城市所能传授的最重要的课——如何将不可想象的苦难化为希望。",
    highlights_en: [
      "Hiroshima Peace Memorial Park and Museum — ground zero transformed into a world peace monument",
      "Atomic Bomb Dome (Genbaku Dome) — the skeletal ruin preserved as a UNESCO World Heritage Site",
      "Miyajima Island and the floating torii gate of Itsukushima Shrine",
      "Shukkeien Garden — a beautiful Edo-period strolling garden rebuilt after the bombing",
      "Hiroshima-style okonomiyaki — layered savory pancakes unique to the city, best enjoyed at Okonomimura",
    ],
    highlights_zh: [
      "广岛和平纪念公园与资料馆——爆心地化为世界和平纪念碑",
      "原爆圆顶屋——被保存为联合国教科文组织世界遗产的骨架废墟",
      "宫岛与严岛神社的海上鸟居",
      "缩景园——轰炸后重建的美丽江户时代回游式庭园",
      "广岛烧——这座城市独有的层叠咸味煎饼，在「御好村」品尝最佳",
    ],
    linkedTimelineIds: ["jp-tl-wwii", "jp-tl-postwar"],
    linkedPeopleIds: [],
    linkedVocabIds: [],
    coordinates: { lat: 34.3853, lng: 132.4553 },
  },

  // ============================================================
  // jp-city-007 — Nagasaki (Major City)
  // ============================================================
  {
    id: "jp-city-007",
    nationId: "japan",
    name_native: "長崎",
    name_reading: "Nagasaki",
    name_en: "Nagasaki",
    name_zh: "长崎",
    region_en: "Kyushu",
    region_zh: "九州",
    type: "major_city",
    overview_en:
      "Nagasaki is Japan's most cosmopolitan historical city — a port that served as the nation's sole window to the outside world during 250 years of isolation. When the Tokugawa shogunate sealed Japan shut in the 1630s, they made one exception: a tiny artificial island called Dejima in Nagasaki harbor, where Dutch traders were permitted to live and trade. Through this pinhole, Western science, medicine, and technology trickled into Japan. Nagasaki also has Japan's deepest connection to Christianity; Portuguese missionaries arrived in 1549, and a community of hidden Christians (kakure kirishitan) secretly maintained their faith for over 200 years during brutal persecution.\n\nLike Hiroshima, Nagasaki bears the scar of an atomic bombing — on August 9, 1945, three days after Hiroshima, a second bomb devastated the city's Urakami Valley. The Nagasaki Atomic Bomb Museum and Peace Park offer a deeply personal perspective on the tragedy, with survivor testimonies and artifacts that humanize the statistics.\n\nBut Nagasaki's identity extends far beyond wartime. Its unique cultural blend is visible everywhere: in the Chinese-influenced Chinatown (the oldest in Japan), the European-styled Glover Garden overlooking the harbor, the distinctively sweet Castella sponge cake brought by Portuguese traders, and the champon noodles born from Chinese-Japanese fusion cooking. The city's hilly terrain, draped over steep slopes around a dramatic harbor, gives it a Mediterranean feel unlike anywhere else in Japan.",
    overview_zh:
      "长崎是日本历史上最具国际色彩的城市——在250年闭关锁国期间，这个港口是日本面向外部世界的唯一窗口。当德川幕府于1630年代封锁日本时，只留了一个例外：长崎港中一个名为出岛的人工小岛，允许荷兰商人在此居住和贸易。通过这个针眼，西方的科学、医学和技术涓涓流入日本。长崎还拥有日本与基督教最深的渊源；葡萄牙传教士于1549年到来，一个隐匿基督徒（隠れキリシタン）社群在残酷迫害中秘密保持信仰超过200年。\n\n与广岛一样，长崎也承受了原子弹的伤痕——1945年8月9日，广岛之后仅三天，第二颗原子弹摧毁了浦上地区。长崎原爆资料馆和和平公园以极为个人化的视角呈现这场悲剧，幸存者的证词和遗物让冰冷的数字变得有血有肉。\n\n但长崎的身份远不止于战争。其独特的文化融合随处可见：受中国影响的唐人街（日本最古老的中华街）、俯瞰港口的欧式哥拉巴园、葡萄牙商人带来的独特甜蜜长崎蛋糕，以及中日融合烹饪催生的什锦面。城市依陡坡而建、环绕壮美的港湾，散发出日本其他地方找不到的地中海风情。",
    whyVisit_en:
      "Nagasaki is Japan's most underrated city. Its extraordinary multicultural history — Portuguese churches next to Chinese temples next to Dutch trading houses — creates a flavor found nowhere else in the country. The hillside views over the harbor are stunning, especially at night from Mount Inasa (rated one of the world's top three night views). The food is exceptional: champon noodles, castella cake, and some of the freshest seafood in Kyushu. And the peace memorial sites, while devastating, remind us why this history must never be forgotten.",
    whyVisit_zh:
      "长崎是日本最被低估的城市。葡萄牙教堂紧邻中国寺庙，旁边又是荷兰商馆——这种非凡的多元文化历史创造了全日本独一无二的风味。山坡上俯瞰港口的景色令人惊叹，尤其是从稻佐山看到的夜景（被评为世界三大夜景之一）。美食更是出众：什锦面、长崎蛋糕、九州最新鲜的海产。而和平纪念地虽然令人悲恸，却提醒我们这段历史绝不能被遗忘。",
    highlights_en: [
      "Nagasaki Atomic Bomb Museum and Peace Park — powerful memorials to the 1945 bombing",
      "Glover Garden — a hillside park of preserved Western-style mansions overlooking the harbor",
      "Dejima — the restored Dutch trading post that was Japan's only contact with the West for 200 years",
      "Oura Church — Japan's oldest surviving church, a National Treasure and UNESCO World Heritage Site",
      "Mount Inasa night view — one of the world's top three night views, overlooking the city and harbor",
    ],
    highlights_zh: [
      "长崎原爆资料馆与和平公园——1945年原爆的震撼纪念地",
      "哥拉巴园——山坡上保存完好的西式宅邸群，俯瞰港口",
      "出岛——复原的荷兰商馆，200年间日本与西方的唯一联络点",
      "大浦天主堂——日本现存最古老的教堂，国宝及世界遗产",
      "稻佐山夜景——世界三大夜景之一，俯瞰全城与港湾",
    ],
    linkedTimelineIds: ["jp-tl-edo", "jp-tl-wwii", "jp-tl-sengoku"],
    linkedPeopleIds: [],
    linkedVocabIds: [],
    coordinates: { lat: 32.7503, lng: 129.8779 },
  },

  // ============================================================
  // jp-city-008 — Sapporo (Major City)
  // ============================================================
  {
    id: "jp-city-008",
    nationId: "japan",
    name_native: "札幌",
    name_reading: "Sapporo",
    name_en: "Sapporo",
    name_zh: "札幌",
    region_en: "Hokkaido",
    region_zh: "北海道",
    type: "major_city",
    overview_en:
      "Sapporo is the capital of Hokkaido, Japan's wild northern frontier, and it feels delightfully different from every other major Japanese city. Founded in 1868 during the Meiji Restoration as part of Japan's deliberate colonization of Hokkaido, Sapporo is one of Japan's youngest cities — planned from scratch on a Western-style grid by American advisors. The wide boulevards, open parks, and spacious layout contrast sharply with the narrow, winding streets of Honshu's ancient cities.\n\nHokkaido itself was historically the homeland of the Ainu, Japan's indigenous people, who lived here for thousands of years before Japanese settlers arrived in large numbers during the Meiji era. Sapporo's history is thus intertwined with questions of colonization and cultural identity that Japan is only now beginning to reckon with. The Upopoy National Ainu Museum and Park, opened in 2020, represents a significant step toward acknowledging Ainu heritage.\n\nToday Sapporo is best known for three things: beer, snow, and food. Sapporo Beer, Japan's oldest brand, was founded here in 1876 and its original brewery is now a popular museum. The Sapporo Snow Festival, held every February, draws over two million visitors to marvel at enormous illuminated ice and snow sculptures. And the food — buttery miso ramen, fresh Hokkaido crab, grilled lamb jingisukan (Genghis Khan barbecue), and impossibly creamy dairy products — takes full advantage of Hokkaido's rich agricultural bounty.",
    overview_zh:
      "札幌是北海道的首府——日本狂野的北方边疆——感觉与日本其他所有大城市都截然不同。它于1868年明治维新期间作为日本有计划殖民北海道的一部分而建立，是日本最年轻的城市之一——由美国顾问按照西式网格从零规划。宽阔的大道、开放的公园和宽敞的布局与本州古城狭窄蜿蜒的街道形成鲜明对比。\n\n北海道本身历史上是阿伊努人的故土，日本的原住民族在这片土地上生活了数千年，直到明治时代大批日本移民到来。因此，札幌的历史与殖民和文化认同的问题交织在一起——日本至今才开始正视这些问题。2020年开放的「乌波波伊」国立阿伊努民族博物馆和公园，标志着承认阿伊努文化遗产的重要一步。\n\n今天的札幌最知名的是三样东西：啤酒、雪和美食。札幌啤酒是日本最古老的啤酒品牌，1876年在此创立，其原始酿酒厂现在是热门博物馆。每年二月举办的札幌雪祭吸引超过200万游客前来惊叹巨型灯光冰雪雕塑。而美食——醇厚的味噌拉面、新鲜的北海道螃蟹、烤羊肉成吉思汗烧烤、浓郁到不可思议的乳制品——充分利用了北海道丰富的农业物产。",
    whyVisit_en:
      "Sapporo is Japan's greatest food city that most international visitors overlook. The miso ramen alone — rich, buttery, topped with corn and chashu — is worth the flight to Hokkaido. In winter, the Snow Festival is pure magic, and world-class ski resorts like Niseko are just two hours away. In summer, Hokkaido transforms into a lavender-scented paradise of rolling hills and flower fields. And everywhere you go, the freshness and quality of Hokkaido ingredients will ruin you for food anywhere else.",
    whyVisit_zh:
      "札幌是大多数国际游客忽略的日本最伟大美食之城。光是味噌拉面——醇厚、黄油般浓郁、配上玉米和叉烧——就值得专程飞到北海道。冬天的雪祭如梦似幻，新雪谷等世界级滑雪场仅两小时车程。夏天的北海道变身为薰衣草飘香的丘陵花田乐园。无论走到哪里，北海道食材的新鲜与品质都会让你对其他地方的食物再也无法满足。",
    highlights_en: [
      "Sapporo Snow Festival — massive ice and snow sculptures illuminated across the city every February",
      "Sapporo Beer Museum — the historic brewery where Japan's oldest beer brand was born",
      "Odori Park — a 1.5-kilometer green belt that divides the city and hosts seasonal festivals",
      "Nijo Market — a lively fish market with the freshest crab, uni, and seafood bowls in Hokkaido",
      "Susukino — Hokkaido's largest entertainment district, famous for its ramen alley and vibrant nightlife",
    ],
    highlights_zh: [
      "札幌雪祭——每年二月遍布全城的巨型灯光冰雪雕塑",
      "札幌啤酒博物馆——日本最古老啤酒品牌诞生的历史酿酒厂",
      "大通公园——一条1.5公里长的绿色带状公园，贯穿城市中心，举办四季节庆",
      "二条市场——活力十足的鱼市，北海道最新鲜的螃蟹、海胆和海鲜盖饭",
      "薄野——北海道最大的娱乐街区，以拉面横丁和热闹夜生活闻名",
    ],
    linkedTimelineIds: ["jp-tl-meiji"],
    linkedPeopleIds: [],
    linkedVocabIds: [],
    coordinates: { lat: 43.0618, lng: 141.3545 },
  },

  // ============================================================
  // jp-city-009 — Fukuoka (Major City)
  // ============================================================
  {
    id: "jp-city-009",
    nationId: "japan",
    name_native: "福岡",
    name_reading: "Fukuoka",
    name_en: "Fukuoka",
    name_zh: "福冈",
    region_en: "Kyushu",
    region_zh: "九州",
    type: "major_city",
    overview_en:
      "Fukuoka is the gateway to Kyushu, Japan's southwestern island, and the city with the strongest historical ties to the Asian mainland. Located just 200 kilometers from the Korean peninsula, Fukuoka has been a crossroads of Asian exchange for over two millennia. In 1274 and 1281, the Mongol Empire under Kublai Khan launched massive invasion fleets against Japan, landing near Fukuoka — only to be repelled by fierce samurai resistance and, according to legend, divine typhoons (kamikaze, or divine wind) that destroyed the Mongol fleets.\n\nModern Fukuoka is one of Japan's fastest-growing and most livable cities, with a compact downtown, gorgeous waterfront, and a dynamism that draws comparisons to cities like Portland or Barcelona. It consistently ranks as one of the best cities in Asia for quality of life. The startup scene is booming, the food is legendary, and the pace of life strikes a perfect balance between urban energy and laid-back southern charm.\n\nFukuoka's culinary crown jewel is Hakata ramen — a rich, milky tonkotsu (pork bone) broth with thin noodles, served at bustling yatai (street food stalls) that line the banks of the Naka River. These yatai, lit by paper lanterns and packed with salarymen and tourists elbow-to-elbow, are some of the most atmospheric dining experiences in all of Japan. Fukuoka also boasts excellent mentaiko (spicy cod roe), fresh seafood, and the oldest Zen temple in Japan.",
    overview_zh:
      "福冈是九州（日本西南部岛屿）的门户，也是与亚洲大陆历史联系最深的城市。距朝鲜半岛仅200公里，福冈两千多年来一直是亚洲交流的十字路口。1274年和1281年，忽必烈统治的蒙古帝国两次派遣大规模舰队入侵日本，在福冈附近登陆——却被武士的猛烈抵抗击退，传说中还有「神风」（kamikaze，即「神圣之风」）摧毁了蒙古舰队。\n\n现代福冈是日本发展最快、最宜居的城市之一，市中心紧凑、海滨优美，活力四射，常被拿来与波特兰或巴塞罗那相提并论。它在亚洲生活质量排名中始终名列前茅。创业圈蓬勃发展，美食声名远播，生活节奏在都市活力和南方悠闲之间取得了完美平衡。\n\n福冈美食的王冠明珠是博多拉面——浓郁乳白的豚骨（猪骨）汤底搭配细面，在中洲河畔热闹的屋台（街头小摊）上供应。这些屋台点着纸灯笼，上班族和游客肩挨肩地挤坐在一起，是全日本最具氛围感的用餐体验之一。福冈还以美味的明太子（辣鳕鱼子）、新鲜海鲜和日本最古老的禅寺著称。",
    whyVisit_en:
      "Fukuoka is Japan's best-kept secret among major cities. The yatai street food stalls along the river at night — slurping the richest tonkotsu ramen you have ever tasted while squeezed between locals on tiny stools — is a quintessentially Japanese experience you cannot get anywhere else. The city is compact, easy to navigate, close to beautiful beaches and hot springs, and far less touristy than Tokyo or Kyoto. If you want to experience Japan as the Japanese live it, Fukuoka is the place.",
    whyVisit_zh:
      "福冈是日本大城市中保守得最好的秘密。夜晚在河畔的屋台——挤在当地人之间的小凳子上，大口吃着你这辈子吃过的最浓郁的豚骨拉面——这是只有在这里才能获得的纯正日本体验。城市紧凑、交通便利、靠近美丽海滩和温泉，游客远没有东京或京都那么多。如果你想体验日本人真实生活的日本，福冈就是那个地方。",
    highlights_en: [
      "Yatai street food stalls along the Naka River — iconic open-air ramen and yakitori stands",
      "Dazaifu Tenmangu — an important Shinto shrine dedicated to the god of learning, surrounded by plum trees",
      "Fukuoka Castle ruins and Ohori Park — scenic castle remnants beside a beautiful lake park",
      "Canal City Hakata — a massive shopping and entertainment complex built around an artificial canal",
      "Shofuku-ji — Japan's first Zen temple, founded in 1195 by the monk Eisai",
    ],
    highlights_zh: [
      "中洲河畔的屋台——标志性的露天拉面和烤串小摊",
      "太宰府天满宫——供奉学问之神的重要神社，梅林环绕",
      "福冈城遗址与大濠公园——美丽的城堡遗迹与湖畔公园",
      "博多运河城——围绕人工运河建造的大型购物娱乐综合体",
      "圣福寺——日本最早的禅寺，由僧人荣西于1195年创建",
    ],
    linkedTimelineIds: ["jp-tl-kamakura", "jp-tl-mongol-invasions"],
    linkedPeopleIds: [],
    linkedVocabIds: [],
    coordinates: { lat: 33.5904, lng: 130.4017 },
  },

  // ============================================================
  // jp-city-010 — Mount Fuji Area (Natural)
  // ============================================================
  {
    id: "jp-city-010",
    nationId: "japan",
    name_native: "富士山",
    name_reading: "Fujisan",
    name_en: "Mount Fuji Area",
    name_zh: "富士山地区",
    region_en: "Chubu",
    region_zh: "中部",
    type: "natural",
    overview_en:
      "Mount Fuji is not merely a mountain — it is the single most powerful symbol of Japan, an almost perfectly symmetrical volcanic cone rising 3,776 meters above sea level. For centuries, Fuji-san has been revered as a sacred mountain in both Shinto and Buddhist traditions. Pilgrims have climbed it since at least the 7th century, and its image has inspired countless works of art, most famously Hokusai's Thirty-Six Views of Mount Fuji, which gave the world the iconic Great Wave off Kanagawa. In 2013, UNESCO recognized Mount Fuji as a World Heritage Site — not for its natural beauty alone, but as a cultural landmark that has shaped Japanese identity.\n\nThe Fuji Five Lakes (Fujigoko) region at the mountain's northern base offers some of the most spectacular views in Japan. Lake Kawaguchiko is the most accessible, with its mirror-still waters reflecting Fuji on clear mornings — a scene that has graced a million postcards yet still takes your breath away in person. The area is dotted with hot spring resorts, art museums, flower gardens, and amusement parks, making it a perfect blend of natural grandeur and comfortable accessibility.\n\nClimbing Mount Fuji itself is a rite of passage that over 300,000 people undertake each summer season (July-September). The Japanese have a proverb: 一度も登らぬ馬鹿、二度登る馬鹿 — a fool never climbs Fuji, but a fool climbs it twice. The overnight ascent to catch sunrise (goraiko) from the summit is genuinely one of life's unforgettable experiences, as the sun rises over a sea of clouds and all of Japan stretches below you.",
    overview_zh:
      "富士山不仅仅是一座山——它是日本最强大的象征，一座几乎完美对称的火山锥，海拔3776米。数百年来，富士山在神道和佛教传统中都被尊为圣山。至少从7世纪起就有朝圣者攀登它，其形象激发了无数艺术作品，最著名的是葛饰北斋的《富岳三十六景》，其中的《神奈川冲浪里》成为世界级的经典图像。2013年，联合国教科文组织将富士山列为世界遗产——不仅因为它的自然美景，更因为它是塑造日本身份认同的文化地标。\n\n富士五湖地区位于富士山北麓，拥有日本最壮观的景色。河口湖最容易到达，在晴朗的清晨，静如明镜的湖面倒映出富士山的倒影——这个景象出现在百万张明信片上，但亲眼所见时依然让人屏息。这一地区遍布温泉度假村、美术馆、花园和游乐园，完美融合了自然的宏伟与舒适的可达性。\n\n攀登富士山本身是一种成人礼，每年夏季（7月至9月）有超过30万人完成这一壮举。日本人有句谚语：「一度も登らぬ馬鹿、二度登る馬鹿」——从不登富士山的是傻瓜，登两次的也是傻瓜。夜间登山在山顶迎接日出（御来光）真正是一生难忘的体验，当太阳从云海之上升起，整个日本在你脚下铺展开来。",
    whyVisit_en:
      "Seeing Mount Fuji in person is a moment of pure awe that no photograph can replicate. The mountain's perfect symmetry, the way it dominates the horizon from a hundred kilometers away, the spiritual weight of knowing that pilgrims have worshipped this peak for over a thousand years — it all comes together in an experience that is quintessentially Japan. Whether you climb to the summit for sunrise, soak in a hot spring with Fuji framed in your window, or simply stand by Lake Kawaguchiko at dawn, this is a landscape that imprints itself on your soul.",
    whyVisit_zh:
      "亲眼见到富士山是一种纯粹的震撼，任何照片都无法复制。完美的对称轮廓、它从百公里外就主宰天际线的气势、知道朝圣者已膜拜这座山峰超过千年的精神分量——一切汇聚成一种本质上属于日本的体验。无论你登顶迎接日出、泡在窗前正对富士山的温泉中，还是仅仅在黎明时分站在河口湖畔，这都是一片会刻入灵魂的风景。",
    highlights_en: [
      "Lake Kawaguchiko — the most famous of the Fuji Five Lakes, with iconic mirror reflections of the mountain",
      "Climbing Mount Fuji for goraiko (sunrise from the summit) during the July-September season",
      "Chureito Pagoda — the classic viewpoint framing Fuji behind a five-story pagoda and cherry blossoms",
      "Hakone — a hot spring resort town with views of Fuji, Lake Ashi, and the Owakudani volcanic valley",
      "Oshino Hakkai — eight crystal-clear spring pools fed by Fuji's snowmelt in a traditional village setting",
    ],
    highlights_zh: [
      "河口湖——富士五湖中最著名的一湖，以山体的镜面倒影闻名",
      "在7月至9月登山季攀登富士山迎接「御来光」（山顶日出）",
      "忠灵塔——经典取景点，五重塔和樱花为前景、富士山为背景",
      "箱根——可远眺富士山的温泉度假小镇，芦之湖和大涌谷火山谷",
      "忍野八海——传统村落中八个由富士山雪水汇成的清澈泉池",
    ],
    linkedTimelineIds: ["jp-tl-edo"],
    linkedPeopleIds: ["jp-person-hokusai"],
    linkedVocabIds: [],
    coordinates: { lat: 35.3606, lng: 138.7274 },
  },

  // ============================================================
  // jp-city-011 — Nikko (Cultural)
  // ============================================================
  {
    id: "jp-city-011",
    nationId: "japan",
    name_native: "日光",
    name_reading: "Nikko",
    name_en: "Nikko",
    name_zh: "日光",
    region_en: "Kanto",
    region_zh: "关东",
    type: "cultural",
    overview_en:
      "Nikko is where the Tokugawa shoguns chose to spend eternity. Nestled in the cedar-forested mountains of Tochigi Prefecture, about two hours north of Tokyo, this small mountain town is home to some of the most lavishly decorated shrines and temples in all of Japan — a dramatic contrast to the minimalist Zen aesthetic most visitors associate with Japanese architecture. The centerpiece is Toshogu, the mausoleum of Tokugawa Ieyasu, founder of the Tokugawa shogunate that ruled Japan for 260 years.\n\nToshogu is an explosion of color, gold leaf, and intricate wood carvings that took 15,000 artisans over two years to complete. Every surface is covered with painted carvings of dragons, phoenixes, flowers, and mythical creatures. The famous Three Wise Monkeys (see no evil, hear no evil, speak no evil) and the Sleeping Cat (Nemuri Neko) are carved here. There is a Japanese saying: Nikko wo mizu shite kekko to iu na — never say splendid until you have seen Nikko.\n\nBeyond the shrines, Nikko is surrounded by stunning natural beauty. The Irohazaka winding mountain road, with its 48 hairpin curves (each named after a character in the Japanese syllabary), leads to Lake Chuzenji and the thundering Kegon Falls, one of Japan's three most famous waterfalls. In autumn, the entire mountainscape ignites with fiery reds, oranges, and golds, making Nikko one of Japan's premier autumn foliage destinations.",
    overview_zh:
      "日光是德川幕府将军选择长眠的地方。它坐落在栃木县杉树密布的山林中，距东京北部约两小时车程。这个小小的山城拥有全日本最华丽的神社和寺庙——与大多数游客心目中日本建筑的极简禅风形成强烈反差。核心是东照宫，统治日本260年的德川幕府创建者德川家康的陵墓。\n\n东照宫是色彩、金箔和精细木雕的爆发，15000名工匠耗时两年多才完工。每一寸表面都覆盖着龙、凤、花卉和神兽的彩绘雕刻。著名的三猿（非礼勿视、非礼勿听、非礼勿言）和眠り猫（睡猫）就雕刻在这里。日本有句话说：「日光を見ずして結構と言うなかれ」——不到日光，不可言壮丽。\n\n神社之外，日光被令人惊叹的自然美景环绕。伊吕波坂蜿蜒山路有48个急弯（每个以日语假名中的一个字符命名），通往中禅寺湖和轰鸣的华严瀑布——日本三大名瀑之一。秋天，整个山景被燃烧般的红色、橙色和金色点燃，使日光成为日本首屈一指的赏枫胜地。",
    whyVisit_en:
      "Nikko delivers the single most jaw-dropping architectural experience in Japan. If Kyoto's temples are elegant watercolors, Toshogu is an oil painting at maximum saturation — every inch gilded, carved, and painted in riotous detail. Combine this with the primeval cedar forests, the dramatic Kegon Falls, and the serene beauty of Lake Chuzenji, and you have a day trip from Tokyo that feels like stepping into another world entirely. Come in autumn for foliage that rivals anywhere on Earth.",
    whyVisit_zh:
      "日光提供了日本最令人瞠目结舌的建筑体验。如果说京都的寺庙是优雅的水彩画，东照宫就是饱和度拉满的油画——每一寸都镀金、雕刻、彩绘到极致。再加上原始杉林、壮观的华严瀑布和中禅寺湖的静谧之美，从东京出发的一日之行就如同踏入了另一个世界。秋天来此赏枫，可与世界上任何地方媲美。",
    highlights_en: [
      "Toshogu Shrine — the lavishly decorated mausoleum of Tokugawa Ieyasu, a UNESCO World Heritage Site",
      "The Three Wise Monkeys and Sleeping Cat carvings — iconic wood carvings at Toshogu",
      "Kegon Falls — a dramatic 97-meter waterfall plunging from Lake Chuzenji",
      "Shinkyo Bridge — a sacred vermillion bridge spanning the Daiya River at the entrance to Nikko",
      "Lake Chuzenji — a serene mountain lake with spectacular autumn foliage",
    ],
    highlights_zh: [
      "东照宫——德川家康的华丽陵墓，联合国教科文组织世界遗产",
      "三猿与眠猫——东照宫标志性的木雕",
      "华严瀑布——从中禅寺湖倾泻而下的97米壮观瀑布",
      "神桥——日光入口处横跨大谷川的朱红色神圣拱桥",
      "中禅寺湖——秋叶绚烂的宁静山间湖泊",
    ],
    linkedTimelineIds: ["jp-tl-edo"],
    linkedPeopleIds: ["jp-person-tokugawa-ieyasu"],
    linkedVocabIds: [],
    coordinates: { lat: 36.7500, lng: 139.5981 },
  },

  // ============================================================
  // jp-city-012 — Ise (Cultural)
  // ============================================================
  {
    id: "jp-city-012",
    nationId: "japan",
    name_native: "伊勢",
    name_reading: "Ise",
    name_en: "Ise",
    name_zh: "伊势",
    region_en: "Kansai",
    region_zh: "关西",
    type: "cultural",
    overview_en:
      "Ise is the spiritual heart of Shinto, Japan's indigenous religion, and home to the most sacred site in the entire country: Ise Grand Shrine (Ise Jingu). Dedicated to Amaterasu, the Sun Goddess and mythical ancestor of the Japanese imperial family, Ise Jingu is not a single shrine but a vast complex of 125 shrines spread across the forests of the Kii Peninsula. The two main shrines — Naiku (Inner Shrine) and Geku (Outer Shrine) — are separated by six kilometers and connected by a pilgrimage route that the faithful have walked for nearly 2,000 years.\n\nWhat makes Ise Jingu extraordinary is its practice of shikinen sengu: every 20 years, the entire shrine is demolished and rebuilt from scratch on an adjacent plot, using the same ancient techniques and materials. This has been done continuously since the 7th century. The current buildings, reconstructed in 2013, are simultaneously 20 years old and 2,000 years old — a living embodiment of the Shinto belief that renewal and impermanence are the essence of the sacred. The shrine's architecture, using unpainted hinoki cypress and thatched roofs, is Japan at its most elemental.\n\nThe pilgrimage to Ise was Japan's original tourist boom. During the Edo period, millions of common people undertook the journey, and the festive Oharai-machi street leading to the shrine has been feeding and entertaining pilgrims for centuries. Today it remains one of Japan's most charming traditional shopping streets, lined with wooden buildings selling local specialties like Ise udon, akafuku mochi, and fresh pearl jewelry from nearby Mikimoto Pearl Island.",
    overview_zh:
      "伊势是神道的精神核心——日本本土宗教的至圣之地——也是全日本最神圣的场所伊势神宫的所在地。伊势神宫供奉天照大御神——太阳女神、日本皇室的神话始祖——不是单一神社，而是散布在纪伊半岛森林中的125座神社组成的庞大神域。两座主要神社——内宫与外宫——相距六公里，由一条近2000年来信众不断行走的朝圣之路相连。\n\n伊势神宫的非凡之处在于「式年迁宫」：每20年，整座神社被拆除并在相邻地块上用同样的古老技法和材料从零重建。这一传统自7世纪以来从未中断。2013年重建的现有建筑既是20年的，又是2000年的——这是神道信仰中「更新与无常即是神圣本质」的活态体现。神社建筑采用未上漆的桧木和茅草屋顶，展现了日本最本真的面貌。\n\n伊势朝圣是日本最早的旅游热潮。江户时代，数百万平民踏上旅途，通往神宫的热闹的御祓町街区数百年来一直为朝圣者提供饮食和娱乐。今天它仍是日本最迷人的传统商业街之一，两旁木造建筑售卖当地特产——伊势乌冬、赤福饼，以及来自附近御木本珍珠岛的鲜亮珍珠饰品。",
    whyVisit_en:
      "Ise is where you experience Shinto in its purest, most ancient form. Walking through the towering cedar forest toward the Inner Shrine, crossing the sacred Uji Bridge, and standing before the simple, powerful architecture of a building that has been torn down and rebuilt identically for 2,000 years — this is a spiritual experience that transcends religious boundaries. The surrounding Oharai-machi street is a delightful journey through traditional Japan, with some of the best regional food and crafts in the country.",
    whyVisit_zh:
      "在伊势，你体验的是最纯粹、最古老形态的神道。穿行于参天杉木林走向内宫，跨过神圣的宇治桥，站在一座2000年来不断拆毁又原样重建的简素而有力的建筑面前——这是一种超越宗教界限的精神体验。周围的御祓町街区是穿越传统日本的愉快之旅，有全国最好的地方美食和工艺品。",
    highlights_en: [
      "Ise Jingu Naiku (Inner Shrine) — the holiest site in Shinto, dedicated to Amaterasu, the Sun Goddess",
      "Ise Jingu Geku (Outer Shrine) — dedicated to the deity of food and industry, set in serene forests",
      "Oharai-machi and Okage-yokocho — charming traditional streets with Edo-period atmosphere and local food",
      "Meoto Iwa (Wedded Rocks) — two sacred rocks in the sea connected by a shimenawa rope",
      "Mikimoto Pearl Island — the birthplace of cultured pearls, with a museum and pearl diving demonstrations",
    ],
    highlights_zh: [
      "伊势神宫内宫——神道至圣之地，供奉太阳女神天照大御神",
      "伊势神宫外宫——供奉食物与产业之神，坐落在幽静森林中",
      "御祓町与托福横丁——充满江户风情的迷人传统街区与地方美食",
      "夫妇岩——海中两块以注连绳相连的神圣岩石",
      "御木本珍珠岛——养殖珍珠的发祥地，设有博物馆和海女采珠表演",
    ],
    linkedTimelineIds: ["jp-tl-ancient", "jp-tl-edo"],
    linkedPeopleIds: [],
    linkedVocabIds: [],
    coordinates: { lat: 34.4871, lng: 136.7256 },
  },

  // ============================================================
  // jp-city-013 — Akihabara (Cultural)
  // ============================================================
  {
    id: "jp-city-013",
    nationId: "japan",
    name_native: "秋葉原",
    name_reading: "Akihabara",
    name_en: "Akihabara",
    name_zh: "秋叶原",
    region_en: "Kanto",
    region_zh: "关东",
    type: "cultural",
    overview_en:
      "Akihabara — affectionately called Akiba by locals — is the global epicenter of otaku culture: anime, manga, video games, electronics, and the entire universe of Japanese pop culture fandom. What started as a postwar black market for radio parts evolved into Tokyo's electronics district, and then, in the 1990s and 2000s, transformed into the vibrant, neon-drenched mecca for geek culture that it is today. Akihabara is not just a neighborhood — it is a cultural phenomenon that has influenced entertainment worldwide.\n\nWalking through Akihabara is sensory overload in the best possible way. Multi-story buildings are stacked floor to floor with anime figurines, retro game cartridges, manga volumes, cosplay costumes, and the latest gadgets. Maid cafes — where waitresses in frilly costumes serve customers with theatrical cuteness — originated here. Giant arcades (game centers) house everything from rhythm games to crane machines to immersive VR experiences. The sounds of J-pop, arcade beeps, and enthusiastic shopkeepers calling out deals create an unmistakable soundtrack.\n\nAkihabara matters because it represents a defining aspect of modern Japanese soft power. Anime and manga are now billion-dollar global industries, and Akihabara is their spiritual home. For fans who grew up watching Studio Ghibli films, reading One Piece, or playing Nintendo games, stepping into Akihabara feels like entering a world they have loved from afar — finally made real and tangible.",
    overview_zh:
      "秋叶原——当地人亲切地称之为「アキバ」——是御宅族文化的全球震中：动漫、漫画、电子游戏、电子产品，以及日本流行文化粉丝的整个宇宙。从战后的无线电零件黑市起步，发展为东京的电子产品街区，然后在1990和2000年代蜕变为今天这个充满活力、霓虹灯密布的极客文化圣地。秋叶原不仅是一个街区——它是一个影响了全世界娱乐业的文化现象。\n\n行走在秋叶原是最美好的感官超载。多层建筑从底楼到顶楼密密麻麻地陈列着动漫手办、复古游戏卡带、漫画单行本、Cosplay服装和最新的电子产品。女仆咖啡馆——穿着荷叶边制服的女服务员以夸张可爱的方式服务客人——就起源于此。巨大的游戏中心容纳了从音乐游戏到抓娃娃机再到沉浸式VR体验的一切。J-pop音乐、游戏机的电子音效和热情招揽的店员共同编织出一曲无可替代的背景乐。\n\n秋叶原之所以重要，是因为它代表了现代日本软实力的一个关键维度。动漫和漫画如今是价值数十亿美元的全球产业，而秋叶原是它们的精神故乡。对于那些看着吉卜力电影长大、读着《海贼王》、玩着任天堂游戏的粉丝来说，踏入秋叶原就像走进了一个他们远远热爱的世界——终于变得真实而触手可及。",
    whyVisit_en:
      "Akihabara is a pilgrimage for anyone who has ever loved anime, manga, video games, or Japanese pop culture. Nowhere else on Earth concentrates this much otaku energy into a few city blocks. Whether you are hunting for a rare figurine, playing vintage arcade games, visiting a themed cafe, or simply absorbing the electric atmosphere, Akihabara delivers an experience that is utterly unique to Japan. Even if you are not an otaku, the sheer spectacle of this district — its energy, its creativity, its joyful weirdness — is something every visitor to Japan should witness.",
    whyVisit_zh:
      "对任何热爱过动漫、漫画、电子游戏或日本流行文化的人来说，秋叶原是一场朝圣。地球上没有其他地方能在几个街区内聚集如此多的御宅族能量。无论你是在搜寻稀有手办、玩复古街机游戏、光顾主题咖啡馆，还是单纯沉浸在电气化的氛围中，秋叶原都能带来独属于日本的体验。即使你不是御宅族，这个街区的纯粹景观——它的能量、创造力和快乐的奇异感——也是每位到日本的访客都应该亲眼见证的。",
    highlights_en: [
      "Multi-story anime and manga shops — including Mandarake and Animate, treasure troves for collectors",
      "Retro game stores and massive arcades — from classic 8-bit to cutting-edge VR",
      "Maid cafes and themed cafes — a uniquely Japanese cultural experience",
      "Yodobashi Camera Akiba — one of the world's largest electronics stores, nine floors of gadgets",
      "Kanda Myojin Shrine — a 1,300-year-old shrine just steps from the neon, popular with tech workers for digital safety blessings",
    ],
    highlights_zh: [
      "多层动漫商店——包括Mandarake和Animate，收藏家的宝库",
      "复古游戏店与巨型游戏中心——从经典8位机到最前沿VR",
      "女仆咖啡馆与主题咖啡馆——独特的日本文化体验",
      "友都八喜秋叶原店——世界上最大的电子产品商场之一，九层楼的电子设备",
      "神田明神——距霓虹灯仅几步之遥的1300年古神社，IT从业者来此祈求「电子安全」",
    ],
    linkedTimelineIds: ["jp-tl-postwar", "jp-tl-heisei"],
    linkedPeopleIds: ["jp-person-miyazaki-hayao", "jp-person-tezuka-osamu"],
    linkedVocabIds: [],
    coordinates: { lat: 35.6984, lng: 139.7731 },
  },

  // ============================================================
  // jp-city-014 — Okinawa (Cultural)
  // ============================================================
  {
    id: "jp-city-014",
    nationId: "japan",
    name_native: "沖縄",
    name_reading: "Okinawa",
    name_en: "Okinawa",
    name_zh: "冲绳",
    region_en: "Okinawa",
    region_zh: "冲绳",
    type: "cultural",
    overview_en:
      "Okinawa is Japan, but different — a subtropical island chain stretching toward Taiwan with a culture, language, and history distinct from the Japanese mainland. For 450 years (1429-1879), Okinawa was the independent Ryukyu Kingdom, a prosperous maritime trading nation that bridged China, Japan, Korea, and Southeast Asia. Ryukyuan culture developed its own languages, music, martial arts (the origin of karate), architecture, textiles, and cuisine. In 1879, Japan annexed the kingdom, and the process of cultural assimilation that followed remains a sensitive topic.\n\nOkinawa's modern history is equally complex. The Battle of Okinawa in 1945 was the bloodiest campaign of the Pacific War, killing an estimated one-quarter of the civilian population. After Japan's surrender, the United States administered Okinawa until 1972, and major American military bases remain to this day — a constant source of political tension. Despite these heavy histories, Okinawans are famously warm, resilient, and joyful. The islands are renowned as one of the world's Blue Zones, where an extraordinary number of residents live past 100, attributed to diet, community bonds, and a philosophy called ikigai (reason for being).\n\nVisually, Okinawa is a paradise of turquoise waters, white sand beaches, and coral reefs. The Shuri Castle in Naha (rebuilt after wartime destruction and a devastating fire in 2019, with ongoing restoration) was the Ryukyu Kingdom's seat of power and a UNESCO World Heritage Site. The islands offer world-class diving, unique Ryukyuan cuisine featuring purple sweet potatoes and rafute braised pork, and the stirring sounds of the sanshin, a three-stringed instrument ancestor of the shamisen.",
    overview_zh:
      "冲绳是日本，但又不同——这条亚热带岛链向台湾方向延伸，拥有与日本本土截然不同的文化、语言和历史。450年间（1429-1879），冲绳曾是独立的琉球王国，一个繁荣的海洋贸易国家，连接着中国、日本、朝鲜和东南亚。琉球文化发展出了自己的语言、音乐、武术（空手道的起源）、建筑、纺织和料理。1879年日本吞并了琉球王国，随后的文化同化过程至今仍是敏感话题。\n\n冲绳的近代史同样复杂。1945年冲绳战役是太平洋战争中最惨烈的战役，估计造成四分之一平民死亡。日本投降后，美国管辖冲绳直到1972年，至今仍有大型美军基地驻扎——这是持续的政治紧张源头。尽管背负沉重的历史，冲绳人以热情、坚韧和快乐著称。这些岛屿是世界著名的「蓝色地带」之一，大量居民活过百岁，归因于饮食、社区纽带和一种叫做「生き甲斐」（生命的意义）的哲学。\n\n在视觉上，冲绳是碧绿海水、白沙海滩和珊瑚礁的天堂。那霸的首里城（战后重建，2019年毁于大火后正在修复中）曾是琉球王国的权力中心，也是联合国教科文组织世界遗产。这些岛屿提供世界级的潜水体验、以紫薯和卤肉（ラフテー）为特色的独特琉球料理，以及三线（三味线的前身，一种三弦乐器）动人的音色。",
    whyVisit_en:
      "Okinawa shatters every stereotype you have about Japan. Instead of temples and bullet trains, you find turquoise tropical waters, coral reefs teeming with life, and a Polynesian-tinged culture that feels worlds apart from Tokyo. The food is different (think taco rice and Spam musubi alongside traditional Ryukyuan dishes), the music is different (the haunting sanshin replaces the koto), and the pace of life runs on island time. Come for the beaches and diving, stay for the profound cultural experience of Japan's most unique region — and understand why Okinawans are among the longest-lived people on Earth.",
    whyVisit_zh:
      "冲绳打破你对日本的一切刻板印象。这里没有寺庙和新干线，取而代之的是碧绿的热带海水、生机勃勃的珊瑚礁，和一种带有波利尼西亚色彩、与东京恍若隔世的文化。食物不同（塔可饭和午餐肉饭团与传统琉球料理并存），音乐不同（三线的悠远旋律取代了古筝），生活节奏按照岛屿时间运转。为海滩和潜水而来，因日本最独特地区的深厚文化体验而留——并理解为什么冲绳人是地球上最长寿的人群之一。",
    highlights_en: [
      "Shuri Castle — the reconstructed Ryukyu Kingdom palace and UNESCO World Heritage Site in Naha",
      "Kerama Islands — crystal-clear waters with world-class snorkeling and sea turtle encounters",
      "Churaumi Aquarium — one of the world's largest aquariums, famous for its massive whale shark tank",
      "Kokusai Street in Naha — the vibrant main strip for Okinawan food, crafts, and nightlife",
      "Peace Memorial Park — a powerful tribute to all lives lost in the Battle of Okinawa",
      "Traditional Ryukyuan villages and sanshin music performances",
    ],
    highlights_zh: [
      "首里城——那霸重建的琉球王国宫殿，联合国教科文组织世界遗产",
      "庆良间群岛——水晶般清澈的海水，世界级浮潜和海龟邂逅",
      "美丽海水族馆——世界上最大的水族馆之一，以巨大的鲸鲨水槽闻名",
      "那霸国际通——充满活力的主街，冲绳美食、工艺品和夜生活汇聚",
      "和平祈念公园——纪念冲绳战役中所有逝去生命的庄严之地",
      "传统琉球村落与三线音乐演奏",
    ],
    linkedTimelineIds: ["jp-tl-wwii", "jp-tl-postwar", "jp-tl-ryukyu"],
    linkedPeopleIds: [],
    linkedVocabIds: [],
    coordinates: { lat: 26.3344, lng: 127.8056 },
  },

  // ============================================================
  // jp-city-015 — Kanazawa (Cultural)
  // ============================================================
  {
    id: "jp-city-015",
    nationId: "japan",
    name_native: "金沢",
    name_reading: "Kanazawa",
    name_en: "Kanazawa",
    name_zh: "金泽",
    region_en: "Chubu",
    region_zh: "中部",
    type: "cultural",
    overview_en:
      "Kanazawa is Japan's best-preserved castle town and the closest thing to experiencing Edo-period Japan in a living city. Ruled for nearly 300 years by the wealthy Maeda clan — whose domain was the richest in Japan outside the shogun's own — Kanazawa poured its fortune into arts and culture rather than military expansion. The result is a city where traditional crafts, architecture, and performing arts survived in remarkable continuity. Kanazawa was spared from both wartime bombing and major earthquakes, so its historical districts remain genuinely old, not reconstructed.\n\nThe crown jewel is Kenroku-en, consistently ranked among Japan's three most beautiful gardens. Its name means Garden of Six Sublimities, referring to the six attributes of a perfect landscape: spaciousness, seclusion, artifice, antiquity, water features, and panoramic views. In every season, Kenroku-en offers a different masterpiece: cherry blossoms in spring, irises in summer, fiery maples in autumn, and the iconic yukitsuri — cone-shaped rope supports protecting tree branches from heavy snow — in winter.\n\nBut Kanazawa's magic extends well beyond the garden. The Higashi Chaya (Eastern Teahouse) district is one of Japan's last surviving geisha quarters, where ochaya teahouses with latticed facades line narrow streets. The Nagamachi samurai district preserves the earthen walls and residences of the warrior class. And Kanazawa's craft traditions — Kutani pottery, gold leaf production (the city produces 99% of Japan's gold leaf), Kaga yuzen silk dyeing, and lacquerware — are not museum exhibits but living practices you can watch and try yourself.",
    overview_zh:
      "金泽是日本保存最完好的城下町，也是在一座活生生的城市中最接近体验江户时代日本的地方。统治近300年的前田家族——其领地是除幕府将军直辖地外日本最富庶的——将巨额财富倾注于艺术文化而非军事扩张。其结果是一座传统工艺、建筑和表演艺术以惊人的连续性存续至今的城市。金泽既未遭受战时轰炸，也未经历大地震，因此其历史街区是真正的古迹，而非重建之物。\n\n最耀眼的明珠是兼六园，常年位列日本三大名园之首。其名意为「兼具六胜之园」，指完美景观的六种品质：宏大、幽邃、人力、苍古、水泉、眺望。四季之中，兼六园呈现不同的杰作：春之樱花、夏之菖蒲、秋之红枫，以及冬天标志性的雪吊——保护树枝免受大雪压断的锥形绳索支撑。\n\n但金泽的魔力远不止于庭园。东茶屋街是日本最后幸存的艺伎街区之一，格子门面的茶屋沿着狭窄街道排列。长町武家屋敷保存着武士阶层的土墙和宅邸。而金泽的工艺传统——九谷烧陶器、金箔制作（这座城市生产了日本99%的金箔）、加贺友禅丝绸染色、漆器——不是博物馆的展品，而是你可以亲眼观赏并亲手体验的活态技艺。",
    whyVisit_en:
      "Kanazawa is what Kyoto would be if it had fewer tourists and more authenticity. Its historical districts are genuine, not reconstructed. Its traditional crafts are practiced, not performed. And Kenroku-en is, quite simply, one of the most beautiful gardens on Earth. Add in a world-class contemporary art museum (the 21st Century Museum), extraordinary fresh seafood from the Sea of Japan at Omicho Market, and an atmosphere of refined elegance that pervades every street, and you have one of Japan's most rewarding destinations.",
    whyVisit_zh:
      "金泽就是游客更少、更原汁原味的京都。它的历史街区是真迹，而非重建。它的传统工艺是在践行，而非在表演。而兼六园，简而言之，是地球上最美的庭园之一。再加上世界级的当代艺术馆（21世纪美术馆）、近江町市场来自日本海的极致新鲜海产，以及弥漫在每条街道的优雅从容气质，金泽是日本最值得一去的目的地之一。",
    highlights_en: [
      "Kenroku-en — one of Japan's three great gardens, stunning in every season",
      "Higashi Chaya District — a beautifully preserved Edo-era geisha quarter with traditional teahouses",
      "Kanazawa Castle Park — the restored castle grounds of the powerful Maeda clan",
      "21st Century Museum of Contemporary Art — a striking circular glass building with world-class exhibitions",
      "Omicho Market — a 300-year-old market overflowing with the freshest Sea of Japan seafood",
      "Nagamachi Samurai District — preserved samurai residences with earthen walls and quiet gardens",
    ],
    highlights_zh: [
      "兼六园——日本三大名园之一，四季皆美",
      "东茶屋街——保存完美的江户时代艺伎街区与传统茶屋",
      "金泽城公园——势力强大的前田家族的修复城堡遗址",
      "21世纪美术馆——引人注目的圆形玻璃建筑，世界级展览",
      "近江町市场——拥有300年历史的市场，日本海最新鲜的海产琳琅满目",
      "长町武家屋敷——保存完好的武士宅邸，土墙和幽静庭院",
    ],
    linkedTimelineIds: ["jp-tl-edo", "jp-tl-sengoku"],
    linkedPeopleIds: [],
    linkedVocabIds: [],
    coordinates: { lat: 36.5613, lng: 136.6562 },
  },
];
