import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import "./TodoListItem.css"
import { useContext } from "react";
import TodoContext from "../TodoContext";
// 리스트에 들어갈 요소들을 정의해주는 파일
export default function TodoListItem ({todo}){
    const { removeTodo, toggleTodo } = useContext(TodoContext);
    // 함수들을 불러와주기만 하면 된다.
    const { id, checked, text } = todo;
    return (
        <div className="TodoListItem">
            <div className={checked ? "checkBox checked" : "checkBox"} onClick={() => toggleTodo(id)}>
                {
                    checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />
                }
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => removeTodo(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}