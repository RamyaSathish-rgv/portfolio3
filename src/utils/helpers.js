export const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
export const lerp = (a, b, t) => a + (b - a) * t;
export const staggerDelay = (index, base = 80) => `${index * base}ms`;
