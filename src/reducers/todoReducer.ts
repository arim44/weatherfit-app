import { Action, Todo } from "@/types";


// 액션 타입 상태별 로직

// todo 리듀서
export function TodoReducer(todos: Todo[], action: Action) {
    //let result;

    switch (action.type) {
        case 'CREATE': {
            return [action.newItem, ...todos];
        }
        case 'UPDATE': {
            // todos를 맵으로 todo를 받아 todo.id와 타겟아이디가 같으면 todo 넣고 isDone 토글시킴
            return todos.map((todo) =>
                //검사
                todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo);
        }
        case 'DELETE': {
            // 필터로 todo.id 와 타겟아이디가 일치하지 않은 것만 남겨서 해당 투두삭제
            return todos.filter((todo) => todo.id !== action.targetId);
        }
        default:
            return todos;
    };
    // // 결과 리턴전에 로컬에 저장 => TodoApp 에서함
    // localStorage.setItem('todos', JSON.stringify(result));
    // return result;
}