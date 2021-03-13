module.exports = {
  extends: "react-app",
  ignorePatterns: ["dist/**/*.js"],
  rules: {
    "require-yield": "off",
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_+",
        argsIgnorePattern: "^_+",
        ignoreRestSiblings: true,
      },
    ],
  },
};
