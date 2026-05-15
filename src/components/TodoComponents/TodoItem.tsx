import style from './TodoItem.module.css'

export default function TodoItem(){
    return(
        <div className={style.TodoItem}>
            <div>
                <input type='checkbox' className={style.checkbox_col} />
            </div>
            <div className={style.title_col}>할 일</div>
            <div className={style.date_col}>{new Date().toLocaleDateString()}</div>
            <div><button className={style.btn_col}>삭제</button></div>
        </div>
    );
}