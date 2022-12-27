module.exports = {
  'env': {
    'browser': true,
    'worker': true,
    'commonjs': true,
    'node': true,
    'jest': true
  },
  'extends': [
    'plugin:vue/vue3-recommended',
    'airbnb-base'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'plugins': [
    'vue'
  ],
  'rules': {
  }
};
