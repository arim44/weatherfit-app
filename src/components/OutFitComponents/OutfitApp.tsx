'use client'

import WeatherContext from "@/contexts/WeatherContext";
import { useContext, useEffect, useState } from "react";
import OutfitHeader from "./OutfitHeader";
import { useWeather } from "@/hooks/useWeather";
import style from './OutfitApp.module.css'

// 1. 버튼 클릭
// 2. fetch 요청
// 3. loading 상태
// 4. 결과 출력


function OutFitApp() {
    // hydration 방지
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // AI 추천결과
    const [recommendation, setRecommendation] = useState('');
    // 로딩상태
    const [loading, setLoading] = useState(false);
    // 에러상태
    const [error, setError] = useState('');

    // context에 있는 날씨 데이타 가져오기
    // const weatherContext = useContext(WeatherContext);
    // if (!weatherContext) throw new Error('Context가 없습니다');
    //const weatherContext = useWeather();

    const { weather } = useWeather();;
    console.log(weather);

    if (!weather) {
        return <div>날씨 정보를 불러오는 중...</div>;
    }

    //사용
    const temp = weather?.main.temp;
    const feels_like = weather?.main.feels_like;
    const main = weather?.weather[0].main;

    // 버튼 클릭 시 AI요청
    const handleRecommend = async (selectStyle: string) => {
        if (!weather) return;

        try {
            setLoading(true);
            setError('');

            const response = await fetch('/api/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    temp: temp,
                    feels_like: feels_like,
                    weather: main,
                    style: selectStyle,
                }),
            });

            if (!response.ok) throw new Error('AI 추천 실패');

            const data = await response.json();
            // 데이터 저장용 State에 넣기 (예: setOutfit(data.recommendation))
            setRecommendation(data.recommendation);
            console.log(data.recommendation);
        } catch (error) {
            console.error(error);
            setError('추천을 불러오지 못했습니다.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={style.container}>
            <OutfitHeader />
            <p className={style.subTitle}>날씨에 맞는 스타일을 추천해드립니다</p>

            <div className={style.card}>
                <p className={style.city}>선택한 지역 : {weather?.name}</p>
                <p>원하는 스타일을 선택해주세요!</p>
                <div className={style.buttonGroup}>
                    <button className={style.button} onClick={() => handleRecommend('데일리 룩')}>데일리 룩</button> &nbsp;
                    <button className={style.button} onClick={() => handleRecommend('데이트 룩')}>데이트 룩</button> &nbsp;
                    <button className={style.button} onClick={() => handleRecommend('오피스 룩')}>오피스 룩</button>
                </div>

                <h3>✨ 추천 결과</h3>
                <div>
                    {loading && <p className={style.loading}>추천 생성중...</p>}
                    {error && <p className={style.error}>{error}</p>}
                    {recommendation && (
                        <div className={style.resultCard}>
                            <p className={style.whiteSpace}>
                                {recommendation.split('\n').map((line, idx) => (<p key={idx}>{line}</p>))}
                            </p>
                            {/* <p className={style.whiteSpace}>{recommendation}</p> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default OutFitApp;