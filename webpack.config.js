const path = require('path');

module.exports = {
  entry: {
    main: './src/js/index.js'
  },
  devtool: 'eval',
  devServer: {
    contentBase:  [path.join(__dirname, "public"), path.join(__dirname, ".")],
    port: 3000,
    publicPath: '/'
  },
  plugins: [  
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')    
  }
};