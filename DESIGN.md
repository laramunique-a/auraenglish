---
name: Aura English
colors:
  surface: '#121317'
  surface-dim: '#121317'
  surface-bright: '#38393e'
  surface-container-lowest: '#0d0e12'
  surface-container-low: '#1a1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#292a2e'
  surface-container-highest: '#343439'
  on-surface: '#e3e2e8'
  on-surface-variant: '#c0c6d6'
  inverse-surface: '#e3e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#8b919f'
  outline-variant: '#414753'
  surface-tint: '#a8c8ff'
  primary: '#a8c8ff'
  on-primary: '#003061'
  primary-container: '#3591ff'
  on-primary-container: '#002955'
  inverse-primary: '#005eb4'
  secondary: '#ffb77d'
  on-secondary: '#4d2600'
  secondary-container: '#fd8b00'
  on-secondary-container: '#603100'
  tertiary: '#00e296'
  on-tertiary: '#003822'
  tertiary-container: '#00a56d'
  on-tertiary-container: '#00311d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a8c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#004689'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#4dffb1'
  tertiary-fixed-dim: '#00e296'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#005233'
  background: '#121317'
  on-background: '#e3e2e8'
  surface-variant: '#343439'
typography:
  display-lg:
    fontFamily: Metrophobic
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Metrophobic
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Metrophobic
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  body-md:
    fontFamily: Comfortaa
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system establishes a high-end, immersive environment for English language learning, blending the precision of a modern SaaS tool with a "Cosmic Tech" aesthetic. The brand personality is visionary, intelligent, and motivating. It avoids the playfulness of typical education apps in favor of a sophisticated, focus-driven interface that feels like a premium command center for personal growth.

The design style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes expansive dark surfaces to reduce eye strain, punctuated by vibrant "atmospheric glows" that suggest depth and energy. The user should feel as though they are navigating an advanced interface where language concepts are illuminated like stars in a night sky.

## Colors

The palette is anchored by a deep charcoal base to create infinite depth. 
- **Primary (Electric Blue):** Used for core actions, progress indicators, and active states. It represents clarity and technology.
- **Secondary (Vibrant Orange):** Used for motivational highlights, "streak" indicators, and secondary calls to action. It provides a warm contrast to the cool base.
- **Tertiary (Neon Green):** Reserved for "correct" states, success feedback, and achievement badges.
- **Background Strategy:** Surfaces use the near-black neutral, while interactive containers utilize semi-transparent "glass" layers to reveal subtle, animated background gradients (nebula glows).

## Typography

This design system uses **Metrophobic** for headlines to provide a sleek, wide-aperture "tech-futurist" feel. For the primary body interface, **Comfortaa** is introduced; its rounded letterforms offer a friendly, accessible contrast to the dark theme, making the learning content feel approachable. Technical metadata and progress stats use **Public Sans**, a sturdy and neutral sans-serif that ensures clarity for data-driven learning metrics.

Letter spacing is tightened for large displays to feel more cohesive and slightly tracked out for labels to ensure readability against dark, translucent backgrounds.

## Layout & Spacing

The layout follows a **Fixed Grid** on desktop to maintain a premium, editorial feel, while transitioning to a fluid model on mobile devices. 
- **Grid:** A 12-column grid is used for dashboard views, allowing for flexible card arrangements.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Safe Zones:** Generous margins (64px) are used on desktop to ensure the "Glass" components have room to breathe and the atmospheric background glows are visible. 
- **Reflow:** On mobile, complex sidebars collapse into a bottom navigation bar, and grid-based cards stack vertically to prioritize content legibility.

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional shadows.
- **Surfaces:** All primary containers use a 60% opacity fill with a high-intensity backdrop blur (20px - 40px). 
- **Borders:** "Ghost" borders are essential. Use a 1px solid border with a linear gradient (top-left to bottom-right) starting at `rgba(255,255,255,0.2)` and fading to `transparent`.
- **Atmospheric Glow:** Interactive elements "hover" over radial gradients of blue or orange that appear to be trapped behind the glass.
- **Starry Backgrounds:** A fixed background layer contains subtle, non-distracting white "pixel" stars at varying opacities to enhance the cosmic narrative.

## Shapes

The design system uses a **Pill-shaped** (1rem base) approach. This emphasizes a fluid, organic, and ultra-modern feel that contrasts with the technical dark theme.
- **Cards & Modals:** Use `rounded-xl` (3rem) to create highly softened, inviting glass surfaces.
- **Buttons:** Use a more aggressive `rounded-lg` (2rem) or even `full` to create a distinct, tactile interactive shape.
- **Form Inputs:** Maintain a structured `rounded-md` (1rem) for a friendly yet reliable appearance.

## Components

- **Glass Cards:** The signature component. Feature a subtle inner glow on top and a high backdrop-blur. No drop shadows; use the border gradient for definition.
- **Vibrant Gradient Buttons:** Primary buttons use a linear gradient from Electric Blue to a slightly darker indigo. They feature a "bloom" effect on hover—a soft outer glow in the primary color.
- **Chips & Badges:** Small, pill-shaped elements with low-opacity fills (10%) and high-contrast text. Used for "Lesson Difficulty" or "Topic Categories."
- **Input Fields:** Dark, recessed backgrounds (`#0B0C10` at 40% opacity) with the "Ghost border" treatment. The cursor and focus ring use the Primary Electric Blue.
- **Progress Orbs:** Instead of flat bars, use circular "orb" indicators for course progress, utilizing the Neon Green highlight with an inner pulse animation.
- **Lesson Lists:** Minimalist rows separated by low-opacity lines (`rgba(255,255,255,0.05)`), featuring "Glass" hover states that brighten the text.