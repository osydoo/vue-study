const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval",
  resolve: {
    extensions: [".js", ".vue"],
  },
  entry: {
    app: path.join(__dirname, "./main.js"),
  },
  module: {
    // 웹팩의 대부분의 일들을 해준다.
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      filename: __dirname + "/dist/index.html",
    }),
  ], // 부가적인 역할을 한다. 압축, script로 추가 등등
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    host: "127.0.0.1",
    port: 8080,
    open: true,
    historyApiFallback: false,
    static: path.join(__dirname + "/dist"),
  },
  mode: "development",
};
