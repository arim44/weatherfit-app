'use client'
// 웨더상태관리, 로컬스토리지 관리, setWeather제공, children 감싸기

import React, { useEffect, useState } from "react";
import { WeatherData } from "@/types";
import WeatherContext from "@/contexts/WeatherContext";

function initWeather(): WeatherData | null {
    //브라우저 환경체크(서버면 리턴), 서버 환경에서는 localStorage 사용 불가
    if (typeof window === 'undefined') return null;

    // 저장된 todos 읽기
    const stored = localStorage.getItem('weather');
    // 저장값 있으면 파싱해서 반환
    return stored ? JSON.parse(stored): null;
}

export default function WeatherProvider({children}:{children:React.ReactNode;}){
    //hydration 문제 방지
    const [mounted, setMounted] = useState(false);
    // 초기값 localStorage에서 읽기
    const [weather, setWeather] = useState<WeatherData | null>(initWeather);

    // 최초 마운트 시 localStorage 읽기
    useEffect(()=> {
        setMounted(true);
    },[]);

    // weather 변경될 때 저장
    useEffect(()=>{
        if(!mounted) return;

        if(weather) {
            localStorage.setItem('weather', JSON.stringify(weather));
        }
    }, [weather]);

    // hydration 방지
    if (!mounted) return null;

    return(
        <WeatherContext.Provider value={{ weather, setWeather }}>
            {children}
        </WeatherContext.Provider>
    );
}


//     export default function WeatherProvider({children}:{children:React.ReactNode;}){
//     // 초기값 localStorage에서 읽기
//     const [weather, setWeather] = useState<WeatherData|null>(null);

//     return(
//         <WeatherContext.Provider value={{ weather, setWeather }}>
//             {children}
//         </WeatherContext.Provider>
//     );
// }

