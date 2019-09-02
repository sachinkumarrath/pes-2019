const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode : "production",
  entry : ["./src/scripts/index.js"],
  output : {
      path : path.resolve("build"),
      publicPath : "/public/assets/",
      filename : "build.js"
  },
  plugins:[
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    }),
    new MiniCssExtractPlugin({
      path : path.resolve("build"),
      publicPath : "/public/assets/",
      filename: "style.css"
    })
  ],
  devtool: "source-map",
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
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]  
      }
    ]
  }
};
