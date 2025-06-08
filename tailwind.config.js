/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        xxxl: "1600px",
        "4xl": "1800px",
      },
      colors: {
        // Enhanced playful palette
        peach: "#FFD6E0",      // Soft Peach (main background)
        blush: "#FFB7B2",      // Blush Pink (buttons, highlights)
        mint: "#B6F2C1",       // Mint Green (secondary bg, accents)
        pastelYellow: "#FFFACD",// Pastel Yellow (button hover, highlights)
        sky: "#BEE3F7",        // Sky Blue (gradients, accents)
        lilac: "#E3D1F7",      // Soft Lilac (backgrounds, gradients)
        cream: "#FFF5E1",      // Cream (cards, sections)
        brown: "#BFA181",      // Warm Brown (text, accents)
        deepPink: "#FF6F91",   // Deep Pink (CTA, hover, icons)
        leaf: "#7FC97F",       // Leaf Green (trees, icons)
        white: "#FFFFFF",      // White (text, clouds)
        black: "#222222",      // Black (text, contrast)
        gray: "#F8F8F8",
        // Aliases for compatibility
        primary: "#E4C69C",
        secondary: "#111C48",
        accent: "#FFBF00",
        h1Primary: "#FFD6E0",
        h1Primary2: "#FFB7B2",
        h1Primary5: "#B6F2C1",
        n1: "#222222",
        n2: "#7FC97F",
        n3: "#BFA181",
        n4: "#E3D1F7",
        n5: "#FFF5E1",
        n6: "#FFD6E0",
        n7: "#F8F8F8",
        n8: "#FFFFFF",
        n9: "#BEE3F7",
        n10: "#FFFACD",
        title: "#222222",
        light: "#FFD6E0",
        light2: "#FFF5E1",
        para: "#7FC97F",
        para2: "#BFA181",
        para3: "#FFB7B2",
        dark: "#222222",
        dark2: "#7FC97F",
      },
      boxShadow: {
        'soft': '0 4px 24px 0 rgba(255, 183, 178, 0.15)',
        'playful': '0 2px 16px 0 rgba(190, 227, 247, 0.18)',
        'glow': '0 0 16px 2px #FFB7B2',
      },
      backgroundImage: {
        'peach-gradient': 'linear-gradient(135deg, #FFD6E0 0%, #FFFACD 100%)',
        'mint-gradient': 'linear-gradient(135deg, #B6F2C1 0%, #BEE3F7 100%)',
        'lilac-gradient': 'linear-gradient(135deg, #E3D1F7 0%, #FFD6E0 100%)',
      },
      fontFamily: {
        "body-font": ["var(--body-font)"],
        "title-font": ["var(--title-font)"],
      },

      spacing: {
        15: "60px",
        18: "72px",
        25: "100px",
        30: "120px",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "custom-pulse": "custom-pulse 6s ease-in-out infinite alternate-reverse;",
      },
    },
  },
  plugins: [require("./spacing-plugin")],
};
