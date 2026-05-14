// // 날씨 데이타 훅 또는 context API로 만들기(웨더카드, 아웃핏, 배경에서 필요)
// // context 로 날씨 스테이트 공유, 데이타 공유

// 'use client'
// import { useEffect, useState } from 'react'
// import { WeatherData } from '@/types'
// import { ENV } from '@/env';


// // 웨더 데이타
// export default function WeatherDataFetch(){
//     // 상태(WeatherData 데이타가 있을수도 있고 없을수도 있어서)
//     const [weather, setWeather] = useState<WeatherData | null>();
//     // 도시이름 받아서 넣기
//     let cityname = 'seoul';

//     // 도시이름
//     useEffect(() => {
//         const fetchData = async () => {
//             // URL 가져오기
//             const response = await fetch(`${ENV.API_URL}?q=${cityname}&appid=44ef36f3796c92a24a5b9a754ff1b875&units=metric&&lang=kr`);
//             //(`${ENV.API_URL}?appid=${ENV.API_KEY}&units=metric&lang=kr&q=${cityname}`);
//             // 제이슨 파일 가져오기
//             const data = await response.json();
//             // 데이타 WeatherData 의 배열로 가져오기 => useStat 로
//             //const weather: WeatherData[] = data.docments;
//             setWeather(data);
//         };
//         fetchData();
//     }, []);
//     // weather 가 없으면
//     if (!weather) {
//         return <div>날씨를 불러오는 중...</div>
//     }

//     // 가져온 날씨 데이타 넣기
//     // const icon =  '01';
//     // const iconUrl = `/Images/${icon}.png`;
//     const icon = weather.weather[0].icon;
//     const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
//     const name = weather.name;
//     const main = weather.weather[0].main;
//     const description = weather.weather[0].description;
//     // 소수점 한자리만 나오게 toFixed(1)
//     const temp = weather.main.temp.toFixed(1);
//     const feels_like = weather.main.feels_like.toFixed(1);
//     const humidity = weather.main.humidity.toFixed(1);
//     const speed = weather.wind.speed.toFixed(1);
//     const gust = weather.wind.gust?.toFixed(1);

//     return(
//         icon, iconUrl, 
//     )
// }


// // 웨더 카드 함수
// export default function WeatherCard() {
//     // 상태(WeatherData 데이타가 있을수도 있고 없을수도 있어서)
//     const [weather, setWeather] = useState<WeatherData | null>();
//     // 도시이름 받아서 넣기
//     let cityname = 'seoul';

//     // 도시이름
//     useEffect(() => {
//         const fetchData = async () => {
//             // URL 가져오기
//             const response = await fetch(`${ENV.API_URL}?q=${cityname}&appid=44ef36f3796c92a24a5b9a754ff1b875&units=metric&&lang=kr`);
//             //(`${ENV.API_URL}?appid=${ENV.API_KEY}&units=metric&lang=kr&q=${cityname}`);
//             // 제이슨 파일 가져오기
//             const data = await response.json();
//             // 데이타 WeatherData 의 배열로 가져오기 => useStat 로
//             //const weather: WeatherData[] = data.docments;
//             setWeather(data);
//         };
//         fetchData();
//     }, []);
//     // weather 가 없으면
//     if (!weather) {
//         return <div>날씨를 불러오는 중...</div>
//     }

//     // 가져온 날씨 데이타 넣기
//     // const icon =  '01';
//     // const iconUrl = `/Images/${icon}.png`;
//     const icon = weather.weather[0].icon;
//     const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
//     const name = weather.name;
//     const main = weather.weather[0].main;
//     const description = weather.weather[0].description;
//     // 소수점 한자리만 나오게 toFixed(1)
//     const temp = weather.main.temp.toFixed(1);
//     const feels_like = weather.main.feels_like.toFixed(1);
//     const humidity = weather.main.humidity.toFixed(1);
//     const speed = weather.wind.speed.toFixed(1);
//     const gust = weather.wind.gust?.toFixed(1);

//     return (
//         <div className={style.container}>
//             <div className={style.cityName}>{name}</div>
//             <div className={style.weatherInfo}>
//                 <img src={iconUrl} alt='weather Icon' height={100} width={100} />
//                 &nbsp;&nbsp;&nbsp;
//                 <h2 className={style.cardtext}>{temp} °C</h2>
//             </div>
            
//             <div className={style.comentContainer}>
//                 <p>[{description}]</p>&nbsp;&nbsp;&nbsp;
//                 <p>💨풍속: {speed}</p>&nbsp;
//                 {/* 데이타 확인 나중에 코디에서 사용 */}
//                 <p>체감온도: {feels_like}</p>&nbsp;
//                 <p>습도: {humidity}</p>&nbsp;  
//                 <p>돌풍: {gust}</p>
//             </div>
//         </div>
//     );
// }