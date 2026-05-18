
import { useRef } from "react";
import style from './SearchBar.module.css'


interface SearchBarProps {
    onChangeQuery: (q: string) => void;
    //resetPage: () => void;
}

export default function SearchBar({ onChangeQuery }: SearchBarProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    // 버튼 타입 맞추기
    const handleSearchClick = () => {
        if (!inputRef.current) return;
        onChangeQuery(inputRef.current.value);
    };

    //엔터로 추가하기
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // 한글 조합 중이면 무시
        if (e.nativeEvent.isComposing) return;

        // 눌린키가 엔터키면 onsubmit() 호출
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    }

    return (
        <div className={style.search_bar}>
            <input type='text' placeholder='도시이름을 영어로 입력하세요'
                ref={inputRef} onKeyDown={onKeyDown} />
            <button onClick={handleSearchClick}>search</button>
        </div>
    );
}