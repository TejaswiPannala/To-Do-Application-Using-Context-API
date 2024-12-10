// App.jsx
import React from 'react'
import Todoinput from './components/Todoinput'
import TodoContextProvider from './context/TodoContextProvider'
import TodoList from './components/TodoList'


function App() {
  return (
    <TodoContextProvider>
      <Todoinput />
      <TodoList/>
    </TodoContextProvider>
  ) 
}

export default App