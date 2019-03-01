import App from './app'
import $ from 'jquery'
import Vue from 'vue'
import router from './router/index.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' // webpack必须引入'style-loader', 'css-loader'才能正确打包style.css文件

Vue.use(MintUI)
window.$ = $

new Vue({ // Vue运行时，不包含编译器，相比体积小百分之30
    el: '#app',
    router,
    render: h => App(h)
})
