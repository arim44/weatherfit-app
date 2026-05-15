import TodoHeader from '@/components/TodoComponents/TodoHeader';
import styles from '../page.module.css';
import TodoEditor from '@/components/TodoComponents/TodoEditor';
import TodoList from '@/components/TodoComponents/TodoList';
import TodoApp from '@/components/TodoComponents/TodoApp';

export default function Page() {
    return (
        <div>
           <TodoApp />
        </div>
    );
}


//  <TodoHeader />
//             {/* <h1 className={styles.maintitle}>투두 페이지</h1> */}
//             <TodoEditor />
//             <TodoList />