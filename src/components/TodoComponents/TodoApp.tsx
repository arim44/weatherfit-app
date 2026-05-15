'use client'
import TodoHeader from '@/components/TodoComponents/TodoHeader';
import styles from '../page.module.css';
import TodoEditor from '@/components/TodoComponents/TodoEditor';
import TodoList from '@/components/TodoComponents/TodoList';
import { useReducer, useRef } from 'react';
import { Action, Todo } from '@/types';

// 액션 타입 상태별 로직
function todoReducer(todos: Todo[], action:Action){
    switch(action.type){
        case 'CREATE':{
            return [action.newItem, ...todos];
        }
        case 'UPDATE': {
            // todos를 맵으로 todo를 받아 todo.id와 타겟아이디가 같으면 todo 넣고 isDone 토글시킴
            return todos.map((todo)=>
            //검사
            todo.id === action.targetId? {...todo, idDone: !todo.isDone} :todo);
        }
        case 'DELETE':{
            // 필터로 todo.id 와 타겟아이디가 일치하지 않은 것만 남겨서 해당 투두삭제
            return todos.filter((todo)=>todo.id !== action.targetId);
        }
        default:
            return todos;
    };
}

export default function TodoApp() {
    const [todos, dispath] = useReducer(todoReducer, [] as Todo[])

    const idRef = useRef(1);
    // 투두생성(내용받음) 생성 시 투두에 있는 그대로 데이타 보냄
    const onCreate = (content: string)=>{
        // newItem 에 데이타 삽입해서 만듬
        const newItem = {
            id: idRef.current,
            content,
            isDone: false,
            createDate: new Date().getTime(),
        };
        dispath({type:'CREATE', newItem});
        idRef.current += 1;
    }

    return (
        <div>
            <TodoHeader />
            {/* <h1 className={styles.maintitle}>투두 페이지</h1> */}
            <TodoEditor onCreate={onCreate}/>
            <TodoList />
        </div>
    );
}