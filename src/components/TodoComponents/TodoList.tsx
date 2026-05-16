import style from './TodoList.module.css'
import TodoItem from './TodoItem';
import { ChangeEvent, useState, useMemo, useContext } from 'react';
import { TodoDisPatchContext, TodoStateContext } from '@/contexts/TodoContext';

// // TodoList 컴포넌트 props 타입
// interface TodoListProps{
//     todos:Todo[];
//     onUpdate: (targetId:number) => void;
//     onDelete : (targetId:number) => void;
// }

// function TodoList({todos, onUpdate, onDelete}: TodoListProps){
function TodoList() {
    const { todos } = useContext(TodoStateContext);

    // 검색어 입력기능시(검색어 상태)
    const [search, setSearch] = useState('');

    // 검색어 입력 시 상태 업데이트
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    // 검색한 결과 반환 함수
    const getSearchResult = () => {
        // 검색어가 없으면 전체 todos 반환
        if (search === '') return todos;
        // 검색어가 포함된 todo만 필터링(conetnt에 들어있는 단어만 통과하게)
        return search === '' ? todos : todos.filter((todo) =>
            todo.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }

    // Todo 분석 최적화(useMemo) : 리렌더링 시 호출 줄이기
    // todos가 변경될 때만 다시 계산됨
    const analyzeTodo = useMemo(() => {
        console.log('analyzeTodo 호출');

        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return { totalCount, doneCount, notDoneCount };
    }, [todos]);

    // 객체 구조분해
    const { totalCount, doneCount, notDoneCount } = analyzeTodo;

    // 완료된 todo 아래로 정렬(isDone 되면 아래)
    // false =0, true = 1 이니까 0-1=-1 완료안된 Todo(false)가 위로 올라감
    const sortedTodos = useMemo(() => {
        // 원본 배열 변경 방지 위해 복사
        return [...getSearchResult()].sort(
            (a, b) => Number(a.isDone) - Number(b.isDone)
        );
    }, [todos, search]); //[언제 다시 계산힐지] todos 또는 search 변경 시 다시 계산헤서 정렬

    return (
        <div className={style.container}>
            <h4>Todo List</h4>
            {/* Todo 상태 표시 */}
            <div className={style.todo_status}>
                <div>총 Todo : {totalCount}, 완료된 Todo : {doneCount}, 남은 Todo: {notDoneCount}</div>
            </div>
            {/* 검색창 */}
            <input type="text"
                className="searchbar"
                placeholder="검색어를 입력하세요." onChange={onChangeSearch} />
            {/* Todo 목록 */}
            <div>
                {sortedTodos.map((todo) =>
                    <TodoItem todo={todo} key={todo.id} />)}

            </div>
        </div>
    );
}

export default TodoList;