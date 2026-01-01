import qwikPlugin from 'eslint-plugin-qwik';

/**
 * ESLint flat config for Qwik framework.
 */
export default [
  {
    name: '@danielvaijk/qwik',
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      qwik: qwikPlugin,
    },
    rules: {
      'qwik/valid-lexical-scope': 'error',
      'qwik/use-method-usage': 'error',
      'qwik/loader-location': 'error',
      'qwik/no-react-props': 'error',
      'qwik/prefer-classlist': 'error',
      'qwik/jsx-no-script-url': 'error',
      'qwik/jsx-key': 'error',
      'qwik/unused-server': 'error',
      'qwik/jsx-img': 'error',
      'qwik/jsx-a': 'error',
      'qwik/no-use-visible-task': 'warn',
      /**
       * Override standard config rules for Qwik compatibility.
       */
      'import/no-default-export': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
];
