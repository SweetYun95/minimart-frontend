# 🛍️ ShopMax Frontend

이 프로젝트는 React 기반 이커머스 프론트엔드입니다.  
브랜치별로 팀원이 각자 기능을 개발하고, 완성 후 `develop` 브랜치로 병합합니다.

---

## 📁 레포 구조

-  `/public` — HTML 템플릿, 파비콘 등 정적 파일
-  `/src` — 메인 소스 디렉토리
   -  `/api` — Axios 요청 로직 모음
      -  `authApi.js`, `orderApi.js`, `tokenApi.js`
   -  `/components` — 재사용 가능한 UI 컴포넌트
      -  `Button.jsx`, `Navbar.jsx`, `ProductCard.jsx`
   -  `/components/chat` — 실시간 채팅 UI 관련 컴포넌트
   -  `/components/chart` — 주문 차트, 통계 등 시각화
   -  `/components/shared` — 공통 UI 요소 (Header, Footer 등)
   -  `/features` — Redux Toolkit 슬라이스(State 관리)
      -  `authSlice.js`, `orderSlice.js`, `tokenSlice.js`
   -  `/pages` — 페이지 단위 컴포넌트
      -  `LoginPage.jsx`, `ProductPage.jsx`, `ChatPage.jsx`, `ChartPage.jsx`
   -  `/store` — Redux store 설정
   <!-- - `/hooks` — 커스텀 훅 (예: `useAuth`, `useInput`) -->
   -  `/styles` — Tailwind 설정 또는 별도 CSS 파일
   -  `App.jsx` — 라우팅 설정 및 전역 구조
   -  `main.jsx` — React 앱 진입점
-  `.env` — 환경 변수 (API 주소 등)
-  `vite.config.js` or `webpack.config.js` — 빌드 설정

---

## 👥 브랜치 전략

-  `main`: 배포용
-  `hcm`, `jsy`, `jse`, `ysy`: 각자 기능 개발 브랜치
-  hcm : 한창민
-  jsy : 정세연
-  jse : 정송이
-  ysy : 윤승영

### ✅ 브랜치 생성 및 push 방법

```bash
# 브랜치 최초 이동
git checkout -t origin/브랜치이름

# 예: 본인 이름으로 브랜치 이동
git checkout -t origin/hcm
git checkout -t origin/jsy
git checkout -t origin/jse
git checkout -t origin/ysy

# 최초 이동후 이동은
git checkout 브랜치 이름

# 최초 1회만 push 설정
git push --set-upstream origin 브랜치이름
git push

```

---

## ✍️ Git 커밋 메시지 작성 규칙

커밋 메시지는 형식과 내용을 명확하게 작성해야 협업 시 변경 내역을 빠르게 파악할 수 있습니다.  
아래 형식을 따라 작성해주세요:

### ✅ 기본 형식

git commit -m "[태그] 작업한 내용 요약"

예:
git commit -m "[feat] 로그인 API 구현"
git commit -m "[fix] 장바구니 오류 수정"
git commit -m "[style] 버튼 정렬 개선"

---

### ✅ 커밋 태그 종류

| 태그       | 설명                                        |
| ---------- | ------------------------------------------- |
| `feat`     | 새로운 기능 추가                            |
| `patch`    | 간단한 수정 (줄바꿈, 줄추가, 정렬 등)       |
| `fix`      | 버그 수정                                   |
| `refactor` | 코드 리팩토링 (기능 변화 없음)              |
| `style`    | 스타일, 포맷팅, 주석 등 UI 외 변경          |
| `docs`     | 문서 (README 등) 변경                       |
| `test`     | 테스트 코드 추가/수정                       |
| `chore`    | 빌드, 패키지 매니저, 설정 파일 등 기타 작업 |
| `remove`   | 불필요한 코드/파일 제거                     |

---

### ✅ 커밋 메시지 팁

-  커밋 메시지는 **한 줄 요약**, 50자 이내 권장
-  작업 내용을 명확히 드러내는 동사를 사용
-  PR 리뷰자가 한눈에 파악할 수 있도록 작성

---

### 💬 예시

[feat] 상품 상세 페이지 레이아웃 구현
[fix] 로그인 실패 시 에러 메시지 표시
[refactor] useEffect 로직 정리
[style] ChartPage 컴포넌트 마진 조정
[test] orderSlice 테스트 코드 작성
[chore] ESLint 룰 추가 및 적용
[docs] README.md에 커밋 규칙 추가
