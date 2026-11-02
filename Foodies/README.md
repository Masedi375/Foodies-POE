# Foodies Website — Part 3

Foodies is a responsive recipe-inspiration website built with HTML5, CSS3 and vanilla JavaScript. It is a static front-end project.

## Pages and files
- `index.html` — hosting entry point redirects to `Home.html`.
- `Home.html` — homepage and recipe discovery.
- `About.html` — organisation story, mission, audience and FAQ accordion.
- `Service.html` — dynamically rendered recipe catalogue with search, category filtering, sorting and expandable recipe instructions.
- `Gallery.html` — responsive image gallery with keyboard-accessible lightbox.
- `enquiry.html` — enquiry form with client-side validation and context-specific on-page responses.
- `Contact.html` / `contact.html` — general contact form; validated information is compiled into a pre-addressed email. Both files are included for case-sensitive hosting compatibility and the brief's lowercase filename.
- `css/styles.css` — shared responsive styles, transitions, reduced-motion support and focus states.
- `js/recipes-data.js`, `js/recipes.js` — recipe data and dynamic search/filter/sort rendering.
- `js/gallery.js` — gallery lightbox.
- `js/enquiry.js` — client-side validation and asynchronous Netlify Forms submission for enquiries.
- `js/contact.js` — contact form validation and `mailto:` email hand-off.
- `robots.txt`, `sitemap.xml` — crawler guidance and sitemap.

## Part 3 implementation and changelog
### Address and location update (2 November 2026)
- Added the user-provided Foodies address (17337 Alana Street, Protea Glen Ext 16 Phase 4, Johannesburg, Gauteng, South Africa) to both contact-page filename variants.
- Added a responsive Google Maps embed and a link to open the address in Google Maps. The map uses an address search query; verify the map pin and spelling before publishing.

### 2026-11-02 — Part 3 functionality and SEO
- Added unique page titles and descriptive meta descriptions to the main site pages and enquiry page.
- Added an enquiry page with required name, email, enquiry type and details fields, HTML5 constraints, JavaScript validation and relevant responses for recipe guidance, services, sponsorship/partnership and volunteering.
- Configured the enquiry form for Netlify Forms with a named form, static form-detection attributes, a honeypot field and URL-encoded asynchronous submission (AJAX). The browser displays a success acknowledgement only after the endpoint responds successfully.
- Added a Netlify `_headers` file with common browser security headers (content-type sniffing protection, referrer policy, permissions policy, frame protection and HSTS). These headers take effect when deployed on Netlify; hosting-provider support and HTTPS configuration must be verified after deployment.
- Added a lowercase `contact.html` copy alongside the existing `Contact.html` to meet the brief while preserving existing navigation/file references.
- Improved contact form validation and email compilation. Valid entries open the visitor's email application addressed to `foodies_2026@gmail.com`; the visitor must press Send.
- Replaced static recipe markup with JavaScript-rendered recipe cards. Added text search, meal-category filtering, alphabetical sorting and expandable ingredients/method sections. Added six recipe entries.
- Added a keyboard-accessible gallery lightbox using the native HTML dialog element.
- Added an FAQ accordion using native `details` and `summary` elements.
- Added entrance transitions, hover feedback, visible keyboard focus and `prefers-reduced-motion` support.
- Added lazy loading/async decoding to content images where appropriate and retained responsive image sources.
- Added `robots.txt`, `sitemap.xml` and `index.html` for static hosting. The sitemap and robots file contain a domain placeholder that MUST be replaced with the final published domain before deployment.
- Updated the navigation to include the enquiry page and maintained internal links between site sections.

### Previous project improvements
- Added a consistent responsive header, navigation and footer across the pages.
- Added responsive homepage hero and introductory feature cards.
- Reworked About, Recipes and Gallery layouts to use consistent design components.
- Added responsive breakpoints and accessible form labels.

## Forms, limitations and security notes
- **Enquiry form:** validates in the browser and submits asynchronously to Netlify Forms. This requires deploying the project to Netlify with Forms enabled; the form service will not operate when opened directly from a local file or on an unrelated host. Confirm form detection and submission in the Netlify dashboard after the first deploy. Browser validation is not a substitute for server-side validation.
- **Contact form:** validates data and opens the user's email application with a pre-filled email to `foodies_2026@gmail.com`. The visitor must send it. This is not automatic email delivery.
- **AJAX/backend:** the enquiry form uses Netlify Forms AJAX when deployed on Netlify. Netlify provides hosted form handling, but this project does not include a custom application server or recipe database. Configure notification recipients and spam controls in the Netlify dashboard, review submissions, and do not collect sensitive information. The contact form remains a mailto hand-off so the visitor can review and send the compiled email.
- **Interactive map/local SEO:** not added because no public Foodies street address or physical customer-facing location was supplied. Add a map and local business details only if Foodies has a real public location.
- **Off-page SEO:** backlinks and social promotion require external accounts/partners and cannot be created by website code alone. Add real social profile links and seek relevant, legitimate backlinks after publication.
- **Sitemap:** replace `REPLACE-WITH-YOUR-DOMAIN` in both `sitemap.xml` and `robots.txt` with the actual HTTPS domain after deployment.

## Test checklist
1. Open `index.html` or `Home.html`; test all navigation links.
2. Open `Service.html`; search for a recipe, filter each category and test both sort orders. Open and close recipe details.
3. Open `Gallery.html`; activate images by mouse, Enter and Space; close the lightbox using its close button, backdrop or Escape.
4. Open `About.html`; expand and collapse FAQ questions.
5. Open `enquiry.html`; test empty/invalid fields, then each enquiry type. Confirm that the enquiry is submitted after deployment on Netlify and that the on-page acknowledgement appears.
6. Open `Contact.html` or `contact.html`; test invalid fields, then valid data. Confirm the email application opens with recipient, subject and message populated. Do not assume the email was sent until the visitor presses Send.
7. After deploying on Netlify, submit a test enquiry and confirm it appears under Forms in the Netlify dashboard; configure email notifications there. The AJAX form cannot be tested from a local file preview.
8. Test at mobile, tablet and desktop widths and with keyboard-only navigation. Check reduced-motion settings.
9. Validate HTML/CSS, test page speed, and verify all image paths on the deployed host.
10. Replace the sitemap domain placeholder, deploy, and submit the sitemap in the relevant search-engine webmaster tools.

## Deployment (GitHub Pages or Netlify)
- Push the complete project folder to the GitHub repository.
- For GitHub Pages, choose the repository branch and root folder in repository Settings → Pages. For Netlify, deploy the project folder or connect the Git repository.
- After the site receives its public HTTPS domain, replace the placeholder domain in `robots.txt` and `sitemap.xml`, commit and redeploy.
- Test the live URL and submit the repository/deployment links through the required LMS.

## Suggested commit messages
- `feat: add enquiry form and client-side validation`
- `feat: add dynamic recipe search filtering and sorting`
- `feat: add accessible gallery lightbox and FAQ accordion`
- `seo: add metadata robots sitemap and hosting entry point`
- `docs: document Part 3 implementation and testing`

## References
- MDN Web Docs — HTML forms: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms
- MDN Web Docs — Constraint validation: https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
- MDN Web Docs — JavaScript DOM: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- MDN Web Docs — HTML dialog element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
- Google Search Central — SEO starter guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central — Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central — Robots.txt: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Netlify Docs — Deploy sites: https://docs.netlify.com/
- GitHub Docs — GitHub Pages: https://docs.github.com/en/pages
