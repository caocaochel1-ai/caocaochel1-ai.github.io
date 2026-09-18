const assets = {
  atlas: '/assets/images/project-atlas.svg',
  orbit: '/assets/images/project-orbit.svg',
  sora: '/assets/images/project-sora.svg',
  pulse: '/assets/images/project-pulse.svg',
  lumen: '/assets/images/project-lumen.svg',
  kin: '/assets/images/project-kin.svg',
  books: '/assets/images/hero-plant-books.png',
  chair: '/assets/images/hero-plant-chair.png',
  yellow: '/assets/images/hero-plant-yellow.png',
  anzhie: '/assets/images/anzhie-01.jpg',
}

const baseItems = [
  ['atlas', 'Brand world / Atlas'], ['orbit', 'Orbit system'], ['sora', 'Sora campaign'], ['pulse', 'Pulse experience'],
  ['lumen', 'Lumen objects'], ['kin', 'Kin collection'], ['books', 'Still life study'], ['chair', 'Natural forms'],
  ['yellow', 'Colour study'], ['atlas', 'Atlas typography'], ['sora', 'Sora motion'], ['orbit', 'Orbit interface'],
  ['pulse', 'Pulse patterns'], ['kin', 'Kin details'], ['lumen', 'Lumen light'],
]

const makeItems = (offset = 0) => baseItems.map(([asset, title], index) => ({
  image: assets[asset],
  title,
  slug: ['atlas', 'orbit', 'sora', 'pulse', 'lumen', 'kin'][index % 6],
  number: String(index + 1).padStart(2, '0'),
  className: `image-${(index + offset) % 5}`,
}))

const brandItems = [
  { image: assets.anzhie, title: '安禔 ANZHIÉ', slug: 'anzhie', number: '01', className: 'image-0' },
  ...makeItems(0).map((item, index) => ({ ...item, number: String(index + 2).padStart(2, '0') })),
]

export const galleryPages = {
  brand: { title: '品牌设计', en: 'Brand design', intro: '以清晰策略和独特视觉，建立能被记住的品牌语言。', items: brandItems },
  packaging: { title: '包装设计', en: 'Packaging design', intro: '在结构、触感与货架之间，塑造品牌的第一印象。', items: makeItems(2) },
  'key-visual': { title: '活动主视觉设计', en: 'Key visual design', intro: '为每一次发布、活动与叙事，建立鲜明的视觉场景。', items: makeItems(4) },
  operations: { title: '运营设计', en: 'Operations design', intro: '让日常内容在一致的系统中持续生长。', items: makeItems(1) },
  about: { title: '关于我', en: 'About Ray Studio', intro: '跨越品牌、产品与动态视觉的独立设计实践。', items: makeItems(3) },
  contact: { title: '联系方式', en: 'Contact', intro: '欢迎分享你的想法、品牌问题或下一次合作。', items: makeItems(0) },
}
