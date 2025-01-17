import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoTemplate from './components/TodoTemplate.jsx'
import TodoInsert from './components/TodoInsert.jsx'
import TodoList from './components/TodoList.jsx'
import TodoProvider from './TodoProvider.jsx'
// 깃 충돌 확인을 위한 주석
function App() {
  const default_color = "blue"
  const default_size = 2
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
      <ColorBox size = {default_size}/>
    </TodoProvider>
  );
}
export default App