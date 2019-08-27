const path = require("path");

module.exports = {
	mode : "production",
  entry : ["./src/scripts/index.js"],
  output : {
      path : path.resolve("build"),
      publicPath : "/public/assets/",
      filename : "build.js"
  },
  plugins : [],
  devtool: "inline-source-map",
  watch : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
