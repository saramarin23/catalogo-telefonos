module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react", "prettier"],
  rules: {},
  settings: {
    react: {
      version: "detect"
    }
  }
}