// ===== SERVICES DATA — LOTAS MAKEUP STUDIO & SALON =====
// Edit this file to add or update services. Changes reflect on the services page.

const SERVICES_DATA = [
  {
    category: "Skin & Facial",
    icon: "✨",
    services: [
      { name: "Deep Cleansing Facial", desc: "Purifies pores, removes impurities, and revitalizes your skin for a natural, healthy glow.", price: "Starting ₹349" },
      { name: "O3+ Premium Facial", desc: "Advanced oxygen-infused facial treatment for deep nourishment and instant radiance.", price: "Starting ₹699" },
      { name: "Anti-Aging Facial", desc: "Combats fine lines and wrinkles with powerful actives for younger-looking, firm skin.", price: "Starting ₹899" },
      { name: "D-Tan Treatment", desc: "Effectively removes sun tan and uneven skin tone for a bright, even complexion.", price: "Starting ₹399" },
      { name: "BB Glow Facial", desc: "Semi-permanent foundation treatment for flawless, glowing skin that lasts weeks.", price: "Starting ₹1299" },
      { name: "Fruit Facial", desc: "Natural fruit enzyme facial that brightens and nourishes for a fresh, dewy look.", price: "Starting ₹449" },
      { name: "Whitening Facial", desc: "Targeted brightening treatment to reduce pigmentation and achieve luminous skin.", price: "Starting ₹599" },
      { name: "Gold Facial", desc: "Luxurious 24K gold-infused facial for ultimate anti-aging and radiance boost.", price: "Starting ₹999" },
      { name: "Skin Polishing", desc: "Exfoliating treatment that removes dead skin cells for silky smooth, polished skin.", price: "Starting ₹599" },
      { name: "Face Cleanup", desc: "Quick refresh treatment to cleanse, tone and moisturize your skin.", price: "Starting ₹199" }
    ]
  },
  {
    category: "Hair Services",
    icon: "💇‍♀️",
    services: [
      { name: "Haircut & Styling", desc: "Expert cuts tailored to your face shape and style preference by trained professionals.", price: "Starting ₹149" },
      { name: "Hair Color & Highlights", desc: "Professional coloring with premium brands for vibrant, long-lasting color results.", price: "Starting ₹499" },
      { name: "Keratin Treatment", desc: "Smoothens frizzy hair and adds lasting shine with salon-grade keratin proteins.", price: "Starting ₹1999" },
      { name: "Hair Smoothening", desc: "Transform rough, unmanageable hair to silky, straight perfection that lasts months.", price: "Starting ₹2499" },
      { name: "Hair Spa", desc: "Deep conditioning treatment to repair, nourish and revive damaged or dull hair.", price: "Starting ₹299" },
      { name: "Blow Dry & Setting", desc: "Professional blow-dry and styling for parties, events or everyday glamour.", price: "Starting ₹199" },
      { name: "Scalp Treatment", desc: "Targeted scalp care to address dandruff, oiliness, dryness and hair fall issues.", price: "Starting ₹449" },
      { name: "Rebonding", desc: "Permanent straightening treatment for naturally straight, smooth hair.", price: "Starting ₹2999" },
      { name: "Balayage & Ombre", desc: "Trendy blended coloring technique for a natural sun-kissed gradient effect.", price: "Starting ₹1499" },
      { name: "Head Massage", desc: "Relaxing head massage to boost circulation, reduce stress and promote hair health.", price: "Starting ₹149" }
    ]
  },
  {
    category: "Makeup & Bridal",
    icon: "💄",
    services: [
      { name: "Bridal Makeup", desc: "Complete bridal look with HD/airbrush techniques that photograph beautifully and last all day.", price: "Starting ₹4999" },
      { name: "Party & Occasion Makeup", desc: "Glamorous looks for weddings, sangeets, functions and special celebrations.", price: "Starting ₹799" },
      { name: "Engagement Makeup", desc: "Romantic, flattering makeup that makes you shine at your engagement ceremony.", price: "Starting ₹1499" },
      { name: "HD Makeup", desc: "High-definition flawless finish that looks perfect both in-person and in photographs.", price: "Starting ₹1999" },
      { name: "Airbrush Makeup", desc: "Ultra-lightweight, impeccable coverage for a picture-perfect, natural finish.", price: "Starting ₹2499" },
      { name: "Mehndi / Haldi Look", desc: "Beautifully curated traditional makeup looks for festive occasions.", price: "Starting ₹1199" },
      { name: "Pre-Bridal Package", desc: "Multi-session skin and hair preparation ritual for a glowing bridal transformation.", price: "Starting ₹3999" },
      { name: "Saree Draping", desc: "Expert saree draping in various traditional and modern styles for every occasion.", price: "Starting ₹299" }
    ]
  },
  {
    category: "Waxing & Threading",
    icon: "🌸",
    services: [
      { name: "Full Body Waxing", desc: "Smooth, hair-free skin with premium quality wax for minimal discomfort.", price: "Starting ₹699" },
      { name: "Half Arms / Legs Waxing", desc: "Precise waxing for clean, smooth results on arms and legs.", price: "Starting ₹199" },
      { name: "Bikini / Underarm Waxing", desc: "Gentle, thorough waxing with clean and hygienic technique.", price: "Starting ₹149" },
      { name: "Eyebrow Threading", desc: "Perfect, defined eyebrow shaping by expert hands for a polished look.", price: "Starting ₹30" },
      { name: "Upper Lip Threading", desc: "Quick and precise threading for clean, smooth upper lip area.", price: "Starting ₹20" },
      { name: "Full Face Threading", desc: "Complete facial threading to shape and define your entire facial hair pattern.", price: "Starting ₹99" },
      { name: "Chocolate Wax", desc: "Rich chocolate-infused wax for a smooth, nourishing hair removal experience.", price: "Starting ₹249" }
    ]
  },
  {
    category: "Nail & Hand Care",
    icon: "💅",
    services: [
      { name: "Manicure", desc: "Complete hand treatment including shaping, cuticle care, scrub and polish.", price: "Starting ₹199" },
      { name: "Pedicure", desc: "Relaxing foot treatment with scrub, massage, shaping and polish application.", price: "Starting ₹249" },
      { name: "Gel Nail Extensions", desc: "Beautiful, durable gel extensions for stylish, long-lasting nail looks.", price: "Starting ₹799" },
      { name: "Nail Art", desc: "Creative and trendy nail designs customized to your preference.", price: "Starting ₹299" },
      { name: "Nail Polish Application", desc: "Quick, professional nail polish application for an instant beauty boost.", price: "Starting ₹99" },
      { name: "Paraffin Treatment", desc: "Luxury paraffin wax treatment for ultra-soft, moisturized hands and feet.", price: "Starting ₹349" }
    ]
  },
  {
    category: "Body Treatments",
    icon: "🌿",
    services: [
      { name: "Bleach (Face & Body)", desc: "Lightens skin tone and removes unwanted hair for a brighter, even complexion.", price: "Starting ₹199" },
      { name: "Body Scrub & Polishing", desc: "Full body exfoliation treatment for smooth, radiant and glowing skin.", price: "Starting ₹699" },
      { name: "De-Tan Body Pack", desc: "Removes sun tan and dark patches from the entire body effectively.", price: "Starting ₹499" },
      { name: "Relaxing Body Massage", desc: "Therapeutic massage to relieve stress, tension and muscle fatigue.", price: "Starting ₹799" },
      { name: "Under-Eye Treatment", desc: "Targeted treatment for dark circles, puffiness and under-eye fine lines.", price: "Starting ₹249" },
      { name: "Neck & Back Treatment", desc: "Specialized care for neck, back and shoulder area for complete rejuvenation.", price: "Starting ₹399" }
    ]
  }
];
