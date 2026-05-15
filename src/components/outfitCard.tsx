import { useContext } from 'react';
import style from './outfitCard.module.css'
import WeatherContext from '@/contexts/WeatherContext';
import { WeatherData } from '@/types';

// 온도기반 스타일 추천함수
function getOutfitRecommendation(weather: WeatherData | null) {
    if (!weather) {
    return {
        mood: '❓',
        outfit: '날씨 정보 없음',
        tip: '도시를 검색해주세요'
    };
}

    // 현재 온도
    const temp = weather?.main.temp;
    // 추천로직 함수 실행
    return RecommendByTemp(
        weather.main.temp
    );
}

// 온도 기반 추천 로직
function RecommendByTemp(temp: number) {
    if (temp >= 35) {
        return {
            mood: '🥵 폭염',
            outfit: '민소매, 반바지 추천',
            tip: '외출 시 수분 보충 필수'
        };
    }

    if (temp >= 30) {
        return {
            mood: '☀️ 매우 더움',
            outfit: '반팔, 얇은 셔츠 추천',
            tip: '통풍 좋은 옷 추천'
        };
    }

    if (temp >= 27) {
        return {
            mood: '😅 더움',
            outfit: '반팔 추천',
            tip: '얇은 소재 추천'
        };
    }

    if (temp >= 23) {
        return {
            mood: '😊 따뜻',
            outfit: '반팔, 얇은 긴팔 추천',
            tip: '낮에는 더울 수 있어요'
        };
    }

    if (temp >= 20) {
        return {
            mood: '🍃 선선',
            outfit: '얇은 가디건 추천',
            tip: '밤에는 살짝 쌀쌀할 수 있어요'
        };
    }

    if (temp >= 17) {
        return {
            mood: '🧥 쌀쌀',
            outfit: '맨투맨, 후드 추천',
            tip: '겉옷 챙기기 좋아요'
        };
    }

    if (temp >= 12) {
        return {
            mood: '🧶 추움 느낌',
            outfit: '자켓, 니트 추천',
            tip: '바람 불면 꽤 추워요'
        };
    }

    if (temp >= 9) {
        return {
            mood: '🥶 꽤 추움',
            outfit: '코트, 가죽자켓 추천',
            tip: '두꺼운 외투 추천'
        };
    }

    if (temp >= 5) {
        return {
            mood: '❄️ 겨울 느낌',
            outfit: '두꺼운 코트 추천',
            tip: '목도리 챙기면 좋아요'
        };
    }

    if (temp >= 0) {
        return {
            mood: '🧊 매우 추움',
            outfit: '패딩 추천',
            tip: '보온 필수'
        };
    }

    return {
        mood: '☃️ 한파',
        outfit: '롱패딩, 목도리 추천',
        tip: '장갑까지 챙기세요'
    };
}


export function OutfitCard() {
    // 웨더 컨텍스트 사용
    const weatherContext = useContext(WeatherContext);
    if (!weatherContext) throw new Error('Context가 없습니다');
    // 웨더 꺼내기
    const { weather } = weatherContext;
    //사용
    const cityName = weather?.name;
    const temp = weather?.main.temp.toFixed(1);
    //추천 멘트
    const recommendation = getOutfitRecommendation(weather);

    return (
        <div className={style.container}>
            <h1 className={style.title}>OutFit</h1>
            <p className={style.weatherText}>{cityName} | {temp}</p>
            <div className={style.recommendBox}>
                <h2 className={style.mood}>
                    {recommendation.mood}
                </h2>

                <p className={style.outfit}>
                    {recommendation.outfit}
                </p>

                <p className={style.tip}>
                    {recommendation.tip}
                </p>
            </div>
        </div>
    )
}