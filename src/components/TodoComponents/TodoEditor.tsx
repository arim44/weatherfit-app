'use client'
import { useContext, useRef, useState } from 'react';
import style from './TodoEditor.module.css'
import { TodoDisPatchContext } from '@/contexts/TodoContext';

// interface TodoEditorProps{
//     // 내용(스트링) 받아서 보이드함수로 반환
//     onCreate:(content:string)=> void;
// }

// 투두 작성하기
function TodoEditor() {
    const {onCreate} = useContext(TodoDisPatchContext);
     // 내용, 내용셋 useState 상태 선언
    const [content, setContent] = useState<string>('');
    // input 요소에 직접 접근하기 위한 ref
    const inputRef = useRef<HTMLInputElement>(null);
    // 내용 상태 업데이트
    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => 
        {setContent(e.target.value)}
    
    // 버튼 클릭시 호출
    const onSubmit = ()=> {
        // 내용이 있는지 체크 .trim()으로 공백도 체크
        if(!content.trim()) {
            // 입력값이 없으면 input에 포커스 이동
            inputRef.current?.focus();
            return;
        }
        // 생성
        onCreate(content);
        // 텍스트 빈내용 보냄
        setContent('');
    }

    //엔터로 추가하기
    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        // 눌린키가 엔터키면 onsubmit() 호출
        if(e.key === 'Enter'){
             onSubmit();
        }
     }

    return(
        <div className={style.TodoEditor}>
            <h4>새로운 Todo 작성하기 ✍️</h4>
            <div className={style.editor_wrapper}>
                <input type="text" placeholder="새로운 Todo..." onChange={onChangeContent}
                    ref={inputRef} onKeyDown={onKeyDown} value={content} />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
}

export default TodoEditor;