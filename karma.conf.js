const path = require("path");

module.exports = config => {
  config.set({
    basePath: __dirname,
    plugins: ["karma-nightmare", "karma-jasmine"],
    frameworks: ["jasmine"],
    browsers: ["Nightmare"],
    files: [
      {
        pattern: "index.test.js",
        watched: true,
        served: true,
        included: true
      }
    ],
    nightmareOptions: {
      show: true,
      openDevTools: true
    }
  });
};
