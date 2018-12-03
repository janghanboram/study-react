module.exports = {
  extends: "airbnb-base",
  settings: {
    "import/resolver": {
      node: { paths: [path.resolve("./src")] }
    }
  },
  rules: {
    "no-unused-vars": 1, // 경고
    "comma-dangle": 0, //do nothing
    "eol-last": 0,
    "no-console": 0
  }
};
