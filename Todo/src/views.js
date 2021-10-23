//Converting To-Do App Part II
import { getFilters } from './filters'
import { getTodos, toggleTodo, removeTodo } from './todo'

//renderTodos
//Arguments: none
//Return value: none
const renderTodos = () =>{
    const todoE1 = document.querySelector('#todos')
    const filters = getFilters()   //return filters object
    const todos = getTodos()    //return todos array of object

    let filteredTodos = todos.filter((todo) =>{
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed 
        return searchTextMatch && hideCompletedMatch 
    })
    
    todoE1.innerHTML=''

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed) 
    // console.log(incompleteTodos)

    //Get the DOM elements for list summary 
    const summary = generateSummaryDOM(incompleteTodos)
    todoE1.appendChild(summary)

    //1. if todos contain data render them else render p tags with class "empty-message" and message "No-to-dos-to-show"
    if(filteredTodos.length > 0){
        filteredTodos.forEach((todo) =>{     
            const p = generateTodoDOM(todo)
            todoE1.appendChild(p)
        })    
    }else{
        const messageE1 = document.createElement('p')
        messageE1.textContent = 'There are no to-dos to show'
        messageE1.classList.add('empty-message')
        todoE1.appendChild(messageE1)
    }

}

//generateTodoDOM
//Arguments: todo
//Return value: the todo element

//Complex DOM Rendering (Adding more DOM Element) Challenge
const generateTodoDOM = (todo) =>{
    const todoE1 = document.createElement('label')
    const containerE1 = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    //Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerE1.appendChild(checkbox)
    checkbox.addEventListener('change', (e) =>{
        // console.log(e.target.(checked)
        toggleTodo(todo.id) 
        // saveTodos(todos)  //remove saveTodos since toggleTodo() have saveTodos() in its function
        renderTodos()  //remove the two argument todos and filters beco of the
    })

    //Setup todo text
    todoText.textContent = todo.text
    containerE1.appendChild(todoText)

    //setup container and add css class selector
    todoE1.classList.add('list-item')
    containerE1.classList.add('list-item__container')
    todoE1.appendChild(containerE1)
    //Setup remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoE1.appendChild(removeButton)
    removeButton.addEventListener('click', () =>{
        removeTodo(todo.id)
        // saveTodos(todos)
        renderTodos()
    })
    
    return todoE1
}

//generateSummaryDOM
//Arguments: incompletedTodos
//Return value: the summary element

const generateSummaryDOM = (incompleteTodos) =>{
    const summary = document.createElement('h3')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    summary.classList.add('list-title')
    return summary
} 

//Make sure to set up the exports
export {generateTodoDOM, renderTodos, generateSummaryDOM }