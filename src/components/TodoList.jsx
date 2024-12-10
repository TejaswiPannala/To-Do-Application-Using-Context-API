import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoList() {
    const { todos, deleteTodo, updateTodo } = useContext(TodoContext);

    const handleUpdate = (id) => {
        const newText = prompt('Enter the new text for the todo:');
        if (newText) {
            updateTodo(id, newText);
        }
    };

    return (
        <div>
            {
                todos?.map((todo) => 
                    <div key={todo.id}>
                        <p>{todo.todoText} 
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => handleUpdate(todo.id)}>Update</button>
                        </p>
                    </div>
                )
            }
        </div>
    );
}

export default TodoList;
