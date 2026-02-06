/** @type {import('tailwindcss').Config} */
export default {
    content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
    theme: {
          extend: {
                  colors: {
                            background: "#1C2B21",
                            accent: "#C5A059",
                  },
                  fontFamily: {
                            heading: ["Cinzel", "serif"],
                            body: ["Inter", "sans-serif"],
                  },
          },
    },
    plugins: [],
}
