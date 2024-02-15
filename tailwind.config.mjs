import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                accent: {
                    50: '#f4f2ff',
                    100: '#ede7ff',
                    200: '#dcd2ff',
                    300: '#c2aeff',
                    400: '#a680ff',
                    500: '#8a4dff',
                    600: '#7e29fe',
                    700: '#6f17ea',
                    800: '#6314d1',
                    900: '#4e12a0',
                    950: '#2f086d',
                    DEFAULT: '#6314d1',
                    foreground: '#FFFFFF',
                },
                foreground: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#3d3d3d',
                    950: '#0d0d0d',
                    DEFAULT: '#0d0d0d',
                    foreground: '#FFFFFF',
                },
                background: {
                    50: '#ffffff',
                    100: '#fcfcfc',
                    200: '#e8e8e8',
                    300: '#c9c9c9',
                    400: '#a6a6a6',
                    500: '#8a8a8a',
                    600: '#737373',
                    700: '#5e5e5e',
                    800: '#525252',
                    900: '#4a4a4a',
                    950: '#363636',
                    DEFAULT: '#ffffff',
                },
            },
        },
    },
    plugins: [],
}
