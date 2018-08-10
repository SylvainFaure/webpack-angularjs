const path      = require('path');
const webpack   = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
//const mode = process.env.NODE_ENV || 'development';
//mode == 'development' ? 'style-loader' : 

const entry = {
  main: path.resolve(__dirname, 'src/app.js')
}
const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'mybundle.js',
  //publicPath: '/dist/'
}

const devServer = {
  hot: true
}

const modules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      } 
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', 
        'sass-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: ['file-loader']
    },
    {
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
      loader: 'url-loader'
  }
  ]
}

const plugins = [
  new CleanWebpackPlugin('dist', {}),
  new MiniCssExtractPlugin({filename: 'style.css'}),
  new HtmlWebPackPlugin({
    template: "./src/views/index.html",
    filename: "./index.html"
  }),
  new CopyWebpackPlugin([
    {from: 'src/views/*', to: 'views', flatten: true},
    {from: 'src/components/**/*', to: 'components', flatten: true, test: /\.html$/, ignore: [ '*.js' ]}
  ]),
  new webpack.HotModuleReplacementPlugin()
]

const resolve = {
  alias            : {
    views : path.resolve(__dirname, 'src/views'),
    services  : path.resolve(__dirname, 'src/services')
  },
  descriptionFiles : ['package.json'],
  modules          : ['node_modules']
};

module.exports = {
  entry,
  output,
  module : modules, // Set to not conflict with module from module.exports,
  plugins,
  resolve
}