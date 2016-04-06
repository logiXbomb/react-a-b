import webpack from 'webpack';

const WebpackConfig = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/client/main.js',
  ],
  output: {
    path: `${__dirname}/build/dist/`,
    filename: 'main.js',
    publicPath: '/dist/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: [/node_modules/, /MDB_3.4.0/],
    },{
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass']
    },{
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
    },{
      test: require.resolve('jquery'),
      loader: 'imports?jQuery=jquery',
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"development"' },
    }),
  ],
};

export default WebpackConfig;
