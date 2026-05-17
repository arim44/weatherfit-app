// API 엔드포인트 역할만
import { getOutfitRecommendation } from "@/components/OutFitComponents/gemini";
import { NextResponse } from "next/server";


// 요청받고, AI 함수 호출하고, 결과 반환
export async function POST(request:Request) {
    try{
        // 프론트엔드에서 보낸 날씨 데이터(선택한스타일, 기온, 체감온도, 날씨 상태) 받기
        const {style, temp, feels_like, weather} = await request.json();

        // AI 함수 호출
        const recommendation  = await getOutfitRecommendation(style, temp, feels_like, weather);
        
        return NextResponse.json({recommendation,});
    } catch(error){
        console.error(error);
         return NextResponse.json({ error: "AI 추천 생성 실패" }, { status: 500 });
    }
}