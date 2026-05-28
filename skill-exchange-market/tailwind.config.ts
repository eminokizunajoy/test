import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff9db",
          100: "#fff3b0",
          200: "#ffe66a",
          300: "#ffd84d",
          400: "#ffcc2f",
          500: "#ffbf00",
          600: "#d99f00",
          700: "#b38300",
          800: "#8c6600",
          900: "#664a00"
        }
      }
    }
  },
  plugins: []
} satisfies Config;

