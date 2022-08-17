import html from '../core.js'
import { connect } from '../store.js'
import TodoItem from '../component/TodoItem.js'

function Todo_list({ todos, filter, filters }) {
    return html`
    <section class="main">
    <input id="toggle-all" 
    class="toggle-all" 
    type="checkbox"
    onchange="dispatch('toggleAll', this.checked)"
    ${todos.every(filters.completed) && 'checked'}>
    <label for="toggle-all">Mark all as complete</label>
    ${todos.filter(filters[filter]).map((todo, index) =>  TodoItem({ todo, index}))}
</section>
            `
}

export default connect()(Todo_list)