# Rommel Jireh T. Libarnes — Personal Portfolio

A responsive personal portfolio website built with **HTML5, CSS3, Bootstrap 5, and JavaScript**.

## Included sections
- Home / introduction
- About me and personal information
- Skills and technologies
- Project showcase with category filters
- Education
- Contact section
- Responsive navigation
- Light/dark theme toggle
- Typing text animation
- Scroll reveal animations
- Back-to-top button
- Contact form that prepares an email using the visitor's email application

## Folder structure

```text
rommel-personal-portfolio/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
        └── (place your profile photo and project screenshots here)
```

## How to run
1. Extract the ZIP file.
2. Open the `rommel-personal-portfolio` folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. An internet connection is needed for the Bootstrap CDN, Bootstrap Icons, and Google Fonts.

## Important: personalize before submitting
Search `index.html` and `assets/js/script.js` for the sample values:
- `your.email@example.com` — replace with your actual email address.
- `href="#"` — replace with your GitHub and social media profile URLs.
- `Add GitHub link` / `Add project link` — replace with actual repository or demo links.
- `ADD YOUR PHOTO` — replace the placeholder with your own image.
- Update the project descriptions to accurately match the final state of each project.
- Remove any skill or technology you cannot confidently explain.

### Add your profile photo
1. Copy your image into `assets/images/`, for example `profile.jpg`.
2. In `index.html`, find the `profile-placeholder` block.
3. Replace that block with:

```html
<div class="profile-photo">
  <img src="assets/images/profile.jpg" alt="Portrait of Rommel Jireh Libarnes">
</div>
```

4. Add this CSS to `assets/css/style.css`:

```css
.profile-photo {
  width: 270px;
  height: 330px;
  border-radius: 140px 140px 35px 35px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-shadow: 0 25px 70px rgba(104, 87, 232, .22);
}
.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## GitHub repository
1. Sign in to GitHub and create a new public repository, for example `rommel-personal-portfolio`.
2. Upload the extracted project files. Keep the folder structure intact.
3. Add a repository description such as: `My responsive personal portfolio built with HTML, CSS, Bootstrap, and JavaScript.`
4. Commit the files.

If Git is installed, you can also use:

```bash
git init
git add .
git commit -m "Create personal portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/rommel-personal-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username and use the repository URL shown by GitHub.

## Deploy with GitHub Pages
1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the website. The public URL will appear in the Pages settings.

## Technologies used
- HTML5 semantic elements: `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`
- CSS3: custom properties, Flexbox, Grid, media queries, transitions, and animations
- Bootstrap 5: responsive grid, navigation, and layout utilities
- JavaScript: DOM manipulation, events, arrays, functions, `localStorage`, `IntersectionObserver`, and form validation

## Note about the contact form
The contact form uses a `mailto:` link. It opens the visitor's email application and does not save or send messages through a server. For a fully functional online contact form, connect a backend or a form service.


## Credly badge added
The Credly badge link is included in the hero section and in a dedicated **Certifications & Badges** section. The link opens your credential on Credly so visitors can verify it. The exact badge title is intentionally not guessed.

To show the actual badge artwork, sign in to Credly, open the badge, choose **Share**, download the badge image, and save it as `assets/images/credly-badge.png`. The current card uses a designed badge placeholder until you add the official image. Keep the badge public so visitors can view its details.

## Connecting the contact form to your email
At present, the form uses `mailto:`. This opens the visitor's email application with the message filled in; it does not send messages directly from the website or store them.

For a real website form, use a form service such as EmailJS or Formspree. With EmailJS: create an EmailJS account, connect the inbox where you want to receive messages, create an email template with fields for sender name, sender email, subject, and message, then copy the **Public Key**, **Service ID**, and **Template ID** into the website's JavaScript integration. Never put your email password or private API secret in front-end code. Test the form after deployment. The current form can continue to use `mailto:` until those account-specific values are configured.

## Account settings clarification
This is currently a public portfolio website, not a user-account application. It has a light/dark theme preference saved in the visitor's browser, but no login, registration, password, or profile-management system. Add authentication and an account settings dashboard only if those are specifically required; they need a backend and database, not just HTML/CSS/JavaScript.
