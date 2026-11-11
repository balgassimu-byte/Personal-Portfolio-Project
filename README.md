# Algassimu Bangura — Personal Portfolio

Milestone 3 refines my three-page portfolio with accessible color contrast, keyboard support, intentional visual grouping, and an accessible contact form.

## Pages and files

- `index.html` — Home and learning areas.
- `projects.html` — Featured work and skills.
- `about.html` — About, goals, contact information, and contact form.
- `styles.css` — Shared palette, typography, spacing, responsive layouts, and interaction states.
- `contact.js` — Client-side validation, error summary, and email draft preview.

All pages use the same stylesheet, Poppins headings, Open Sans body text, and Arial fallbacks. Older `[1]` files are archival copies and are not linked from the site.

## Accessibility fixes

- I changed the Home button background from teal `#2A9D8F` to mint `#80DDD0`, raising navy-text contrast from 3.74:1 to 7.81:1.
- I changed the logo dot to mint `#80DDD0` on all three pages to fix its low-contrast color pairing.
- I replaced teal focus outlines with dark teal on light backgrounds and mint inside the navy hero so keyboard focus remains visible.
- I added `tabindex="-1"` to each main-content target so the skip link can move keyboard focus to the page content.
- I added explicitly associated labels and grouped contact fields in fieldsets with legends to communicate each field's purpose.
- I added inline error text, `aria-invalid`, a focused linked error summary, and text-only draft review to support form completion without relying on color or dialogs.
- I hide an email draft as soon as a field changes and use `textContent` for user-provided preview content so stale content is not sent and input is not interpreted as markup.

All used foreground/background text pairs were checked against WebAIM Contrast Checker values documented below; current pairs meet WCAG AA's 4.5:1 normal-text threshold. The mint/navy combination is 7.81:1, white/navy is 12.4:1, charcoal/off-white is 14.2:1, slate/off-white is 5.90:1, slate/contact background is 5.39:1, dark teal/off-white is 6.22:1, and dark red/white is 8.13:1. Decorative teal borders are not used as text. WebAIM check responses are not included in this repository; recheck all rendered states with the checker when publishing.

## Visual design: Gestalt principles

- **Proximity:** I keep each project title, description, and skill tags close together inside its card, while larger gaps distinguish separate cards and sections.
- **Similarity:** I use matching card shapes, top borders, headings, and spacing for related learning and project cards, with a consistent navigation and palette across all pages.
- **Common region:** I place related form controls in visibly bordered fieldsets with legends and group the contact content in a tinted panel.

The shared palette is navy `#12355B`, dark teal `#17675E`, mint `#80DDD0`, off-white `#F7F7F2`, white `#FFFFFF`, charcoal `#252525`, muted slate `#526172`, contact background `#E5EFEB`, and error red `#9B1C20`. Original teal `#2A9D8F` is reserved for decorative borders.

## Accessible contact form

The form has four required controls: Full name, Email address, Subject, and Message. Labels are programmatically associated, related controls are grouped, helper text is linked with `aria-describedby`, and client-side errors identify invalid fields and link from a summary that receives focus. Valid input displays a text-only preview and an encoded `mailto:` link; the website does not send or store messages. JavaScript enables the review button, while a direct email link remains available when scripting is disabled.

## WAVE and verification status

WAVE has **not yet been run on this updated version**: the available editing tools cannot submit pages to WAVE, and the published site may not yet reflect these repository changes. I will not claim zero WAVE errors until I publish and run the reports. After deployment, check the initial state and contact form states (empty submission, invalid email, and valid review), then record actual results here:

- [Home WAVE report](https://wave.webaim.org/report#/https://balgassimu-byte.github.io/Personal-Portfolio-Project/)
- [Projects WAVE report](https://wave.webaim.org/report#/https://balgassimu-byte.github.io/Personal-Portfolio-Project/projects.html)
- [About & Contact WAVE report](https://wave.webaim.org/report#/https://balgassimu-byte.github.io/Personal-Portfolio-Project/about.html)

Before submission, also inspect all three pages at 320px, 768px, and 1200px for horizontal scrolling and overlapping content; use keyboard navigation and a screen reader to verify the skip link, error summary, and draft preview.

## Publish

Commit the updated files to the default branch and wait for GitHub Pages to deploy before completing WAVE and visual checks.

Repository: https://github.com/balgassimu-byte/Personal-Portfolio-Project

Live site: https://balgassimu-byte.github.io/Personal-Portfolio-Project/
