// Long-scroll project showcase pages (reference sheet: zuopin-03).
// Left column holds the sticky project intro; the right column is a stack of
// image cards that fade in/out with scroll. Slugs are keyed the same way as
// route params: /project/:slug.
export const showcaseProjects = {
  campaigns: {
    index: '03',
    title: '运营活动',
    tagline: '节日活动与运营视觉设计',
    paragraphs: [
      '汇集节日与专题运营活动的视觉设计，展示活动主视觉、移动端页面及从草图到成稿的设计过程。',
    ],
    // Source sheets 1.jpg through 9.jpg, in numeric order.
    highResWidth: 1920,
    images: Array.from({ length: 9 }, (_, i) => `/assets/projects/campaigns/cmp1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  anzhie: {
    index: '03',
    title: '安禔',
    tagline: '品牌视觉与包装设计',
    paragraphs: [
      '项目展示涵盖品牌标识、视觉应用、产品包装与配套物料，以米色和棕色呈现温和、自然的品牌风格。',
    ],
    // Source sheets 1.jpg through 8.jpg, in numeric order.
    images: Array.from({ length: 8 }, (_, i) => `/assets/projects/anzhie/anz1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  skincare: {
    index: '02',
    title: '护肤类',
    tagline: '护肤品牌 · 包装与视觉设计',
    paragraphs: [
      '汇集护肤类品牌的包装与视觉设计，展示产品容器、外盒、礼盒及相关品牌应用。',
    ],
    // Source sheets 1.jpg through 26.jpg, in numeric order.
    images: Array.from({ length: 26 }, (_, i) => `/assets/projects/skincare/skn1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  buwu: {
    index: '04',
    title: '不物BUWU',
    tagline: '不止于物 · 品牌视觉与包装设计',
    paragraphs: [
      '项目展示涵盖品牌标识、色彩规范与几何图形，以及文具、手提袋、包装和社交媒体中的视觉应用。',
    ],
    // Source sheets BUWU-01.jpg through BUWU-11.jpg, in numeric order.
    images: Array.from({ length: 11 }, (_, i) => `/assets/projects/buwu/buw1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  'leniu-childrens-day': {
    index: '02',
    title: 'LENIU六一活动',
    tagline: '嗨 FUN 六一 · 活动主视觉设计',
    paragraphs: [
      '项目展示包含活动主视觉、拍照互动区、线下场景布置与线上宣传物料，呈现六一活动的整体视觉设计。',
    ],
    // Source sheets 1.jpg through 5.jpg, preserving their original order and resolution.
    highResWidth: 1920,
    images: Array.from({ length: 5 }, (_, i) => `/assets/projects/leniu-childrens-day/lcd1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  'leniu-mid-autumn': {
    index: '01',
    title: 'LENIU中秋活动',
    tagline: '月满喜乐园 · 中秋活动主视觉设计',
    paragraphs: [
      '从活动主视觉、主题字标到线上宣传物料与线下布置，呈现「月满喜乐园」中秋活动的视觉设计与落地效果。',
    ],
    // Source sheets 1.jpg through 7.jpg; keep the full-resolution 1920px originals.
    highResWidth: 1920,
    images: Array.from({ length: 7 }, (_, i) => `/assets/projects/leniu-mid-autumn/lma1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  'qq-nails': {
    index: '05',
    title: 'QQ NAILS & SPA',
    tagline: '美甲与 SPA 品牌 · 品牌视觉与包装设计',
    paragraphs: [
      '项目展示涵盖品牌标识、色彩与字体规范、辅助图形，以及产品包装与社交媒体应用。',
    ],
    // Source sheets 07-qqnails-01.jpg through 07-qqnails-12.jpg, in numeric order.
    images: Array.from({ length: 12 }, (_, i) => `/assets/projects/qq-nails/qqn1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  fupei: {
    index: '01',
    title: '浮醅',
    tagline: '初创餐饮快消消费品品牌',
    paragraphs: [
      '品牌含义：由 FOOD（食物）+ MORE（更多）+ LAND（国度）构成，意为“拥有更多美食的乐园”传递品牌为消费者构建专属健康场景，「浮醅」，“浮”既描绘了饮品顶部绵密乳酪如云朵般“浮”着的美丽形态也暗含了“轻负担”带来的“轻松、无压力”的漂浮感，“醅”直指核心产品希腊乳酪。',
      '产品/服务核心卖点概述：全部是围绕品牌核心“希腊乳酪”，饮品主线抹茶系、培茶系与之有部份结合。为都市人提供一种兼具美味与健康的饮品下午茶选择，和能量补给站。',
    ],
    // Final 8-sheet set from G:\作品集\website\brand\浮酪 (01-08.jpg), in sheet
    // order. Prefixed `fml-` (new filenames) so CDN caches can't serve the
    // retired `fupei-*` assets under the same URLs.
    images: Array.from({ length: 8 }, (_, i) => `/assets/projects/fupei/fml2-${String(i + 1).padStart(2, '0')}.webp`),
  },
  florilegio: {
    index: '02',
    title: 'FLORILEGIO',
    tagline: '墨西哥人文情绪香氛品牌 · LOGO 与品牌识别设计',
    // Background condensed from the client's logo design brief (撷花集 / Florilegio).
    paragraphs: [
      '品牌背景：Florilegio（中文名「撷花集」）是墨西哥本土人文情绪香氛品牌，以「私人记忆香气」为核心差异化。当时墨西哥香氛市场两极分化——平价仿香粗粝低价、高端本土品牌宏大叙事且定价高昂，品牌意在填补「有质感、有温度、有本土生活记忆、价格友好」的中端空白。核心受众为 18–38 岁年轻消费群体，产品采用基础生活线、原创定制线、典藏艺术线的架构，以「一瓶香水一个故事」促成气味收集与复购，关键词为书卷极简、温藏质感、人文时序。',
      '设计诉求：品牌名取「如蜂采蜜般收集世界各地香水」与「如书页般记录人生故事」两层含义；slogan「Los aromas guardan tu tiempo／香气典藏时光」。LOGO 以轨迹线条、抽象花形、首字母 F 与书页元素的优先级融合，走纯线性、简洁、勋章与印章感的方向，中性克制以适配男女用户；主色哑光黑金（低饱和黑＋柔雾暖金），辅以木质棕调卡其米色，应用于包装、瓶身标贴、丝印与烫金。',
    ],
    images: Array.from({ length: 9 }, (_, i) => `/assets/projects/florilegio/flr2-${String(i + 1).padStart(2, '0')}.webp`),
  },
  misini: {
    index: '03',
    title: 'MISINI',
    tagline: '军事收藏级积木品牌 · LOGO 与品牌识别设计',
    // Background adapted from the brand sheet copy (BEYOND PLAY / IT'S COLLECTION).
    paragraphs: [
      '品牌背景：MISINI（Est. 2022）是专为成年军事历史爱好者打造的收藏级积木品牌，slogan「BEYOND PLAY／IT\'S COLLECTION」。品牌摒弃玩具化的幼稚趣味，以专业、硬核、克制的设计语言，将战列舰、坦克、战机等经典军事装备转译为兼具拼装乐趣与陈列价值的收藏模型。',
      '设计理念：每一处细节都源自真实装备考据，每一次拼装都是与历史的对话——积木不再是玩具，而是可触摸的军事史诗、值得终身收藏的「钢铁传奇」。LOGO 采用粗壮斜切的定制字体塑造速度感与力量感；主视觉以深夜蓝渐变叠加琥珀金光，圆形印章徽标环绕品牌信条「TRUTH REBUILD CLASSICS RESTORE」，呼应硬核收藏的仪式感。',
    ],
    images: Array.from({ length: 11 }, (_, i) => `/assets/projects/misini/msn2-${String(i + 1).padStart(2, '0')}.webp`),
  },
  chunshe: {
    index: '04',
    title: '春蛇复苏',
    tagline: '蛇年新春主题礼盒 · 包装全案与三维视觉设计',
    // Background adapted from the artwork itself (kv sheet: 春蛇环绕 万物复苏 /
    // 2025 NEW START / Happy Spring Festival); no official brief provided yet.
    paragraphs: [
      '项目背景：「春蛇复苏」是以 2025 乙巳蛇年为契机的春节伴手礼盒全案设计。概念取「春蛇环绕，万物复苏」——灵蛇盘绕成新春之环，传递蛇年安康、万象更新的祝愿（2025 NEW START / Happy Spring Festival）。',
      '设计内容：礼盒以嫩粉与荧光绿的新春撞色为主调，内含菊花、桃花、桂花、玫瑰四款棒棒花茶与冻干茶粉，搭配三色蛇纹茶杯、纯棉堆堆袜，外层为粉调亚克力抽屉收纳盒，可作首饰盒二次利用。全案涵盖主题字体设计、系列包装刀版与标签系统，并以 Blender 完成三维建模、产品渲染与旋转动效展示。',
    ],
    // Keep the original 19 spring gift-box sheets first, then append 1–12.jpg
    // from the additional gift-box collection at their native 1920px width.
    images: [
      ...Array.from({ length: 19 }, (_, i) => `/assets/projects/chunshe/csr3-${String(i + 1).padStart(2, '0')}.webp`),
      ...Array.from({ length: 12 }, (_, i) => ({
        src: `/assets/projects/gift-boxes/gift1-${String(i + 1).padStart(2, '0')}.webp`,
        highResWidth: 1920,
        alt: `${i < 5 ? '中秋露营礼盒' : '龙行大运新春礼盒'} 作品图 ${i + 1}`,
      })),
    ],
  },
  wuhu: {
    index: '06',
    title: 'WUHU',
    tagline: '2022 虎年新春 IP · 招财虎系列视觉设计',
    // Background adapted from the artwork itself (LUCKY TIGER 2022 / 招财虎 /
    // WUHU SERIES / 虎年暴富 etc.); no official brief provided yet.
    paragraphs: [
      '项目背景：WUHU 是围绕 2022 壬寅虎年打造的「招财虎」新春 IP 系列视觉设计。以圆润亲和的招财虎为主角，取「招财进宝、虎年暴富、好运降临」的新春祝愿，结合蓝与橙的高饱和撞色，营造热烈喜庆又具现代感的节日氛围。',
      '设计内容：系列涵盖招财虎 IP 形象、动态表情与主视觉海报，并延伸出「虎年暴富 / 虎年拿捏了 / 2022 冲冲冲」等新春祝福字标、徽章与印章图形，以及贴纸、红包、杯垫、包装袋等周边物料，形成一套可灵活应用于线上线下的新年视觉系统。',
    ],
    // Source sheets 1.jpg through 10.jpg from G:\作品集\1\WUHU, in numeric
    // order. Dual resolution (base + @2x) keeps them sharp on high-DPI screens.
    highResWidth: 1920,
    images: Array.from({ length: 10 }, (_, i) => `/assets/projects/wuhu/whu-${String(i + 1).padStart(2, '0')}.webp`),
  },
  health: {
    index: '07',
    title: '保健品',
    tagline: '关节养护与草本健康品牌 · 包装与视觉设计',
    // Background adapted from the artwork (关节伴侣 / NONPAREY / Kavirae);
    // the folder holds three health brands. No official brief provided yet.
    paragraphs: [
      '项目汇集三组健康类品牌的包装与视觉设计。关节伴侣为运动人群提供专业关节养护方案，主视觉以紫色能量波纹与奔跑动态呈现「SPORT UNBOUND」的品牌主张，涵盖氨糖软骨素钙片等产品的包装系统与电商陈列。',
      'NONPAREY 以深绿棋盘格与烫金呈现高端保健品礼盒的克制质感；Kavirae 则取自然草本意象，以清新绿与手绘植物线稿，构建从标志、字体到营养品瓶身、纸盒的整套草本健康视觉系统。',
    ],
    // Source sheets 1.jpg through 22.jpg from G:\作品集\1\保健品, in numeric
    // order (three health brands). Dual resolution base + @2x for sharpness.
    highResWidth: 2400,
    images: Array.from({ length: 22 }, (_, i) => `/assets/projects/health/hlth-${String(i + 1).padStart(2, '0')}.webp`),
  },
  ctf: {
    index: '08',
    title: '周大福IP升级',
    tagline: 'CTF × 周师兄 · 雇主品牌 IP 全案设计',
    // Background adapted from the artwork itself (2022 / Chow Tai Fook /
    // 雇主品牌升级全案 / 让传承更有新意); no official brief provided.
    paragraphs: [
      '项目背景：2022 年周大福雇主品牌升级全案。面对新的零售环境，以更符合流行趋势的雇主品牌视觉与受众沟通，传递「未来 3–5 年周大福可以给人才带来的价值」，让传承更有新意。',
      '设计内容：以 3D Q 版人物「周师兄」为核心 IP，搭配招财猫、钻石、星星、offer、对话框与喇叭等符号，塑造年轻亲和且具记忆点的雇主形象；视觉系统以克莱因蓝与周大福橙黄为主色，衍生 CTF 圆形标识、办公物料（工牌、笔记本、名片、信封、胶带）、表情与场景应用展示。',
    ],
    // Source sheets 1.jpg through 11.jpg, in numeric order.
    highResWidth: 1920,
    images: Array.from({ length: 11 }, (_, i) => `/assets/projects/ctf1/ctf1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  aura: {
    index: '09',
    title: 'AURA neferbo',
    tagline: '光蕴新生，肌现非凡 · 护肤品牌 LOGO 与视觉识别设计',
    // Background adapted from the artwork itself (REBORN GLOW /
    // EXTRAORDINARY SKIN / BRAND LOGO DESIGN); no official brief provided.
    paragraphs: [
      '项目背景：AURA neferbo 是以「REBORN GLOW / EXTRAORDINARY SKIN」为核心主张的护肤品牌，中文「光蕴新生，肌现非凡」点出由内而外的焕亮体验。视觉以紫色与银灰金属质感，构建兼具科技感与高级美学的品牌气质。',
      '设计内容：从定制衬线字标与 AuRa / neferbo 组合标识出发，建立以紫色为主色、银灰拉丝金属与玻璃光球为辅的品牌系统；延展至画册版式、名片与卡片、海报、产品包装与说明文字规范，形成统一的品牌识别。',
    ],
    // Source sheets 1.jpg through 9.jpg, in numeric order.
    highResWidth: 2400,
    images: Array.from({ length: 9 }, (_, i) => `/assets/projects/aur1/aur1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  yooriskin: {
    index: '10',
    title: 'Yoori Skin',
    tagline: 'MODERN SKIN RITUAL · 护肤品牌与包装设计',
    // Background adapted from the artwork itself (BRAND DESIGN 2026 /
    // AMPOULE CONCENTRATE / PDRN + GINSENG); no official brief provided.
    paragraphs: [
      '项目背景：Yoori Skin 取「琉璃」般由内而外透亮、无瑕的肌肤意象，以「MODERN SKIN RITUAL」为品牌主张，将先进护肤科技融入日常仪式。',
      '设计内容：以暖金到柔粉的渐变、细腻衬线字标与圆形 Y 字徽标构成克制优雅的识别系统；包装涵盖 AMPOULE CONCENTRATE 安瓶浓缩精华（PDRN + GINSENG）、外盒与玻璃瓶，标注 RADIANCE / ELASTICITY / HYDRATES，并配合绸缎与光影完成产品渲染。',
    ],
    // Source sheets 10.jpg through 14.jpg, in numeric order.
    highResWidth: 2400,
    images: Array.from({ length: 5 }, (_, i) => `/assets/projects/yrs1/yrs1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  yoomay: {
    index: '11',
    title: '又尔美 YOOMAY',
    tagline: '与美重逢 · 美白内生 · 高端美容品牌视觉与包装设计',
    // Background adapted from the artwork itself (与美重逢 / 美白内生 /
    // 燕窝酸红参双肽 GABA 饮); no official brief provided.
    paragraphs: [
      '项目背景：YOOMAY 又尔美聚焦高端美容市场，主张「与美重逢 / 美白内生」，以专业科研背景将美容养护从外在修饰转向身体机能与肌肤状态的内在调理。',
      '设计内容：品牌以天空蓝、米白与深酒红构成明快而高级的撞色系统，搭配圆点、弧形等几何元素与 YOOMAY 定制字标；包装以燕窝酸红参双肽 GABA 饮为核心产品，覆盖礼盒、瓶身、陈列装置与系列视觉物料。',
    ],
    // Source sheets 22.jpg through 26.jpg, in numeric order.
    highResWidth: 2400,
    images: Array.from({ length: 5 }, (_, i) => `/assets/projects/yem1/yem1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  kavirae: {
    index: '12',
    title: 'Kavirae',
    tagline: '专注肝病领域 · 护肝草本营养品牌 LOGO 与包装设计',
    // Background adapted from the artwork itself (Innovative Formulas for Liver
    // Health Management / FOR LIVER PATIENTS / TCM AND LIVER HEALTH / 新加坡研发).
    paragraphs: [
      '项目背景：Kavirae 是专注肝病领域的护肝草本营养品牌，主张以创新配方结合中医草本（TCM AND LIVER HEALTH）与新加坡研发背景，为肝脏养护人群提供更温和、可信赖的日常营养方案。',
      '设计内容：LOGO 以蓝绿双色叶片构成「K」形符号，配合圆润的无衬线字标，塑造清新而专业的品牌气质；延展至 FibroClear 系列产品的纸盒包装、植物线稿底纹、绿色几何叶片图案与说明文字规范，形成统一的包装与识别系统。',
    ],
    // Source sheets 14.jpg through 22.jpg, in numeric order.
    highResWidth: 2400,
    images: Array.from({ length: 9 }, (_, i) => `/assets/projects/kvr1/kvr1-${String(i + 1).padStart(2, '0')}.webp`),
  },
  nonparey: {
    index: '13',
    title: 'NONPAREY',
    tagline: 'NO EQUAL · 高端礼盒品牌视觉与包装设计',
    // Background adapted from the artwork itself (NO EQUAL / brand logo
    // design 2026 / 无与伦比); no official brief provided.
    paragraphs: [
      '项目背景：NONPAREY 取「NO EQUAL／无与伦比」之意，定位为不追逐潮流、而追求价值感与稀缺体验的高端礼盒品牌，2026 年以品牌 LOGO 与礼盒系统为设计起点。',
      '设计内容：以深墨绿为底、金黄为主色，构建斜向棋盘格纹与定制粗体字标；礼盒采用烫金印字、磁吸翻盖与几何压纹，配合丝绒幕布、白手套托盘与运动场景等质感化渲染，呈现克制而富戏剧性的高端陈列。',
    ],
    // Source sheets 8.jpg through 13.jpg, in numeric order.
    highResWidth: 2400,
    images: Array.from({ length: 6 }, (_, i) => `/assets/projects/non1/non1-${String(i + 1).padStart(2, '0')}.webp`),
  },
}
