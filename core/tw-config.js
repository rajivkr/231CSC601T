/**
 * Tailwind CDN Configuration — 231CSC601T Course Platform
 * ────────────────────────────────────────────────────────
 * Linear.app-inspired design system.
 * Uses Tailwind's built-in zinc scale + CSS custom property accents.
 *
 *   <script src="https://cdn.tailwindcss.com"></script>
 *   <script src="../../core/tw-config.js"></script>
 */

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          light: 'var(--accent-light)',
          glow: 'var(--accent-glow)',
        },
      },
      letterSpacing: {
        tightest: '-0.025em',
      },
      fontSize: {
        '15': ['15px', { lineHeight: '1.7' }],
        '13': ['13px', { lineHeight: '1.6' }],
      },
    },
  },
};
