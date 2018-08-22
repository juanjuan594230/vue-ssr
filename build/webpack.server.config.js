const path = require('path');
const webpack = require('webpack');
const VueServerPlugin = require('vue-server-renderer/server-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  target: 'node',
  entry: path.join(__dirname, '../client/server-entry.js'),
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, '../server-build'),
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('../package.json').dependencies),
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
    // 有什么用
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    // 将服务器的整个输出构建为单个JSON文件的插件 vue-ssr-server-bundle.json
    new VueServerPlugin()
  ]
};

if (isDev) {
  config.devtool = 'source-map';
}

module.exports = config;
