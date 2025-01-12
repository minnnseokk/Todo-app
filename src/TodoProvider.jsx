import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import TodoContext from "./TodoContext";
// Reducer를 사용해 상태변수를 관리하고 Provider를 제공해주는 파일
// 초기 상태변수
const initailState= [
    { id: 1, checked: true, text: "집에 갈까말까"},
    { id: 2, checked: false, text: "코딩 잘하고"},
    { id: 3, checked: false, text: "싶어요"}
];
function todoReducer(state, action){
    switch(action.type){
        // 여기서 제공되는 todo 요소중 checked는
        // 기본적으로 false 상태임으로 실시간으로 변경될 이유가 없다.
        // 추가 메서드에서 필요한 요소는 id, text
        case 'insert':{
            const { id , text } = action.payload;
            return [...state , { id, checked: false, text  }];
        }
        // remove에 필요한 요소는 id
        case 'remove':{
            const { id } = action.payload;
            return state.filter(todo => todo.id !== id);
        }
        // toggle에 필요한 요소는 id
        case 'toggle':{
            const { id } = action.payload;
            return state.map(todo => 
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            );
        }
        default:
            throw new Error(`정의되지 않은 함수타입: ${action.type}`);
    }
}
export default function TodoProvider({children}){
    // Reducer 상태변수 정의
    const [todos, dispatch] = useReducer(todoReducer, initailState);
    // 남은 일의 수를 정의할 상태변수수
    const [remainingCount, setRemainingCount] = useState(0);
    // 기본적인 id요소가 3개가 있기 때문에 4번째로 Ref초기점을 설정하였다.
    const nextId = useRef(4);
    const insertTodo = text =>{
        // dispatch({사용할 함수타입, 사용할 객체 })
        dispatch({ type: 'insert', payload: { id: nextId.current, text }})
        nextId.current++;
    };
    const removeTodo = id => {
      console.log("할일 한개를 삭제하였습니다.");
      dispatch({ type: 'remove', payload: { id } });
    };
    const toggleTodo = id => {
      console.log("체크박스를 토글합니다.");
      dispatch({ type: 'toggle', payload: { id } });
    };
    // 남은 할 일의 개수를 계산하는 useEffect
    useEffect(() => {
        const incompleteCount = todos.filter(todo => !todo.checked).length;
        setRemainingCount(incompleteCount);
    }, [todos]); // todos 상태가 변경될 때마다 실행
const value = useMemo(() => ({
todos,
insertTodo,
removeTodo,
toggleTodo,
remainingCount,
}), [todos, insertTodo, removeTodo, toggleTodo,remainingCount]);
    return(
        <>
            <TodoContext.Provider value={value}>
                {children}
            </TodoContext.Provider>
        </>
    );
}