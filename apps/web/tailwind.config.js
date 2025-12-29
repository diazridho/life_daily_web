/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#ec1325",
                "primary-dark": "#d69fa3",
                "recipe-red": "#ec1325", // Adding specific color for recipe detail if needed elsewhere
                "background-light": "#f8f6f6",
                "background-dark": "#1e1414",
                "surface-light": "#ffffff",
                "surface-dark": "#2a2222",
                "text-main": "#191011",
                "text-sub": "#8b5b5f",
            },
            fontFamily: {
                "display": ["Work Sans", "Inter", "sans-serif"],
                "sans": ["Work Sans", "Inter", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
