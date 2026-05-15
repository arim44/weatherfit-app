
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

    return (
        <div className={style.search_bar}>
            <input type='text' placeholder='도시이름을 영어로 입력해주세요' ref={inputRef} />
            <button onClick={handleSearchClick}>search</button>
        </div>
    );
}