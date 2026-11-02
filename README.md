# Stone Craft Studio — Architectural Stone Carving & Craftsmanship Website

A luxury, minimal, and modern website built for a premier stone carving and architectural decoration business based in Maharashtra, India.

---

## 🏛️ Business Disciplines & Specialisations

1. **Stone Wall Decorations** — Hand-chiselled wall panels, 3D relief murals, and architectural jali screens.
2. **Stone Idols & Sculptures** — Monolithic deities, garden sculptures, and sacred temple iconography.
3. **Architectural Stone Designs** — Portals, ornate entry arches, balustrades, brackets, and cornices.
4. **Custom Stone Work** — Cascading lotus fountains, monolithic estate urns, and tailor-made creations.
5. **Stone Pillars** — Fluted columns, lotus capitals, and classical mandapa stone pillars.
6. **Temple Stone Carvings** — Ceiling mandalas, sanctum entrance doorframes (shakhas), and shikhara elements.

---

## 🎨 Design System & Visual Identity

The design adheres strictly to a **Luxury Architectural / Minimal** aesthetic:

- **Primary Background:** `#F7F5F0` (warm limestone ivory)
- **Secondary Background:** `#EAE4D9` (subtle sandstone tone)
- **Sandstone Accent:** `#B49A7B` (Dholpur sandstone gold)
- **Bronze Accent:** `#96734F` (deep chiselled bronze)
- **Primary Text:** `#272521` (rich basalt charcoal)
- **Secondary Text:** `#777168` (refined stone grey)
- **Dark Section:** `#292722` (deep basalt stone)
- **Typography:** *Playfair Display* (Classical Editorial Serif) paired with *Inter* (Clean Modern Sans-Serif)

---

## ⚙️ Central Brand Configuration

All business branding, contact numbers, addresses, and form endpoints are managed from a single central configuration file:

📁 **`src/config/siteConfig.js`**

```javascript
export const siteConfig = {
  businessName: "Stone Craft Studio",
  shortBusinessName: "Stone Craft",
  tagline: "Where Stone Becomes Timeless Art",
  description: "Handcrafted architectural stone carvings...",
  
  // Contact details
  phoneNumber: "+91 98765 43210",
  phoneNumberRaw: "+919876543210",
  whatsappNumber: "+919876543210", // wa.me click-to-chat format
  email: "contact@stonecraftstudio.com",
  
  // Location
  city: "Pune",
  state: "Maharashtra",
  country: "India",
  
  // External form endpoint (e.g., Formspree)
  formEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
};
```

---

## 📦 Product & Content Management Guide

The website is frontend-only, with data stored in clean, structured JavaScript files. You do not need to edit page templates or components to manage products.

### 1. How to Add a New Product

1. **Add Images:** Place your images (preferably `.webp` format) in:
   ```
   public/images/products/
   ```
   *(e.g., `my-new-carving-01.webp`, `my-new-carving-02.webp`)*

2. **Add Entry to `src/data/products.js`:** Open `src/data/products.js` and add an object to the `products` array:
   ```javascript
   {
     id: "stone-wall-004",
     slug: "peacock-relief-sandstone-panel",
     name: "Peacock Relief Sandstone Panel",
     category: "stone-wall-decorations", // Must match one of the 6 category slugs
     shortDescription: "Hand-chiselled peacock and floral relief mural.",
     description: "Full editorial description of the carving, stone source, and artistic details.",
     material: "Dholpur Beige Sandstone",
     dimensions: "150 cm x 90 cm x 8 cm (Customisable)",
     finish: "Hand-Chiselled Natural Matte",
     featured: true, // Set to true to highlight on the homepage
     images: [
       "/images/products/my-new-carving-01.webp",
       "/images/products/my-new-carving-02.webp"
     ],
     customisationAvailable: true,
     specifications: {
       "Weight": "Approx. 85 kg",
       "Installation": "Stainless steel anchor brackets",
       "Suitability": "Interior feature walls & courtyards"
     },
     seoTitle: "Peacock Relief Sandstone Panel | Stone Craft Studio",
     seoDescription: "Explore bespoke handcrafted peacock relief stone panels in natural sandstone."
   }
   ```

3. **That's it!** The product automatically:
   - Appears in `/collections/stone-wall-decorations`
   - Generates its own SEO page at `/products/peacock-relief-sandstone-panel`
   - Appears in the Homepage Featured section (if `featured: true`)
   - Links dynamically with WhatsApp enquiries
   - Updates the XML sitemap (`/sitemap.xml`) automatically

---

### 2. How to Edit an Existing Product

Open `src/data/products.js`, search for the product's `id` or `slug`, and update the fields (e.g., description, dimensions, material, or images).

---

### 3. How to Remove a Product

In `src/data/products.js`, delete or comment out the corresponding product object.

---

### 4. How to Manage Completed Projects

Open `src/data/projects.js` and edit or append new architectural case studies:
```javascript
{
  id: "project-007",
  slug: "luxury-residence-mandapa",
  title: "Private Residence Sanctum Mandapa",
  category: "Temple Stone Carvings",
  location: "Nashik, Maharashtra",
  year: "2024",
  clientType: "Private Villa",
  description: "Monolithic sandstone dome ceiling with floral brackets...",
  images: ["/images/projects/project-nashik-01.webp"],
  scope: ["Carved ceiling dome", "Four fluted columns"],
  featuredOnHome: true
}
```

---

## 💬 WhatsApp Integration

The website features deep WhatsApp click-to-chat integration:

- **Floating WhatsApp button:** Fixed on every page with a quick consultation prompt.
- **Product Details button:** Automatically pre-fills the message with the specific product name and page URL:
  > *"Hello, I am interested in [Product Name]. Please share more details.*
  > *Product Link: https://stonecraftstudio.com/products/[slug]"*
- **Custom Project button:** Pre-fills the enquiry topic.

All WhatsApp links update instantly when you change `whatsappNumber` in `src/config/siteConfig.js`.

---

## 📬 Contact Form Integration

The contact form is configured to connect to external services such as **Formspree** or custom webhook APIs:

1. Sign up at [Formspree.io](https://formspree.io).
2. Create a form and copy your endpoint URL (e.g., `https://formspree.io/f/xv...`).
3. Add it to your `.env.local` or environment variables:
   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
4. **Fallback Behavior:** If no endpoint is configured, the form will **never falsely claim** submission. Instead, it provides immediate 1-click WhatsApp and telephone links with the user's message pre-filled so no enquiry is lost.

---

## 🔍 SEO & Structured Data

- **Dynamic Metadata:** Canonical URLs, Open Graph, and Twitter card tags on every page.
- **JSON-LD Structured Data:**
  - `HomeAndConstructionBusiness` / `LocalBusiness` schema with Maharashtra geographical targeting.
  - `BreadcrumbList` schema for accessible navigation hierarchy.
  - Genuine `Product` schema without fabricated prices, ratings, or stock claims.
- **Automated XML Sitemap:** Available at `/sitemap.xml`.
- **Search Engine Directive:** Available at `/robots.txt`.
- **Google Search Console:** Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in your environment.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Production Build

```bash
# Build production bundle and prerender all 33+ pages
npm run build

# Start production server
npm start
```
