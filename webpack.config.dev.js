const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode : "development",
  entry : ["./src/scripts/index.js"],
  output : {
      path : path.resolve("build"),
      publicPath : "/public/assets/",
      filename : "build.js"
  },
  plugins : [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    }),
  ],
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
      },
      {
        test: /\.(css|s[ac]ss)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]  
      }
    ]
  }
};
