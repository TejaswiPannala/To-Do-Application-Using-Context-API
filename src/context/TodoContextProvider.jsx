import React, { useState } from 'react';
import TodoContext from './TodoContext';

function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (!text) return null;
        const todo = {
            todoText: text,
            isCompleted: false,
            id: Date.now(),
        };

        setTodos((prev) => [...prev, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // New updateTodo function
    const updateTodo = (id, newText) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, todoText: newText } : todo
        ));
    };

    return (
        <TodoContext.Provider value={{ addTodo, todos, deleteTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;
