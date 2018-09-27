const path = require("path");
const webpack = require("webpack");

const jsLoader = {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    loader: "babel-loader",
    options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
    include: __dirname + '/src',
};

const cssLoader = {
    test: /\.css$/,
    use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: "[local]___[hash:base64:5]"
              }
            }
          ]
};

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      jsLoader,
      cssLoader
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
