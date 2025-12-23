# The Method Room — Static Website

Simple, clean static website for The Method Room (Reformer Pilates studio) with Mindbody booking integration.

**Domain:** www.themethodroom.co.uk

## Hosting on Netlify (Recommended)

### Deploy
1. Create a Netlify account and click "Add new site" → "Import an existing project".
2. If you're not using Git, choose "Deploy manually" and drag-drop the folder.
3. Netlify will deploy and give you a temporary URL.

### Custom Domain (GoDaddy)
1. In Netlify → Site settings → Domain management → Add custom domain: `www.themethodroom.co.uk`.
2. In GoDaddy DNS, add these records:
   - CNAME `www` → your Netlify subdomain (e.g., `your-site.netlify.app`).
   - Optional: A Record (apex) to Netlify if you want root domain; or use Netlify DNS.
3. Enable HTTPS in Netlify (Let's Encrypt) and wait for certificate issuance.

### Netlify Forms (Email notifications)
The contact form is wired to Netlify Forms.
- Submissions appear under Site → Forms.
- Enable email notifications in Site settings → Forms → Notifications.

Form requirements already in `index.html`:
- `data-netlify="true"`, `method="POST"`, and hidden `form-name`.
- Honeypot field `bot-field` to reduce spam.
- Redirects to `thank-you.html` after submit.

## Setup

### 1. Add Your Logo
Place your logo file (`logo.png` or replace the filename in `index.html`) in the root folder. Recommended size: 200px max width.

### 2. Configure Mindbody Integration
In `script.js`, update these fields with your Mindbody details:
```javascript
const MINDBODY_CONFIG = {
  siteId: 'YOUR_SITE_ID',
  apiKey: 'YOUR_API_KEY',
  bookingURL: 'https://your-mindbody-login-page.mindbody.io'
};
```

Mindbody will provide you with the booking page URL when you set up the integration.

### 3. Add Google Maps Embed
In `index.html`, find the empty `<iframe src="">` tag in the contact section and add your Google Maps embed link.

### 4. Update Contact Details
Replace placeholder phone number and social links with actual details.

### 5. Optional: Use Formspree instead of Netlify Forms
If you prefer Formspree:
1. Create a form at https://formspree.io and copy your form endpoint (e.g., `https://formspree.io/f/xyzabc`).
2. Change the contact form tag in `index.html` to:
   `<form id="contactForm" action="https://formspree.io/f/xyzabc" method="POST">`
3. Remove the Netlify-specific attributes/inputs (`data-netlify`, `form-name`, `bot-field`).
4. In Formspree, verify your email and enable notifications.

## Local Testing

```powershell
# Python 3 (if installed)
python -m http.server 8000

# Node (if installed)
npx http-server -c-1 -p 8000
```

Then open `http://localhost:8000` in your browser.

## Notes
- All booking buttons redirect to your Mindbody login page
- Contact form uses Netlify Forms by default; enable email notifications in Netlify
- Responsive design works on mobile, tablet, and desktop
