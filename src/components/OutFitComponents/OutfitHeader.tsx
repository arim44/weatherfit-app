import React from 'react';
// import style from './OutfitHeader.module.css'
import style from './OutfitApp.module.css'

function OutfitHeader(){
    return(
        <div>
            <header>
                <h1 className={style.title}>👚 AI 스타일링 🧥</h1>
            </header>
        </div>
    )
}

export default React.memo(OutfitHeader);