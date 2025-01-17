import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoTemplate from './components/TodoTemplate.jsx'
import TodoInsert from './components/TodoInsert.jsx'
import TodoList from './components/TodoList.jsx'
import TodoProvider from './TodoProvider.jsx'

function App() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
      <ColorBox />
    </TodoProvider>
  );
}
export default App