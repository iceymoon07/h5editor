const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
    mode: 'production' // 打包模式
}

module.exports = merge(commonConfig, prodConfig)