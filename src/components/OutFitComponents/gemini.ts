// AI 호출함수

import { ENV } from "@/env";
import { GoogleGenerativeAI } from "@google/generative-ai";

// 환경변수에서 API 키 가져오기
const apiKey = ENV.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export async function getOutfitRecommendation(temp:number,feels_like:number, weather:string){
    // 가장 빠르고 가벼운 무료 모델 선택
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // AI에게 시킬 프롬프트 작성
    const prompt=`
    현재날씨 정보:
    - 기온: ${temp}°C
    - 체감온도: ${feels_like}°C
    - 날씨 상태: ${weather}
    위 날씨에 어울리는 20~40대 코디를 남자, 여자 따로추천해줘.
    친근한 말투로 2~3줄로 요약해줘
    `;

    const result = await model.generateContent(prompt);
    return result.response.text();
}