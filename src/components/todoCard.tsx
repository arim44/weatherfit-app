'use client'
import { useRouter } from 'next/navigation';
import style from './todoCard.module.css'
import { useContext } from 'react';
import { TodoStateContext } from '@/contexts/TodoContext';

export function TodoCard() {
    const router = useRouter();

    // todo 미리보기
    // todo 상태 가져오기
    const {todos} = useContext(TodoStateContext);
    // 완료안된 todo만 가져와서 3개만 자름
    const visibleTodos = todos.filter((todo)=>!todo.isDone).slice(0,3);

    // todo 페이지 이동
    const handleMoveClick = () => {
        router.push('/todo');
    };

    // 목록 추가된 투두 리스트 중 2~3개만 보이게

    return(
        <div className={style.container}>
            <h1 className={style.title}>Todo...</h1>
            <div className={style.recommendBox}> 
                {visibleTodos.length > 0? (
                    visibleTodos.map((todo)=>(
                        <p key={todo.id} className={style.todoItem}>• {todo.content}</p>
                    )) ):(
                        <p className={style.empty}>남은 일정이 없어요 ✨</p>
                    )}</div>
            <button onClick={handleMoveClick}>오늘의 일정 이동</button>
        </div>
    )
}