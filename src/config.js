'use strict';

// See https://stylelint.io/user-guide/rules/.
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
  rules: {
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
  },
};
