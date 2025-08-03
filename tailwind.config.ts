import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Gradient classes
    'from-red-600',
    'via-white',
    'to-red-400',
    'from-blue-600',
    'to-green-400',
    'from-indigo-800',
    'to-yellow-400',
    'from-cyan-600',
    'to-cyan-500',
    'to-cyan-400',
    'from-pink-400',
    'to-pink-400',
    'from-purple-600',
    'to-purple-400',
    'to-purple-500',
    'from-transparent',
    'to-transparent',
    'from-black',
    'to-black',
    'from-gray-50',
    'to-purple-50',
    'from-blue-50',
    'from-white',
    'to-white',
    
    // Background colors
    'bg-red-600',
    'bg-blue-600',
    'bg-indigo-800',
    'bg-cyan-600',
    'bg-cyan-700',
    'bg-pink-400',
    'bg-purple-600',
    'bg-purple-500',
    'bg-white',
    'bg-gray-50',
    'bg-gray-100',
    'bg-gray-600',
    'bg-black',
    'bg-transparent',
    
    // Text colors
    'text-red-600',
    'text-blue-600',
    'text-indigo-800',
    'text-cyan-600',
    'text-cyan-700',
    'text-pink-400',
    'text-purple-600',
    'text-purple-500',
    'text-white',
    'text-gray-600',
    'text-gray-700',
    'text-gray-800',
    'text-gray-900',
    
    // Border colors
    'border-red-600',
    'border-blue-600',
    'border-indigo-800',
    'border-cyan-600',
    'border-cyan-700',
    'border-pink-400',
    'border-purple-600',
    'border-purple-500',
    'border-white',
    'border-gray-200',
    'border-gray-300',
    
    // Hover states
    'hover:bg-red-600',
    'hover:bg-blue-600',
    'hover:bg-indigo-800',
    'hover:bg-cyan-600',
    'hover:bg-cyan-700',
    'hover:bg-pink-400',
    'hover:bg-purple-600',
    'hover:bg-purple-500',
    'hover:bg-gray-50',
    'hover:bg-gray-100',
    'hover:bg-white',
    'hover:text-red-600',
    'hover:text-blue-600',
    'hover:text-indigo-800',
    'hover:text-cyan-600',
    'hover:text-cyan-700',
    'hover:text-pink-400',
    'hover:text-purple-600',
    'hover:text-purple-500',
    'hover:text-white',
    'hover:border-blue-300',
    'hover:border-gray-300',
    'hover:shadow-2xl',
    'hover:scale-105',
    'hover:-translate-y-1',
    'hover:opacity-100',
    
    // Opacity modifiers
    'bg-red-600/10',
    'bg-blue-600/10',
    'bg-indigo-800/10',
    'bg-cyan-600/10',
    'bg-cyan-700/10',
    'bg-pink-400/10',
    'bg-purple-600/10',
    'bg-purple-500/10',
    'bg-red-600/90',
    'bg-blue-600/90',
    'bg-indigo-800/90',
    'bg-cyan-600/90',
    'bg-cyan-700/90',
    'bg-pink-400/90',
    'bg-purple-600/90',
    'bg-purple-500/90',
    'bg-white/40',
    'bg-black/20',
    'opacity-0',
    'opacity-100',
    
    // Hover opacity modifiers (for hover:bg-${color}/10)
    'hover:bg-red-600/10',
    'hover:bg-blue-600/10',
    'hover:bg-indigo-800/10',
    'hover:bg-cyan-600/10',
    'hover:bg-cyan-700/10',
    'hover:bg-pink-400/10',
    'hover:bg-purple-600/10',
    'hover:bg-purple-500/10',
    
    // Hover opacity modifiers (for hover:bg-${color}/90)
    'hover:bg-red-600/90',
    'hover:bg-blue-600/90',
    'hover:bg-indigo-800/90',
    'hover:bg-cyan-600/90',
    'hover:bg-cyan-700/90',
    'hover:bg-pink-400/90',
    'hover:bg-purple-600/90',
    'hover:bg-purple-500/90',
    
    // Responsive classes
    'sm:grid-cols-2',
    'lg:grid-cols-3',
    'xl:grid-cols-4',
    'sm:flex-row',
    'lg:text-5xl',
    'lg:text-3xl',
    'sm:grid-cols-2',
    'lg:grid-cols-3',
    'xl:grid-cols-4',
    
    // Font classes
    'font-myriad-pro',
    'font-bold',
    'font-semibold',
    'font-poppins',
    'font-open-sans',
    'text-xs',
    'text-sm',
    'text-base',
    'text-lg',
    'text-xl',
    'text-3xl',
    'text-5xl',
    
    // Conditional text size classes
    'text-base',
    'text-lg',
    'text-sm',
    'text-xs',
    
    // Spacing and layout
    'container',
    'mx-auto',
    'px-6',
    'py-4',
    'py-2',
    'py-16',
    'py-12',
    'mb-4',
    'mb-6',
    'mb-8',
    'mb-12',
    'mb-1',
    'mb-2',
    'gap-2',
    'gap-4',
    'gap-6',
    'gap-8',
    'space-x-2',
    'space-y-1',
    'space-y-2',
    'space-y-3',
    'space-y-4',
    
    // Flexbox and grid
    'flex',
    'flex-col',
    'flex-row',
    'items-center',
    'items-start',
    'justify-center',
    'justify-left',
    'grid',
    'max-w-2xl',
    'max-w-3xl',
    'max-w-7xl',
    'w-full',
    'w-fit',
    'h-full',
    'h-64',
    'h-4',
    'w-4',
    'w-1.5',
    'h-1.5',
    
    // Positioning
    'relative',
    'absolute',
    'inset-0',
    'z-10',
    
    // Overflow
    'overflow-hidden',
    
    // Transitions
    'transition-all',
    'transition-colors',
    'transition-opacity',
    'transition-transform',
    'duration-300',
    
    // Transforms
    'transform',
    'scale-105',
    '-translate-y-1',
    'translateY',
    
    // Shadows
    'drop-shadow-lg',
    'shadow-2xl',
    
    // Rounded corners
    'rounded',
    'rounded-full',
    'rounded-2xl',
    'rounded-3xl',
    
    // Object fit
    'object-contain',
    'object-cover',
    
    // Cursor
    'cursor-pointer',
    
    // Display
    'block',
    'hidden',
    
    // Min height
    'min-h-screen',
    
    // Background gradients
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'bg-gradient-to-t',
    
    // Pattern-based safelist for text sizes (to catch all conditional text classes)
    {
      pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
    },
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
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "myriad-pro": ["MyriadPro-Regular", "Arial", "sans-serif"],
      },
      colors: {
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
        // Family-friendly colors
        coral: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        sage: {
          50: "#f0f9f0",
          100: "#dcf2dc",
          200: "#bce5bc",
          300: "#8dd18d",
          400: "#5bb85b",
          500: "#369e36",
          600: "#2a7f2a",
          700: "#236523",
          800: "#1f511f",
          900: "#1a431a",
        },
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
        "gentle-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gentle-bounce": "gentle-bounce 2s ease-in-out infinite",
        "soft-pulse": "soft-pulse 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
