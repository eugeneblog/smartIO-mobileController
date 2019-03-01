import { Indicator } from 'mint-ui'
export default class Layout {
    constructor (h) {
        Indicator.open();
        return h('h2', 'Home')
    }
}