'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'), // 上下文是入口文件所处的目录的绝对路径的字符串。
    entry:{
        app:"./src/main.js"
    },
    output:{
        path: config.build.assetsRoot,    //目标输出当前目录的绝对路径
        filename:'[name].js',  //用于输出的文件名
        publicPath: config.dev.assetsPublicPath // 此输出目录对应的公开 URL
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module:{
        rules:[{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            include: [
                resolve('src')
            ]
        }, {
            test:/\.css$/,
            use:['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            exclude: [resolve('src/icons')]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({         //添加插件，这个插件会生成一个h5文件，将webpack包添加到script标签中
            template: "./index.html"
        })
    ],
    devServer:{                             //创建web服务
        // contentBase:path.join(__dirname, './release'), 
        open:true,
        port: config.dev.port || 9000
    }
}