# Aboard HR - Design System Guide

## Overview
Panduan design system untuk project Aboard HR clone. Gunakan dokumen ini sebagai referensi untuk menjaga konsistensi visual.

---

## 🎨 Color Tokens

Semua warna menggunakan format **HSL** dan didefinisikan di `src/index.css`.

### Primary Colors
| Token | Light Mode | Usage |
|-------|------------|-------|
| `--primary` | `207 90% 54%` | Brand blue, buttons, links |
| `--primary-foreground` | `0 0% 100%` | Text on primary background |

### Neutral Colors
| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `--background` | `0 0% 100%` | `220 20% 10%` | Page background |
| `--foreground` | `220 20% 20%` | `210 20% 95%` | Primary text |
| `--muted` | `210 20% 96%` | `220 20% 18%` | Subtle backgrounds |
| `--muted-foreground` | `220 10% 50%` | `220 10% 60%` | Secondary text |

### Accent Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `45 100% 60%` | Yellow highlights, CTA |
| `--destructive` | `0 84% 60%` | Error states, delete actions |

### Custom Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--section-light` | `200 30% 98%` | Alternating section backgrounds |
| `--hero-gradient` | `linear-gradient(180deg, hsl(200 30% 98%) 0%, hsl(0 0% 100%) 100%)` | Hero section background |
| `--card-shadow` | `0 4px 24px -8px hsl(220 20% 20% / 0.1)` | Card elevation |
| `--card-shadow-hover` | `0 8px 32px -8px hsl(220 20% 20% / 0.15)` | Card hover state |

### Brand-Specific Colors (Hardcoded)
```css
/* Primary Blue Button */
bg-[#0099ff] hover:bg-[#0099ff]/90

/* Light Blue Button */
bg-[#7dd3fc] hover:bg-[#7dd3fc]/90

/* Secondary Sky Button */
bg-sky-100 text-sky-600 hover:bg-sky-200
```

---

## 📝 Typography

### Font Family
```css
font-sans: ["Inter", "system-ui", "sans-serif"]
```

### Heading Sizes
| Element | Mobile | Desktop | Usage |
|---------|--------|---------|-------|
| Hero H1 | `text-5xl` | `text-7xl` / `text-8xl` | Main hero headlines |
| Section H2 | `text-4xl` | `text-6xl` | Section titles |
| Card H3 | `text-xl` | `text-2xl` | Card headers |
| Body | `text-base` / `text-lg` | `text-lg` | Paragraphs |
| Small | `text-sm` | `text-sm` | Labels, captions |
| Micro | `text-xs` | `text-xs` | Badges, metadata |

### Font Weights
- `font-bold` - Headlines, emphasis
- `font-semibold` - Buttons, subheadings
- `font-medium` - Navigation, labels
- Regular (default) - Body text

### Letter Spacing
- `tracking-tight` - Headlines for tighter appearance

---

## 🔘 Button Variants

Definisi di `src/components/ui/button.tsx`:

| Variant | Classes | Usage |
|---------|---------|-------|
| `default` | `bg-primary text-primary-foreground` | Standard actions |
| `secondary` | `bg-secondary text-secondary-foreground` | Secondary actions |
| `ghost` | `hover:bg-secondary` | Tertiary/navigation |
| `hero` | `bg-accent text-accent-foreground` | Primary CTA |
| `heroOutline` | `bg-background border-2 border-border` | Secondary CTA |
| `destructive` | `bg-destructive text-destructive-foreground` | Delete/danger |
| `outline` | `border border-input bg-background` | Form inputs |
| `link` | `text-primary underline-offset-4` | Inline links |

### Button Sizes
| Size | Height | Padding | Usage |
|------|--------|---------|-------|
| `sm` | `h-9` | `px-4` | Compact areas |
| `default` | `h-10` | `px-5` | Standard |
| `lg` | `h-12` | `px-8` | Hero sections |
| `xl` | `h-14` | `px-10` | Large CTA |
| `icon` | `h-10 w-10` | - | Icon buttons |

### Button Style Rules
- All buttons use `rounded-full`
- **No shadows** on buttons (flat design)
- Transitions: `transition-all duration-300`

---

## 📐 Layout & Spacing

### Container Width
```css
max-w-[840px] /* Main content constraint */
container mx-auto px-6 /* Standard container */
```

### Section Padding
```css
pt-32 pb-16 /* Hero sections */
py-24 /* Standard sections */
py-16 /* Compact sections */
```

### Grid Patterns
```css
/* Two-column feature grid */
grid md:grid-cols-2 gap-6

/* Bento grid */
grid md:grid-cols-2 gap-6
```

### Spacing Scale
- `gap-2` / `gap-3` - Tight groupings (icons + text)
- `gap-4` - Standard component spacing
- `gap-6` - Section inner spacing
- `gap-8` - Large section gaps
- `mb-6` / `mb-8` - Section title margins

---

## 🎭 Border Radius

Defined in `tailwind.config.ts`:

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.75rem` (12px) | Base radius |
| `rounded-sm` | `calc(var(--radius) - 4px)` | Small elements |
| `rounded-md` | `calc(var(--radius) - 2px)` | Medium elements |
| `rounded-lg` | `var(--radius)` | Cards, containers |
| `rounded-xl` | `calc(var(--radius) + 4px)` | Large cards |
| `rounded-2xl` | `calc(var(--radius) + 8px)` | Hero cards |
| `rounded-full` | `9999px` | Buttons, avatars |

---

## ✨ Animations

### Framer Motion Patterns

**Fade In Up (Standard)**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Staggered Children**
```tsx
// Parent
variants={{
  visible: { transition: { staggerChildren: 0.1 } }
}}

// Child
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

**Navbar Scroll Animation**
```tsx
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
```

### Tailwind Animations (tailwind.config.ts)
```css
animate-fade-in /* opacity: 0 → 1, translateY: 20px → 0 */
animate-float /* Gentle floating effect */
animate-accordion-down/up /* Accordion transitions */
```

### Transition Timing
- `duration-200` - Quick micro-interactions
- `duration-300` - Standard transitions
- `duration-500` - Page/section reveals
- `duration-600` - Hero animations

---

## 🧩 Component Patterns

### Card Pattern
```tsx
<div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
  {/* content */}
</div>
```

### Section Pattern
```tsx
<section className="py-24 bg-background">
  <div className="container mx-auto px-6 max-w-[840px]">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
      <h2 className="text-4xl md:text-6xl font-bold mb-6">Title</h2>
      <p className="text-lg text-muted-foreground mb-8">Description</p>
    </motion.div>
  </div>
</section>
```

### Hero Pattern
```tsx
<section className="pt-32 pb-16 bg-background relative overflow-hidden">
  <div className="container mx-auto px-6 text-center">
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
      Headline
    </h1>
    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
      Subtext
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button size="lg" className="rounded-full px-8 bg-[#0099ff]">
        Primary CTA
      </Button>
      <Button variant="secondary" size="lg" className="rounded-full px-8 bg-sky-100 text-sky-600">
        Secondary CTA
      </Button>
    </div>
  </div>
</section>
```

### Floating Panel Pattern
```tsx
{/* Backdrop */}
<div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />

{/* Panel */}
<div className="fixed right-0 top-0 h-full w-80 bg-background border-l z-50 animate-in slide-in-from-right">
  {/* content */}
</div>
```

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1400px /* Container max-width */
```

### Common Responsive Patterns
```css
/* Typography */
text-5xl md:text-7xl

/* Layout */
flex-col sm:flex-row
grid md:grid-cols-2

/* Spacing */
px-4 md:px-6
gap-4 md:gap-6

/* Visibility */
hidden md:flex
md:hidden
```

---

## 🖼️ Image Guidelines

### Asset Location
- `src/assets/` - Component-imported images (ES6 imports)
- `public/` - Static assets referenced in CSS/HTML

### Import Pattern
```tsx
import heroImage from "@/assets/hero-dashboard.png";

<img src={heroImage} alt="Dashboard preview" className="rounded-2xl" />
```

### Image Styling
```css
rounded-2xl /* Large images */
rounded-lg /* Card images */
object-cover /* Background images */
```

---

## 🎯 Icon Usage

Using **Lucide React** (`lucide-react`)

### Standard Sizes
- `w-4 h-4` - Inline with text, buttons
- `w-5 h-5` - Navigation, small UI
- `w-6 h-6` - Prominent icons
- `w-8 h-8` - Feature icons
- `w-10 h-10` - Large decorative icons

### Common Icons
```tsx
import { Menu, X, ChevronDown, ArrowRight, Check, Send } from "lucide-react";
```

---

## 📋 Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- Pages: `PascalCase.tsx` (e.g., `DemoEverydayHr.tsx`)
- Hooks: `use-kebab-case.tsx` (e.g., `use-mobile.tsx`)
- Utils: `camelCase.ts` (e.g., `utils.ts`)

### CSS Classes
- Use Tailwind utilities
- Custom classes in `index.css` only for design tokens
- Avoid inline styles

### Component Structure
```
src/
├── components/
│   ├── ui/          # Base UI components (shadcn)
│   └── landing/     # Page-specific components
├── pages/           # Route pages
├── hooks/           # Custom hooks
├── assets/          # Images, icons
└── lib/             # Utilities
```

---

## ✅ Do's and Don'ts

### ✅ Do
- Use semantic color tokens (`bg-primary`, `text-foreground`)
- Apply consistent spacing from the scale
- Use Framer Motion for entrance animations
- Keep components focused and small
- Use `rounded-full` for all buttons

### ❌ Don't
- Use hardcoded colors in components (except brand-specific)
- Add shadows to buttons
- Create very long component files (max ~250 lines)
- Skip responsive considerations
- Use inline styles for colors

---

## 🔗 Quick Reference

```tsx
// Primary CTA Button
<Button size="lg" className="rounded-full px-8 bg-[#0099ff] hover:bg-[#0099ff]/90 text-white font-semibold">
  Book demo
</Button>

// Secondary Button
<Button variant="secondary" size="lg" className="rounded-full px-8 bg-sky-100 text-sky-600 hover:bg-sky-200">
  Try for free
</Button>

// Section Title
<h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">

// Body Text
<p className="text-lg text-muted-foreground">

// Card Container
<div className="bg-card rounded-2xl p-6 border border-border">
```
