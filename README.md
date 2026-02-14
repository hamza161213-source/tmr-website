# The Method Room — Website

Modern, responsive website for The Method Room - a boutique, women-only Reformer Pilates studio in Thornton Heath.

**Live Site:** www.themethodroom.co.uk  
**Preview:** https://hamza161213-source.github.io/tmr-website/TMR%20Website/

## Features

- **2-Column Hero Layout** - Desktop: text left, image right | Mobile: stacked single column
- **Collapsible FAQ Accordion** - Smooth animations with rotating maroon arrows
- **Responsive Class Grid** - 2x2 on mobile, 4-column on desktop
- **Netlify Forms Integration** - Contact form + newsletter signup
- **Mobile-Optimized Header** - Logo left, navigation right with "Book Now" button
- **Accessibility** - Keyboard navigation, focus states, descriptive alt text
- **Premium Design** - Cream (#fffbf2) background, burgundy (#942239) accents, luxury typography

## Tech Stack

- Static HTML/CSS/JavaScript
- Fonts: Lora (body), Cormorant Garamond (headings), Playfair Display (hero)
- Netlify hosting with form handling
- Google Maps embed for location
- IntersectionObserver scroll animations

## Contact Information

- **Email:** themethodroom@gmail.com
- **Phone:** +44 7343 032352
- **WhatsApp:** https://wa.me/message/54FXCYXY4SC7O1
- **Address:** 1050-1052 London Road, Thornton Heath, Surrey CR7 7ND
- **Instagram:** @themethodroom.studio
- **TikTok:** @themethodroom

## Deployment

### GitHub Pages (Current Preview)
Site deployed at: https://hamza161213-source.github.io/tmr-website/TMR%20Website/

### Netlify (Production)
1. Connect GitHub repo or drag-drop files
2. Build settings: None (static site)
3. Add custom domain: www.themethodroom.co.uk
4. Configure GoDaddy DNS:
   - CNAME `www` → `your-site.netlify.app`
5. Enable HTTPS (automatic via Let's Encrypt)
6. Enable form notifications: Site settings → Forms → Notifications

### Netlify Forms Setup
Already configured with:
- `data-netlify="true"` on forms
- Honeypot spam protection (`bot-field`)
- Success redirect to `thank-you.html`

## Local Development

Start local server (requires VS Code Live Server or Python):

```powershell
# VS Code Live Server Extension (recommended)
Right-click index.html → "Open with Live Server"

# Python (alternative)
python -m http.server 5500
```

Open: http://localhost:5500

## File Structure

```
TMR Website/
├── index.html           # Homepage
├── styles.css           # All styling
├── script.js            # Interactions + animations
├── assets/
│   ├── editimg.jpg      # Hero image
│   ├── logo.png.png     # Header logo
│   ├── foundations img.png
│   ├── flow img.png
│   ├── strength img.png
│   └── private img.png
├── privacy-policy.html
├── terms-of-service.html
├── cookie-settings.html
├── journal.html
└── thank-you.html
```

## Key Customizations

### Hero Section
- 2-column Grid layout (900px+ breakpoint)
- Image: `assets/editimg.jpg` with bottom positioning
- Responsive: stacks to single column on mobile (450-550px image height)
- Subtle cream-to-transparent gradient overlay on image left edge

### FAQ Accordion
- Click question to expand/collapse
- Smooth cubic-bezier animation (.45s)
- Maroon arrow (›) rotates 90° when active
- Only one answer open at a time

### Mobile Optimizations
- Logo: 60px height
- Classes grid: 2x2 layout
- Hero image: 450-550px height
- Header: horizontal layout (logo left, nav right)

### Button Styling
All buttons (Book Now, Send, Subscribe) use:
- Font: Lora, 1.1rem
- Color: #942239 (burgundy)
- Focus states with visible outlines
- Hover effects with translateY

## Browser Support

- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Safari/Chrome

## TODO

- [ ] Add Mindbody booking URL in `script.js`
- [ ] Replace 4 class card images with high-res versions (1200px+ PNG from Canva)
- [ ] Test all forms on production Netlify
- [ ] Verify Google Maps embed loads correctly

## License

© 2025 The Method Room Limited. All rights reserved.
