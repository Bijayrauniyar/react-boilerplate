const path = require('path');
//const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlPlugin = new HtmlWebPackPlugin({
//     template: "./src/index.html",
//     filename: "./index.html"

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    devServer:{
      contentBase:path.join(__dirname,'public')
    }
    //mode:'development',
    //plugins: [htmlPlugin]
};