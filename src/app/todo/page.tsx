import TodoHeader from '@/components/TodoComponents/TodoHeader';
import styles from '../page.module.css';

export default function Page() {
    return (
        <div>
            <TodoHeader />
            <h1 className={styles.maintitle}>투두 페이지</h1>
        </div>
    );
}