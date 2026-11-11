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

All used foreground/background text pairs were checked against WebAIM Contrast Checker values documented below; current pairs meet WCAG AA's 4.5:1 normal-text threshold. The mint/navy combination is 7.81:1, white/navy is 12.4:1, charcoal/off-white is 14.2:1, slate/off-white is 5.90:1, slate/contact background is 5.39:1, dark teal/off-white is 6.22:1, and dark red/white is 8.13:1. Decorative teal borders are not used as text. These documented values should be rechecked against rendered page states with the checker.

## Visual design: Gestalt principles

- **Proximity:** I keep each project title, description, and skill tags close together inside its card, while larger gaps distinguish separate cards and sections.
- **Similarity:** I use matching card shapes, top borders, headings, and spacing for related learning and project cards, with a consistent navigation and palette across all pages.
- **Common region:** I place related form controls in visibly bordered fieldsets with legends and group the contact content in a tinted panel.

The shared palette is navy `#12355B`, dark teal `#17675E`, mint `#80DDD0`, off-white `#F7F7F2`, white `#FFFFFF`, charcoal `#252525`, muted slate `#526172`, contact background `#E5EFEB`, and error red `#9B1C20`. Original teal `#2A9D8F` is reserved for decorative borders.

## Accessible contact form

The form has four required controls: Full name, Email address, Subject, and Message. Labels are programmatically associated, related controls are grouped, helper text is linked with `aria-describedby`, and client-side errors identify invalid fields and link from a summary that receives focus. Valid input displays a text-only preview and an encoded `mailto:` link; the website does not send or store messages. JavaScript enables the review button, while a direct email link remains available when scripting is disabled.

## WAVE and verification status

The latest GitHub Pages deployment completed successfully for commit `62f3883b35ce092ed5ddd9e63fb1b4373caaff2d`. **WAVE has not been run for this deployment.** This environment does not provide the WAVE browser extension or an interactive browser session, so I cannot report results or claim that errors are cleared. The links below open WAVE report pages; they are not evidence of completed audits.

| Page / state | WAVE errors | Contrast errors | Alerts | Status |
| --- | ---: | ---: | ---: | --- |
| Home — initial | Not run | Not run | Not run | Pending manual WAVE check |
| Projects — initial | Not run | Not run | Not run | Pending manual WAVE check |
| About & Contact — initial | Not run | Not run | Not run | Pending manual WAVE check |
| About & Contact — after empty submission | Not run | Not run | Not run | Pending browser-extension check |
| About & Contact — invalid email, other fields completed | Not run | Not run | Not run | Pending browser-extension check |
| About & Contact — valid draft review | Not run | Not run | Not run | Pending browser-extension check |

- [Home WAVE report](https://wave.webaim.org/report#/https://balgassimu-byte.github.io/Personal-Portfolio-Project/)
- [Projects WAVE report](https://wave.webaim.org/report#/https://balgassimu-byte.github.io/Personal-Portfolio-Project/projects.html)
- [About & Contact WAVE report](https://wave.webaim.org/report#/https://balgassimu-byte.github.io/Personal-Portfolio-Project/about.html)

To complete the audit, run WAVE against each live page above. Use the WAVE browser extension for the three About form states because a URL report may reload the page and clear the interactive state. For each run, record the displayed Errors, Contrast errors, and Alerts; fix errors and contrast findings and rerun. Review alerts individually rather than treating them automatically as errors. Also check each rendered foreground/background pair with WebAIM Contrast Checker and verify keyboard focus, error-summary links, and the draft preview. Replace the “Not run” entries only with observed results.

Before submission, inspect all three pages at 320px, 768px, and 1200px for horizontal scrolling and overlapping content; use keyboard navigation and a screen reader to verify the skip link, error summary, and draft preview.

## Publish

The updated files are committed to the default branch and GitHub Pages deployment completed. After completing WAVE and visual checks, add the observed results to the table above.

Repository: https://github.com/balgassimu-byte/Personal-Portfolio-Project

Live site: https://balgassimu-byte.github.io/Personal-Portfolio-Project/
