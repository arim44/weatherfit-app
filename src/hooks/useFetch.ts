// hooks
import { ApiResponse } from '@/types';
import { useEffect, useState } from 'react'


export default function useFetch<T>(url: string){
    // 상태관리
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // 패치를 넣음
    useEffect(() => {
        const fetchData = async () => {
            //예외처리
            try{
                 // 패치
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status:${response.status}`)
                }

                //const data: ApiResponse<T> = await response.json();
                const result = await response.json();
                setData(result);

            } catch(err){
                console.error('검색 중 오류', err);
                setError('data 불러오기 실패!!');
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    //상태로 관리할것들을 보내야함
    return { data, loading, error };
}
