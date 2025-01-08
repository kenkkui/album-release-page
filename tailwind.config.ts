import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      generalSans: "General Sans",
      montserrat: "Montserrat",
    },
    fontSize: {
      subheading: ["35px", { fontWeight: 200 }],
      "song-title": ["18px", { fontWeight: 600 }],
      artist: ["14px", { fontWeight: 600 }],
    },
    extend: {
      colors: {
        white: "var(--white)",
        "dark-grey": "var(--dark-grey)",
        blue: "var(--blue)",
      },
    },
  },
  plugins: [],
} satisfies Config;
