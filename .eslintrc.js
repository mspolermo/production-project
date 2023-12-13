module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'mspolermo-plugin', 'unused-imports'],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'unused-imports/no-unused-imports': 'error',
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to', 'target', 'justify', 'align', 'border', 'gap', 'direction', 'role', 'as'],
        }],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', {
            ignoreComments: true,
            code: 130,
        }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'arrow-body-style': 'off',
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
        'mspolermo-plugin/path-checker': ['error', {
             alias: '@',
        }],
        // 'mspolermo-plugin/public-api-imports': ['error', {
        //     alias: '@',
        //     testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
        // }],
        // 'mspolermo-plugin/layer-imports': ['error', {
        //     alias: '@',
        //     ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
        // }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    }],
};
