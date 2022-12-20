/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                'primary-main': '#110929',
                'secondary-main': '#1C51FE',
                'button-gradient-1': '#8D1CFE',
                'button-gradient-2': '#0038ED',
                'header-gradient-1': '#B235FF',
                'header-gradient-2': '#001447',
            },
            padding: {},
            borderRadius: {
                '66px': '66px',
            },
            lineHeight: {
                '19px': '19px',
            },
        },
    },
    plugins: [],
}
