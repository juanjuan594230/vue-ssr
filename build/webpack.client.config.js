const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const VueClinetPlugin = require('vue-server-renderer/client-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  target: 'web',
  entry: path.join(__dirname, '../client/client-entry.js'),
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        // 忽略
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'resource/[path]/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'resource/[name].[ext]'
        }
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HtmlPlugin({
      template: path.join(__dirname, 'template.html')
    }),
    // 将客户端的整个输出，构建为单个JSON文件，默认文件名为'vue-ssr-client-manifest.json'
    new VueClinetPlugin()
  ]
}

if (isDev) {
  config.devServer = {
    port: 8088,
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/dist/index.html'
    },
    overlay: true
  };
  config.devtool = '#cheap-module-eval-source-map';
}

module.exports = config;
