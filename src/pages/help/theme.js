/**
 * Help Center brand theme.
 *
 * The Help Center uses ONE brand gradient (black → orange) everywhere a
 * "brand" moment belongs: hero text, primary CTAs, active-state accents,
 * step-number bubbles, etc.
 *
 * Semantic colors (info / tip / success / warning in NoteCard) are NOT
 * branded — they communicate meaning, not affiliation.
 */

// Hex of the orange end-stop (Tailwind orange-400). Use it directly for
// borders, text accents, icons, and rgba shadows.
export const BRAND = "#fb923c";

// Soft tint of the brand for card backgrounds and subtle highlights
// (Tailwind orange-100).
export const BRAND_SOFT = "#ffedd5";

// Inline-style strings for the brand gradient.
export const BRAND_GRADIENT = "linear-gradient(52deg, #000000, #fb923c)";

export const brandBg = { background: BRAND_GRADIENT };

export const brandTextGradient = {
  background: BRAND_GRADIENT,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

// rgba shadow that matches the brand orange — used on hover lifts.
export const BRAND_SHADOW = "0 8px 24px -12px rgba(251, 146, 60, 0.35)";
