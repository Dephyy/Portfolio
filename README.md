# Futuristic Portfolio Layout

A responsive, accessible single-page portfolio template with a futuristic visual style (glassmorphism, neon accents, and subtle motion).

## Files

- `index.html` - Main structure and content sections.
- `styles.css` - Theme, layout, responsive breakpoints, and accessibility-focused styling.
- `script.js` - Mobile navigation toggle, dynamic footer year, and basic contact form validation.
- `vercel.json` - Vercel configuration (clean URLs + rewrite to `index.html`).

## Customize Quickly

1. Replace profile text in `index.html`:
   - Name (`Alex Rivera`)
   - Headline (`Creative Developer`)
   - About paragraph
   - Skills and project cards
2. Update navigation labels if you add or remove sections.
3. Change colors in `styles.css` under `:root` variables.
4. Hook contact form to a backend endpoint (for example, an API route) and remove `alert` placeholders in `script.js`.

## Accessibility and UX Notes

- Uses semantic HTML landmarks and labels.
- Includes a skip link for keyboard users.
- Focus styles are visible and consistent.
- Layout adapts from desktop to mobile.

## Run

Open `index.html` in your browser.

## Deploy (Vercel)

This project is a static site, so it can be deployed directly on Vercel.

### Option A: GitHub (recommended)

1. Create a GitHub repository and push this folder.
2. In Vercel, click **New Project** → import your repo.
3. Framework preset: **Other** (static).
4. Build Command: **leave empty**
5. Output Directory: **leave empty** (or set to `.` if prompted)
6. Deploy.

### Option B: Drag & drop

1. In Vercel, choose **Deploy** → **Static** / **Drag and Drop**.
2. Upload this entire folder (make sure `index.html` is at the top level).

## Updating after deploy

Yes—your portfolio can still be modified anytime.

- If you deployed via GitHub: edit files locally → commit/push → Vercel automatically redeploys.
- If you deployed via drag & drop: upload the updated folder again to redeploy.
