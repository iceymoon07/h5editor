const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/main.js', // 入口文件
    output: {
        filename: 'main.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出文件的根路径
    },
    module: {
        rules: [
            {
                /*将 js 文件转码成 es5*/
                test: /\.js?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    }
                ],
                exclude: /node_modules/ //去除 modules
            },
            {
                /*解析 vue 文件*/
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            },
                        }
                    }
                ]
            },
            {
                /*解析 css*/
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer") /*自动添加前缀*/
                            ]
                        }
                    }
                ]
            },
            {
                /*解析 less*/
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            filename: 'index.html', // 打包后的文件名，默认index.html
            template: path.resolve(__dirname, 'index.html') // 导入被打包的 html 文件模板
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(
            {
                analyzerMode: 'static',
                analyzerHost: '127.0.0.1',
                analyzerPort: 8888,
                reportFilename: 'report.html',
                defaultSizes: 'parsed',
                openAnalyzer: true,
                generateStatsFile: false,
                statsFilename: 'stats.json',
                statsOptions: null,
                logLevel: 'info'
            }
        ),
    ]
}
