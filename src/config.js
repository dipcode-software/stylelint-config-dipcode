'use strict';

// See https://stylelint.io/user-guide/rules/.
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
  rules: {
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'scale-unlimited/declaration-strict-value': [['color', 'background-color', 'font-weight', 'font-size']],
    'declaration-no-important': true,
    'unit-allowed-list': ['rem', { ignoreFunctions: ['rem'], severity: 'warning' }],
    // TODO: This should move to error in the future.
    'max-nesting-depth': [3, { severity: 'warning' }],
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
