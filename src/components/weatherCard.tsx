'use client'
import { useContext, useEffect, useState } from 'react'
import style from './weatherCard.module.css'
import { WeatherData } from '@/types'
import { ENV } from '@/env';
import SearchBar from './SearchBar';
import useFetch from '@/hooks/useFetch';
import WeatherContext from '@/contexts/WeatherContext';

// 웨더 카드 함수
export default function WeatherCard() {
    // 날씨 API 연동
    // 검색어 초기값 일단 seoul
    const [query, setQuery] = useState<string>('seoul');
    const url = `${ENV.API_URL}?q=${query}&appid=${ENV.API_KEY}&units=metric&lang=kr`
    // 패치(url 만 받아서 가져옴)
    const { data: weather, loading, error } = useFetch<WeatherData>(url);

    // 쿼리 체인지
    const onChangeQuery = (q: string) => setQuery(q);

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    // 웨더 컨텍스트 사용
    const weatherContext = useContext(WeatherContext);
    if (!weatherContext) throw new Error('Context가 없습니다');
    const { setWeather } = weatherContext;
    useEffect(() => {
        // 날씨 데이타가 있으면
        if (weather) {
            // 컨텍스트 안에 데이타 넣어서 가져옴
            setWeather(weather);
        }
    }, [weather, setWeather]);

    // 로딩 처리
    if (loading) {
        return <div>Loading...</div>
    }

    if (!weather) {
        return null;
    }

    // // 가져온 날씨 데이타 넣기
    // // const icon =  '01';
    // // const iconUrl = `/Images/${icon}.png`;
    const icon = weather?.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    const name = weather?.name;
    // const main = weather.weather[0].main;
    const description = weather?.weather[0].description;
    // // 소수점 한자리만 나오게 toFixed(1)
    const temp = weather?.main.temp.toFixed(1);
    const feels_like = weather?.main.feels_like.toFixed(1);
    const humidity = weather?.main.humidity.toFixed(1);
    const speed = weather?.wind.speed.toFixed(1);
    const gust = weather?.wind.gust?.toFixed(1);

    return (
        // <>
        // 모달(팝업창)
        //     {error && (
        //         <div className={style.errorModal}>
        //             <p>{error}</p>
        //         </div>
        //     )}

        <div className={style.container}>
            <div className={style.cityName}>{name}</div>
            <SearchBar onChangeQuery={onChangeQuery} />
            <div className={style.weatherInfo}>
                <img src={iconUrl} alt='weather Icon' height={100} width={100} />
                &nbsp;&nbsp;&nbsp;
                <h2 className={style.cardtext}>{temp} °C</h2>
            </div>

            <div className={style.comentContainer}>
                <p>[{description}]</p>&nbsp;&nbsp;&nbsp;
                <p>💨풍속: {speed}</p>&nbsp;
                {/* 데이타 확인 나중에 코디에서 사용 */}
                <p>체감온도: {feels_like}</p>&nbsp;
                <p>습도: {humidity}</p>&nbsp;
                <p>돌풍: {gust}</p>
            </div>
        </div>
        // </>
    );
}