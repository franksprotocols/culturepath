import type { CulturalCard } from "@/lib/db";

export const japanCulturalCards: CulturalCard[] = [
  // ============================================================
  // HISTORY (8 cards)
  // ============================================================
  {
    id: "jp-hist-001",
    nationId: "japan",
    category: "history",
    title_en: "Ancient Japan: Jomon & Yayoi Periods",
    title_zh: "古代日本：绳文与弥生时代",
    content_en:
      "Japan's story begins with the Jomon period (14,000–300 BCE), one of the oldest pottery-making cultures in the world. The Jomon people were hunter-gatherers who crafted elaborate clay vessels with distinctive cord-marked patterns — the word 'Jomon' literally means 'cord-marked.' Around 300 BCE, the Yayoi people migrated from the Korean Peninsula and mainland Asia, bringing wet-rice agriculture, metalworking, and new social structures. This was a pivotal transformation: rice farming created surplus, which led to social hierarchy, warfare over resources, and the proto-states that would eventually unify into Japan. The tension between indigenous Jomon spirituality (animism, reverence for nature) and Yayoi agricultural civilization laid the earliest foundations for what would become Shinto belief and Japanese identity itself.",
    content_zh:
      "日本的故事始于绳文时代（公元前14000年至公元前300年），这是世界上最古老的制陶文化之一。绳文人是狩猎采集者，他们制作了精美的陶器，表面有独特的绳纹图案——「绳文」一词的字面意思就是「绳子的纹路」。约公元前300年，弥生人从朝鲜半岛和亚洲大陆迁入，带来了水稻种植技术、金属冶炼和新的社会结构。这是一次关键性的转变：稻作农业创造了剩余产品，由此产生了社会等级、资源争夺战争，以及最终统一为日本的原始国家。绳文人原始的万物有灵信仰（对自然的崇拜）与弥生人农耕文明之间的碰撞与融合，奠定了神道信仰和日本民族认同的最初基础。",
    relatedVocabulary: ["jp-cult-001"],
  },
  {
    id: "jp-hist-002",
    nationId: "japan",
    category: "history",
    title_en: "Nara & Heian: The Birth of Japanese High Culture",
    title_zh: "奈良与平安时代：日本高雅文化的诞生",
    content_en:
      "The Nara period (710–794) saw Japan's first permanent capital and massive cultural borrowing from Tang Dynasty China — including Buddhism, the Chinese writing system, Confucian governance, and city planning. But the Heian period (794–1185) that followed was when Japan truly found its own voice. The imperial court in Kyoto developed a world of extraordinary aesthetic refinement: aristocrats judged each other by their calligraphy, their ability to compose poetry on the spot, and even the layered color combinations of their silk robes (a practice called kasane no irome). Women of the court, often secluded behind screens, became the era's greatest literary voices. Murasaki Shikibu wrote The Tale of Genji, widely considered the world's first novel. Sei Shonagon penned The Pillow Book, a witty collection of observations and lists. The kana writing system — uniquely Japanese, freed from the complexity of Chinese characters — was developed largely by court women, giving birth to a distinctly Japanese literary tradition.",
    content_zh:
      "奈良时代（710-794）建立了日本第一个永久首都，大量吸收唐朝中国的文化——包括佛教、汉字书写体系、儒家治国理念和城市规划。然而，紧随其后的平安时代（794-1185）才是日本真正找到自身文化声音的时期。京都的皇室宫廷发展出了一个极其精致优雅的世界：贵族们以书法水平、即兴作诗的能力，甚至丝绸衣裳的层叠配色（称为「襲の色目」）来相互品评。宫廷女性常被隔帘遮挡，却成为了那个时代最伟大的文学创作者。紫式部写下了《源氏物语》，被广泛认为是世界上第一部长篇小说。清少纳言撰写了《枕草子》，一部机智风趣的随笔集。假名书写系统——独属于日本、摆脱了汉字复杂性的文字——主要由宫廷女性发展而来，催生了独特的日本文学传统。",
    relatedVocabulary: ["jp-cult-002", "jp-cult-003"],
  },
  {
    id: "jp-hist-003",
    nationId: "japan",
    category: "history",
    title_en: "The Samurai Era: Warriors Who Shaped a Nation",
    title_zh: "武士时代：塑造国家的战士",
    content_en:
      "For nearly 700 years (1185–1868), Japan was governed not by emperors but by warriors. The samurai class rose to power when Minamoto no Yoritomo established the Kamakura shogunate in 1185, creating a military government (bakufu) that sidelined the imperial court. Samurai followed bushido (武士道), the Way of the Warrior — a code blending Confucian loyalty, Zen Buddhist discipline, and Shinto reverence for nature. But bushido was more complex than popular culture suggests: it demanded not just martial prowess but literacy, artistic cultivation, and emotional restraint. A samurai was expected to compose a death poem (jisei) before battle. The practice of seppuku (ritual suicide) was not mere brutality but a statement that honor mattered more than life itself. Samurai culture profoundly shaped modern Japan: the emphasis on hierarchy (senpai-kohai relationships), group loyalty over individual desire, and the relentless pursuit of mastery in any discipline all trace their roots to the warrior centuries.",
    content_zh:
      "近700年间（1185-1868），统治日本的不是天皇，而是武士。源赖朝于1185年建立镰仓幕府，创建了架空朝廷的军事政府（幕府），武士阶层由此崛起。武士遵循武士道（武士道）——融合了儒家忠义、禅宗修行和神道自然崇拜的行为准则。但武士道远比流行文化描绘的更为复杂：它不仅要求武艺高强，还要求识文断字、艺术修养和情感克制。武士在战前须吟诵辞世诗（辞世）。切腹（仪式性自杀）并非单纯的残忍行为，而是「荣誉高于生命」的宣言。武士文化深刻塑造了现代日本：对等级关系的重视（前辈与后辈的关系）、集体忠诚优先于个人欲望、以及对任何领域精益求精的追求，都可以追溯到那些武士统治的世纪。",
    relatedVocabulary: ["jp-cult-001", "jp-cult-004"],
  },
  {
    id: "jp-hist-004",
    nationId: "japan",
    category: "history",
    title_en: "Sengoku: The Warring States & Japan's Unification",
    title_zh: "战国时代：乱世与日本的统一",
    content_en:
      "The Sengoku period (1467–1615) was Japan's most chaotic and dramatic era — a century and a half of civil war where hundreds of feudal lords (daimyo) fought for supremacy. Three extraordinary men ultimately unified the nation, and the Japanese have a famous saying to describe their contrasting styles: 'If the cuckoo does not sing — Nobunaga says kill it, Hideyoshi says make it want to sing, Ieyasu says wait for it to sing.' Oda Nobunaga was the ruthless innovator who first embraced firearms and crushed the powerful Buddhist warrior-monks. Toyotomi Hideyoshi, a peasant who rose to supreme power, completed the military unification. Tokugawa Ieyasu, the patient strategist, won the decisive Battle of Sekigahara in 1600 and established the Tokugawa shogunate that would bring 250 years of peace. This era also introduced European contact — Portuguese traders brought guns, Christianity, and tempura (from the Portuguese 'tempero').",
    content_zh:
      "战国时代（1467-1615）是日本最混乱、最跌宕起伏的年代——长达一个半世纪的内战中，数百位封建领主（大名）争夺霸权。三位非凡人物最终统一了国家，日本人用一句名言形容他们截然不同的风格：「杜鹃不啼——信长曰杀之，秀吉曰诱之使啼，家康曰待其自啼。」织田信长是冷酷的革新者，率先使用火枪并击溃了强大的佛教僧兵势力。丰臣秀吉出身农民却登上权力巅峰，完成了军事统一。德川家康则是耐心的战略家，于1600年在关原之战中取得决定性胜利，建立了带来250年和平的德川幕府。这个时代也迎来了与欧洲的接触——葡萄牙商人带来了火枪、基督教，还有天妇罗（源自葡萄牙语「tempero」，意为调味料）。",
    relatedVocabulary: ["jp-cult-004", "jp-cult-005"],
  },
  {
    id: "jp-hist-005",
    nationId: "japan",
    category: "history",
    title_en: "Edo Period: 250 Years of Peace and Flourishing Culture",
    title_zh: "江户时代：250年的和平与文化繁荣",
    content_en:
      "The Edo period (1603–1868) is one of history's most remarkable experiments: an entire nation voluntarily sealed itself off from the world for over two centuries. Under the sakoku (鎖国, 'locked country') policy, leaving Japan was punishable by death, and foreign contact was limited to a tiny Dutch trading post in Nagasaki. Yet this isolation produced an extraordinary cultural flowering. Without foreign wars or major domestic conflict, energy poured into art and commerce. The merchant class (chonin) — technically the lowest social rank — became the wealthiest and most culturally dynamic group. They patronized kabuki theater, consumed woodblock prints (ukiyo-e, 'pictures of the floating world') depicting beautiful courtesans and actors, and developed a vibrant urban pleasure culture. Edo (modern Tokyo) grew to over one million people, becoming one of the world's largest cities. The haiku master Matsuo Basho wandered the countryside composing poetry. The elaborate social rituals, seasonal awareness, and aesthetic sensibilities that define Japanese culture today were largely crystallized during these peaceful centuries.",
    content_zh:
      "江户时代（1603-1868）是历史上最引人注目的社会实验之一：一个国家自愿将自己与世界隔绝长达两个多世纪。在锁国（鎖国，意为「封闭的国家」）政策下，离开日本者将被处以死刑，对外交往仅限于长崎的一个小小的荷兰商馆。然而，这种封闭却催生了非凡的文化繁荣。没有对外战争，也没有大规模国内冲突，全社会的精力都倾注于艺术和商业。商人阶层（町人）——名义上社会地位最低的阶层——却成为了最富有、文化上最活跃的群体。他们资助歌舞伎戏剧，消费浮世绘（「浮世之画」）——描绘美丽的花魁和名伶的木版画，发展出充满活力的都市享乐文化。江户（今东京）人口超过百万，成为当时世界最大的城市之一。俳句大师松尾芭蕉漫游乡间吟诗作对。定义当今日本文化的那些精致社交礼仪、季节感知和审美意趣，大都在这和平的几个世纪中形成定型。",
    relatedVocabulary: ["jp-cult-005", "jp-cult-006"],
  },
  {
    id: "jp-hist-006",
    nationId: "japan",
    category: "history",
    title_en: "Meiji Restoration: From Feudalism to World Power in 50 Years",
    title_zh: "明治维新：五十年间从封建社会到世界强国",
    content_en:
      "In 1853, American Commodore Matthew Perry sailed his 'Black Ships' into Edo Bay, forcibly ending Japan's 250-year isolation. The shock was existential: Japan saw China, once the center of Asian civilization, being carved up by Western powers, and vowed not to suffer the same fate. In 1868, a group of young samurai from southwestern domains overthrew the Tokugawa shogunate and restored power to Emperor Meiji — though real power lay with these reformers. What followed was perhaps the most rapid modernization in human history. The slogan was 'fukoku kyohei' (富国強兵, 'rich country, strong military') and 'wakon yosai' (和魂洋才, 'Japanese spirit, Western technology'). Samurai cut off their topknots. A constitution modeled on Prussia's was adopted. Railways, telegraph lines, and modern factories appeared almost overnight. A conscript army replaced the samurai class. By 1905, Japan shocked the world by defeating Russia — the first modern Asian victory over a European power. The Meiji Restoration's central paradox remains relevant today: how to modernize without losing cultural identity.",
    content_zh:
      "1853年，美国海军准将马修·佩里率「黑船」驶入江户湾，强行终结了日本250年的锁国状态。这一冲击是关乎存亡的：日本目睹了曾经的亚洲文明中心中国正被西方列强瓜分，誓言绝不重蹈覆辙。1868年，一群来自西南藩属的年轻武士推翻了德川幕府，将权力归还明治天皇——虽然实权掌握在这些改革者手中。随后发生的也许是人类历史上最迅速的现代化进程。口号是「富国强兵」和「和魂洋才」（日本精神，西方技术）。武士剪去了发髻，仿效普鲁士制定宪法，铁路、电报线和现代工厂几乎一夜之间拔地而起，征兵制军队取代了武士阶层。到1905年，日本击败俄国震惊世界——这是近代史上亚洲国家首次战胜欧洲强国。明治维新的核心悖论至今仍有现实意义：如何在现代化的同时不丧失文化认同。",
    relatedVocabulary: ["jp-cult-006", "jp-cult-007"],
  },
  {
    id: "jp-hist-007",
    nationId: "japan",
    category: "history",
    title_en: "Post-War Miracle: Rising from the Ashes",
    title_zh: "战后奇迹：从废墟中崛起",
    content_en:
      "In August 1945, Japan lay in ruins. Tokyo had been firebombed flat, Hiroshima and Nagasaki had been struck by atomic weapons, and the nation faced starvation. Emperor Hirohito's surrender broadcast — the first time ordinary Japanese heard the imperial voice — marked the end of an era. Under American occupation (1945–1952), Japan adopted a pacifist constitution (Article 9 renounces war), implemented land reform, and dissolved the zaibatsu conglomerates. What followed astonished the world. By channeling the same discipline and group cohesion that had fueled its military into manufacturing, Japan achieved average annual GDP growth of nearly 10% from 1950 to 1973. Companies like Toyota perfected lean manufacturing and the 'just-in-time' system. Sony's transistor radio, Honda's motorcycles, and Nikon's cameras conquered global markets. By 1968, Japan was the world's second-largest economy. The 1964 Tokyo Olympics symbolized Japan's return to the international community — the Shinkansen bullet train, launched just before the games, became an icon of Japanese technological ambition.",
    content_zh:
      "1945年8月，日本满目疮痍。东京被燃烧弹夷为平地，广岛和长崎遭受原子弹轰炸，整个国家面临饥荒。裕仁天皇的投降广播——普通日本人第一次听到天皇的声音——标志着一个时代的终结。在美国占领期间（1945-1952），日本通过了和平宪法（第九条放弃战争权利），实施土地改革，解散了财阀集团。接下来发生的一切令世界惊叹。日本将曾经驱动军事力量的同一种纪律性和集体凝聚力转化到了制造业中，1950年至1973年间实现了年均近10%的GDP增长。丰田完善了精益生产和「准时制」系统。索尼的晶体管收音机、本田的摩托车、尼康的相机征服了全球市场。到1968年，日本已成为世界第二大经济体。1964年东京奥运会象征着日本重返国际社会——在奥运会前夕开通的新干线子弹头列车，成为日本科技雄心的标志性象征。",
    relatedVocabulary: ["jp-cult-007", "jp-cult-008"],
  },
  {
    id: "jp-hist-008",
    nationId: "japan",
    category: "history",
    title_en: "Modern Japan: Lost Decades to Pop Culture Superpower",
    title_zh: "现代日本：从失落的年代到流行文化超级大国",
    content_en:
      "In 1989, Japan's economic bubble burst spectacularly. The Nikkei stock index crashed from its peak of 38,957, and real estate values collapsed — property in Tokyo's Ginza district had been valued at over $1 million per square meter. What followed was the 'Lost Decade' (which became two, then three): deflation, stagnant wages, and a growing sense of national malaise. Japan's population began shrinking, and young people, facing precarious employment, retreated from traditional life paths — giving rise to phenomena like 'hikikomori' (social recluses) and 'herbivore men' who rejected competitive masculinity. Yet simultaneously, Japan became perhaps the world's most influential cultural exporter. Anime and manga became global phenomena; Studio Ghibli's films won Academy Awards; Japanese cuisine (sushi, ramen, wagyu) achieved worldwide prestige; J-pop groups and Nintendo's games shaped global entertainment. Japan discovered that 'soft power' — the ability to attract through culture rather than coerce through strength — might be its greatest asset in the 21st century.",
    content_zh:
      "1989年，日本经济泡沫以惊人的方式破裂。日经股指从38957点的峰值暴跌，房地产价值崩溃——东京银座地区的地价曾高达每平方米超过100万美元。随之而来的是「失落的十年」（后来变成了二十年、三十年）：通货紧缩、工资停滞，以及日益蔓延的国民倦怠感。日本人口开始减少，年轻人面对不稳定的就业环境，纷纷退出传统人生轨道——由此出现了「蛰居族」（社会隐居者）和拒绝竞争性男性气质的「草食男」等现象。然而与此同时，日本也许成为了世界上最具影响力的文化输出国。动漫和漫画成为全球现象；吉卜力工作室的电影荣获奥斯卡；日本料理（寿司、拉面、和牛）获得了全球性声望；J-pop组合和任天堂的游戏塑造了全球娱乐文化。日本发现，「软实力」——通过文化吸引力而非武力威慑来施加影响的能力——或许是其在21世纪最宝贵的财富。",
    relatedVocabulary: ["jp-cult-008", "jp-cult-009"],
  },

  // ============================================================
  // DAILY LIFE (8 cards)
  // ============================================================
  {
    id: "jp-daily-001",
    nationId: "japan",
    category: "daily_life",
    title_en: "Bowing: The Unspoken Language of Respect",
    title_zh: "鞠躬：无声的敬意语言",
    content_en:
      "Bowing (お辞儀, ojigi) is far more than a greeting in Japan — it is a complete nonverbal communication system encoding social rank, emotional state, and relationship dynamics in a single gesture. There are precise gradations: the eshaku (会釈, 15°) is a casual acknowledgment for passing acquaintances; the keirei (敬礼, 30°) is the standard respectful bow for business and formal situations; the saikeirei (最敬礼, 45°) conveys deep gratitude, sincere apology, or reverence before sacred objects. Duration matters as much as depth — holding a bow longer signals greater respect. In business, the person of lower status should bow first and deeper. Two Japanese people meeting will often engage in a subtle 'bow competition,' each trying to show more deference. Even in phone conversations, Japanese people unconsciously bow — a phenomenon so common it has become a gentle cultural joke. Department store staff bow to the elevator as it closes. Bullet train cleaning crews bow to the empty carriage before entering. The act of making yourself physically lower before another person embodies a cultural philosophy where humility is strength, not weakness.",
    content_zh:
      "鞠躬（お辞儀）在日本远不只是一种问候方式——它是一套完整的非语言交流系统，通过一个动作就能传达社会地位、情感状态和人际关系。角度有精确的区分：会釈（15度）是对点头之交的随意致意；敬礼（30度）是商务和正式场合的标准敬礼；最敬礼（45度）表达深切的感激、诚恳的道歉或对神圣事物的崇敬。持续时间与深度同样重要——鞠躬保持得越久，表示越尊敬。在商务场合，地位较低的人应先鞠躬且弯腰更深。两个日本人见面时常会进行微妙的「鞠躬竞赛」，各自努力表现出更多的谦恭。即使在打电话时，日本人也会不自觉地鞠躬——这种现象如此常见，已成为一个温和的文化笑谈。百货商店的店员会对关闭的电梯鞠躬。新干线的清洁人员在进入车厢前会向空车厢鞠躬。让自己在他人面前降低身姿，体现了一种文化哲学：谦逊是力量，而非软弱。",
    relatedVocabulary: ["jp-cult-011", "jp-cult-012"],
  },
  {
    id: "jp-daily-002",
    nationId: "japan",
    category: "daily_life",
    title_en: "Removing Shoes: The Sacred Boundary of Inside and Outside",
    title_zh: "脱鞋：内与外的神圣界线",
    content_en:
      "The genkan (玄関), the entryway where shoes are removed, is one of the most symbolically important spaces in Japanese architecture. It represents the boundary between the outside world (soto, 外) — which is considered unclean — and the inside world (uchi, 内) — the realm of safety, intimacy, and purity. This inside/outside distinction (uchi-soto) permeates all of Japanese culture, from language (different speech levels for insiders versus outsiders) to social behavior. In the genkan, shoes must be removed and placed neatly facing the door, ready for departure. Indoor slippers (uwabaki) are provided for wooden or tiled floors, but these must be removed before stepping onto tatami mats — tatami is so culturally sacred that even slippers are considered contaminating. Separate toilet slippers exist for bathrooms, and forgetting to switch back is a classic embarrassment for foreigners. This practice has practical roots (keeping floors clean in a culture where people sit and sleep on the floor) but its deeper meaning reflects Shinto purification concepts: the act of removing shoes is a small ritual of transition, leaving the chaos of the outside world at the threshold.",
    content_zh:
      "玄関（玄関）——脱鞋的入口处——是日本建筑中最具象征意义的空间之一。它代表着外部世界（外，soto）——被视为不洁的——与内部世界（内，uchi）——安全、亲密和纯净之所——之间的界线。这种内外之分（内外意识）渗透在日本文化的方方面面，从语言（对「自己人」和「外人」使用不同的敬语层级）到社交行为。在玄関处，鞋子必须脱下并整齐地朝向门口摆放，以便出门时穿用。木质或瓷砖地板上会提供室内拖鞋（上履き），但踏上榻榻米前必须脱掉拖鞋——榻榻米在文化中如此神圣，连拖鞋都被视为污染。卫生间有专用的厕所拖鞋，忘记换回来是外国人常犯的经典失误。这种习惯有实用的根源（在人们席地而坐、睡在地板上的文化中保持地面清洁），但其更深层的含义反映了神道教的净化观念：脱鞋是一种小小的过渡仪式，将外部世界的纷扰留在门槛之外。",
    relatedVocabulary: ["jp-cult-012", "jp-cult-013"],
  },
  {
    id: "jp-daily-003",
    nationId: "japan",
    category: "daily_life",
    title_en: "Konbini: The Beating Heart of Modern Japan",
    title_zh: "便利店：现代日本的心脏",
    content_en:
      "Japan's convenience stores (konbini, コンビニ) — 7-Eleven, Lawson, FamilyMart — are perhaps the single best window into how Japanese society actually functions day-to-day. With over 56,000 locations serving 125 million people (roughly one per 2,200 residents), konbini are open 24/7/365 and function as a kind of privatized public infrastructure. You can pay utility bills, taxes, and insurance premiums. You can withdraw cash, buy concert tickets, send packages, print documents, and pick up online orders. The food quality is astonishing by international standards — onigiri (rice balls) are wrapped in ingenious packaging that keeps the nori seaweed crisp until opened; fresh bento boxes are made multiple times daily and discarded when even slightly past prime; seasonal limited-edition items create loyal followings. Seven-Eleven Japan operates its own supply chain with factory-to-shelf times as short as 8 hours. For many single Japanese workers, the konbini is effectively their kitchen, their bank, their post office, and their social anchor. The system works because of a cultural infrastructure of trust and conscientiousness — staff members are meticulously trained, and theft is remarkably rare.",
    content_zh:
      "日本的便利店（konbini，コンビニ）——7-Eleven、罗森、全家——也许是了解日本社会日常运转方式的最佳窗口。超过5.6万家门店服务着1.25亿人口（大约每2200人一家），便利店全年无休、24小时营业，如同一种私营化的公共基础设施。你可以缴纳水电费、税款和保险费，可以取现金、买演唱会门票、寄快递、打印文件、领取网购包裹。食品品质以国际标准衡量令人惊叹——饭团（おにぎり）采用巧妙的包装设计，让海苔在打开前始终保持酥脆；新鲜便当每天制作数次，稍过最佳赏味期就立即撤架；季节限定商品培养了大量忠实追随者。日本7-Eleven运营着自己的供应链，从工厂到货架最短只需8小时。对许多独居的日本上班族来说，便利店实际上就是他们的厨房、银行、邮局和社交据点。这个系统之所以运转良好，依赖于信任和尽职的文化基础——店员经过一丝不苟的培训，而偷窃行为极为罕见。",
    relatedVocabulary: ["jp-cult-013", "jp-cult-014"],
  },
  {
    id: "jp-daily-004",
    nationId: "japan",
    category: "daily_life",
    title_en: "Onsen: Where Japan Gets Naked Together",
    title_zh: "温泉：日本人一起坦诚相见的地方",
    content_en:
      "Japan sits on the Pacific Ring of Fire, giving it over 27,000 natural hot springs (onsen, 温泉). Onsen bathing is not merely hygiene — it is therapy, social ritual, and spiritual practice rolled into one. The rules are strict and non-negotiable: you must wash thoroughly at the shower stations before entering the communal bath. Soap, shampoo, and all traces must be rinsed completely — contaminating the shared water is unthinkable. Bathing is done completely nude; swimsuits are forbidden in traditional onsen. Tattoos, historically associated with yakuza (organized crime), were long banned, though this is slowly changing for foreign tourists. The Japanese concept of 'hadaka no tsukiai' (裸の付き合い, 'naked communion') holds that bathing together strips away social barriers — literally and figuratively. Business deals are sealed, family bonds are strengthened, and communities are built in these steaming waters. Different spring minerals are believed to cure different ailments: sulfur for skin conditions, iron for anemia, radon for pain relief. Many Japanese take regular onsen trips, especially in autumn when the mountains glow with red and gold foliage — a practice called 'momiji-gari onsen.'",
    content_zh:
      "日本位于太平洋火环带上，拥有超过27000处天然温泉（温泉，おんせん）。温泉沐浴不仅仅是清洁——它集疗养、社交仪式和精神修行于一体。规矩严格且没有商量余地：进入公共浴池前必须在淋浴处彻底洗净身体。肥皂、洗发水和所有残留物必须冲洗干净——污染共享的泉水是不可想象的。沐浴时必须完全裸体；传统温泉禁止穿泳装。纹身因历史上与黑道（有组织犯罪）的关联而长期被禁止入浴，尽管这一规定正逐渐对外国游客放宽。日本有「裸の付き合い」（裸体交流）的概念，认为共浴能消除社会隔阂——无论是字面意义还是比喻意义上的。商业交易在此达成，家庭纽带在此加深，社区关系在此建立。不同的泉水矿物质被认为能治愈不同的疾病：硫磺治皮肤病，铁质治贫血，氡气缓解疼痛。许多日本人定期泡温泉旅行，尤其是在秋季山间红叶金黄时——这种活动被称为「红叶狩り温泉」。",
    relatedVocabulary: ["jp-cult-014", "jp-cult-015"],
  },
  {
    id: "jp-daily-005",
    nationId: "japan",
    category: "daily_life",
    title_en: "Train Culture: The Veins of Japanese Society",
    title_zh: "电车文化：日本社会的血脉",
    content_en:
      "Japan's rail system is not just transportation — it is a mirror of Japanese values made physical. The Shinkansen (bullet train) averages less than one minute of delay per year across its entire network. Station staff bow to departing trains. Platform lines are painted so passengers queue in exact positions where doors will open. During Tokyo's legendary rush hour, white-gloved 'pushers' (oshiya) compress passengers into trains running at 200% capacity. Yet even in this sardine-can crush, a remarkable social code holds: talking on phones is forbidden (signs everywhere say 'manner mode'), eating is frowned upon, and giving your seat to the elderly is expected. 'Women-only' cars (josei senyou sharyo), introduced to combat groping, run during peak hours. Perhaps most endearing is inemuri — the practice of sleeping on trains, which is not seen as lazy but as evidence of working hard. Japanese commuters develop an almost supernatural ability to wake up exactly at their stop. The station melody (hassha merodi) — unique jingles played as trains depart — has become so beloved that entire albums of these tunes are sold commercially.",
    content_zh:
      "日本的铁路系统不仅是交通工具——它是日本价值观的物化体现。新干线（子弹头列车）全网年均延误不到一分钟。站务人员向出发的列车鞠躬。站台上画有精确的排队线，标示车门将要打开的位置。在东京传说级的早高峰，戴白手套的「推手」（押し屋）将乘客塞进载客率达200%的列车。然而即便在这种沙丁鱼罐头般的拥挤中，一套出色的社会规范仍然有效运转：禁止用手机通话（到处都有「请调至静音模式」的标识），吃东西会被皱眉，让座给老人是应尽之义。为打击性骚扰而设立的「女性专用车厢」在高峰时段运行。最令人会心一笑的也许是「居眠り」——在电车上打盹的习惯，这不被视为懒惰，而被看作努力工作的证明。日本通勤族练就了一种近乎超自然的能力，能恰好在自己的站点醒来。列车出发时播放的站台旋律（発車メロディ）——每个车站独特的小曲——深受喜爱，甚至有这些曲调的专辑在市面上销售。",
    relatedVocabulary: ["jp-cult-015", "jp-cult-016"],
  },
  {
    id: "jp-daily-006",
    nationId: "japan",
    category: "daily_life",
    title_en: "Matsuri: Festivals That Forge Community",
    title_zh: "祭り：凝聚社区的节日",
    content_en:
      "Japan holds an estimated 300,000 matsuri (festivals) every year — nearly 800 per day. These events are not quaint folklore; they are the active mechanism by which Japanese communities maintain social cohesion. Most matsuri center on the local Shinto shrine and involve carrying a mikoshi (portable shrine) through the neighborhood, a physically demanding act that requires dozens of people working in coordinated rhythm. The effort is the point — shared struggle creates shared bonds. Festivals follow Japan's intense seasonal awareness: spring brings hanami (cherry blossom viewing), summer brings fireworks festivals (hanabi taikai) where millions gather along riverbanks in yukata (casual kimono), autumn brings harvest celebrations, and winter brings illumination festivals. The Gion Matsuri in Kyoto, dating back over 1,100 years, features towering floats and preserves traditions unchanged for centuries. Awa Odori in Tokushima turns the entire city into a mass dance. During Obon (the festival of the dead), millions return to ancestral homes to honor departed spirits, creating one of the world's largest annual migrations. Through matsuri, Japan continuously renews its connection to place, season, community, and the divine.",
    content_zh:
      "日本每年举办约30万场祭り（节日）——几乎每天近800场。这些活动并非古旧的民俗表演，而是日本社区维持社会凝聚力的活跃机制。大多数祭り以当地神社为中心，核心活动是抬着神轿（可移动的神龛）在街区巡游，这是一项需要数十人协调配合的体力劳动。这份辛苦正是意义所在——共同的付出创造共同的纽带。节日遵循日本强烈的季节意识：春天有花见（赏樱），夏天有花火大会（烟火节），数百万人身穿浴衣（休闲和服）聚集在河边，秋天有丰收庆典，冬天有灯饰节。京都的祇园祭已有1100多年历史，以高耸的山鉾花车著称，保存着数百年未变的传统。德岛的阿波舞将整座城市变成一场集体舞蹈。盂兰盆节（祭奠亡灵的节日）期间，数百万人返回故乡祭祖，形成了世界上最大规模的年度人口迁移之一。通过祭り，日本不断更新着与土地、季节、社区和神灵之间的联系。",
    relatedVocabulary: ["jp-cult-016", "jp-cult-017"],
  },
  {
    id: "jp-daily-007",
    nationId: "japan",
    category: "daily_life",
    title_en: "Gift-Giving: The Art of Omiyage and Seasonal Exchange",
    title_zh: "赠礼文化：伴手礼与季节性赠答的艺术",
    content_en:
      "Gift-giving in Japan is not a casual act of generosity — it is an intricate social obligation system governed by unwritten rules. Omiyage (お土産) are souvenirs you must bring back for colleagues, friends, and family after any trip; failing to do so is a social transgression. These gifts are typically local food specialties, beautifully packaged and individually wrapped so they can be distributed easily. The packaging (tsutsumi) is considered as important as the contents — the Japanese wrapping cloth (furoshiki) is an art form in itself. Twice a year, Japan engages in formalized gift exchanges: ochugen (お中元) in summer and oseibo (お歳暮) in winter, where people send gifts to those who have helped them — bosses, teachers, doctors, business contacts. Department stores set up massive gift-giving floors during these seasons. There are rigid etiquette rules: never give gifts in sets of four (the word for four, 'shi,' sounds like death); always present gifts with both hands; the receiver should initially decline before accepting. When receiving a gift, you typically return one of roughly half the value (okaeshi, お返し) — creating an endless cycle of reciprocal obligation that reinforces social bonds.",
    content_zh:
      "日本的赠礼并非随意的慷慨之举——而是一套由不成文规则支配的精密社交义务体系。伴手礼（お土産）是任何旅行归来后必须带给同事、朋友和家人的礼物；忘记带是一种社交失礼。这些礼物通常是当地特色食品，包装精美且逐份独立包装，以便分发。包装（包み）被认为与内容物同等重要——日本的包袱布（風呂敷）本身就是一门艺术。每年两次，日本进行制度化的礼物交换：夏季的中元（お中元）和冬季的岁暮（お歳暮），人们向帮助过自己的人——上司、老师、医生、商业伙伴——赠送礼品。百货商店在这些季节会开设大型礼品专区。赠礼有严格的规矩：不要送四件套的礼物（「四」的发音「し」与「死」相同）；必须双手呈递礼物；收礼者应先婉拒再接受。收到礼物后通常要回赠大约一半价值的回礼（お返し）——由此形成一个持续的互惠义务循环，不断强化着社会纽带。",
    relatedVocabulary: ["jp-cult-017", "jp-cult-018"],
  },
  {
    id: "jp-daily-008",
    nationId: "japan",
    category: "daily_life",
    title_en: "Seasonal Awareness: Living in Harmony with Nature's Rhythms",
    title_zh: "季节感：与自然节律和谐共处",
    content_en:
      "No culture on Earth is more attuned to seasonal change than Japan. This awareness (kisetsukan, 季節感) shapes virtually every aspect of daily life. In spring, the entire nation tracks the 'cherry blossom front' (sakura zensen) as it moves north, and millions gather for hanami (花見, flower viewing) parties under the blossoms — an act that has been practiced for over 1,000 years. The fleeting nature of cherry blossoms (they bloom for only about two weeks) embodies mono no aware, the bittersweet awareness of impermanence. In autumn, momijigari (紅葉狩り, 'maple leaf hunting') draws crowds to temples and mountains ablaze with red and gold. But seasonal awareness goes far beyond sightseeing. Japanese cuisine changes completely with the seasons — 'shun' (旬) means the peak season for an ingredient, when its flavor is finest and it should be eaten. Restaurants rotate menus constantly; eating watermelon in winter would seem bizarre. Department stores change their displays, traditional sweets (wagashi) change shape and color to reflect the current season, and even business letters open with seasonal greetings. This rhythm creates a profound sense of living in partnership with nature rather than against it.",
    content_zh:
      "世界上没有哪种文化比日本更敏锐地感知季节变换。这种季节意识（季節感，きせつかん）几乎塑造了日常生活的方方面面。春天，全国追踪「樱花前线」（桜前線）自南向北的推进，数百万人聚集在樱花树下举行花見（赏花）聚会——这一传统已延续了一千多年。樱花的短暂（花期仅约两周）体现了「物の哀れ」，对无常的感伤之美。秋天，「红叶狩り」（紅葉狩り，「狩猎红叶」）吸引人群涌向被红色和金色染遍的寺庙和山间。但季节意识远不止于观赏风景。日本料理随季节彻底更换——「旬」（旬）指的是食材的最佳时令，即风味最佳、最应享用的时节。餐厅不断更换菜单；在冬天吃西瓜会显得很奇怪。百货商店更换陈列，传统点心（和菓子）改变形状和颜色以映衬当下的季节，甚至商业信函都以季节性问候语开头。这种节奏创造了一种深刻的感受：与自然协同而非对抗地生活。",
    relatedVocabulary: ["jp-cult-018", "jp-cult-019"],
  },

  // ============================================================
  // PHILOSOPHY (5 cards)
  // ============================================================
  {
    id: "jp-phil-001",
    nationId: "japan",
    category: "philosophy",
    title_en: "Wabi-Sabi: The Beauty of Imperfection and Impermanence",
    title_zh: "侘寂：不完美与无常之美",
    content_en:
      "Wabi-sabi (侘寂) is Japan's most distinctive aesthetic philosophy, and perhaps its deepest contribution to world thought. The concept has two roots: 'wabi' originally meant the loneliness of living in nature, far from society, and evolved to mean rustic simplicity and the beauty of understated elegance; 'sabi' means the beauty that comes with the passage of time — patina, wear, the quiet dignity of aging. Together, they form a worldview diametrically opposed to Western ideals of perfection, permanence, and completeness. A cracked tea bowl repaired with gold lacquer (kintsugi, 金継ぎ) is more beautiful than an unbroken one — because its history is visible, its imperfection honest. A moss-covered stone lantern in a temple garden is more moving than a polished marble statue — because it speaks of time passing. Wabi-sabi emerged from the tea ceremony tradition, particularly through the tea master Sen no Rikyu (1522–1591), who rejected ornate Chinese tea sets in favor of rough, asymmetrical Japanese pottery. His radical idea: true beauty is found not in perfection but in the authentic, the simple, and the transient. Three truths anchor wabi-sabi: nothing lasts, nothing is finished, nothing is perfect.",
    content_zh:
      "侘寂（侘寂）是日本最独特的美学哲学，也许是日本对世界思想最深刻的贡献。这个概念有两个词根：「侘」（わび）最初指远离尘世、独居自然中的孤寂，后来演变为朴素的优雅和含蓄之美；「寂」（さび）指随时间流逝而生的美——铜绿、磨损、老去的静穆尊严。两者结合形成了一种与西方对完美、永恒、完整之追求截然相反的世界观。用金漆修复裂缝的茶碗（金継ぎ）比完好无损的更美——因为它的历史清晰可见，它的不完美坦诚无伪。寺庙庭院中长满苔藓的石灯笼比抛光的大理石雕像更动人——因为它诉说着时光流转。侘寂源于茶道传统，尤其是通过茶圣千利休（1522-1591）的推动，他摒弃华丽的中国茶具，转而青睐粗犷不对称的日本陶器。他的革命性理念是：真正的美不在于完美，而在于真实、简朴和无常。三条真理支撑着侘寂：万物不永恒，万物不完成，万物不完美。",
    relatedVocabulary: ["jp-cult-021"],
  },
  {
    id: "jp-phil-002",
    nationId: "japan",
    category: "philosophy",
    title_en: "Ikigai: The Japanese Secret to a Meaningful Life",
    title_zh: "生き甲斐：日本人关于有意义人生的秘密",
    content_en:
      "Ikigai (生き甲斐) translates roughly as 'a reason for being' — the thing that gets you out of bed in the morning with purpose and joy. In the West, ikigai has been popularized as the intersection of four circles: what you love, what you are good at, what the world needs, and what you can be paid for. But in Japan, the concept is both simpler and more profound than this career-optimization framework suggests. A 2010 survey of 2,000 Japanese men and women found that only 31% identified work as their ikigai. For most Japanese, ikigai is found in small daily pleasures and relationships: tending a garden, the morning cup of tea, a grandchild's laughter, contributing to one's community. In the village of Ogimi in Okinawa — sometimes called 'the village of longevity' where residents routinely live past 100 — researchers found that every elder could articulate their ikigai, and it was almost never about career achievement. One 102-year-old woman said her ikigai was holding her great-great-granddaughter. A 97-year-old karate master said it was practicing his art. The lesson: ikigai is not about finding your passion or optimizing your career — it is about finding purpose in being alive, however modest that purpose may be.",
    content_zh:
      "生き甲斐大致翻译为「生存的意义」——每天早晨让你带着目标和喜悦起床的那件事。在西方，生き甲斐被普及为四个圆的交集：你热爱的事、你擅长的事、世界需要的事、你能以此谋生的事。但在日本，这个概念比这套职业优化框架所暗示的更简单也更深刻。2010年一项对2000名日本男女的调查发现，仅有31%的人将工作视为自己的生き甲斐。对大多数日本人而言，生き甲斐存在于日常的小小愉悦和人际关系中：打理花园、早晨的一杯茶、孙辈的笑声、对社区的贡献。在冲绳的大宜味村——有时被称为「长寿之村」，那里的居民常活过100岁——研究者发现每位老人都能清晰说出自己的生き甲斐，而这几乎从不关乎职业成就。一位102岁的老太太说她的生き甲斐是抱着她的玄孙女。一位97岁的空手道大师说是练习他的技艺。这个启示是：生き甲斐不是关于找到你的激情或优化职业规划——而是关于在活着这件事本身中找到目标，无论这个目标多么平凡。",
    relatedVocabulary: ["jp-cult-021", "jp-cult-022"],
  },
  {
    id: "jp-phil-003",
    nationId: "japan",
    category: "philosophy",
    title_en: "Mono no Aware: The Bittersweet Beauty of Passing Things",
    title_zh: "物の哀れ：万物消逝的感伤之美",
    content_en:
      "Mono no aware (物の哀れ, literally 'the pathos of things') is a central concept in Japanese aesthetics — a deep, bittersweet sensitivity to the transience of all things. It is not sadness, exactly, but a gentle ache of awareness that beauty is beautiful precisely because it cannot last. The classic example is cherry blossoms: the Japanese do not love sakura despite their brief bloom, but because of it. If cherry blossoms lasted forever, they would be just another tree. It is their fleeting nature — blooming gloriously for only ten days before scattering in the wind — that makes hanami (flower viewing) such an emotionally resonant tradition. The concept was articulated by the Edo-period scholar Motoori Norinaga (1730–1801), who identified mono no aware as the emotional heart of Japanese literature, particularly The Tale of Genji, where the beauty of court life is always shadowed by awareness of its impermanence. Mono no aware is not pessimism — it is a heightened appreciation of the present moment, an invitation to feel more deeply because nothing will remain. You can see it in the Japanese love of autumn leaves, sunset, aging temples, and farewell ceremonies. It teaches that to be fully human is to be moved by the passing of things.",
    content_zh:
      "物の哀れ（もののあわれ，字面意思是「万物的感伤」）是日本美学中的核心概念——对万物无常的一种深沉而苦甜参半的敏感。它不完全是悲伤，而是一种轻柔的心痛般的觉知：美之所以为美，恰恰因为它无法永存。最经典的例子是樱花：日本人并非不顾樱花花期短暂而喜爱它，而是正因为花期短暂才深爱它。如果樱花永不凋谢，它不过是另一棵普通的树。正是它的转瞬即逝——绚烂绽放仅十日便随风飘散——使花見成为如此触动人心的传统。这一概念由江户时代学者本居宣长（1730-1801）明确阐述，他认为物の哀れ是日本文学的情感内核，尤其是《源氏物语》——宫廷生活的华美始终笼罩在无常的阴影之下。物の哀れ不是悲观主义——它是对当下时刻的高度珍视，是一种邀请：因为一切终将逝去，所以更深切地去感受。你可以在日本人对秋叶、夕阳、古寺和送别仪式的喜爱中看到它。它告诉我们，为万物的消逝而动容，恰恰是完整地身而为人。",
    relatedVocabulary: ["jp-cult-022", "jp-cult-023"],
  },
  {
    id: "jp-phil-004",
    nationId: "japan",
    category: "philosophy",
    title_en: "Ma: The Power of Empty Space and Silence",
    title_zh: "間：留白与沉默的力量",
    content_en:
      "Ma (間) is one of Japan's most subtle and powerful concepts — the meaningful void between things. It is the pause between musical notes that gives rhythm its power. It is the empty space in a painting that gives the brushstroke its meaning. It is the silence in a conversation that communicates more than words. Ma is not mere emptiness — it is pregnant space, charged with potential and attention. In traditional Japanese architecture, ma is the space of a room defined not by furniture but by its emptiness, allowing the room to transform according to need. In Japanese gardens, rocks are placed not just for their own beauty but for the spaces they create between them. In martial arts, ma-ai (間合い) is the critical distance between opponents — too close and you cannot react, too far and you cannot strike. In Japanese music, the silence between notes (ma) is as deliberately composed as the notes themselves — the shakuhachi (bamboo flute) is famous for its meaningful silences. In conversation, Japanese people are far more comfortable with silence than Westerners; rushing to fill a pause is considered immature. The playwright and director Tadashi Suzuki wrote that 'ma is the moment of stillness in which the whole universe breathes.' Understanding ma means understanding that what is absent can be more powerful than what is present.",
    content_zh:
      "間（ま）是日本最微妙也最有力的概念之一——事物之间有意义的虚空。它是音符间赋予节奏力量的停顿。它是画面中赋予笔触意义的留白。它是对话中比言语更能传达信息的沉默。間不是单纯的空无——它是蕴含潜力和关注的充盈之空。在日本传统建筑中，間是房间由其空旷而非家具所定义的空间，使房间能根据需要自由转换。在日本庭园中，石头的摆放不仅为了自身之美，更为了它们之间创造的空间。在武道中，间合い（間合い）是对手之间的关键距离——太近无法反应，太远无法出击。在日本音乐中，音符间的沉默（間）与音符本身一样经过精心设计——尺八（竹笛）以其意味深长的静默而闻名。在日常对话中，日本人对沉默的容忍度远高于西方人；急着填补停顿被认为是不成熟的表现。剧作家兼导演铃木忠志写道：「間是万物呼吸的静止瞬间。」理解間，就是理解缺席有时比在场更有力量。",
    relatedVocabulary: ["jp-cult-023", "jp-cult-024"],
  },
  {
    id: "jp-phil-005",
    nationId: "japan",
    category: "philosophy",
    title_en: "Shoganai: The Wisdom of Accepting What Cannot Be Changed",
    title_zh: "しょうがない：接受不可改变之事的智慧",
    content_en:
      "Shoganai (しょうがない, also 'shikata ga nai' しかたがない) literally means 'there is no way of doing it' — it cannot be helped. At first glance, it might seem like passive resignation, but in Japanese culture it functions as a profound coping philosophy and a gateway to resilience. When an earthquake strikes, when a typhoon destroys your property, when a business deal falls through for reasons beyond your control — shoganai is the response. It does not mean giving up; it means accepting reality without wasting energy on blame, anger, or denial, and then focusing on what can be done next. After the devastating 2011 Tohoku earthquake and tsunami, the world marveled at how Japanese communities responded with calm, order, and mutual aid rather than chaos. Shoganai was at work: what happened, happened — now we rebuild. The concept is deeply connected to Buddhist teachings on suffering (dukkha) and the futility of attachment to outcomes. It also connects to Japan's geological reality — living on one of the most earthquake-prone islands on Earth teaches, generation after generation, that nature cannot be controlled, only endured and adapted to. Shoganai is not defeatism. It is the quiet courage of accepting what is, so that energy can flow toward what comes next.",
    content_zh:
      "しょうがない（也说「仕方がない」）字面意思是「没有办法」——无可奈何。乍一看似乎是消极的顺从，但在日本文化中，它是一种深刻的应对哲学，也是通向韧性的门径。当地震来袭，当台风摧毁你的房屋，当商业交易因不可控因素而失败——しょうがない就是回应。它不意味着放弃，而是意味着接受现实、不在责备、愤怒或否认上浪费精力，然后专注于接下来能做的事。2011年毁灭性的东日本大地震和海啸之后，全世界惊叹于日本社区以冷静、秩序和互助而非混乱来应对灾难。しょうがない在此发挥着作用：发生的已经发生——现在我们重建。这个概念与佛教关于苦（dukkha）和执着于结果之徒劳的教导紧密相连。它还与日本的地质现实相关——生活在地球上地震最频繁的岛屿之一，世世代代都在学习：自然不可控制，只能承受和适应。しょうがない不是失败主义。它是接受现状的平静勇气，这样精力才能流向下一步该做的事。",
    relatedVocabulary: ["jp-cult-024", "jp-cult-025"],
  },

  // ============================================================
  // RELIGION (4 cards)
  // ============================================================
  {
    id: "jp-rel-001",
    nationId: "japan",
    category: "religion",
    title_en: "Shinto and Buddhism: Japan's Spiritual Dual Operating System",
    title_zh: "神道与佛教：日本的双重精神操作系统",
    content_en:
      "Japan operates on two spiritual systems simultaneously, and most Japanese see no contradiction in this. Shinto, the indigenous faith, is the religion of life, nature, and celebration. Buddhism, imported from China and Korea in the 6th century, is the religion of death, suffering, and transcendence. A common saying captures this perfectly: 'Born Shinto, die Buddhist.' A Japanese baby is taken to a Shinto shrine for their first blessing (miyamairi). Many couples marry in Shinto ceremonies (or Christian-style chapels, which are treated as aesthetic choices rather than religious commitments). But when someone dies, the funeral is almost always Buddhist, and ancestral tablets (ihai) are kept in Buddhist household altars (butsudan). The numbers tell the story of coexistence: surveys consistently show Japan has about 100 million Shinto adherents and 85 million Buddhists — in a country of 125 million people. The math only works because most people count themselves in both. This comfortable syncretism baffles Western observers accustomed to exclusive religious identity, but it reflects a Japanese pragmatism about faith: religion is practiced for its benefits in specific contexts, not as an all-encompassing doctrinal commitment. There are over 80,000 Shinto shrines and 77,000 Buddhist temples across Japan — more places of worship per capita than almost any nation on Earth.",
    content_zh:
      "日本同时运行着两套精神系统，大多数日本人并不觉得这有任何矛盾。神道是日本本土信仰，是关于生命、自然和庆祝的宗教。佛教于6世纪从中国和朝鲜传入，是关于死亡、苦难和超脱的宗教。一句俗语完美地概括了这一点：「生则神道，死则佛教。」日本婴儿出生后会被带到神社接受初次祝福（宮参り）。许多夫妇以神道仪式结婚（或在基督教式小教堂举行婚礼，但这更多被视为审美选择而非宗教承诺）。然而当有人去世时，葬礼几乎一定是佛教式的，祖先牌位（位牌）供奉在佛教家庭佛龛（仏壇）中。数字揭示了这种共存：调查一致显示日本约有1亿神道教信徒和8500万佛教徒——而全国人口仅1.25亿。这个算术只有在大多数人同时计入两种信仰时才成立。这种自在的宗教融合让习惯了排他性宗教认同的西方观察者困惑不已，但它反映了日本人对信仰的务实态度：宗教是在特定场景中为其实际功能而实践的，而非一种全面的教义承诺。日本全国有超过8万座神社和7.7万座佛教寺庙——人均宗教场所数量几乎超过世界上任何国家。",
    relatedVocabulary: ["jp-cult-026", "jp-cult-027"],
  },
  {
    id: "jp-rel-002",
    nationId: "japan",
    category: "religion",
    title_en: "Shinto: The Way of the Kami",
    title_zh: "神道：神灵之道",
    content_en:
      "Shinto (神道, 'the way of the gods') is Japan's indigenous spiritual tradition, and it has no founder, no sacred scripture, no fixed doctrine, and no concept of absolute good and evil — making it radically different from Abrahamic religions. At its heart is the belief in kami (神) — sacred spirits or forces that dwell in all things: mountains, rivers, trees, rocks, animals, ancestors, even human-made objects of exceptional quality. The most important kami is Amaterasu, the sun goddess, from whom the imperial family is traditionally said to descend. Shinto practice centers on ritual purity. Before approaching a shrine, you purify your hands and mouth at the temizu basin. At the shrine, you bow twice, clap twice (to alert the kami), bow once more, and make a wish or offering. Torii gates (鳥居) — those iconic red-orange structures — mark the boundary between the mundane world and sacred space. The entire cycle of the Japanese year is structured around Shinto observances: New Year shrine visits (hatsumode), spring planting rituals, summer purification ceremonies (harai), and autumn harvest thanksgivings. Even modern Japanese who consider themselves non-religious unconsciously practice Shinto daily — the reverence for nature, the emphasis on cleanliness, the seasonal awareness — Shinto is less a religion one believes in and more the cultural water Japan swims in.",
    content_zh:
      "神道（神道，「众神之道」）是日本本土的精神传统，没有创始人，没有圣典，没有固定教义，也没有绝对善恶的概念——这使它与亚伯拉罕诸教截然不同。其核心是对「神」（kami）的信仰——栖居于万物中的神圣灵力：山川、河流、树木、岩石、动物、祖先，甚至品质卓越的人造器物。最重要的神是天照大神，太阳女神，据传天皇家族即是她的后裔。神道修行以仪式性的洁净为核心。在接近神社前，你要在手水舎洗净双手和口。在神社中，行两拜二拍手一拜之礼（拍手以唤起神灵注意），然后许愿或奉献供品。鸟居（鳥居）——那些标志性的朱红色门形结构——标记着凡俗世界与神圣空间之间的界线。日本全年的生活节奏围绕神道仪式展开：新年参拜（初詣）、春季播种祭祀、夏季净化仪式（祓い）和秋季感恩丰收。即使自认为无宗教信仰的现代日本人，也在日常生活中不自觉地实践着神道——对自然的敬畏、对清洁的重视、对季节的敏感——神道与其说是一种被信仰的宗教，不如说是日本人浸润其中的文化之水。",
    relatedVocabulary: ["jp-cult-026", "jp-cult-028"],
  },
  {
    id: "jp-rel-003",
    nationId: "japan",
    category: "religion",
    title_en: "Zen Buddhism: Sitting with Emptiness",
    title_zh: "禅宗：与空坐在一起",
    content_en:
      "Zen Buddhism arrived in Japan from China in the 12th century and transformed Japanese culture more profoundly than perhaps any other imported tradition. Zen's core practice is zazen (座禅, 'seated meditation') — sitting still in lotus position, focusing on the breath, letting thoughts arise and pass without attachment. The goal is not to think nothing, but to experience reality directly, unfiltered by the conceptual mind. Zen masters use koan (公案) — paradoxical riddles like 'What is the sound of one hand clapping?' — not because they have logical answers, but because struggling with the impossible question breaks through the limitations of rational thought. Zen's influence on Japanese culture is immeasurable. The tea ceremony (chado), flower arrangement (ikebana), calligraphy (shodo), martial arts (budo), garden design, and even archery (kyudo) are all considered forms of Zen practice — not hobbies, but paths to enlightenment through disciplined, mindful action. The Zen concept of 'beginner's mind' (shoshin, 初心) — approaching each moment with fresh curiosity regardless of expertise — has influenced everything from Japanese business culture to Silicon Valley's design philosophy. Zen temples like Ryoan-ji in Kyoto, with its famous rock garden of fifteen stones (only fourteen are visible from any angle), embody the principle that true understanding always contains an element beyond human grasp.",
    content_zh:
      "禅宗于12世纪从中国传入日本，对日本文化的塑造之深远也许超过任何其他外来传统。禅的核心修行是坐禅（座禅，「静坐冥想」）——以莲花坐姿端坐不动，专注呼吸，让念头生起又消逝而不执着。目标不是什么都不想，而是直接体验实相，不经概念思维的过滤。禅师运用公案（公案）——如「一只手拍掌是什么声音？」这样的悖论式谜题——不是因为它们有逻辑答案，而是因为在不可能的问题中挣扎能突破理性思维的局限。禅宗对日本文化的影响是不可估量的。茶道、花道（生け花）、书道、武道、庭园设计，甚至弓道，都被视为禅修的形式——不是消遣爱好，而是通过有纪律的、正念的行动通向觉悟的道路。禅宗中「初心」（初心，しょしん）的概念——无论已有多少经验，都以初学者的新鲜好奇心面对每一刻——影响了从日本商业文化到硅谷设计哲学的方方面面。京都的龙安寺及其著名的枯山水石庭——十五块石头但从任何角度只能看到十四块——体现了这样一个原则：真正的理解永远包含着人类无法完全把握的部分。",
    relatedVocabulary: ["jp-cult-027", "jp-cult-029"],
  },
  {
    id: "jp-rel-004",
    nationId: "japan",
    category: "religion",
    title_en: "New Year: Japan's Most Sacred Holiday",
    title_zh: "新年：日本最神圣的节日",
    content_en:
      "Japanese New Year (Shogatsu, 正月) is not just a holiday — it is a spiritual reset, a time when the entire nation simultaneously pauses, purifies, and begins anew. Preparations start in late December: houses are deep-cleaned (oosouji, 大掃除) to sweep away the old year's impurities, and kadomatsu (bamboo and pine decorations) are placed at doorways to welcome the New Year's deity (toshigami). On New Year's Eve, Buddhist temples ring their bells 108 times (joya no kane) — once for each of the 108 earthly desires in Buddhist teaching. As midnight passes, millions visit Shinto shrines for hatsumode (初詣, 'first shrine visit'), praying for good fortune. The first three days of January are sacred: families gather to eat osechi-ryori (おせち料理), elaborate boxes of symbolic foods — black soybeans for health, shrimp for longevity (their curved shape resembles an aged back), kazunoko (herring roe) for fertility, and tai (sea bream) because the word sounds like 'medetai' (auspicious). Children receive otoshidama (お年玉, money in decorative envelopes). Many customs involve 'firsts': the first sunrise (hatsuhinode), the first dream (hatsuyume), the first calligraphy (kakizome). This collective ritualized beginning reflects a deep cultural belief: how you start determines everything that follows.",
    content_zh:
      "日本新年（正月，しょうがつ）不仅仅是一个假日——它是一次精神重启，全国同时按下暂停键，净化身心，重新开始。准备工作从12月下旬开始：彻底打扫房屋（大掃除）以扫除旧年的污秽，在门口摆放门松（竹和松的装饰）迎接年神（年神）。除夕夜，佛教寺庙敲响108下钟声（除夜の鐘）——对应佛教中108种尘世烦恼，每敲一下消除一种。跨过零点后，数百万人涌向神社进行初詣（「新年首次参拜」），祈求好运。正月前三天是神圣的：全家团聚享用御节料理（おせち料理），精致的多层漆盒中装满象征性食物——黑豆寓意健康，虾寓意长寿（弯曲的形状像驼背的老人），数の子（鲱鱼子）寓意多子多孙，鲷鱼（鯛）因为发音近似「めでたい」（吉祥）。孩子们收到压岁钱（お年玉，装在精美信封里的钱）。许多习俗围绕「第一次」展开：初日出（新年首次日出）、初梦（新年第一个梦）、書き初め（新年首次书法）。这种集体性的仪式化开端反映了一种深层的文化信念：开始的方式决定了此后的一切。",
    relatedVocabulary: ["jp-cult-028", "jp-cult-030"],
  },

  // ============================================================
  // PEOPLE (5 cards)
  // ============================================================
  {
    id: "jp-ppl-001",
    nationId: "japan",
    category: "people",
    title_en: "Hokusai: The Old Man Mad About Painting",
    title_zh: "葛饰北斋：为画痴狂的老人",
    content_en:
      "Katsushika Hokusai (1760–1849) is arguably the most influential Asian artist in Western art history, yet in Japan he was considered eccentric and obsessive even by the standards of his era. His woodblock print 'The Great Wave off Kanagawa' — a towering wave dwarfing Mount Fuji — is one of the most reproduced images in human history, appearing on everything from album covers to emoji. But Hokusai's story is far stranger and more inspiring than a single famous image. He changed his artistic name over 30 times, each change marking a new phase of experimentation. He moved house 93 times, often because his living spaces became too filthy to inhabit (he had no interest in anything but painting). He produced over 30,000 works across a 70-year career spanning ukiyo-e prints, manga (he actually coined the term, meaning 'whimsical sketches'), paintings, book illustrations, and erotica. At age 75, in the postscript to 'One Hundred Views of Mount Fuji,' he wrote one of art history's most extraordinary statements of artistic humility: 'Everything I drew before age 70 is not worth counting. At 73, I began to understand the true structure of animals, plants, trees, birds, fishes, and insects. By 90, I will penetrate their essential nature. At 100, I will have achieved a divine understanding, and at 110, every dot and stroke will be alive.' He died at 89, reportedly gasping: 'If heaven gave me just ten more years... just five more years, I could become a true painter.' His influence on Monet, Van Gogh, Degas, and the Art Nouveau movement helped reshape Western art forever.",
    content_zh:
      "葛饰北斋（1760-1849）可以说是西方艺术史上最具影响力的亚洲艺术家，但在日本，即使以他那个时代的标准来看，他也被视为怪人和痴人。他的木版画《神奈川冲浪里》——一道巨浪使远处的富士山显得渺小——是人类历史上被复制最多的图像之一，出现在从专辑封面到表情符号的各种地方。但北斋的故事远比一幅名画更传奇、更令人振奋。他一生更换画号超过30次，每次更名都标志着一个新的探索阶段。他搬家93次，往往因为居所脏得无法住人（除了画画他对什么都不感兴趣）。在长达70年的创作生涯中，他留下了超过3万件作品，涵盖浮世绘版画、漫画（这个词实际上就是他创造的，意为「随性速写」）、绘画、书籍插图和春画。75岁时，他在《富岳百景》的后记中写下了艺术史上最非凡的谦逊宣言：「我70岁之前画的一切都不值一提。73岁时，我开始理解动物、植物、树木、鸟类、鱼类和昆虫的真实结构。到90岁，我将洞悉它们的本质。100岁时，我将达到神妙之境，110岁时，每一点每一画都将栩栩如生。」他89岁去世，据说临终时喘息着说：「如果上天再给我十年……哪怕只有五年，我就能成为真正的画家。」他对莫奈、梵高、德加和新艺术运动的影响，永远改变了西方艺术的面貌。",
    relatedVocabulary: ["jp-cult-031"],
  },
  {
    id: "jp-ppl-002",
    nationId: "japan",
    category: "people",
    title_en: "Marie Kondo: Sparking Joy and Shinto Spirituality",
    title_zh: "近藤麻理惠：怦然心动与神道灵性",
    content_en:
      "Marie Kondo (born 1984) transformed global attitudes toward possessions with a method rooted in deep Japanese cultural values that most Western readers never fully recognized. Her KonMari Method — keep only what 'sparks joy' (ときめく, tokimeku) — sold over 13 million copies in 40 languages and spawned a Netflix series that made tidying a global phenomenon. But behind the seemingly simple advice lies a worldview shaped by Shinto and Japanese aesthetics. Kondo worked as a shrine maiden (miko) at a Shinto shrine in her youth, and this experience profoundly shaped her philosophy. In Shinto, all objects can harbor kami (spirits) — which is why Kondo teaches people to thank their possessions before discarding them. This is not quirky self-help advice; it is a genuine spiritual practice. Her emphasis on greeting your house when you return home, on treating clothes with respect by folding them carefully, and on expressing gratitude to objects that have served their purpose all reflect the Shinto principle that the boundary between the animate and inanimate is permeable. The KonMari Method also embodies wabi-sabi (less is more), mono no aware (gratitude for things that have served and must pass), and the Japanese concept of 'kata' (form) — the idea that proper physical form leads to proper spiritual state. Kondo showed the world that tidying is not housework — it is a form of meditation.",
    content_zh:
      "近藤麻理惠（1984年出生）用一套根植于深层日本文化价值观的方法改变了全球对物品的态度，而大多数西方读者从未完全意识到这些文化根源。她的KonMari整理法——只留下「让你怦然心动」（ときめく）的物品——以40种语言售出超过1300万册，还催生了一部Netflix系列节目，使整理成为全球现象。但在看似简单的建议背后，是一个由神道教和日本美学塑造的世界观。近藤年轻时曾在神社担任巫女（みこ），这段经历深刻影响了她的哲学。在神道教中，所有物品都可能蕴含神灵（kami）——这就是为什么近藤教人们在丢弃物品前要对它们表示感谢。这不是古怪的心灵鸡汤，而是真正的灵性修行。她强调回家时要向房子打招呼，要通过仔细折叠来尊重衣物，要向已完成使命的物品表达感恩——这一切都反映了神道教的原则：有生命之物与无生命之物的界限是可以穿透的。KonMari整理法还体现了侘寂（少即是多）、物の哀れ（对已服务过而必须离去之物的感恩）以及日本的「型」（かた，形式）概念——正确的身体形式引导正确的精神状态。近藤向世界展示了：整理不是家务劳动——而是一种冥想形式。",
    relatedVocabulary: ["jp-cult-031", "jp-cult-032"],
  },
  {
    id: "jp-ppl-003",
    nationId: "japan",
    category: "people",
    title_en: "Murasaki Shikibu: The Woman Who Invented the Novel",
    title_zh: "紫式部：发明小说的女人",
    content_en:
      "Around the year 1000 CE, a lady-in-waiting at Japan's imperial court wrote what is widely considered the world's first novel — The Tale of Genji (源氏物語, Genji Monogatari). Murasaki Shikibu (c. 973–c. 1014/1025) created a work of staggering psychological complexity: 54 chapters, over 400 characters, spanning three generations, exploring love, loss, political intrigue, and the nature of beauty with a depth that would not be matched in European literature for centuries. The novel follows the life of Hikaru Genji, the brilliant but flawed son of an emperor, through his romantic entanglements and political ambitions. What makes it revolutionary is not merely its length or narrative scope, but its interior focus — Murasaki depicted the emotional inner lives of her characters with a subtlety that anticipates modern psychological fiction by 800 years. The fact that this literary milestone was written by a woman is no accident. In Heian-period Japan, men wrote official documents in Chinese characters (considered the 'serious' writing system), while women wrote in the Japanese kana syllabary — which was dismissed as 'women's hand' (onnade). Freed from the pretensions of official culture, women writers like Murasaki could explore personal experience, emotion, and observation with unprecedented honesty. Murasaki's diary reveals a complex, sometimes lonely woman who felt intellectually isolated and hid her knowledge of Chinese to avoid seeming unfeminine. Her novel remains Japan's supreme literary achievement, and her face appears on the Japanese 2,000-yen bill.",
    content_zh:
      "大约公元1000年，日本皇宫中的一位女官写下了被广泛认为是世界上第一部长篇小说的作品——《源氏物语》（源氏物語）。紫式部（约973年至约1014/1025年）创作了一部心理刻画极其复杂的巨著：54章，400多个人物，跨越三代人，以欧洲文学在数百年后才能匹敌的深度探索了爱情、失去、政治阴谋和美的本质。小说讲述了光源氏——天皇才华横溢却有缺陷的儿子——的一生，贯穿他的情感纠葛和政治抱负。使这部作品具有革命性的不仅是其篇幅或叙事格局，更是其内在关注——紫式部以一种提前现代心理小说800年的细腻笔触描绘了人物的内心情感世界。这部文学里程碑出自女性之手并非偶然。在平安时代的日本，男性用汉字撰写官方文书（被视为「正经」的书写系统），而女性使用日语假名音节文字——被轻蔑地称为「女手」（おんなで）。摆脱了官方文化的矫饰，紫式部等女性作家得以用前所未有的坦诚探索个人经历、情感和观察。紫式部的日记揭示了一个复杂、有时孤独的女性，她感到智识上的孤立，并隐藏自己的汉学知识以避免显得不够女性化。她的小说至今仍是日本文学的最高成就，她的肖像印在日本2000日元纸币上。",
    relatedVocabulary: ["jp-cult-032", "jp-cult-033"],
  },
  {
    id: "jp-ppl-004",
    nationId: "japan",
    category: "people",
    title_en: "Hayao Miyazaki: The Conscience of Animation",
    title_zh: "宫崎骏：动画界的良心",
    content_en:
      "Hayao Miyazaki (born 1941) is not simply Japan's greatest animator — he is arguably the most important filmmaker of the late 20th and early 21st centuries, period. Through Studio Ghibli (founded 1985), he created films that reject nearly every convention of mainstream animation: his female protagonists are brave but not sexualized; his villains are complex and sometimes redeemable; nature is sacred, never merely a backdrop; and his stories trust children to handle ambiguity, fear, and moral complexity. 'Spirited Away' (2001) won the Academy Award for Best Animated Feature and remains the highest-grossing film in Japanese history. But Miyazaki's cultural significance extends far beyond awards. His films encode deeply Japanese philosophical concepts for global audiences: 'My Neighbor Totoro' embodies Shinto's reverence for forest spirits; 'Princess Mononoke' wrestles with the conflict between industrial progress and natural harmony; 'The Wind Rises' explores the moral burden of beautiful creations put to destructive use. Miyazaki famously draws every frame by hand, rejecting computer animation with a stubbornness that itself reflects the Japanese value of kodawari (obsessive dedication). He has 'retired' and returned multiple times, reportedly because he cannot stop creating. His Ghibli Museum in Mitaka, Tokyo, bears the motto: 'Let's get lost together' — an invitation to abandon adult certainties and rediscover childlike wonder.",
    content_zh:
      "宫崎骏（1941年出生）不仅仅是日本最伟大的动画师——他可以说是20世纪末至21世纪初最重要的电影导演，没有之一。通过吉卜力工作室（1985年成立），他创作的电影打破了主流动画的几乎所有惯例：他的女性主角勇敢但不被物化；反派角色复杂且有时可以被救赎；自然是神圣的，绝非单纯的背景；他的故事信任孩子们能够面对含混、恐惧和道德的复杂性。《千与千寻》（2001）赢得了奥斯卡最佳动画长片奖，至今仍是日本影史上票房最高的电影。但宫崎骏的文化意义远超奖项。他的电影为全球观众编码了深层的日本哲学概念：《龙猫》体现了神道对森林精灵的崇拜；《幽灵公主》探讨了工业进步与自然和谐之间的冲突；《起风了》审视了美好创造物被用于破坏性目的时的道德负担。宫崎骏坚持亲手绘制每一帧画面，拒绝电脑动画，这种固执本身就反映了日本「こだわり」（执着追求）的价值观。他多次「退休」又复出，据说是因为他无法停止创作。他在东京三鹰市的吉卜力美术馆的座右铭是：「让我们一起迷路吧」——邀请人们放弃成年人的确信，重新发现孩童般的惊奇。",
    relatedVocabulary: ["jp-cult-033", "jp-cult-034"],
  },
  {
    id: "jp-ppl-005",
    nationId: "japan",
    category: "people",
    title_en: "Akira Kurosawa: The Emperor of Cinema",
    title_zh: "黑泽明：电影界的天皇",
    content_en:
      "Akira Kurosawa (1910–1998) did not merely make great Japanese films — he reinvented the language of cinema itself. His 1950 film 'Rashomon' introduced a revolutionary narrative technique: the same event told from multiple contradictory perspectives, each equally convincing, leaving truth permanently ambiguous. The 'Rashomon effect' has since entered the vocabulary of psychology, law, and philosophy. 'Seven Samurai' (1954) created the template for the ensemble action film — it was directly remade as 'The Magnificent Seven' and its DNA runs through everything from Star Wars to The Avengers. 'Hidden Fortress' (1958) directly inspired George Lucas to create Star Wars (the droids C-3PO and R2-D2 are modeled on the film's two bickering peasants). Yet Kurosawa drew as deeply from Shakespeare and Dostoevsky as from Japanese tradition — 'Throne of Blood' reimagines Macbeth through Noh theater aesthetics; 'Ran' transforms King Lear into a Japanese epic. This synthesis of East and West made him a bridge figure: Japanese enough to be authentic, universal enough to be understood everywhere. His perfectionism was legendary — he was called 'Tenno' (Emperor) on set for his absolute authority and demanding standards. He once waited eight months for the right cloud formation. Spielberg called him 'the pictorial Shakespeare of our time.' Despite this global reverence, Kurosawa struggled with depression and attempted suicide in 1971, a deeply human vulnerability that makes his art — always concerned with the dignity of ordinary people in extraordinary circumstances — all the more moving.",
    content_zh:
      "黑泽明（1910-1998）不仅仅是拍出了伟大的日本电影——他重新发明了电影的语言本身。他1950年的电影《罗生门》引入了一种革命性的叙事技巧：同一事件由多个相互矛盾的视角讲述，每个都同样令人信服，真相永远悬而未决。「罗生门效应」从此进入了心理学、法学和哲学的词汇。《七武士》（1954）创造了群像动作片的模板——直接被翻拍为《豪勇七蛟龙》，其基因贯穿从《星球大战》到《复仇者联盟》的一切。《暗堡里的三恶人》（1958）直接启发了乔治·卢卡斯创造《星球大战》（机器人C-3PO和R2-D2就是以片中两个争吵不休的农民为原型的）。然而黑泽明从莎士比亚和陀思妥耶夫斯基那里汲取的养分与从日本传统中获得的一样深——《蜘蛛巢城》通过能剧美学重新诠释了《麦克白》；《乱》将《李尔王》变成了日本史诗。这种东西方的融合使他成为桥梁式人物：足够日本以保持真实，足够普世以被世界理解。他的完美主义是传奇性的——在片场他被称为「天皇」，因为他拥有绝对权威和严苛标准。他曾为了等到合适的云层形态等了八个月。斯皮尔伯格称他为「我们时代的影像莎士比亚」。尽管享有全球性的尊崇，黑泽明曾与抑郁症搏斗并于1971年企图自杀——这种深刻的人性脆弱使他的艺术——始终关注在非凡境遇中普通人的尊严——更加动人。",
    relatedVocabulary: ["jp-cult-034", "jp-cult-035"],
  },

  // ============================================================
  // IDEAS (5 cards)
  // ============================================================
  {
    id: "jp-idea-001",
    nationId: "japan",
    category: "ideas",
    title_en: "Kaizen: The Compound Power of Tiny Improvements",
    title_zh: "改善：微小改进的复利力量",
    content_en:
      "Kaizen (改善, literally 'change for better') is the philosophy that small, continuous, incremental improvements — compounded over time — produce results that dwarf any one-time dramatic overhaul. The concept was ironically born from American ideas: after WWII, American occupation forces brought W. Edwards Deming's quality management principles to Japan, where they were enthusiastically adopted and refined into something uniquely Japanese. Toyota's production system became the greatest kaizen success story: by empowering every worker on the assembly line to stop production and suggest improvements (via the 'andon cord'), Toyota transformed from a small loom manufacturer into the world's largest automaker. The key insight is democratic: kaizen assumes that the people closest to the work understand it best. A janitor's suggestion about floor layout may be more valuable than a consultant's report. Kaizen operates on a human psychological truth that Japan understood before behavioral science formalized it: humans resist radical change but adapt easily to small adjustments. One percent better each day means you are 37 times better after a year. The philosophy has spread far beyond manufacturing into healthcare (reducing medical errors through incremental process improvement), education, software development (agile methodology is essentially kaizen applied to code), and personal development. The Japanese saying captures it: 'Even dust, piled up, becomes a mountain' (塵も積もれば山となる).",
    content_zh:
      "改善（改善，字面意思「变得更好」）是这样一种哲学：持续的微小改进——经过时间的积累——产生的成果远超任何一次性的剧烈变革。颇具讽刺意味的是，这个概念源于美国思想：二战后，美国占领军将爱德华兹·戴明的质量管理原则带到日本，在那里被热情地接受并提炼为独具日本特色的东西。丰田生产系统成为改善最伟大的成功案例：通过赋予流水线上每位工人停止生产并提出改进建议的权力（通过「安灯绳」），丰田从一家小型纺织机制造商转变为世界最大的汽车制造商。其关键洞见是民主性的：改善假定最接近工作的人最了解工作。一位清洁工关于地板布局的建议可能比顾问的报告更有价值。改善运作的基础是一个人类心理学真理，日本在行为科学将其形式化之前就已领悟：人类抵制剧烈变化，但容易适应小的调整。每天进步百分之一，一年后你就强大了37倍。这一哲学已远远超出制造业，扩展到医疗保健（通过渐进式流程改善减少医疗事故）、教育、软件开发（敏捷方法论本质上就是应用于代码的改善），以及个人发展。一句日本谚语概括了这一切：「尘埃积聚亦可成山」（塵も積もれば山となる）。",
    relatedVocabulary: ["jp-cult-036"],
  },
  {
    id: "jp-idea-002",
    nationId: "japan",
    category: "ideas",
    title_en: "Omotenashi: Hospitality That Anticipates the Unspoken",
    title_zh: "おもてなし：预见未言之需的待客之道",
    content_en:
      "Omotenashi (おもてなし) is Japan's philosophy of hospitality, and it differs fundamentally from Western service culture in one critical way: it anticipates needs before they are expressed, without expecting anything in return — including tips. The word itself is revealing: 'omote' (表) means surface/face, and 'nashi' (無し) means nothing — together suggesting service with 'no facade,' meaning the host's care is genuine, not performative. In practice, omotenashi manifests in countless subtle ways that astonish foreign visitors. A hotel concierge notices you checking the weather forecast and silently places an umbrella at the door. A restaurant server brings a warm towel (oshibori) before you even sit down. Department store staff wrap purchases in perfect origami-like folds. Taxi doors open automatically, and drivers wear white gloves. Bullet train cleaning crews perform a choreographed 7-minute turnaround that has been called 'the 7-minute miracle,' bowing to passengers before and after. The roots of omotenashi trace to the tea ceremony (chanoyu), where the host devotes enormous invisible effort to making the guest's experience perfect — selecting seasonal flowers, choosing the right tea bowl, even considering the guest's line of sight while seated. The concept became globally famous when Tokyo's 2020 Olympic bid used 'omotenashi' as its central theme. But omotenashi is more than politeness — it is a worldview that sees service to others as a form of self-cultivation, where the act of caring is its own reward.",
    content_zh:
      "おもてなし是日本的待客哲学，它与西方服务文化有一个根本性的差异：预见客人尚未表达的需求，且不求任何回报——包括小费。这个词本身就很有启示：「表」（おもて）意为表面/面孔，「無し」（なし）意为没有——合在一起暗示「没有伪装」的服务，意即主人的关怀是真诚的，而非表演性的。在实际中，おもてなし以无数细微的方式呈现，令外国游客惊叹不已。酒店礼宾员注意到你在查看天气预报，便默默在门口放了一把伞。餐厅服务员在你还没坐下时就递上热毛巾（おしぼり）。百货商店员工以类似折纸的完美手法包装商品。出租车门自动打开，司机戴着白手套。新干线清洁团队表演着编排精密的7分钟周转作业，被称为「7分钟奇迹」，在工作前后向乘客鞠躬。おもてなし的根源可追溯到茶道（茶の湯），主人投入巨大的、不可见的努力来完善客人的体验——选择应季花卉，挑选合适的茶碗，甚至考虑客人落座后的视线方向。当东京的2020年奥运会申办以「おもてなし」为核心主题时，这一概念举世闻名。但おもてなし不仅仅是礼貌——它是一种世界观，将服务他人视为自我修行的形式，关怀本身就是回报。",
    relatedVocabulary: ["jp-cult-036", "jp-cult-037"],
  },
  {
    id: "jp-idea-003",
    nationId: "japan",
    category: "ideas",
    title_en: "Monozukuri: The Soul of Japanese Craftsmanship",
    title_zh: "ものづくり：日本匠人精神的灵魂",
    content_en:
      "Monozukuri (ものづくり, literally 'making things') sounds deceptively simple, but in Japanese culture it carries a weight that 'manufacturing' never could in English. Monozukuri is the spiritual dimension of craftsmanship — the belief that the act of making things with care and dedication is inherently noble, that an object absorbs the spirit and intention of its maker. Japan is home to an extraordinary number of 'Living National Treasures' (人間国宝, Ningen Kokuho) — master artisans in fields from sword-making to paper-folding to lacquerwork who are designated and supported by the government as irreplaceable cultural assets. Some Japanese family workshops have been operating continuously for over 1,000 years — Kongo Gumi, a temple construction company, operated for 1,428 years (578–2006 CE) before being absorbed by a larger firm. The concept extends beyond traditional crafts into modern industry: Japanese knife-makers in Sakai apply centuries-old sword-forging techniques to kitchen knives. Denim artisans in Kojima produce the world's most sought-after jeans using shuttle looms from the 1950s. Even mass manufacturing carries the monozukuri spirit — Japanese factory workers speak of taking pride in their work in ways that transcend mere job satisfaction. The idea that things have spirits (mono no ke) and that making beautiful things is a path to spiritual fulfillment connects monozukuri to Shinto animism, Zen mindfulness, and the warrior's dedication to mastering a discipline.",
    content_zh:
      "ものづくり（字面意思「制作东西」）听起来简单得有些令人误解，但在日本文化中，它承载的分量是英语中「manufacturing（制造业）」永远无法企及的。ものづくり是匠人精神的灵性维度——相信用心和奉献制作物品本身就是高尚的，相信物品会吸收制作者的灵魂和意念。日本拥有数量惊人的「人间国宝」（人間国宝）——从铸剑到折纸到漆器，各领域的大师级工匠被政府认定并资助，视为不可替代的文化资产。一些日本家族作坊已经连续经营了一千多年——金刚组，一家寺庙建筑公司，运营了1428年（公元578年至2006年），后被大型企业收购。这一概念超越了传统手工艺，延伸到现代工业：堺市的日本刀匠将数百年的锻刀技术应用于厨刀制作。仓敷市儿岛的牛仔布匠人使用20世纪50年代的有梭织布机生产世界上最抢手的牛仔裤。即便是大规模制造也承载着ものづくり精神——日本工厂工人谈到对工作的自豪感时，其程度超越了单纯的职业满足。万物有灵（物の怪）以及制作美好之物是通向精神圆满的修行——这一理念将ものづくり与神道万物有灵论、禅宗正念以及武士对精通一门技艺的执着联系在一起。",
    relatedVocabulary: ["jp-cult-037", "jp-cult-038"],
  },
  {
    id: "jp-idea-004",
    nationId: "japan",
    category: "ideas",
    title_en: "Kodawari: The Relentless Pursuit of Perfection",
    title_zh: "こだわり：对完美不懈的追求",
    content_en:
      "Kodawari (こだわり) is the uncompromising, almost obsessive dedication to the highest possible standard in one's craft or work — a refusal to cut corners even when no one would notice. It is the sushi chef who spends ten years learning to cook rice before being allowed to touch fish. It is the ramen master who tastes his broth hundreds of times and adjusts by fractions of a degree. It is the knife-maker who folds steel precisely 16 times — not 15, not 17 — because generations of experimentation determined that 16 produces the optimal molecular structure. Kodawari goes beyond perfectionism in the Western sense, which often implies anxiety and self-criticism. Japanese kodawari is joyful obsession — a deep love for the process itself, not just the result. In the documentary 'Jiro Dreams of Sushi,' 85-year-old sushi master Jiro Ono embodies kodawari perfectly: despite being recognized as perhaps the world's greatest sushi chef, he says he has still not achieved perfection and never will. Each piece of sushi is an asymptotic approach to an ideal. The concept applies across Japanese culture: the train conductor who announces each stop with precisely calibrated diction, the convenience store clerk who wraps your purchase with geometric precision, the gardener who shapes a single bonsai tree for decades. Kodawari explains why Japan excels in fields that reward meticulous attention: watchmaking, whisky distilling, animation, automotive engineering, and cuisine.",
    content_zh:
      "こだわり是对个人技艺或工作的最高标准毫不妥协、近乎痴迷的执着——即使没人会注意到，也拒绝偷工减料。它是寿司师傅花十年时间学习煮饭，之后才被允许碰鱼。它是拉面大师品尝汤底数百次，每次调整仅以微小的温差计量。它是铸刀师将钢精确折叠16次——不是15次，不是17次——因为世代的实验证明16次能产生最佳的分子结构。こだわり超越了西方意义上的完美主义——后者往往暗含焦虑和自我批评。日本的こだわり是愉悦的痴迷——对过程本身而非仅仅对结果的深沉热爱。在纪录片《寿司之神》中，85岁的寿司大师小野二郎完美地体现了こだわり：尽管被公认为也许是世界上最伟大的寿司厨师，他说自己仍未达到完美，也永远不会达到。每一贯寿司都是向理想的渐近趋近。这个概念贯穿日本文化：列车长以精确到位的措辞播报每一站，便利店店员以几何般的精确包装你的商品，园艺师数十年如一日修剪一棵盆栽。こだわり解释了为什么日本在那些奖励一丝不苟的领域出类拔萃：制表、威士忌酿造、动画、汽车工程和料理。",
    relatedVocabulary: ["jp-cult-038", "jp-cult-039"],
  },
  {
    id: "jp-idea-005",
    nationId: "japan",
    category: "ideas",
    title_en: "Mottainai: The Sacred Sin of Waste",
    title_zh: "もったいない：浪费是一种罪",
    content_en:
      "Mottainai (もったいない) is a Japanese expression of deep regret over waste — but its meaning reaches far beyond environmental consciousness into spiritual territory. The word originally carried Buddhist and Shinto overtones: 'mottai' refers to the intrinsic dignity and sacredness of material things, and 'nai' negates it — so mottainai literally means 'what a loss of the sacred essence of this thing.' When a Japanese grandmother says 'mottainai' about leftover food, she is not just being frugal; she is expressing a moral and almost religious conviction that wasting what nature and human effort produced is a violation of the natural order. This concept shaped Japanese daily life for centuries: furoshiki wrapping cloths replaced disposable packaging; broken ceramics were repaired with gold (kintsugi) rather than discarded; clothes were mended, reused, and passed down. Food culture reflects mottainai deeply — a whole fish is used from head to tail, vegetable scraps become pickles, and the concept of 'shun' (seasonal eating at peak freshness) minimizes the need for preservation and waste. In 2004, Kenyan Nobel Peace Prize laureate Wangari Maathai encountered the word and launched a global 'Mottainai Campaign,' arguing that this single Japanese word encapsulated the three R's of environmentalism — Reduce, Reuse, Recycle — while adding a crucial fourth: Respect. In an age of overconsumption and climate crisis, mottainai offers a worldview where frugality is not deprivation but reverence.",
    content_zh:
      "もったいない是日本人对浪费表达深切惋惜的一个词——但它的含义远远超越环保意识，进入了精神领域。这个词最初带有佛教和神道色彩：「もったい」指物品内在的尊严和神圣性，「ない」是否定——所以もったいない的字面意思是「多么可惜，辜负了这件东西的神圣本质」。当一位日本祖母对剩饭说「もったいない」时，她不仅仅是在节俭；她在表达一种道德的、近乎宗教性的信念——浪费自然和人类劳动所产出的东西，是对自然秩序的亵渎。这一概念塑造了日本人数百年的日常生活：风呂敷包袱布取代一次性包装；碎裂的陶瓷用金子修复（金继ぎ）而非丢弃；衣物被修补、重复使用并代代相传。饮食文化深刻体现了もったいない——一整条鱼从头到尾物尽其用，蔬菜边角料做成腌菜，「旬」（在最新鲜时令食用）的概念将保存和浪费的需求降到最低。2004年，肯尼亚诺贝尔和平奖得主旺加里·马塔伊接触到这个词后发起了全球「もったいない运动」，她认为这一个日语词就概括了环保主义的3R——减量（Reduce）、再利用（Reuse）、回收（Recycle）——同时增添了至关重要的第四个R：尊重（Respect）。在过度消费和气候危机的时代，もったいない提供了一种世界观：节俭不是匮乏，而是敬畏。",
    relatedVocabulary: ["jp-cult-039", "jp-cult-040"],
  },
];
