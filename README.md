# WeatherFit 🌤

날씨 기반 AI 코디 추천 및 일정 관리 웹 애플리케이션

## 📌 프로젝트 소개

WeatherFit는 현재 날씨 정보를 기반으로 사용자에게 적절한 코디를 추천하고
간단한 일정(Todo)을 함께 관리할 수 있도록 제작한 웹 애플리케이션입니다.

사용자는 원하는 도시의 날씨를 검색하고,
현재 온도와 날씨 상태에 맞는 코디 추천을 받을 수 있습니다.

또한 Todo 기능을 통해 간단한 일정 관리도 가능합니다.


날씨 상태에 따라 배경 이미지가 동적으로 변경되며,  
온도 및 날씨 조건에 맞는 추천 문구를 제공합니다.

또한 Todo 기능을 통해 사용자의 간단한 일정 관리가 가능하며,  
추가된 일정은 localStorage를 통해 브라우저에 저장됩니다.

---

## ✨ 주요 기능

### 🌍 도시 검색

* 원하는 도시의 날씨 검색 가능
* 잘못된 도시 검색 시 에러 처리 및 알림 모달 표시

### ☁️ 날씨 조회

* 현재 온도 조회
* 날씨 상태 및 아이콘 제공
* 날씨 설명(한글) 출력

### 🎨 동적 배경 변경

- 날씨 상태(Clear / Rain / Snow / Clouds 등)에 따라 배경 이미지 자동 변경

### 👕 코디 추천

* 온도 기반 코디 추천
* 스타일별 코디 추천 제공
* AI 기반 코디 추천 기능 추가 예정

### 📋 Todo 관리

* Todo 추가 / 검색 / 체크 / 삭제 기능
* 완료된 Todo 자동 하단 정렬
* 완료 시 체크박스 스타일 및 취소선 적용
* localStorage 저장 지원
* 메인 페이지 Todo 미리보기 제공

---

## 🛠 기술 스택

### Frontend

* Next.js (App Router)
* React
* TypeScript

### State Management

* Context API
* useReducer
* useMemo
* useCallback

### Styling

* CSS Module

### API

* OpenWeatherMap API
* Gemini API => 예정

### Storage

* localStorage

---

## 📂 페이지 구성

### Main Page

* 날씨 카드
* 코디 추천 카드
* Todo 미리보기 카드
* 날씨 기반 동적 배경 변경

### Outfit Page

* 날씨 기반 코디 추천
* AI 코디 스타일 추천

### Todo Page

* Todo 관리 기능 제공
* Todo 검색 기능
* 완료 상태 관리
* localStorage 연동

---

## ⚙️ 상태 관리 구조

### Todo 상태 관리

- useReducer 기반 Todo 상태 관리
- Context API를 활용한 전역 상태 공유
- TodoStateContext / TodoDispatchContext 분리 적용

### 최적화

- useMemo를 활용한 Todo 분석 최적화
- useCallback을 통한 함수 재생성 방지

---

## 📅 개발 일정

| 날짜   | 작업 내용                  |
| ----- | ------------------------ |
| 05.14 | 프로젝트 세팅 및 날씨 API 연결 |
| 05.15 | 날씨 카드 및 코디 기능 구현    |
| 05.16 | Todo 기능 및 상태관리 구현    |
| 05.17 | localStorage 저장 기능 및 Todo 미리보기 구현 |
| 05.17 | 스타일링 및 오류 수정         |

---

## 🚀 실행 방법

```bash
npm install
npm run dev
```

---

# 🔥 Trouble Shooting

## 1. localStorage is not defined 오류

### 문제

Next.js(App Router) 환경에서 localStorage를 바로 사용하자 아래와 같은 오류가 발생했다.

```bash
localStorage is not defined
```

### 원인

Next.js는 기본적으로 Server Component 기반으로 동작한다.

하지만 localStorage는 브라우저(window) 객체에 존재하기 때문에
서버 환경에서는 접근할 수 없다.

### 해결

브라우저 환경인지 확인 후 localStorage를 접근하도록 수정하였다.

```ts
function initTodos(): Todo[] {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
}
```

또한 useReducer의 lazy initializer를 사용해
초기 렌더 시점에만 localStorage를 읽도록 개선하였다.

---

## 2. Hydration failed 오류

### 문제

새로고침 시 다음과 같은 hydration 에러가 발생하였다.

```bash
Hydration failed because the server rendered text didn't match the client
```

### 원인

서버 렌더링 시점과 클라이언트 렌더링 시점의 Todo 데이터가 서로 달라
HTML 구조가 달라졌기 때문이다.

### 해결

브라우저 마운트 이후에만 렌더링하도록 mounted 상태를 추가하였다.

```ts
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
}, []);

if (!mounted) return null;
```

이를 통해 서버와 클라이언트의 렌더링 불일치를 해결하였다.

---

## 3. Todo 상태 전역 공유 문제

### 문제

메인 페이지 Todo 카드와 Todo 페이지가
서로 다른 상태를 사용하여 데이터가 공유되지 않았다.

### 해결

Context API를 활용하여 Todo 상태를 전역으로 공유하였다.

- TodoStateContext
- TodoDispatchContext

두 개로 분리하여 상태와 함수를 독립적으로 관리하였다.

```ts
<TodoStateContext.Provider value={{ todos }}>
    <TodoDisPatchContext.Provider value={dispatches}>
        {children}
    </TodoDisPatchContext.Provider>
</TodoStateContext.Provider>
```

---

## 4. 완료된 Todo 정렬 처리

### 문제

완료된 Todo와 진행 중 Todo가 섞여 있어
가독성이 떨어졌다.

### 해결

isDone 값을 숫자로 변환하여 정렬 처리하였다.

```ts
const sortedTodos = [...todos].sort(
    (a, b) => Number(a.isDone) - Number(b.isDone)
);
```

완료되지 않은 Todo가 상단에,
완료된 Todo는 하단에 표시되도록 개선하였다.

---

## 5. 불필요한 리렌더링 최적화

### 문제

Todo 검색 및 상태 계산 로직이
렌더링마다 반복 실행되었다.

### 해결

useMemo와 useCallback을 활용하여
불필요한 연산과 함수 재생성을 방지하였다.

```ts
const analyzeTodo = useMemo(() => {
    ...
}, [todos]);
```

```ts
const onCreate = useCallback((content:string) => {
    ...
}, []);
```

이를 통해 렌더링 성능을 최적화하였다.

---

## 👩‍💻 제작자

홍아림
