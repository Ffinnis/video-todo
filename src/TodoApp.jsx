import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([...todos, newTodo])
            setNewTodo('')
        }
    }

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp