'use client'

import { TodoDisPatchContext, TodoStateContext } from "@/contexts/TodoContext";
import { TodoReducer } from "@/reducers/todoReducer";
import { Todo } from "@/types";
import { Children, useCallback, useEffect, useMemo, useReducer, useRef } from "react";


function initTodos(): Todo[] {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem('todos');

    return stored ? JSON.parse(stored) : [];
}

export default function TodoProvider({children}: {children: React.ReactNode}) {
    const [todos, dispatch] = useReducer(TodoReducer, [], initTodos);

    // 저장된 마지막 id 불러오기 (??널이면 1반환)
    const initId = typeof window !== 'undefined' ?
        Number(localStorage.getItem('todoId') ?? 1) : 1;

    // 현재 id 저장용 Ref, 값 변경 시 리렌더 발생 안 함
    const idRef = useRef(initId);    // (시작점)초기값은 initId 숫자로

    // todos 상태가 변경될 때마다 localStorage 저장(리듀서에서 마지막에 하던덜 여기로 옮김)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Todo생성(내용받음)
    const onCreate = useCallback((content: string) => {
        // 새 Todo 객체 생성(newItem 에 데이타 삽입해서 만듬)
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        // reducer dispatch
        dispatch({ type: 'CREATE', newItem });
        // 다음 id 증가
        idRef.current += 1;
        // 증가된 id 저장
        localStorage.setItem('todoId', JSON.stringify(idRef.current));
    }, []);

    // Todo 체크 토글(아이디 넘겨받음)
    const onUpdate = useCallback((targetId: number) => {
        dispatch({ type: 'UPDATE', targetId });
    }, []);

    // Todo 삭제 (아이디 넘겨 받음)
    const onDelete = useCallback((targetId: number) => {
        dispatch({ type: 'DELETE', targetId });
    }, []);

    // []의존성 배열(Context value 최적화, 불필요한 객체 재생성 방지)
    const dispatches = useMemo(() =>
        ({ onCreate, onUpdate: onUpdate, onDelete }),
        [onCreate, onUpdate, onDelete]);

    return (
        // Todo 상태 Context
        <TodoStateContext.Provider value={{ todos }}>
            {/* Todo 함수 Context */}
            <TodoDisPatchContext.Provider value={dispatches}>
                {children}
            </TodoDisPatchContext.Provider>
        </TodoStateContext.Provider>
    );
}