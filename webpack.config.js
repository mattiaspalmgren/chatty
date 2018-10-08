const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

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

module.exports = env => {
    return {
        entry: "./src/index.js",
        module: {
            rules: [
                jsLoader,
                cssLoader
            ]
        },
        resolve: { extensions: ["*", ".js", ".jsx"] },
        output: {
            path: path.resolve(__dirname, "dist/"),
            filename: "bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, "dist/"),
            port: 3000,
        },
        plugins: [
            new HtmlWebpackPlugin({ template: path.join(__dirname, '/src/index.html') }),
            new DefinePlugin({ 'env.CHATTER_API_URL': JSON.stringify(env.CHATTER_API_URL)})
        ]
    }
};
