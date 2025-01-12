import { MdAdd } from "react-icons/md";
import "./TodoInsert.css"
import { useContext, useState } from "react";
import TodoContext from "../TodoContext";
// 입력값을 form으로 전달해줄 파일
export default function TodoInsert(){
    const { insertTodo } = useContext(TodoContext);
    const [value, setValue] = useState('');
    const changeValue = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        insertTodo(value);
        setValue("");;
    }
    return(
        <>
            <form className="TodoInsert" onSubmit={onSubmit}>
                <input type="text" placeholder="오늘 할일을 추가하세요" value={value} onChange={changeValue}/>
                <button type="submit"><MdAdd /></button>
            </form>
        </>
    );
}