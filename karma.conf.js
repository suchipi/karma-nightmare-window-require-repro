module.exports = {
  plugins: ["karma-nightmare", "karma-jasmine", "karma-webpack"],
  frameworks: ["jasmine"],
  browsers: ["Nightmare"],
  files: [
    { pattern: "index.test.js", watched: true, served: true, included: true }
  ],
  preprocessors: {
    "index.test.js": ["webpack"]
  },
  webpack: {
    devtool: "cheap-module-eval-source-map"
  }
};
