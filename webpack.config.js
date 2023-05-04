const path = require('path');

module.exports = {
  entry: './databasepg.js',
  output: {
    path: path.resolve(__dirname, 'designer'),
    filename: 'databasepg.js'
  },
  mode: 'development'
};
