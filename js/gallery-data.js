// ===== GALLERY MANIFEST — LOTAS MAKEUP STUDIO & SALON =====
// This file acts as the "folder scanner" for gallery images.
// Since websites can't read local folders directly, you manage images here.
//
// HOW TO ADD YOUR PHOTOS:
// 1. Upload your image to the correct folder inside /images/gallery/
//    e.g. /images/gallery/bridal/my-bride-photo.jpg
// 2. Add the filename to the matching array below
// 3. Save this file — the gallery page updates automatically
//
// SUPPORTED formats: .jpg, .jpeg, .png, .webp

const GALLERY_IMAGES = {

  bridal: [
    // Add your bridal images here like: '../images/gallery/bridal/photo1.jpg'
    // PLACEHOLDER IMAGES (replace with your own):
    { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80', alt: 'Bridal Makeup Look' },
    { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', alt: 'Wedding Bridal' },
    { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80', alt: 'Mehndi Look' },
    { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80', alt: 'Engagement Makeup' },
    { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', alt: 'Bridal Preparation' },
    { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Bridal Hair' },
  ],

  'hair-styling': [
    // Add your hair images here
    // PLACEHOLDER IMAGES:
    { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', alt: 'Hair Styling' },
    { src: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=600&q=80', alt: 'Hair Color' },
    { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80', alt: 'Keratin Treatment' },
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', alt: 'Salon Styling' },
    { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80', alt: 'Hair Spa' },
    { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80', alt: 'Blow Dry' },
  ],

  makeup: [
    // Add your makeup images here
    // PLACEHOLDER IMAGES:
    { src: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80', alt: 'Party Makeup' },
    { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', alt: 'Glam Makeup' },
    { src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80', alt: 'HD Makeup' },
    { src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80', alt: 'Evening Glam' },
    { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', alt: 'Airbrush Makeup' },
    { src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80', alt: 'Natural Makeup' },
  ],

  facial: [
    // Add your facial / skin care images here
    // PLACEHOLDER IMAGES:
    { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80', alt: 'Glow Facial' },
    { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', alt: 'Skin Treatment' },
    { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', alt: 'Body Treatment' },
    { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80', alt: 'Relaxing Facial' },
    { src: 'https://images.unsplash.com/photo-1596704017254-9b121068fb5b?w=600&q=80', alt: 'D-Tan Treatment' },
    { src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80', alt: 'Anti-Aging' },
  ],

  'waxing-threading': [
    // Add your waxing/threading images here
    // PLACEHOLDER IMAGES:
    { src: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&q=80', alt: 'Threading Service' },
    { src: 'https://images.unsplash.com/photo-1506968430777-bf7784a87f23?w=600&q=80', alt: 'Waxing Service' },
    { src: 'https://images.unsplash.com/photo-1522337913725-b2e8dbf6617f?w=600&q=80', alt: 'Beauty Service' },
    { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', alt: 'Eyebrow Shaping' },
  ],

  'body-treatments': [
    // Add your body treatment images here
    // PLACEHOLDER IMAGES:
    { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80', alt: 'Body Massage' },
    { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80', alt: 'Body Polishing' },
    { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80', alt: 'Relaxation' },
    { src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80', alt: 'Spa Treatment' },
  ],
};

// Category display config
const GALLERY_CATEGORIES = [
  { id: 'all',               label: 'All Work',           icon: '✨' },
  { id: 'bridal',            label: 'Bridal',             icon: '💄' },
  { id: 'hair-styling',      label: 'Hair Styling',       icon: '💇‍♀️' },
  { id: 'makeup',            label: 'Party Makeup',       icon: '🌟' },
  { id: 'facial',            label: 'Skin & Facials',     icon: '✨' },
  { id: 'waxing-threading',  label: 'Waxing & Threading', icon: '🌸' },
  { id: 'body-treatments',   label: 'Body Treatments',    icon: '🌿' },
];

const GALLERY_BATCH_SIZE = 16; // images shown before "See More"
