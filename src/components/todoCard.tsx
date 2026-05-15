import { useRouter } from 'next/navigation';
import style from './weatherCard.module.css'

export function TodoCard() {
    const router = useRouter();

    // todo 페이지 이동
    const handleMoveClick = () => {
        router.push('/todo');
    };

    // 추가

    // 검색

    // 체크

    // 삭제

    //저장

    return(
        <div className={style.container}>
            <h1 className={style.cardtext}>투두 카드</h1>
            <button onClick={handleMoveClick}>오늘의 일정 이동</button>
        </div>
    )
}