'use strict'

const path = require('path')

module.exports = {
    build: {
        assetsRoot: path.resolve(__dirname, '../dist/index.html'),
        assetsPublicPath: '/static/'
    },
    dev: {
        port: 8080,
        host: 'localhost',
        assetsPublicPath: '/',
    }
}