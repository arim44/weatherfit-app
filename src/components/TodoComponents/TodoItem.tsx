import { Todo } from '@/types';
import style from './TodoItem.module.css'
import React, { useContext } from 'react';
import { TodoDisPatchContext, TodoStateContext } from '@/contexts/TodoContext';

// todo 하나만 필요
interface TodoItemProps{
    todo : Todo;
}

//function TodoItem({todo, onUpdate, onDelete}:TodoItemProps){
function TodoItem({todo} : TodoItemProps){
    const {onUpdate, onDelete} = useContext(TodoDisPatchContext);

    // 체크(토글)
    const onChangeCheckbox = () => onUpdate(todo.id);
    const onClickDelete = () => onDelete(todo.id);

    return(
        <div className={style.TodoItem}>
            <div>
                <input type='checkbox' className={style.checkbox_col} 
                checked={todo.isDone} onChange={onChangeCheckbox}/>
            </div>
            <div className={`${style.title_col} ${todo.isDone? style.done:''}`}>{todo.content}</div>
            <div className={style.date_col}>{new Date().toLocaleDateString()}</div>
            <div><button className={style.btn_col} onClick={onClickDelete}>삭제</button></div>
        </div>
    );
}

export default React.memo(TodoItem);