// Todoinput.jsx
import React, {useState, useContext} from 'react'
import TodoContext from '../context/TodoContext'

function Todoinput() {
    const [input, setInput] = useState("")
    const {addTodo}= useContext(TodoContext)
    const handleAddTodo=(e)=> {
        e.preventDefault()
        addTodo(input)
        setInput("")
    }
  return (
    <div>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default Todoinput