import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],

  theme: {
    extend: {
      colors: {
        foreground: "var(--color-foreground)",
        background: "var(--color-background)",
        "faded-background": "var(--color-faded-background)",
        primary: "var(--color-primary)",
        border: "var(--color-border)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
      },
      borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
      },
    },
  },

  plugins: [],
} as Config;
