const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['babel-polyfill', './src/landing.js'],
    game: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },

  devServer: {
    contentBase: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // to here
      template: './src/index.html', // from here
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'game.html',
      template: './src/game.html',
      chunks: ['game'],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader',
      },
      {
        test: /\.(ogg|wav|mp3)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'audio/[hash]-[name].[ext]',
          },
        }],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          },
        ],
      },
    ],
  },
};
