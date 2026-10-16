---
name: Technical Precision & Ethereal Glow
colors:
  surface: '#0d1322'
  surface-dim: '#0d1322'
  surface-bright: '#33394a'
  surface-container-lowest: '#080e1d'
  surface-container-low: '#151b2b'
  surface-container: '#191f2f'
  surface-container-high: '#242a3a'
  surface-container-highest: '#2f3445'
  on-surface: '#dde2f8'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dde2f8'
  inverse-on-surface: '#2a3040'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#68f5b8'
  on-tertiary: '#003824'
  tertiary-container: '#46d89d'
  on-tertiary-container: '#005a3d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0d1322'
  on-background: '#dde2f8'
  surface-variant: '#2f3445'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  badge-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2rem
  margin: 1.25rem
  margin-md: 2rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The brand identity centers on elite technical execution, architectural clarity, and forward-looking product design. Tailored for high-growth tech teams, venture-backed founders, and technical leaders, the UI evokes confidence, hyper-competence, and understated sophistication.

The visual style blends modern technical minimalism with subtle dark-mode glassmorphism and radiant cyan ambient luminescence. The interface maintains functional clarity through disciplined whitespace, delicate hair-thin luminous borders, and structured monospace data tags, paired with smooth interactive states that feel tactile and responsive.

## Colors

The palette operates on a calibrated dark-space hierarchy:

- **Canvas & Backgrounds**: The base canvas is anchored by `#0B1120` (rich dark navy).
- **Surfaces & Containers**: Base cards and modules rest on `#172033` (slate navy), elevating to `#1E293B` on hover, focus, or elevated hierarchy.
- **Accents & Illuminations**: Primary focus and interactive states rely on `#22D3EE` (vibrant cyan), supported by `#06B6D4` / `#38BDF8` for linear gradient transitions. `#10B981` (emerald) is reserved exclusively for uptime, deployment success, availability indicators, and production-ready tags.
- **Typography & Content**: Headlines and primary interactions use `#F8FAFC` (crisp white). Supporting descriptions use `#94A3B8` (slate gray), and disabled, timestamp, or micro-metadata use `#64748B`.
- **Structural Outlines**: Default boundaries employ `rgba(255, 255, 255, 0.08)` or `#334155`. Interactive card borders transition to `rgba(34, 211, 238, 0.35)` on hover.

## Typography

The typographic hierarchy leverages **Plus Jakarta Sans** for primary human-interface reading, delivering balanced geometric shapes with humanist warmth across headings and continuous body text.

**JetBrains Mono** provides precision technical grounding for system telemetry, code snippets, project metric badges, git hashes, and categorization pills. Headings use negative letter-spacing to maintain optical density against dark backgrounds, while uppercase monospaced labels use open tracking (`0.06em`) to ensure legibility at micro-scales.

## Layout & Spacing

The layout is built upon an 8pt spatial baseline arranged within a maximum content container of `1200px` (or `75rem`).

- **Grid Architecture**: 12-column layout on desktop (`>= 1024px`) with `2rem` gutters; 8-column layout on tablet (`>= 768px`) with `1.5rem` gutters; 4-column layout on mobile (`< 768px`) with `1rem` gutters.
- **Section Rhythm**: Page sections utilize vertical intervals of `5rem` to `7.5rem` on desktop, reducing to `3rem` on mobile to preserve visual breathing room without disorienting content continuity.
- **Component Padding**: Card internals use `space-lg` (`1.5rem`), compact controls use `space-sm` (`0.5rem`) vertical by `space-md` (`1rem`) horizontal.

## Elevation & Depth

Visual hierarchy is established using frosted glassmorphism, surface tonal shifts, and ambient cyan radiants:

1. **Base Layer (Ground)**: `#0B1120`, plain deep navy canvas with optional radial gradient ambient mesh (`radial-gradient(ellipse at top, rgba(34, 211, 238, 0.08) 0%, transparent 60%)`).
2. **Surface Tier (Resting Cards & Navigation)**: Background `rgba(23, 32, 51, 0.75)` with `backdrop-filter: blur(12px)` and a `1px` border of `rgba(255, 255, 255, 0.08)`. Shadow: `0 4px 20px -2px rgba(0, 0, 0, 0.4)`.
3. **Elevated Tier (Hover & Modals)**: Background `#1E293B`, border `rgba(34, 211, 238, 0.3)`. Shadow: `0 10px 30px -5px rgba(0, 0, 0, 0.6), 0 0 25px -4px rgba(34, 211, 238, 0.15)`.
4. **Accent Glow (Focus & Action)**: Direct cyan drop-shadow for active status nodes and focus rings: `0 0 16px rgba(34, 211, 238, 0.4)`.

## Shapes

The design system incorporates geometric curvature tailored for contemporary software interfaces:

- **Inputs, Buttons, and Selectors**: `0.75rem` (`rounded-xl`) to establish an approachable tactile feel.
- **Project Cards, Terminal Windows, and Modals**: `1rem` (`rounded-2xl`) with matching inner borders to prevent subpixel antialiasing artifacts.
- **Badges, Status Indicators, and Tech Stack Chips**: Full pill shape (`9999px`) to immediately signal categorical, non-interactive or micro-interactive data.

## Components

### Buttons
- **Primary Action**: Gradient fill from `#22D3EE` to `#06B6D4` with text in `#0B1120` (`font-weight: 600`). On hover, brightness shifts upward with a cyan glow (`box-shadow: 0 0 20px rgba(34, 211, 238, 0.4)`).
- **Secondary / Outline**: Background `rgba(30, 41, 59, 0.5)`, text `#F8FAFC`, border `1px solid rgba(255, 255, 255, 0.12)`. On hover: border shifts to `rgba(34, 211, 238, 0.4)` and background to `#1E293B`.
- **Ghost Action**: Transparent background, text `#94A3B8`. Hover transitions text to `#22D3EE` with minimal background wash `rgba(34, 211, 238, 0.05)`.

### Chips & Badges
- **Tech Stack Badges**: Pill-shaped (`rounded-full`), padding `0.25rem 0.75rem`. Background `rgba(30, 41, 59, 0.6)`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#94A3B8`, font `JetBrains Mono` (`12px`).
- **Availability / Status Tag**: Pill-shaped with a live pulsing ping indicator. Background `rgba(16, 185, 129, 0.1)`, border `1px solid rgba(16, 185, 129, 0.25)`, text `#10B981`.

### Project Cards
- Enclosed in `1rem` border radius (`rounded-2xl`). Built with `backdrop-filter: blur(12px)`, background `rgba(23, 32, 51, 0.7)`, border `1px solid rgba(255, 255, 255, 0.08)`.
- Interactive state: subtle upward translation (`transform: translateY(-4px)`), border transitioning to `rgba(34, 211, 238, 0.35)`, and a diffuse cyan edge shadow.

### Input Fields & Textareas
- Background `#0F172A`, text `#F8FAFC`, placeholder `#64748B`.
- Border `1px solid #334155`. On focus: border `#22D3EE` accompanied by `0 0 0 2px rgba(34, 211, 238, 0.2)` ring.

### Checkboxes & Radio Controls
- Base control: `18px x 18px` with `#1E293B` background and `#334155` border.
- Selected state: Background `#22D3EE`, border `#22D3EE`, check icon `#0B1120`.

### Terminal / Code Preview Blocks
- Styled with a simulated macOS/Linux window bar containing micro traffic light controls (`#EF4444`, `#F59E0B`, `#10B981` at 8px diameter).
- Background `#0B1120`, font `JetBrains Mono`, syntax highlights keyed to cyan (`#22D3EE`), emerald (`#10B981`), and muted slate (`#64748B`).