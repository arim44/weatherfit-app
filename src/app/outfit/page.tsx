import OutFitApp from '@/components/OutFitComponents/OutfitApp';
import styles from '../page.module.css';

export default function Page() {
    return (
        <div>
            <h1 className={styles.maintitle}>AI 코디 추천</h1>
            <OutFitApp />
        </div>
    );
}