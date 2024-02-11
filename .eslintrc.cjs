module.exports = {
    extends: [
        'prettier',
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
        'plugin:tailwindcss/recommended',
    ],
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },
    ],
}
