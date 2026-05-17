'use client'

import Image from "next/image";
import styles from "./page.module.css";
import WeatherCard from "@/components/weatherCard";
import { OutfitCard } from "@/components/outfitCard";
import { TodoCard } from "@/components/todoCard";
import { useState } from 'react'
import { WeatherData } from "@/types";
import WeatherContext from "@/contexts/WeatherContext";
import { TodoStateContext } from "@/contexts/TodoContext";
import { useWeather } from "@/hooks/useWeather";


// 배경 이미지 변경
function ChangeBackgroundImg(weather: WeatherData | null) {
  // 데이타 없으면 기본 배경
  if (!weather) return styles.clear;

  // 현재 날씨 상태
  const main = weather.weather[0].main;

  // 날씨상태에 따라 스타일 리턴
  switch (main) {
    case 'Clear':
      return styles.clear;
    case 'Clouds':
      return styles.clous;
    case 'Rain':
      return styles.rain;
    case 'Snow':
      return styles.snow;
    case 'Thunderstorm':
      return styles.rain;
    default:
      return styles.clear;
  }
}

export default function Home() {
  // 날씨 컨텍스트에서 가져오기
  const {weather} = useWeather();
  // 배경 스타일 스트링으로 받기
  const mainState = ChangeBackgroundImg(weather);

  return (
    <div className={mainState}>
      <div className={styles.mainContainer}>
        <title>WeatherFit</title>
        <h1 className={styles.maintitle}>WeatherFit</h1>
            <WeatherCard />
            <OutfitCard />
            <TodoCard />
      </div>
    </div>
  );
}
