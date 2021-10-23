//Converting To-Do App Part II

//Add necessary import
//Render initial todos
//Set up search text handler
//Set up checkbox handler
//Set up form submission handler
//Bonus: Add a watcher for local storage

//Add necessary import
import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todo'

//Render initial todos
renderTodos()

//Set up search text handler
document.querySelector('#search-text').addEventListener('input', (event) =>{    
    // filters.searchText = event.target.value
    setFilters ({ searchText: event.target.value})
    renderTodos() //re-renderTodo()
})

//Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) =>{//1
    // filters.hideCompleted = e.target.checked  
    setFilters ({ hideCompleted: e.target.checked})
    renderTodos()
})

//Set up form submission handler
document.querySelector('#todo-form').addEventListener('submit', (event) =>{
    event.preventDefault()
    const text = event.target.elements.todoText.value.trim()
    if(text.length > 0){
        createTodo(text)
        // saveTodos(todos)
        renderTodos()
        event.target.elements.todoText.value =''
    }
})

//Bonus: Add a watcher for local storage
window.addEventListener('storage', (e) =>{
    if(e.key === 'todos'){
        loadTodos()
        renderTodos()
    }
})

//1. settung up view.js
//2. Delete the content of index.js and copy the content of cl1a-todo-app.js to index.js
//3. Restructing of index.js page
//4. Delete all the files in scripts folder
//5. Run npm run build for production mode