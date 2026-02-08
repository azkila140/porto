/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#020617',
                    emerald: '#10b981',
                },
            },
            fontFamily: {
                sans: ['var(--font-tajawal)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
