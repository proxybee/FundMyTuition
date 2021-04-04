const path = require('path');

module.exports = {
devtool: 'inline-source-map',
mode: 'development',
entry: [
  path.resolve(__dirname, 'public/assets/index')
],
target: 'web',
output: {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: 'bundle.js'
},
plugins: [],
// module: {
// loaders: [
//   {test: /\.js$/, excludes: /node_modules/, loaders: ['babel']},
//   {test: /\.css$/, loaders: ['style', 'css']}
// ]
// }
}
