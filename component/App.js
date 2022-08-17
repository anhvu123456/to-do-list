import html from '../core.js'
import { connect } from '../store.js'
import Header from '../component/Header.js'
import Todo_list from '../component/Todo_list.js'
import Footer from '../component/footer.js'

function App({todos}) {
    // console.log(todos)
    return html
        `<section class="todoapp">
            ${Header()}
            ${todos.length > 0 && Todo_list()}
            ${todos.length > 0 &&  Footer()}
        </section>`
}

export default connect()(App)