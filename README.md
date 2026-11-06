# Mahathir Mahi — Personal Portfolio

Responsive personal portfolio built with HTML, CSS and vanilla JavaScript. All supplied images, organization logos, certificate and Canva samples are included in the assets folder.

## Run locally
1. Extract the ZIP file.
2. Open the extracted `mahi-portfolio-final` folder in VS Code.
3. Open `index.html` with Live Server, or open the file directly in a browser.

## Publish using GitHub Pages
1. Sign in to GitHub and create a new **public** repository, e.g. `mahi-portfolio`.
2. Extract this ZIP on your computer. Open the inner `mahi-portfolio-final` folder.
3. Upload **the contents of this folder** to the repository root. Make sure `index.html`, `style.css`, `script.js` and `assets/` are directly visible at the root (do not upload an extra nested folder).
4. On GitHub, open the repository → **Settings** → **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then click **Save**.
7. Wait for GitHub Pages to publish. The website address will be shown in the Pages section, usually `https://YOUR-USERNAME.github.io/mahi-portfolio/`.
8. Whenever you update files, upload/commit the changes to the same repository; GitHub Pages republishes automatically.

## Important: image paths
All images are stored inside `assets/images/`. Keep the folder structure intact when uploading. The supplied logos use their actual file extensions (JPG, JPEG, PNG or WEBP). Do not rename files unless you also update the matching `src` path in `index.html`.

### Leadership logos
`assets/images/logos/` contains the supplied logos for Bindass Roleplay Bangladesh, Jamalpur Zilla School, Robotics Society of RUET, RUET Cultural Club (Onuronon), RUET ECE Club, Ovijatrik, RUET E-sports Community, Remian Community, GMA, ECE'23 Class Representative, RUET and Bangladesh Ministry of Education. Onuronon and RUET Cultural Club are represented as one club entry.

### Creative work
- Two Career Forum video thumbnails are included, with the supplied Facebook Reel links attached. Four additional Reel links are listed below the video cards.
- Five Canva screenshots are stored in `assets/images/canva/`.
- ECE magazine and photography images are in `assets/images/`.

### CV
The CV PDF is included at `assets/mahi-cv.pdf`.

## Troubleshooting GitHub Pages
- Check that `index.html` is at the repository root.
- Check that folder names and file extensions match exactly; GitHub Pages uses case-sensitive paths.
- Keep `assets/`, `style.css` and `script.js` alongside `index.html`.
- After uploading changes, hard-refresh with `Ctrl + Shift + R`.
