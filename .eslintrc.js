module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "classes": true
  },
  // jsx相关插件
  "plugins": [
    "react", "jsx-a11y", "import", "prettier"
  ],

  // We can add/overwrite custom rules here
  "rules": {
    // React Native has JSX in JS files
    "react/jsx-filename-extension": [
      1, {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "react/prop-types": 0,
    // React Native includes images via require("../images/example.png")
    "global-require": 0
  }
};
