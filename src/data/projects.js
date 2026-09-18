const anzhieGallery = Array.from({ length: 8 }, (_, index) => ({
  src: `/assets/images/anzhie-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `安禔 ANZHIÉ brand identity ${String(index + 1).padStart(2, '0')}`,
}))

export const projects = [
  { slug: 'atlas', title: 'Atlas / Tomorrow, mapped', type: 'AI product identity', year: '2025', image: '/assets/images/project-atlas.svg', size: 'feature', description: 'A living visual system for a new way to navigate complex work.' },
  { slug: 'orbit', title: 'Orbit / Spatial intelligence', type: 'Product design', year: '2024', image: '/assets/images/project-orbit.svg', size: 'portrait', description: 'An interface that makes changing systems feel legible.' },
  { slug: 'sora', title: 'Sora / A softer signal', type: 'Art direction', year: '2024', image: '/assets/images/project-sora.svg', size: 'wide', description: 'Identity and campaign language for a quiet, bold care brand.' },
  { slug: 'pulse', title: 'Pulse / Everyday health', type: 'Digital experience', year: '2023', image: '/assets/images/project-pulse.svg', size: 'standard', description: 'A data experience built to feel more human than clinical.' },
  { slug: 'lumen', title: 'Lumen / Measure light', type: 'Brand identity', year: '2023', image: '/assets/images/project-lumen.svg', size: 'portrait', description: 'A bright identity for an independent lighting studio.' },
  { slug: 'kin', title: 'Kin / Made to last', type: 'Creative direction', year: '2022', image: '/assets/images/project-kin.svg', size: 'wide', description: 'A tactile digital world for objects with a longer life.' },
  { slug: 'anzhie', title: '安禔 ANZHIÉ', type: 'Brand identity', year: '2025', image: '/assets/images/anzhie-01.jpg', size: 'feature', description: 'A quiet hospitality and lifestyle identity, balancing safety, comfort, convenience and understated luxury.', gallery: anzhieGallery },
]
