export default function App(h) {
    return h('div', {
        attrs: {
            id: 'app'
        }
    }, [
        h('router-view')
    ])
}