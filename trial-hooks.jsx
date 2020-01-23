import React, {useState} from 'react'
import './App.css'

function Todo({todo, index, completeTodo, removeTodo}){
    return (
        <div className="todo" style={{textDecoration:todo.isCompleted?"line-through":""}}>
            {todo.text}
             <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
             </div>
        </div>
    )
}

function TodoForm({addTodo}){
    const [value, setvalue] = useState('')
    const handleForm = e => {
        e.preventDefault()
        setvalue(value)
        if(!value) return
        addTodo(value)
        setvalue('')
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input 
                    className="todo"
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                />
            </form>
        </div>
    )
}

function ReactHooks() {
    const [todos, settodo] = useState([
        {
            text: "wake up and write some codes",
            isCompleted: false
        },
        {
            text: "wake up and write some codes",
            isCompleted: false
        },
        {
            text: "wake up and write some codes",
            isCompleted: false
        }
    ])

    const addTodo = (text) => {
        const newTodo = [...todos, {text}]
        settodo(newTodo)
    }

    const completeTodo = (index) => {
        const newTodo = [...todos]
        newTodo[index].isCompleted = true
        settodo(newTodo)
    }

    const removeTodo = (index) => {
        const newTodo = [...todos]
        newTodo.splice(index, 1)
        settodo(newTodo)
    }

    return (
        <div className="app">
            <div className="todo-list">
                {
                    todos.map((todo, index) => {
                        return <Todo 
                            key={index} 
                            index={index} 
                            todo={todo}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                        />
                    })
                }
                <TodoForm
                    addTodo={addTodo}
                />
            </div>
        </div>
    )
}

export default ReactHooks
