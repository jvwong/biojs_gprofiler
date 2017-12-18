const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.',
    port: 3000
  },
  plugins: [  
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};