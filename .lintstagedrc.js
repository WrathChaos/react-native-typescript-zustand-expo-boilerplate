module.exports = {
  '*.{js,jsx,ts,tsx}': ['node lint.mjs', 'node prettier.mjs'],
  '*.{json,md,yml,yaml,css,scss}': ['node prettier.mjs'],
};
