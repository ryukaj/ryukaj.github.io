module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: { "_": true },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': ['error', 'only-multiline'],
    'no-multiple-empty-lines': ['warn', { max: 1 }],
    'object-shorthand': [0, 'always']
  }
}
