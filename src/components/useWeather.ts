// hooks 날씨 가져오기 전용

import { useEffect, useState } from 'react'
import { ENV } from '@/env';
import { WeatherData, ApiResponse } from '@/types';

export default function useFetch<T>(query: string, apiKey: string) {
    //상태관리
    const [documents, setDocument] = useState<T[]>([]);
    const [isEnd, SetIsEnd] = useState<boolean>(false);

    //패치 useEffect 에 넣어놓고
    useEffect(() => {
        // query 가 없으면 리턴
        if (!query) return;
        //에이싱크 함수
        const fetchData = async () => {

            //예외처리
            try {
                //쿼리 엔코딩
                const encodedQuery = encodeURIComponent(query);
                const endPoint = `${ENV.API_URL}?q=${encodedQuery}&appid=44ef36f3796c92a24a5b9a754ff1b875&units=metric&&lang=kr`
                // 패치
                const response = await fetch(endPoint);
                if (!response.ok) {
                    throw new Error(`HTTP error! status:${response.status}`)
                }

                const data: ApiResponse<T> = await response.json();

                // data의 도큐먼츠 셋
                setDocument(data.docments);
                // 데이타 끝난 여부
                SetIsEnd(data.meta.is_end);
            } catch (err) {
                console.error('검색 중 오류', err);
            }
        };
        fetchData();
    }, [query]);
    //상태로 관리할것들을 보내야함
    return { documents, isEnd };
}