/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Existing colors
        "background-colour": "var(--background-colour)",
        "primary-colour": "var(--primary-colour)",
        "secondary-colour": "var(--secondary-colour)",
        
        // Your custom colors - Add your colors here
        'psi': {
          yellow: '#fbcc00',      // Your brand yellow
          'yellow-dark': '#e6b800', // Darker yellow for hover states
          blue: '#1e40af',        // Custom blue
          'blue-light': '#3b82f6', // Light blue
          'blue-dark': '#1e3a8a',  // Dark blue
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#3e3e3e41',
            800: '#1f2937',
            900: '#111827',
          },
        },
        
        // Alternative way - Direct color definitions
        'dash-colour': '#CBA948',
        'brand-primary': '#fbcc00',
        'brand-secondary': '#1e40af',
        'brand-accent': '#10b981',
        'brand-dark': '#1f2937',
        'brand-light': '#f8fafc',
        
        // Status colors
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        'info': '#3b82f6',
        
        // Custom text colors
        'gray-text': '#808080',
      },
      fontFamily: {
        h1: "var(--h1-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        h4: "var(--h4-font-family)",
        h5: "var(--h5-font-family)",
        'inter': ['Inter', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'fustat': ['Fustat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}