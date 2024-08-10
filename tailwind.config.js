/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ['ui-sans-serif', 'system-ui',],
        serif: ['ui-serif', 'Georgia',],
        mono: ['ui-monospace', 'SFMono-Regular',],
        display: ['Oswald',],
        'Montserrat': ['Montserrat', 'Lato'],
      },
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          50:
            "#EFF6FF",
          100:
            "#DBEAFE",
          200:
            "#BFDBFE",
          300:
            "#93C5FD",
          400:
            "#60A5FA",
          500:
            "#3B82F6",
          600:
            "#2563EB",
          700:
            "#1D4ED8",
          800:
            "#1E40AF",
          900:
            "#0f0c29",
        },
        indigo: {
          50:
            "#EEF2FF",
          100:
            "#E0E7FF",
          200:
            "#C7D2FE",
          300:
            "#A5B4FC",
          400:
            "#818CF8",
          500:
            "#6366F1",
          600:
            "#4F46E5",
          700:
            "#4338CA",
          800:
            "#3730A3",
          900:
            "#302b63",
        },
        gray: {
          600: "#6B7280",
        },
        purple: {
          900: "#24243e",
        },
        yellow: {
          50: "#FFD60A",
        },
        skin: {
          200: "#F8BA93",
        },
      },
    },
  },
  plugins: [],
};
