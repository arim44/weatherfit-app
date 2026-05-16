
// 1. 버튼 클릭
// 2. fetch 요청
// 3. loading 상태
// 4. 결과 출력

function OutFitApp() {
    return (
        <div className='OutFitApp'>
            <p>원하는 스타일을 선택해주세요!</p>
            <button>데일리 룩</button>
            <button>데이트 룩</button>
            <button>오피스 룩</button>
        <div>
            {/* (남성, 여성 따로?) */}
            <p> 스타일 내용들</p>
        </div>
        </div>
    )
}

export default OutFitApp;