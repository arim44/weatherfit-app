
// 날씨 데이타 모델링
export type WeatherData={
    name: string;               // 도시 이름
    weather:{
        main: string;           // 날씨상태
        description: string     // 사용자문구(코멘트))
        icon: string;           // 아이콘
    }[];
    main:{
        temp: number;           // 메인온도, 실제기온
        feels_like: number;     // 체감온도
        humidity: number;       // 공기습도(습하면 더 덥게 느낌, 여름 추천 정확도 올라감)
    };
    wind:{
        speed: number;          // 풍속(평균 바람 속도, 계속 부는 바람)
        gust: number;           // 돌풍(순간 최대 풍속) ⇒ 체감추위 영향 큼
    };
}

// API 리스폰
export type ApiResponse<T> = {
    docments: T[];
    meta:{
        is_end: boolean;
    }
}