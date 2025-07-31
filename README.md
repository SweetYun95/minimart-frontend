# 🛍️ ShopMax Frontend

이 프로젝트는 React 기반 이커머스 프론트엔드입니다.  
브랜치별로 팀원이 각자 기능을 개발하고, 완성 후 `develop` 브랜치로 병합합니다.

---

## 📁 레포 구조

- `/public` — HTML 템플릿, 파비콘 등 정적 파일
- `/src` — 메인 소스 디렉토리
  - `/api` — Axios 요청 로직 모음
    - `authApi.js`, `orderApi.js`, `tokenApi.js`
  - `/components` — 재사용 가능한 UI 컴포넌트
    - `Button.jsx`, `Navbar.jsx`, `ProductCard.jsx`
  - `/components/chat` — 실시간 채팅 UI 관련 컴포넌트
  - `/components/chart` — 주문 차트, 통계 등 시각화
  - `/components/shared` — 공통 UI 요소 (Header, Footer 등)
  - `/features` — Redux Toolkit 슬라이스(State 관리)
    - `authSlice.js`, `orderSlice.js`, `tokenSlice.js`
  - `/pages` — 페이지 단위 컴포넌트
    - `LoginPage.jsx`, `ProductPage.jsx`, `ChatPage.jsx`, `ChartPage.jsx`
  - `/store` — Redux store 설정
  <!-- - `/hooks` — 커스텀 훅 (예: `useAuth`, `useInput`) -->
  - `/styles` — Tailwind 설정 또는 별도 CSS 파일
  - `App.jsx` — 라우팅 설정 및 전역 구조
  - `main.jsx` — React 앱 진입점
- `.env` — 환경 변수 (API 주소 등)
- `vite.config.js` or `webpack.config.js` — 빌드 설정

---

## 👥 브랜치 전략

- `main`: 배포용
- `hcm`, `jsy`, `jse`, `ysy`: 각자 기능 개발 브랜치
- hcm : 한창민
- jsy : 정세연
- jse : 정송이
- ysy : 윤승영

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
