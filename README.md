# Algassimu Bangura — Personal Portfolio

Milestone 2 adds shared styling and responsive layouts to the original three-page HTML portfolio.

## Files

- `index.html` — Home
- `projects.html` — Projects
- `about.html` — About & Contact
- `styles.css` — Shared stylesheet
- `portfolio-wireframe.png` / `.svg` — Original Milestone 1 design reference

The original `[1]` filename suffixes have been removed so that `index.html` is the homepage and relative navigation works.

## Design

The original palette is preserved: navy `#12355B`, teal `#2A9D8F`, off-white `#F7F7F2`, charcoal `#252525`. Darker teal `#17675E` is used for readable links on light backgrounds. Poppins headings are paired with Open Sans body text through Google Fonts on all pages. The body font updates the original Arial plan to meet the two-Google-Font requirement; Arial remains a fallback. Google Fonts require an internet connection.

The stylesheet uses type selectors (`body`, `h1`, `nav`), class selectors (`.card`, `.card-grid`), and an ID selector (`#contact`). Spacing variables use 8, 16, 24, 32, 48, 64, and 96px. Grid creates multi-column project and learning sections; Flexbox arranges navigation and action links.

## Responsive layout

- Below 768px: stacked header, single-column cards, wrapping navigation.
- At 768px and above: horizontal header, two-column cards and skills, horizontal footer.
- At 1024px and above: larger hero spacing, two-column about and contact layouts, three-column skills.
- A separate reduced-motion query respects accessibility preferences.

## Upload the update

1. Extract the ZIP on your computer.
2. Open `https://github.com/balgassimu-byte/Personal-Portfolio-Project`.
3. Select **Add file → Upload files**.
4. Drag the CONTENTS of the extracted `Personal-Portfolio-Project` folder into the upload area, including `styles.css`. Do not upload the ZIP or the outer project folder.
5. Commit the changes to your default branch. Existing plain-name files will be replaced. Old `[1]` copies can be removed after confirming the new pages work.
6. GitHub Pages already responds at the address below, but currently renders the repository title. After uploading, allow it to redeploy. If needed, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select your default branch (usually `main`), choose **/(root)**, and save.
7. Wait for the Pages deployment to finish, then open the site link shown in Settings → Pages.

GitHub Pages address (responded successfully during this review; corrected portfolio is not yet uploaded):
`https://balgassimu-byte.github.io/Personal-Portfolio-Project/`

## Required browser checks before submission

Local file, navigation-target, stylesheet-link, and media-query checks passed for all three pages. Visual viewport tests remain unverified. Automated browser emulation was attempted during this review, but the browser download returned an invalid archive. Visual viewport checks and the live GitHub Pages deployment must still be completed; they are not claimed as passed.

1. Open the live site in Chrome. Press **F12**, then **Ctrl+Shift+M** to enable device emulation.
2. Select **Responsive** and set the viewport to **320px** wide. Check Home, Projects, and About & Contact. Confirm readable text, visible links, no overlap, and no horizontal scrolling.
3. Repeat at **768px**. Confirm that cards become two columns and the header becomes horizontal.
4. Repeat at **1200px**. Confirm that About/Contact content uses two columns and Projects skills use three columns.
5. Click every navigation link from every page; test the email link and GitHub profile link. Confirm `styles.css` and both Google Font families load in the Network panel.
6. Keep screenshots or notes of your checks if your instructor asks for evidence.

## Submission

Repository URL:
`https://github.com/balgassimu-byte/Personal-Portfolio-Project`

Live site URL (confirm deployment before submitting):
`https://balgassimu-byte.github.io/Personal-Portfolio-Project/`
