# WeatherFit 🌤

날씨 기반 AI 코디 추천 및 일정 관리 웹 애플리케이션

## 📌 프로젝트 소개

WeatherFit는 현재 날씨 정보를 기반으로 사용자에게 적절한 코디를 추천하고
간단한 일정(Todo)을 함께 관리할 수 있도록 제작한 웹 애플리케이션입니다.

사용자는 원하는 도시의 날씨를 검색하고,
현재 온도와 날씨 상태에 맞는 코디 추천을 받을 수 있습니다.

또한 Todo 기능을 통해 간단한 일정 관리도 가능합니다.

---

## ✨ 주요 기능

### 🌍 도시 검색

* 원하는 도시의 날씨 검색 가능

### ☁️ 날씨 조회

* 현재 온도 조회
* 날씨 상태 및 아이콘 제공
* 날씨 코멘트 출력

### 👕 코디 추천

* 온도 기반 코디 추천
* 스타일별 코디 추천 제공
* AI 기반 코디 추천 기능 추가 예정

### 📋 Todo 관리

* Todo 추가 / 검색 / 체크 / 삭제
* localStorage 저장 지원

---

## 🛠 기술 스택

### Frontend

* Next.js (App Router)
* React
* TypeScript

### State Management

* useReducer
* Context API

### API

* OpenWeatherMap API

### Storage

* localStorage

---

## 📂 페이지 구성

### Main Page

* 날씨 카드
* 코디 추천 카드
* Todo 카드
* 날씨 상태 기반 배경 이미지 변경

### Outfit Page

* 스타일 선택
* AI 코디 추천

### Todo Page

* Todo 관리 기능 제공

---

## 📅 개발 일정

| 날짜   | 작업 내용                  |
| ----- | ------------------------ |
| 05.14 | 프로젝트 세팅 및 날씨 API 연결 |
| 05.15 | 날씨 카드 및 코디 기능 구현    |
| 05.16 | Todo 기능 및 상태관리 구현    |
| 05.17 | 스타일링 및 오류 수정         |

---

## 🚀 실행 방법

```bash
npm install
npm run dev
```

---

## 👩‍💻 제작자

홍아림
