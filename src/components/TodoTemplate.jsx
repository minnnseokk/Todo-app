import { useContext } from "react";
import TodoContext from "../TodoContext";
import "./TodoTemplate.css";
// 기본적인 템플릿을 구현해줄 파일
export default function TodoTemplate ({children}) {
    const { remainingCount } = useContext(TodoContext);
    return(
        <>
            <div className="TodoTemplate">
                <div className="appTitle">
                    ToDo 일정관리 - 남은 할 일 : {remainingCount}개
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </>
    );
}
