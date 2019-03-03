import { Indicator } from 'mint-ui'
import ToolBar from './components/ToolBar.js'
import Banner from './components/Banner.js'
export default class Layout {
    constructor (h) {
        Indicator.open();
        return (
            <div>{ new ToolBar(h) }</div>
        )
    }
}