const path = require("path");

module.exports = {
	mode : "development",
  entry : ["./src/scripts/index.js"],
  output : {
      path : path.resolve("build"),
      publicPath : "/public/assets/",
      filename : "build.js"
  },
  plugins : [],
  devtool: "inline-source-map",
  watch : true,
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
  },
  devServer: {
    contentBase : "./src/pages",
    port : 9090,
    inline : true
  }
};
