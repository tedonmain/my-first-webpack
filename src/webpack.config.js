const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resoolve(__dirname, 'dist'),
        filename: 'bundle.js;'
    }
}

module.exports = config;