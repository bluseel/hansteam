const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./shadcn/components/**/*.{ts,tsx}",
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
        'primary-blue': '#21478C',
        'primary-yellow': '#F6E700',
        'neutral-white': '#FFFFFF',
        'neutral-black': '#000000',


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

      backgroundImage: {
        'black-to-transparent': 'linear-gradient(to top, black, transparent)',
      },

      fontSize: {
        'hero-heading': ['4rem', {
          lineHeight: '5rem',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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

        'keyfram-HeroTitles': {
          '0%': { transform: 'translateY(0%)' },
          '24%': { transform: 'translateY(0%)' },
          '25%': { transform: 'translateY(-100%)' },
          '49%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(-200%)' },
          '74%': { transform: 'translateY(-200%)' },
          '75%': { transform: 'translateY(-300%)' },
          '99%': { transform: 'translateY(-300%)' },
          '100%': { transform: 'translateY(-400%)' },

        },


        'example': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'translateHeroBackground': "keyfram-HeroTitles 15s linear infinite",

      },

    },
    plugins: [require("tailwindcss-animate")],
  }
}