---
name: 番思 FANSI
description: 明亮客厅里的文化社交与生活提案
colors:
  paper: "#fff9f0"
  white: "#fffdf9"
  apricot: "#f6ddc5"
  coral: "#e97556"
  blue: "#b9dce8"
  ink: "#263632"
  muted: "#596761"
  line: "#dfded4"
  accent: "#a83c25"
  canvas: "#efece4"
  focus: "#286b84"
  primary-text: "#1c302a"
  coral-hover: "#ef8768"
  field-border: "#bdbfb5"
typography:
  display:
    fontFamily: "FansiDisplay, 'Songti SC', 'STSong', serif"
    fontSize: "clamp(37px,8.9vw,54px)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-.035em"
  headline:
    fontFamily: "FansiDisplay, 'Songti SC', serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-.03em"
  title:
    fontFamily: "FansiDisplay, 'Songti SC', serif"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-.025em"
  body:
    fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: "12px"
    lineHeight: 1.6
rounded:
  field: "12px"
  search: "14px"
  notice: "16px"
  media: "22px"
  chip: "24px"
  desktop-shell: "28px"
  button: "30px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.coral-hover}"
  button-secondary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-plain:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px"
  filter-selected:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "10px 17px"
  event-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.media}"
  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    padding: "9px 8px calc(8px + env(safe-area-inset-bottom))"
  notice:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.notice}"
    padding: "19px"
---

# Design System: 番思 FANSI

## Overview

**Creative North Star: "明亮客厅"**

Warm paper, coral invitations, pale blue reassurance, and deep green writing make the interface feel like a welcoming daytime gathering. The user-approved direction is gentle and human, with spacious single-column content and large photographs of people interacting. It rejects narrow side-by-side photo strips and fluorescent nightlife styling.

This document records the implemented static web prototype in `public/app.css` and `public/app.js`, not a native WeChat mini-program or a production booking service. Keep the experience-version, example-event, AI-image, and browser-local-data disclosures legible. These are constraints on how the interface represents its actions, not optional legal fine print. Surface composition remains in `.impeccable/surfaces/home.md`.

**Key Characteristics:**

- Warm white surfaces with coral action and pale blue support.
- Large human-interaction imagery with honest AI-scene labeling.
- Expressive Chinese serif headings and practical sans-serif controls.
- Rounded, flat, single-column mobile surfaces.
- Explicit local-only prototype actions.

## Colors

The palette pairs a warm domestic foundation with inviting coral and calm blue; semantic text is darker than decorative accents.

### Primary

- **Living Coral (`coral`)** fills primary calls to action, selected filters, the create-navigation disc, and the introductory underline. Primary controls use `primary-text`, not white text.
- **Deep Terracotta (`accent`)** carries prices, categories, active navigation, form status, and saved-state emphasis. Do not substitute the lighter coral for small informative text.
- **Coral Hover (`coral-hover`)** is the primary button's implemented hover state.

### Secondary

- **Clear-Sky Blue (`blue`)** supports secondary buttons, notices, local-template help, invitation bands, and text selection. It is not an error color.

### Tertiary

- **Soft Apricot (`apricot`)** distinguishes tags, letter avatars, sequence markers, checked choices, and saved controls.

### Neutral

- **Warm Paper (`paper`)** is the application ground; **Porcelain (`white`)** lifts cards, fields, and fixed bars without shadow.
- **Deep Green Ink (`ink`)** is default text; **Sage Gray (`muted`)** carries supplementary copy.
- **Linen Line (`line`)** separates surfaces and list items; `field-border` provides a stronger form boundary.
- **Outer Canvas (`canvas`)** frames the mobile app on wider screens. **Focus Blue (`focus`)** marks keyboard focus.

**The Semantic Contrast Rule.** Coral is the action fill; terracotta is the small-text accent. Preserve their distinct jobs.

## Typography

The local `FansiDisplay` font loads from `public/assets/display.woff2` with `font-display: swap` and weight 700. Songti/STSong are serif fallbacks. Body and controls use PingFang SC, Microsoft YaHei, and sans-serif.

General display headings follow the frontmatter clamp; compact screens override them to 36px, while desktop presentation uses 54px. The homepage deliberately uses 38px/1.07 on mobile and 48px on desktop, compact top padding (10px/4px) and intro padding (0/8px) so the first activity title is visible above navigation. Detail headings use the headline role, event names the title role. Section headings are 26px, weight 700, line-height 1.35; supporting metadata is 12px. Prices use bold 32px sans-serif numerals with tabular figures, reduced to 29px in the action bar. Demo disclosure copy is 11px in the current implementation; do not reduce it further.

## Layout

The application is a centered, single-column shell capped at 560px. It remains a mobile composition on desktop, not a multi-column dashboard. The surrounding body has 28px vertical padding from 700px upwards; the shell receives a border and rounded desktop frame. Below or at 370px, form pairs stack, controls tighten, and the weekend link leaves its absolute position.

Primary content uses 24px horizontal padding; event feeds use 16px. Form/feed gaps are 23px. Facts and paired fields use two columns until the compact form override. Category filters scroll horizontally. The shell reserves 110px below content for fixed navigation/action bars; fixed bars match the 560px maximum and include the device safe-area inset.

Large imagery is cropped with `object-fit: cover`: the home feature uses aspect ratio 1/1.12, standard event cards 1.06, and detail imagery 1/1.06. Preserve whole scene legibility when cropping. Small related-item thumbnails are supporting navigation, not a substitute for the hero scene.

## Elevation & Depth

The system is flat: no box-shadow vocabulary is implemented. Off-white surfaces, pale colored panels, and one-pixel boundaries supply separation. Fixed navigation/action bars sit at stacking level 30; transient feedback at 90; the keyboard skip link at 100. Do not introduce floating-glass or heavy shadow effects.

## Shapes

Media and activity cards share generous corners; notices are more compact, fields tighter, and buttons and chips pill-shaped. Circular utility controls, letter avatars, and numbered steps provide a consistent secondary geometry. Cards clip their photography to the outer silhouette. Icons are 22px outlined SVGs with 1.8-unit strokes, rounded caps, and rounded joins; contextual sizes range from 16px metadata to 24px navigation.

## Components

### Buttons

Primary coral, secondary blue, and neutral outlined variants share a 48px minimum height and semibold label. Primary hover brightens the coral. No special hover is currently defined for secondary/plain buttons; do not invent one in implementation documentation. Disabled buttons use half opacity and a default cursor. Keyboard focus is a 3px focus-blue outline with 4px offset.

### Filters and choices

Category pills have a 44px minimum height, transparent resting fill, and coral selected fill with bold text. Selection uses `aria-pressed`. Form radio choices use porcelain resting fill and apricot checked fill with a terracotta border; focus is transferred to the visible choice label.

### Activity cards and notices

Activity cards combine scene photography, an overlaid category badge and 43px save control, then 18px/19px/20px content padding. A title, subtitle, wrapping metadata, price, and action create the reading order. Save controls show `aria-pressed` and a filled icon when saved. Blue notices and apricot provenance panels use tonal separation, not severity semantics.

### Inputs

Fields have a stronger neutral border, 48px minimum height, and visible labels. Textareas start at 110px and resize vertically. Native browser validation is used; a custom error-state design has not been implemented. Local save outcomes appear inline or in a toast. Do not imply backend submission.

### Navigation and action bar

Three equal navigation cells show icon and label, with terracotta active text through `aria-current="page"`. The central create action has a coral circular mark. Detail pages replace navigation with a price and experience-registration action. Retain safe-area padding and content clearance.

### Motion and feedback

Image hover applies a 0.2s brightness change. Scrolling is smooth by default. Reduced-motion preference disables smooth scrolling, transitions, and animations. Toasts are temporary three-second confirmations without invented entrance motion. Sharing uses native sharing, clipboard, then a visible copy-link fallback.

## Do's and Don'ts

### Do:

- Do preserve coral action fill and dark readable labels.
- Do lead with a large, coherent scene of people interacting.
- Do preserve visible keyboard focus and reduced-motion behavior.
- Do label AI scenes and example activity details honestly.
- Do distinguish saved local intent from registration, payment, or a reserved seat.

### Don't:

- Don't replace the approved warm daytime palette with nightlife fluorescence.
- Don't turn the leading scene into parallel narrow photo strips.
- Don't add heavy shadows or glass layers to flat surfaces.
- Don't represent local templates as a connected AI service.
- Don't present generated scenes as real event records or host portraits.
