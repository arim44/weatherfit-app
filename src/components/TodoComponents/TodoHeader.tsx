import styles from './TodoHeader.module.css'

function TodoHeader() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.maintitle}>오늘의 일정 🗓️ </h1>
                {/* 한국어 형식 */}
                <p className={styles.dateweather}>{new Date().toLocaleDateString('ko-KR',
                    { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</p>
            </header>
        </div>
    );
}

export default TodoHeader;