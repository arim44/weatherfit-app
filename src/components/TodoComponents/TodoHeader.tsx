import React from 'react';
import style from './TodoApp.module.css'

function TodoHeader() {
    return (
        <div>
            <header className={style.header}>
                <h1 className={style.title}>오늘의 일정 🗓️ </h1>
                {/* 한국어 형식 */}
                <p className={style.dateweather}>{new Date().toLocaleDateString('ko-KR',
                    { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
            </header>
        </div>
    );
}

export default React.memo(TodoHeader);


// <div className={styles.container}>
//             <header className={styles.header}>
//                 <h1 className={styles.maintitle}>오늘의 일정 🗓️ </h1>
//                 {/* 한국어 형식 */}
//                 <p className={styles.dateweather}>{new Date().toLocaleDateString('ko-KR',
//                     { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
//             </header>
//         </div>