module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "experimentalDecorators": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {

  },
  "settings": {
    "import/core-modules": ["react", "react-dom", "prop-types"]
  },
  "rules": {
    "semi": [2, "always"],
    "generator-star-spacing": [2, "after"],
    "object-property-newline": 0,
    "arrow-parens": [2, "always"],
    "class-methods-use-this": 2,
    "global-require": 0,
    "object-curly-newline": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
    "import/no-extraneous-dependencies": 2,
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "react/jsx-closing-bracket-location": [2, "tag-aligned"],
    "react/jsx-first-prop-new-line": [2, "multiline-multiprop"],
    "react/jsx-indent": [2, 2],
    "react/sort-comp": 2,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 2,
    "react/no-string-refs": 2,
    "react/no-render-return-value": 2,
    "react/no-find-dom-node": 0,
    "react/require-default-props": 0,
    "react/forbid-prop-types": 0,
    "react/no-array-index-key": 0,
    "react/no-danger": 0,
    "react/jsx-no-bind": 2,
    "react/no-unused-prop-types": 0
  }
}