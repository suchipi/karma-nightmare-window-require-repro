const path = require("path");

module.exports = config => {
  config.set({
    basePath: __dirname,
    plugins: ["karma-nightmare", "karma-jasmine", "karma-webpack"],
    frameworks: ["jasmine"],
    browsers: ["Nightmare"],
    files: [
      {
        pattern: path.resolve(
          __dirname,
          "node_modules",
          "babel-polyfill",
          "dist",
          "polyfill.js"
        ),
        watched: false,
        included: true,
        served: true
      },
      {
        pattern: "index.test.js",
        watched: true,
        served: true,
        included: true
      }
    ],
    preprocessors: {
      "index.test.js": ["webpack"]
    },
    webpack: {
      devtool: "cheap-module-eval-source-map",
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
              presets: [
                [
                  "babel-preset-env",
                  {
                    targets: { browsers: "last 2 Chrome versions" },
                    modules: false
                  }
                ]
              ],
              plugins: ["transform-object-rest-spread"]
            }
          }
        ]
      }
    }
  });
};
