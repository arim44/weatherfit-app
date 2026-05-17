'use client'

import WeatherContext from "@/contexts/WeatherContext"
import { useContext } from "react"

// WeatherContext 가져와서 체크
export function useWeather() {
    const context = useContext(WeatherContext);

    if(!context) {
        throw new Error("WeatherContext가 Provider 밖에서 사용됨");
    }
    return context;
}