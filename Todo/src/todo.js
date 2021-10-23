//Converting To-Do App Part II
import uuidv4 from 'uuid/v4'

//Setup the empty todos array
let todos = []

//loadTodos
//Arguments: none
//Return value: none
//loadTodos function fetch data from localstorage and store it onto todos array of object
const loadTodos = () =>{
    const todoJSON = localStorage.getItem('todos')
    try {
        todos = todoJSON ? JSON.parse(todoJSON) : []
    } catch (error) {
        todos = []
    }
}

//saveTodos
//Arguments: none
//Return value: none
const saveTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos))
}

//getTodos
//Arguments: none 
//Return value: todos array
const getTodos = () => todos

//createTodos
//Arguments: todo text
//Return value: none
const createTodo = (text) =>{
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()
}

//removeTodos
//Arguments: id of todo to remove
//Return value: none
const removeTodo = (id) =>{
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

//toggleTodos
//Arguments: id of todo to toggle
//Return value: none
const toggleTodo = (id) =>{
    const todo = todos.find((todo) => todo.id === id) //short-hand arrow function
    if(todo){ 
        todo.completed = !todo.completed 
        saveTodos
    }    
}

loadTodos()  //its will make the data fetched from localStorage avaliable

//Make sure to call loadTodos and setup the exports
export{ getTodos, createTodo, removeTodo, toggleTodo }