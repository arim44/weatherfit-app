import style from './TodoList.module.css'
import TodoItem from './TodoItem';

function TodoList(){
    return(
        <div className={style.container}>
            <h4>Todo List</h4>
            <input type="text"
                className="searchbar"
                placeholder="검색어를 입력하세요." />

            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
}

export default TodoList;