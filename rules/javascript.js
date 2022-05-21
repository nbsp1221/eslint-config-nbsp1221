const javascriptRules = {
  'array-bracket-spacing': ['error'],
  'arrow-parens': ['error'],
  'arrow-spacing': ['error'],
  'block-spacing': ['error'],
  'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
  'comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'never',
  }],
  'comma-spacing': ['error'],
  'comma-style': ['error'],
  'computed-property-spacing': ['error'],
  'dot-location': ['error'],
  'eol-last': ['error'],
  'eqeqeq': ['error'],
  'func-call-spacing': ['error'],
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'multiline'],
  'implicit-arrow-linebreak': ['error'],
  'indent': ['error', 2, { 'SwitchCase': 1 }],
  'jsx-quotes': ['error'],
  'key-spacing': ['error'],
  'keyword-spacing': ['error'],
  'linebreak-style': ['error'],
  'new-parens': ['error'],
  'no-extra-semi': ['error'],
  'no-mixed-spaces-and-tabs': ['error'],
  'no-multi-spaces': ['error'],
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'no-tabs': ['error'],
  'no-trailing-spaces': ['error'],
  'no-whitespace-before-property': ['error'],
  'nonblock-statement-body-position': ['error'],
  'object-curly-newline': ['error', { consistent: true, multiline: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'operator-linebreak': ['error', 'none'],
  'padded-blocks': ['error', 'never'],
  'quotes': ['error', 'single', { avoidEscape: true }],
  'rest-spread-spacing': ['error'],
  'semi': ['error'],
  'semi-spacing': ['error'],
  'semi-style': ['error'],
  'space-before-blocks': ['error'],
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],
  'space-in-parens': ['error'],
  'space-infix-ops': ['error'],
  'space-unary-ops': ['error'],
  'switch-colon-spacing': ['error'],
  'template-curly-spacing': ['error'],
  'wrap-iife': ['error', 'inside'],
};

module.exports = javascriptRules;
