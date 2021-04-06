const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    main: { 
      import: path.join(__dirname, 'src/main.js'),
      dependOn: 'axios'
    },
    axios: {
      import: 'axios'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    }),
    new VueLoaderPlugin(),
    // new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {test: /\.vue$/, use: 'vue-loader'},
      {test: /\.css$/, use: [
          {loader: 'style-loader'},
          // MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        }
      ]}
    ]
  },
  resolve: {
    alias: {
      'vue$': path.join(__dirname, 'node_modules\\vue\\dist\\vue.esm-bundler.js')
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
}
