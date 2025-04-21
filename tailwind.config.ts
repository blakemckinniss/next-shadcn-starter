import type { Config } from "tailwindcss";
// import fontFamily from "tailwindcss/defaultTheme"; // Removed unused import
import * as radixColors from "@radix-ui/colors"; // Import Radix colors
import tailwindcssAnimate from "tailwindcss-animate"; // Import animate plugin

// Helper function to generate Radix color scales for Tailwind
function radixColorScale(
  name: keyof typeof radixColors
): Record<string, string> {
  const scale = radixColors[name] as Record<string, string>;
  const baseName = name.replace("Dark", "");

  return Object.fromEntries(
    Array.from({ length: 12 }, (_, i) => {
      const step = i + 1;
      const scaleKey = `${baseName}${step}`; // Use actual backticks
      return [step.toString(), scale[scaleKey]]; // Explicit return
    }).filter((entry): entry is [string, string] => entry[1] !== undefined) // Type guard for filter
  );
}

const config = {
  darkMode: "class", // Use class strategy for dark mode (string, not array)
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // Include src directory
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Integrate Radix Colors (example using 'neutral' - adjust if needed)
        ...Object.keys(radixColors)
          .filter((key) => !key.endsWith("A") && !key.endsWith("Dark")) // Filter out alpha and dark scales initially
          .reduce(
            (acc, key) => {
              acc[key.toLowerCase()] = radixColorScale(
                key as keyof typeof radixColors
              );
              return acc;
            },
            {} as Record<string, Record<string, string>>
          ),

        // Shadcn UI specific colors (based on CSS variables set by init)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          // Standard Tailwind default sans stack as fallback
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate], // Use imported animate plugin
} satisfies Config;

export default config;
