module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      title: ["Sansita Swashed", "cursive"],
      body: ["sans-serif"],
    },
    colors: {
      black: "#000",
      purple: "#2d151e",
      burgundy: "#75161e",
      burgundyDark: "#510f15",
      white: "#fff",
      mauve: "#c0a4a1",
      blue: "hsl(203, 33%, 37%)",
      blueLight: "hsl(190, 100%, 85%)",
      blueDark: "#2e4a5a",
    },
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    variants: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
      translate: ["responsive", "hover", "focus", "active"],
    },
    minHeight: {
      0: "0",
      "1/8": "100px",
      "1/4": "200px",
      "1/2": "50%",
      "3/4": "75%",
      screen: "100vh",
      full: "100%",
    },
    screens: {
      xxl: { max: "2040px" },
      // => @media (max-width: 2040px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      minlg: { min: "769px" },
      // => @media (max-width: 769px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      minmd: { min: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "2rem",
      full: "9999px",
    },
    plugins: [],
  },
};
