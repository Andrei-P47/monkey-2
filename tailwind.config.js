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
                'inner-border': '#EAECF0',
                'gray-400': '#98A2B3',
                'primary-pressed': '#39324D',
            },
            padding: {
                '19px': '19px',
            },
            borderRadius: {
                '1xl': '14px',
                large: '66px',
            },
            lineHeight: {
                '19px': '19px',
            },
            gap: {
                '13px': '13px',
                '21px': '21px',
                '5.5': '22px',
            },
        },
        // screens: {
        //     desktop: '1208px',
        //     tablet: '768px',
        //     ceva: '640px',
        //     mobile: '375px',
        // },
        // container: {
        //     screens: {
        //         desktop: '1208px',
        //         tablet: '768px',
        //         ceva: '640px',
        //         mobile: '375px',
        //     },
        // },
    },
    plugins: [],
}
