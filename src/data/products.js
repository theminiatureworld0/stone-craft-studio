/**
 * Product Catalog Data
 * 
 * Reusable product data structure.
 * Manage products manually through this file.
 * To add a new product:
 * 1. Place WebP images in public/images/products/
 * 2. Add product entry to this array
 */

export const products = [
  // 1. Stone Wall Decorations
  {
    id: "stone-wall-001",
    slug: "lotus-relief-sandstone-wall-panel",
    name: "Lotus Relief Sandstone Wall Panel",
    category: "stone-wall-decorations",
    shortDescription: "Hand-chiselled floral relief carving in beige Dholpur sandstone.",
    description: "An evocative wall panel showcasing blooming lotus petals carved in high relief. Each petal is individually sculpted by master stonemasons to capture light and shadow softly across interior accent walls or grand entryway foyers.",
    material: "Natural Dholpur Beige Sandstone",
    dimensions: "120 cm x 90 cm x 7.5 cm (Customisable)",
    finish: "Hand-Chiselled Natural Matte",
    featured: true,
    images: [
      "/images/products/lotus-panel-01.webp",
      "/images/products/lotus-panel-02.webp",
      "/images/products/lotus-panel-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Weight": "Approx. 65 kg (standard module)",
      "Installation Type": "Mechanical dry-cladding / Bracket mounted",
      "Suitability": "Interior feature walls, covered courtyards, grand foyers",
      "Maintenance": "Dust with dry soft brush; gentle damp cloth wiping"
    },
    seoTitle: "Lotus Relief Sandstone Wall Panel | Stone Craft Studio",
    seoDescription: "Exquisite hand-chiselled lotus relief stone wall panel crafted in natural sandstone for luxury interior and foyer walls."
  },
  {
    id: "stone-wall-002",
    slug: "geometric-heritage-jali-screen",
    name: "Geometric Heritage Stone Jali Screen",
    category: "stone-wall-decorations",
    shortDescription: "Perforated natural stone lattice screen for ambient light and architectural privacy.",
    description: "A traditional Indian stone jali screen featuring interlocking geometric geometry. Pierced by hand using precision stone chisels, it filters natural sunlight into dappled geometric shadows while preserving natural ventilation and privacy.",
    material: "Red Agra & Teakwood Sandstone",
    dimensions: "150 cm x 60 cm x 5 cm (Customisable)",
    finish: "Honed Smooth Surface",
    featured: false,
    images: [
      "/images/products/jali-screen-01.webp",
      "/images/products/jali-screen-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Perforation Pattern": "Eight-point Islamic star geometric latticework",
      "Installation Type": "Recessed frame or structural stone jambs",
      "Suitability": "Balconies, stairwell voids, room partitions, facade screens",
      "Weather Resistance": "High resistance to direct sunlight and tropical rainfall"
    },
    seoTitle: "Geometric Heritage Stone Jali Screen | Stone Craft Studio",
    seoDescription: "Perforated natural stone lattice jali screen offering architectural shading and privacy for heritage and contemporary homes."
  },
  {
    id: "stone-wall-003",
    slug: "radial-sunburst-facade-mural",
    name: "Radial Sunburst Facade Mural",
    category: "stone-wall-decorations",
    shortDescription: "Monumental concentric stone relief mural designed for double-height feature walls.",
    description: "Constructed as an interlocking multi-tile mosaic, this radial sunburst relief creates a commanding visual focal point. Its graduated stepped bevels capture dramatic ambient lighting throughout the day.",
    material: "Bansi Paharpur Sandstone",
    dimensions: "240 cm x 240 cm x 10 cm (Modular assembly)",
    finish: "Fine Shot-blasted with Hand-grooved Detailing",
    featured: true,
    images: [
      "/images/products/sunburst-mural-01.webp",
      "/images/products/lotus-panel-02.webp",
      "/images/products/lotus-panel-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Structure": "Modular 9-slab interlocking system",
      "Installation Type": "Engineered stainless steel clamp anchors",
      "Suitability": "Exterior facade highlights, double-height living spaces, hotel atriums",
      "Origin": "Natural Rajasthan sandstone hand-carved in Maharashtra"
    },
    seoTitle: "Radial Sunburst Facade Stone Mural | Stone Craft Studio",
    seoDescription: "Bespoke modular stone facade mural featuring concentric relief textures for luxury residences and hotels."
  },

  // 2. Stone Idols & Sculptures
  {
    id: "stone-idol-001",
    slug: "monolithic-ganesha-deity-sculpture",
    name: "Monolithic Ganesha Deity Sculpture",
    category: "stone-idols-and-sculptures",
    shortDescription: "Sacred monolithic Lord Ganesha carved in black basalt and natural stone according to classical iconography.",
    description: "Carved from a single block of heavy stone, this Lord Ganesha idol reflects calmness, traditional proportions, and intricate ornamentations along the crown, modak bowl, and trunk. Designed for home pooja sanctums, courtyards, or entrance foyers.",
    material: "Solid Black Basalt & Sandstone",
    dimensions: "90 cm height x 60 cm width x 40 cm depth",
    finish: "Antique Hand-Rubbed Satin Polish",
    featured: true,
    images: [
      "/images/products/ganesha-sculpture-01.webp",
      "/images/products/ganesha-sculpture-02.webp",
      "/images/products/ganesha-sculpture-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Iconography": "Lalitasana posture with four hands holding traditional ayudhas",
      "Weight": "Approx. 180 kg",
      "Suitability": "Mandir sanctum, entrance vestibule, meditative courtyard",
      "Base": "Integrated carved double-lotus pedestal (Padmasana)"
    },
    seoTitle: "Monolithic Handcrafted Ganesha Sculpture | Stone Craft Studio",
    seoDescription: "Sacred monolithic black basalt and sandstone Ganesha idol carved following ancient Shilpa Shastra proportions."
  },
  {
    id: "stone-idol-002",
    slug: "monolithic-shiva-deity-sculpture",
    name: "Monolithic Lord Shiva Deity Sculpture",
    category: "stone-idols-and-sculptures",
    shortDescription: "Sacred Lord Shiva sculpture carved in natural stone depicting meditative composure and trident ayudha.",
    description: "Sculpted from dense natural stone, this monolithic Lord Shiva idol embodies meditative stillness, serene poise, and classical Agamic precision. Detailed with the crescent moon in matted locks, sacred rudraksha garland, and calm facial contemplation, it is ideal for home mandirs, temple parikramas, and private meditation gardens.",
    material: "Dense Grey Granite / Black Basalt",
    dimensions: "100 cm height x 65 cm width x 45 cm depth",
    finish: "Traditional Antique Hand-Rubbed Satin Polish",
    featured: true,
    images: [
      "/images/products/shiva-sculpture-01.webp",
      "/images/products/shiva-sculpture-02.webp",
      "/images/products/ganesha-sculpture-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Pose": "Dhyana Meditative Asana with Trishula & Damru",
      "Weight": "Approx. 220 kg",
      "Suitability": "Home mandir sanctum, Shiva devsthan, landscape sanctuary",
      "Longevity": "Centuries of indoor and all-weather resilience"
    },
    seoTitle: "Monolithic Handcrafted Shiva Sculpture | Stone Craft Studio",
    seoDescription: "Handcrafted stone Lord Shiva meditative sculpture carved in solid natural stone according to Shilpa Shastra principles."
  },
  {
    id: "stone-idol-003",
    slug: "meditative-dhyana-buddha-sculpture",
    name: "Meditative Dhyana Buddha Sculpture",
    category: "stone-idols-and-sculptures",
    shortDescription: "Minimalist seated Buddha sculpture capturing serene composure and gentle drapery folds.",
    description: "Depicting Lord Buddha in deep Dhyana mudra, this monolithic sandstone sculpture emphasizes smooth planar transitions, subtle facial expressions, and finely pleated monastic robes.",
    material: "Fine-Grained Mint Sandstone",
    dimensions: "110 cm height x 75 cm width x 50 cm depth",
    finish: "Silky Sand-Rubbed Matte",
    featured: false,
    images: [
      "/images/products/buddha-sculpture-01.webp",
      "/images/products/buddha-sculpture-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Pose": "Padmasana with Dhyana Mudra (Meditation gesture)",
      "Weight": "Approx. 210 kg",
      "Weather Resistance": "Immune to moisture, suitable for tropical outdoor gardens",
      "Customisation": "Available in scale from 60 cm up to 240 cm"
    },
    seoTitle: "Meditative Dhyana Buddha Sculpture | Stone Craft Studio",
    seoDescription: "Fine-grained natural sandstone Buddha sculpture in deep meditative mudra for Zen courtyards and landscape gardens."
  },
  {
    id: "stone-idol-004",
    slug: "nandi-temple-guardian-sculpture",
    name: "Nandi Temple Guardian Sculpture",
    category: "stone-idols-and-sculptures",
    shortDescription: "Classical monolithic Nandi bull adorned with bell garlands and ceremonial saddle.",
    description: "Revered as the devoted vehicle of Lord Shiva, this monolithic Nandi sculpture is embellished with intricate neck bells, ceremonial ropes, and an ornamental saddle, carved with lifelike muscle tension and peaceful devotion.",
    material: "Grey Granite / Hard Sandstone",
    dimensions: "85 cm length x 50 cm width x 65 cm height",
    finish: "Fine Bush-Hammered and Honed Texture",
    featured: false,
    images: [
      "/images/products/nandi-sculpture-01.webp",
      "/images/products/nandi-sculpture-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Carving Style": "Traditional South & Western Indian temple idiom",
      "Weight": "Approx. 240 kg",
      "Durability": "Centuries of outdoor all-weather resilience",
      "Detailing": "Deeply under-cut bell ropes and horns"
    },
    seoTitle: "Classical Monolithic Nandi Sculpture | Stone Craft Studio",
    seoDescription: "Handcrafted stone Nandi temple guardian with carved ceremonial ornamentation for Shiva temples and heritage spaces."
  },

  // 3. Architectural Stone Designs
  {
    id: "arch-001",
    slug: "ornate-cusped-entry-archway",
    name: "Ornate Cusped Stone Entry Archway",
    category: "architectural-stone-designs",
    shortDescription: "Multi-foil cusped archway with foliate spandrels and structural voussoirs.",
    description: "Designed to frame prestigious entrances, verandahs, or private temple gates. The arch comprises precisely interlocking stone voussoirs featuring hand-carved floral spandrels and a crowned keystone motif.",
    material: "Pink Dholpur & Teakwood Sandstone",
    dimensions: "Opening width 210 cm x overall height 320 cm (Engineered to project specs)",
    finish: "Carved Relief & Fine Sanded Surfaces",
    featured: true,
    images: [
      "/images/products/archway-01.webp",
      "/images/products/archway-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Arch Type": "Classical nine-cusped foil arch",
      "Assembly": "Dry-stacked interlocking joints with concealed stainless dowels",
      "Integration": "Engineered to fit standard structural lintels and brick/concrete masonry",
      "Detailing": "Spandrel acanthus leaf relief with central motif"
    },
    seoTitle: "Ornate Cusped Stone Entry Archway | Stone Craft Studio",
    seoDescription: "Traditional multi-cusped stone archway crafted from premium sandstone for luxury residential portals and entrance gateways."
  },
  {
    id: "arch-002",
    slug: "classical-fluted-balustrade-system",
    name: "Classical Fluted Stone Balustrade System",
    category: "architectural-stone-designs",
    shortDescription: "Modular natural stone balusters with moulded top handrail and plinth base.",
    description: "A continuous architectural balustrade designed for rooftop parapets, terrace perimeters, and exterior grand staircases. Each baluster is lathe-turned and finished by hand for uniform symmetry.",
    material: "White Buff Sandstone",
    dimensions: "90 cm railing height; 15 cm baluster diameter; modular runs",
    finish: "Smooth Honed",
    featured: false,
    images: [
      "/images/products/balustrade-01.webp",
      "/images/products/balustrade-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Module": "Top coping rail, baluster urns, and bottom plinth channel",
      "Anchorage": "Inter-locking tongue-and-groove with concealed epoxy dowels",
      "Applications": "Terraces, verandahs, garden stairs, grand courtyards"
    },
    seoTitle: "Classical Natural Stone Balustrade System | Stone Craft Studio",
    seoDescription: "Architectural stone balusters and handrails crafted from buff sandstone for terrace railings and perimeter parapets."
  },
  {
    id: "arch-003",
    slug: "bracket-cornice-facade-moulding",
    name: "Carved Elephant Bracket & Chhajja Cornice",
    category: "architectural-stone-designs",
    shortDescription: "Cantilevered stone support brackets paired with classical sun-shade eaves.",
    description: "Inspired by ancient Haveli and palace architecture, these structural support brackets depict stylised elephant trunks and floral scrolls, designed to support projecting stone chhajja rooflines and eaves.",
    material: "Jaisalmer Yellow & Red Sandstone",
    dimensions: "75 cm height x 30 cm thickness x 60 cm projection",
    finish: "Antique Chiselled",
    featured: false,
    images: [
      "/images/products/bracket-cornice-01.webp",
      "/images/products/bracket-cornice-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Load Bearing": "Engineered for structural roof overhang support",
      "Motifs": "Gaja (elephant), makara, and floral scrollwork",
      "Durability": "Frost and high heat resilient"
    },
    seoTitle: "Carved Elephant Stone Brackets & Chhajja | Stone Craft Studio",
    seoDescription: "Traditional carved stone brackets and ornamental chhajja eaves for authentic heritage facade architecture."
  },

  // 4. Custom Stone Work
  {
    id: "custom-001",
    slug: "tiered-lotus-cascade-fountain",
    name: "Tiered Lotus Cascade Water Fountain",
    category: "custom-stone-work",
    shortDescription: "Three-tiered concentric stone fountain basin with delicate scalloped rims.",
    description: "A tranquil centrepiece for private courtyards and manicured estate gardens. Water trickles gracefully over three hand-scalloped lotus basins, carved from solid sandstone blocks to create gentle acoustic resonance.",
    material: "Rainbow Teak Sandstone / Mint Sandstone",
    dimensions: "Diameter 180 cm (bottom basin) x 165 cm total height",
    finish: "Honed and Water-Repellent Sealed",
    featured: true,
    images: [
      "/images/products/lotus-fountain-01.webp",
      "/images/products/lotus-fountain-02.webp",
      "/images/products/lotus-fountain-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Plumbing": "Pre-cored internal conduit for standard water pump and return pipe",
      "Assembly": "Segmental interlocking bowls for ease of transport and assembly",
      "Sound Profile": "Calm, gentle cascading water acoustic",
      "Custom Options": "Under-water submersible LED lighting grooves optional"
    },
    seoTitle: "Tiered Lotus Cascade Stone Fountain | Stone Craft Studio",
    seoDescription: "Bespoke three-tiered stone courtyard fountain featuring lotus petal basins hand-carved in natural sandstone."
  },
  {
    id: "custom-002",
    slug: "monolithic-urn-estate-planter",
    name: "Monolithic Fluted Estate Urn Planter",
    category: "custom-stone-work",
    shortDescription: "Substantial stone urn planters featuring gadrooned belly and square pedestal base.",
    description: "Hollowed from a solid mass of natural beige stone, these commanding planters anchor pool decks, driveway entries, and formal porticos with architectural poise.",
    material: "Dholpur Beige Sandstone",
    dimensions: "75 cm diameter x 90 cm height",
    finish: "Natural Brushed Stone",
    featured: false,
    images: [
      "/images/products/estate-planter-01.webp",
      "/images/products/estate-planter-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Drainage": "Integral pre-drilled central base drainage weep-hole",
      "Cavity": "Deep root cavity suitable for specimen shrubs and miniature trees",
      "Base": "Independent solid square plinth block"
    },
    seoTitle: "Monolithic Fluted Estate Stone Urn Planter | Stone Craft Studio",
    seoDescription: "Substantial architectural stone planters with gadrooned flute detailing, carved from solid natural sandstone."
  },

  // 5. Stone Pillars
  {
    id: "pillar-001",
    slug: "fluted-porch-pillar-with-lotus-capital",
    name: "Fluted Porch Pillar with Lotus Capital",
    category: "stone-pillars",
    shortDescription: "Classical column featuring a 16-facet fluted shaft, stepped base, and carved lotus capital.",
    description: "Imparting structural grandeur to entrance verandahs and colonnaded walkways. Each pillar is carved in segments from dense sandstone, crowned by a blossoming inverted lotus capital with intricate beaded necklaces.",
    material: "Dholpur Pink or Beige Sandstone",
    dimensions: "300 cm total height x 40 cm shaft diameter (Base 55 cm x 55 cm)",
    finish: "Smooth Hand-Rubbed Flutes with Chiselled Capital",
    featured: true,
    images: [
      "/images/products/fluted-pillar-01.webp",
      "/images/products/fluted-pillar-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Structure": "Three-piece assembly (Plinth base, central monolithic shaft, capital crown)",
      "Internal Core": "Optional hollow core drilling for RCC structural column encasement",
      "Load Bearing": "Suitable for both direct load support and ornamental wrapping",
      "Dimensions": "Configurable from 2.4 meters up to 4.5 meters in height"
    },
    seoTitle: "Hand-Carved Fluted Stone Pillar & Lotus Capital | Stone Craft Studio",
    seoDescription: "Exquisite architectural stone pillar featuring fluted shaft and carved lotus capital for entrance porticos and verandahs."
  },
  {
    id: "pillar-002",
    slug: "traditional-temple-pillar-mandapa-column",
    name: "Traditional Temple Pillar (Mandapa Column)",
    category: "stone-pillars",
    shortDescription: "Sacred multifaceted column with square base, octagonal band, circular shaft, and pot-bracket capital.",
    description: "Following classical Dravidian and Nagara column divisions, this pillar transitions from a square plinth adorned with deity reliefs, through sixteen-sided facets, into an ornate pot-and-foliage (Kumbha-Kalasa) capital.",
    material: "Dense Grey Granite / Black Basalt",
    dimensions: "270 cm height x 45 cm base square",
    finish: "Fine Bush-Hammered Antique Texture",
    featured: false,
    images: [
      "/images/products/temple-pillar-01.webp",
      "/images/products/temple-pillar-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Shaft Profile": "Square to Octagonal to Circular with decorative rings",
      "Carvings": "Medallions depicting sacred geese (Hamsa), flora, and guardian motifs",
      "Application": "Mandapams, heritage courtyards, traditional prayer pavilions"
    },
    seoTitle: "Traditional Temple Mandapa Stone Column | Stone Craft Studio",
    seoDescription: "Authentic multi-tiered temple stone pillar carved in hard stone according to classical Agamic temple architectural canons."
  },

  // 6. Temple Stone Carvings & Indian Home Temples
  {
    id: "temple-001",
    slug: "handcrafted-sandstone-home-temple-mandir",
    name: "Handcrafted Sandstone Home Temple (Ghar Mandir)",
    category: "temple-stone-carvings",
    shortDescription: "Traditional handcrafted stone pooja mandir for homes with carved shikhara, ornate pillars, and diya drawers.",
    description: "Bring timeless sacred serenity to your home with our meticulously sculpted natural sandstone home mandir. Handcrafted following classical Nagara temple architecture, this compact home temple features an intricately carved shikhara dome, slender fluted sanctum pillars, arched torana entrance, and a dedicated garbhagriha for deity idols. Features an integrated smooth-glide stone drawer for pooja essentials and brass diyas.",
    material: "Natural Beige Dholpur Sandstone & Makrana Marble",
    dimensions: "120 cm height x 75 cm width x 50 cm depth (Custom sizes available)",
    finish: "Hand-Chiselled & Silky Honed Finish",
    featured: true,
    images: [
      "/images/products/home-temple-mandir-01.webp",
      "/images/products/home-temple-mandir-02.webp",
      "/images/products/home-temple-mandir-03.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Architecture": "Classical Nagara Shikhara with Kalash finial",
      "Sanctum": "Elevated deity platform with carved bell backdrop",
      "Storage": "Concealed storage drawer for pooja samagri & incense",
      "Customisation": "Wall-mountable or freestanding floor configurations available"
    },
    seoTitle: "Handcrafted Sandstone Home Temple Pooja Mandir | Stone Craft Studio",
    seoDescription: "Exquisite carved stone home mandir crafted from natural sandstone with ornate shikhara, pillars, and deity sanctum."
  },
  {
    id: "temple-002",
    slug: "traditional-carved-stone-pooja-mandir",
    name: "Traditional Carved Stone Pooja Mandir",
    category: "temple-stone-carvings",
    shortDescription: "Compact architectural stone pooja shrine with engraved floral motifs and tiered sanctum.",
    description: "Designed specifically for luxury apartments and contemporary Indian residences, this free-standing carved stone mandir combines ancient spiritual iconography with modern living space proportions. The sanctum walls are adorned with delicate lotus and bell engravings, creating a sacred sanctuary for daily prayers and festive aartis.",
    material: "Fine-Grained Buff Sandstone",
    dimensions: "95 cm height x 60 cm width x 45 cm depth",
    finish: "Fine Bush-Hammered & Honed Satin",
    featured: true,
    images: [
      "/images/products/home-temple-mandir-02.webp",
      "/images/products/compact-pooja-mandir-01.webp",
      "/images/products/home-temple-mandir-01.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Installation Type": "Freestanding floor unit / elevated plinth",
      "Ventilation": "Discreet top ventilation slots for dhoop and diya smoke",
      "Backdrop": "Jali patterned back screen allowing ambient light glow",
      "Care": "Naturally washable with warm water and soft cloth"
    },
    seoTitle: "Compact Carved Stone Pooja Mandir for Home | Stone Craft Studio",
    seoDescription: "Traditional compact stone pooja mandir designed for modern Indian homes and apartments with carved sanctum and jali."
  },
  {
    id: "temple-003",
    slug: "mandapa-dome-ceiling-mandala",
    name: "Mandapa Dome Ceiling Mandala",
    category: "temple-stone-carvings",
    shortDescription: "Concentric corbelled stone ceiling dome with descending central pendant (padma-kesara).",
    description: "A monumental feat of traditional Indian stone carving. This dome ceiling is assembled from concentric overlapping rings carved with tiers of dancing celestial figures, floral garlands, and culminates in an intricate hanging lotus bud pendant.",
    material: "Pure Makrana White Marble / Dholpur Buff Sandstone",
    dimensions: "210 cm diameter x 65 cm depth (Custom sizes up to 400 cm)",
    finish: "Fine Chiselled and Hand-Buffed Luster",
    featured: false,
    images: [
      "/images/products/ceiling-mandala-01.webp",
      "/images/products/ceiling-mandala-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Assembly": "Dry corbelling segmented rings with precision numbered keyway joints",
      "Pendant": "Detachable hand-chiselled central pendant with interlocking safety pin",
      "Application": "Private shrine ceilings, grand temple sabha mandapas, luxury rotunda domes"
    },
    seoTitle: "Mandapa Stone Dome Ceiling Mandala | Stone Craft Studio",
    seoDescription: "Exquisite concentric stone dome ceiling with carved celestial figures and hanging central lotus pendant."
  },
  {
    id: "temple-004",
    slug: "garbhagriha-carved-entrance-shakha",
    name: "Garbhagriha Carved Entrance Doorframe (Shakha)",
    category: "temple-stone-carvings",
    shortDescription: "Multi-banded sanctum doorway featuring dwarapalas, floral creepers, and Gaja-Lakshmi lintel.",
    description: "Framing the most sacred inner sanctum of traditional temples. This ornate stone doorframe comprises five distinct ornamental bands (Panchashakha) featuring Patra-shakha (foliage), Rupa-shakha (sculptural figures), and a central Gaja-Lakshmi carved upon the lalata-bimba lintel.",
    material: "Bansi Paharpur / Teak Sandstone",
    dimensions: "Door opening 180 cm height x 90 cm width; Overall frame 270 cm x 180 cm",
    finish: "Traditional Chisel Honed Finish",
    featured: false,
    images: [
      "/images/products/doorframe-shakha-01.webp",
      "/images/products/doorframe-shakha-02.webp"
    ],
    customisationAvailable: true,
    specifications: {
      "Iconography": "Five-layered Panchashakha carving with bottom Dwarapalas",
      "Lintel": "Gaja-Lakshmi anointment motif on central keystone",
      "Durability": "Resistant to camphor, incense smoke, and ritual water ablutions"
    },
    seoTitle: "Garbhagriha Carved Sanctum Stone Doorframe | Stone Craft Studio",
    seoDescription: "Traditional multi-layered stone temple entrance doorway featuring intricate shakha carvings and guardian figures."
  }
];

export default products;
