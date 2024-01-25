'use strict';

// See https://stylelint.io/user-guide/rules/.
/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-order', 'stylelint-declaration-strict-value'],
  rules: {
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'scale-unlimited/declaration-strict-value': [
      [
        'color',
        'background-color',
        'font-weight',
        'font-size',
        '/margin/',
        '/padding/',
        'top',
        'bottom',
        'left',
        'right',
      ],
      {
        ignoreValues: {
          'color': ['transparent', 'unset', 'inherit', 'initial'],
          'background-color': ['transparent', 'unset', 'inherit', 'initial'],
          '/margin/': ['unset', 0, 'inherit', 'auto', 'initial'],
          '/padding/': ['unset', 0, 'inherit', 'initial', '/[0-9]+%/'],
          'top': ['unset', 0, 'inherit', 'auto', 'initial', '/[0-9]+%/'],
          'bottom': ['unset', 0, 'inherit', 'auto', 'initial', '/[0-9]+%/'],
          'left': ['unset', 0, 'inherit', 'auto', 'initial', '/[0-9]+%/'],
          'right': ['unset', 0, 'inherit', 'auto', 'initial', '/[0-9]+%/'],
        },
        disableFix: true,
      },
    ],
    'declaration-no-important': true,
    'unit-allowed-list': [
      ['rem', 's', 'ms', '%'],
      {
        ignoreFunctions: ['/.*/'],
        severity: 'warning',
        ignoreProperties: {
          vw: ['/width/', '/height/', '/flex/'],
          vh: ['/width/', '/height/', '/flex/'],
          fr: ['/grid/'],
          deg: ['rotate'],
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
