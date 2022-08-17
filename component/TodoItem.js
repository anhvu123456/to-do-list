import html from '../core.js'
import { connect } from '../store.js'

function TodoItem({todo, index, editIndex}) {
   
    return `
         <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class 'editing' when editing and 'completed' when marked as completed -->
            <li class="${ todo.completed === true && 'completed' } ${ editIndex === index && 'editing'}">
                <div class="view">
                    <input class="toggle" type="checkbox" 
                    ${ todo.completed && 'checked'}
                    onchange="dispatch('toggle', ${index})">
                    <label ondblclick="dispatch('startEdit', ${index})">${ todo.title }</label>
                    <button class="destroy" onclick="dispatch('destroy',${index})"></button>
                </div>
                <input class="edit" value="${ todo.title }" onkeyup=" event.keyCode === 13 && dispatch('endEdit', this.value.trim())">
            </li>
        </ul>
    `
}

export default connect()(TodoItem)