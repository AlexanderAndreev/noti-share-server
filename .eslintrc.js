module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended", "prettier"],
    env: {
        "es6": true,
        "node": true
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'always',
                printWidth: 100,
                semi: true
            },
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',     
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false,
            'argsIgnorePattern': '^_',
        }],
        '@typescript-eslint/explicit-function-return-type': 'off'
    },
    plugins: [
        "prettier"
    ]
}