import TodoListItem from "./TodoListItem";
import "./TodoList.css";
import { useContext } from "react";
import TodoContext from "../TodoContext";
// 할일들을 정리해서 리스트로 만들어주는 파일
export default function TodoList(){
    const {todos} = useContext(TodoContext);
    return(
        <>
            <div className="TodoList">
                {
                    /* 
                    추가 제거 체크 함수들을 map에 전달해주던 것을 해줄 필요가 없어졌다.
                    todos.map(todo => <TodoListItem key={todo.id} todo={todo} removeTodo = {removeTodo} toggleTodo={toggleTodo}/>) */ 
                    todos.map(todo => <TodoListItem key={todo.id} todo={todo}/>)                   
                }
            </div>
        </>
    );
}