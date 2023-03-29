const babelOptions = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@emotion"],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@emotion"],
};
