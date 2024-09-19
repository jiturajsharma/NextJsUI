import { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

// Plugin to add each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }: { addBase: any; theme: any }) {
  const allColors = theme('colors'); // Get all colors from theme

  // Flatten color palette and handle nested objects
  const newVars = Object.entries(allColors).reduce((acc, [key, value]) => {
    if (typeof value === 'object' && value !== null) {
      // For nested objects (e.g., blue-100, blue-200), add each shade
      Object.entries(value).forEach(([shade, hex]) => {
        acc[`--${key}-${shade}`] = hex;
      });
    } else {
      // For simple values (e.g., white, black)
      acc[`--${key}`] = value as string;
    }
    return acc;
  }, {} as Record<string, string>);

  // Add the variables to the :root selector
  addBase({
    ':root': newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Using CSS variables for background
        foreground: "var(--foreground)", // Using CSS variables for foreground
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [addVariablesForColors], // Register custom plugin
};

export default config;
