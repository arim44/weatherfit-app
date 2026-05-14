import style from './weatherCard.module.css'

export function TodoCard() {

    return(
        <div className={style.container}>
            <h1 className={style.cardtext}>투두 카드</h1>
        </div>
    )
}