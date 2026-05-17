import { useContext } from 'react';
import style from './outfitCard.module.css'
import WeatherContext from '@/contexts/WeatherContext';
import { WeatherData } from '@/types';
import { useRouter } from 'next/navigation';
import { useWeather } from '@/hooks/useWeather';

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
            tip: '햇빛이 강하니 시원한 옷차림이 좋아요'  // 외출 시 수분 보충 필수'
        };
    }

    if (temp >= 30) {
        return {
            mood: '☀️ 매우 더움',
            outfit: '반팔, 얇은 셔츠 추천',
            tip: '통풍이 잘 되는 가벼운 옷을 추천해요'
        };
    }

    if (temp >= 27) {
        return {
            mood: '😅 더움',
            outfit: '반팔 추천',
            tip: '얇은 소재로 편하게 입기 좋아요'
        };
    }

    if (temp >= 23) {
        return {
            mood: '😊 따뜻',
            outfit: '반팔, 얇은 긴팔 추천',
            tip: '낮에는 살짝 더울 수도 있어요'
        };
    }

    if (temp >= 20) {
        return {
            mood: '🍃 선선',
            outfit: '얇은 가디건 추천',
            tip: '가볍게 걸칠 옷 하나 있으면 좋아요'
        };
    }

    if (temp >= 17) {
        return {
            mood: '🧥 쌀쌀',
            outfit: '맨투맨, 후드 추천',
            tip: '아침저녁으로 선선하게 느껴질 수 있어요'
        };
    }

    if (temp >= 12) {
        return {
            mood: '🧶 추움 느낌',
            outfit: '자켓, 니트 추천',
            tip: '바람이 불면 더 쌀쌀하게 느껴져요'
        };
    }

    if (temp >= 9) {
        return {
            mood: '🥶 꽤 추움',
            outfit: '코트, 가죽자켓 추천',
            tip: '따뜻한 겉옷이 잘 어울리는 날씨예요'
        };
    }

    if (temp >= 5) {
        return {
            mood: '❄️ 겨울 느낌',
            outfit: '두꺼운 코트 추천',
            tip: '찬 바람 때문에 체감온도가 더 낮을 수 있어요'
        };
    }

    if (temp >= 0) {
        return {
            mood: '🧊 매우 추움',
            outfit: '패딩 추천',
            tip: '따뜻하게 입고 외출하는 걸 추천해요'
        };
    }

    return {
        mood: '☃️ 한파',
        outfit: '롱패딩, 목도리 추천',
        tip: '장갑과 목도리까지 챙기면 훨씬 따뜻해요'
    };
}

export function OutfitCard() {
    // 웨더 컨텍스트 사용
    // const weatherContext = useContext(WeatherContext);
    // if (!weatherContext) throw new Error('Context가 없습니다');

    //const weatherContext = useWeather();

    // 웨더 꺼내기
    const { weather } = useWeather();
    //사용
    const cityName = weather?.name;
    const temp = weather? weather.main.temp.toFixed(1): '';
    //추천 멘트
    const recommendation = getOutfitRecommendation(weather);
    
    // 페이지 이동
    const router = useRouter();
    // todo 페이지 이동
    const handleMoveClick = () => {
        router.push('/outfit');
    };


    return (
        <div className={style.container}>
            <h1 className={style.title}>OutFit</h1>
            <p className={style.weatherText}>{cityName} | {temp} °C</p>
            <div className={style.recommendBox}>
                <h2 className={style.mood}>{recommendation.mood}</h2>
                <p className={style.outfit}>{recommendation.outfit}</p>
                <p className={style.tip}>{recommendation.tip}</p>
            </div>
            <button onClick={handleMoveClick}>outFit 추천 이동</button>
        </div>
    )
}