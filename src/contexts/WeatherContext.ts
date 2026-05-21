'use client'

// Context API:
// 여러 컴포넌트에서 공통 데이터를 공유하기 위한 기능
import { createContext } from "react";
import { WeatherData } from "@/types";

type WeatherContextType={
    // 현재 날씨 데이터 저장
    // 아직 데이터 없을 수 있으므로 null 허용
    weather: WeatherData | null;
    // weather 상태를 변경하는 함수
    // (새 날씨 데이터 저장용, 이 함수 호출시 안에 데이타 넣어서 호출)
    setWeather: (weather: WeatherData|null) => void;
};

// 실제 Context(공유 공간) 생성
// 처음에는 값이 없으므로 null
const WeatherContext = createContext<WeatherContextType|null>(null);

export default WeatherContext;