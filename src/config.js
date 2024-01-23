'use strict';

// See https://stylelint.io/user-guide/rules/.
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
  rules: {
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'scale-unlimited/declaration-strict-value': [
      ['color', 'background-color', 'font-weight', 'font-size', '/margin/', '/padding/'],
      {
        ignoreValues: {
          'color': ['transparent', 'unset', 'inherit'],
          'background-color': ['transparent', 'unset', 'inherit'],
          '/margin/': ['unset', 0, 'inherit', 'auto'],
          '/padding/': ['unset', 0, 'inherit'],
        },
        disableFix: true,
      },
    ],
    'declaration-no-important': true,
    'unit-allowed-list': [
      ['rem', 's', 'ms'],
      {
        ignoreFunctions: ['/.*/'],
        severity: 'warning',
        ignoreProperties: {
          '%': ['min-width', 'max-width', 'width', 'min-height', 'max-height', 'height', 'flex-basis', 'flex'],
          'vw': ['min-width', 'max-width', 'width', 'min-height', 'max-height', 'height', 'flex-basis', 'flex'],
          'vh': ['min-width', 'max-width', 'width', 'min-height', 'max-height', 'height', 'flex-basis', 'flex'],
        },
      },
    ],
    // TODO: This should move to error in the future.
    'max-nesting-depth': [4, { severity: 'warning' }],
    // TODO: This should move to error in the future.
    'selector-max-attribute': [1, { severity: 'warning' }],
    // TODO: This should move to error in the future.
    'selector-max-combinators': [3, { severity: 'warning' }],
    // TODO: This should move to error in the future.
    'selector-max-id': [1, { severity: 'warning' }],
    // TODO: This should move to error in the future.
    'selector-max-pseudo-class': [2, { severity: 'warning' }],
    // TODO: This should move to error in the future.
    'selector-max-type': [1, { severity: 'warning' }],
    // TODO: This should move to error in the future.
    'selector-max-universal': [1, { severity: 'warning' }],
  },
};
