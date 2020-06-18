const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
    mode: 'production',// 打包模式
    externals: {
        vue: 'window.Vue',
        "vue-router": 'window.VueRouter',
        vuex: 'window.Vuex',
        'element-ui': 'window.ELEMENT',
        html2canvas: 'window.html2canvas',
        axios: 'window.axios'
    }
}

module.exports = merge(commonConfig, prodConfig)