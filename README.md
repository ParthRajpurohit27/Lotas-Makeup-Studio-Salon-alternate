# Lotas Makeup Studio & Salon — Website

## 🌸 Complete Website for Lotas Makeup Studio & Salon, Bhopal

---

## 📁 File Structure

```
lotas-salon/
├── index.html                  ← Home Page
├── images/
│   └── logo.jpg                ← Salon logo
├── css/
│   ├── style.css               ← Global styles, navbar, footer
│   ├── animations.css          ← All scroll animations & effects
│   ├── themes.css              ← 4 colour themes + toggle button
│   ├── home.css                ← Homepage-specific styles
│   ├── about.css               ← About page styles
│   ├── services.css            ← Services page styles
│   ├── offers.css              ← Offers/packages page styles
│   ├── gallery.css             ← Gallery page styles
│   ├── reviews.css             ← Reviews page styles
│   ├── contact.css             ← Contact page styles
│   └── booking.css             ← Booking page styles
├── js/
│   ├── main.js                 ← All JS: themes, animations, sliders, effects
│   ├── reviews-data.js         ← 200+ reviews data — EDIT HERE to update
│   ├── offers-data.js          ← Packages data — EDIT HERE to update
│   ├── services-data.js        ← Services list — EDIT HERE to add services
│   └── services-page.js        ← Services page rendering logic
└── pages/
    ├── about.html              ← About Us page
    ├── services.html           ← Services page (auto-rendered from services-data.js)
    ├── offers.html             ← Packages & Offers page
    ├── gallery.html            ← Gallery page
    ├── reviews.html            ← All Reviews page
    ├── contact.html            ← Contact page with Map & FAQ
    └── booking.html            ← Book Appointment page
```

---

## ✏️ How to Edit Content

### Update Phone Number
Search and replace `+91XXXXXXXXXX` with your actual number in ALL files.
Also update WhatsApp links: `wa.me/91XXXXXXXXXX` → `wa.me/91YOURNUMBER`

### Add Your Photos
1. Upload your photos to the `/images/` folder
2. In each HTML file, replace:
   ```html
   src="https://images.unsplash.com/..."
   ```
   with:
   ```html
   src="../images/your-photo.jpg"
   ```
   (use `src="images/your-photo.jpg"` on index.html — no `../`)

### Update Packages/Offers
Edit `js/offers-data.js` — change name, price, includes. Changes reflect on home + offers page automatically.

### Add/Edit Services
Edit `js/services-data.js` — add new services to the appropriate category. They appear on the services page automatically.

### Edit Reviews
Edit `js/reviews-data.js` — add new reviews to the array. Also update `TOTAL_REVIEWS_COUNT`.

### Update Instagram / Facebook Links
Search for `href="#"` near social media icons and replace with your actual profile URLs.

### Update Google Maps
In `contact.html` and `index.html`, replace the Google Maps `<iframe src="...">` with your actual embed code from:
Google Maps → Search your location → Share → Embed a map → Copy HTML

---

## 🎨 4 Themes Available

Click the coloured dots in the top bar to switch themes:
- 🟡 **Gold** (default) — Dark black with gold accents
- 🌸 **Rose** — Dark rose/pink theme
- 🍃 **Emerald** — Dark with emerald green accents
- 💜 **Royal** — Dark with royal purple accents

Theme preference is saved in browser localStorage.

---

## 🚀 Deploying on GitHub + Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Lotas Makeup Studio website initial commit"
git remote add origin https://github.com/yourusername/lotas-salon.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Framework: **Other** (static HTML)
5. Root Directory: `/` (leave as default)
6. Click **Deploy**

Your site will be live at `https://lotas-salon.vercel.app` (or custom domain)

### Step 3: Custom Domain (Optional)
In Vercel dashboard → your project → Settings → Domains → Add your domain

---

## 📞 Quick Checklist Before Going Live

- [ ] Replace `+91XXXXXXXXXX` with real phone number in all files
- [ ] Update WhatsApp links with real number
- [ ] Add Instagram & Facebook profile URLs
- [ ] Upload real salon photos to `/images/` folder
- [ ] Update Google Maps embed with real location
- [ ] Set correct working hours if different
- [ ] Update current offers/packages in `js/offers-data.js`

---

*Website built for Lotas Makeup Studio & Salon, Bhopal — Exclusively for Ladies*
