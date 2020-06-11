const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development', // 打包模式
    devServer: {
        proxy: {
            "/api": {
                target: "http://localhost:7000/",
                pathRewrite: { "^/api": "" }
            }
        }  // 开发模式 api 代理
    }
}

module.exports = merge(commonConfig, devConfig);