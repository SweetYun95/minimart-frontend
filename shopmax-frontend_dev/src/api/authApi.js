// src/api/authApi.js
import shopmaxApi from './axiosApi'

//회원가입
export const registerUser = async (userData) => {
   try {
      const response = await shopmaxApi.post('/auth/join', userData)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error}`)
      throw error
   }
}

//로그인
export const loginUser = async (credentials) => {
   try {
      const response = await shopmaxApi.post('/auth/login', credentials)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error}`)
      throw error
   }
}

//로그아웃
export const logoutUser = async () => {
   try {
      const response = await shopmaxApi.get('/auth/logout')
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error}`)
      throw error
   }
}

//로그인 상태 확인
export const checkAuthStatus = async () => {
   try {
      const response = await shopmaxApi.get('/auth/status')
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error}`)
      throw error
   }
}

//핸드폰번호로 비밀번호 찾기



// 구글 로그인 리다이렉트
export const redirectToGoogleLogin = () => {
   window.location.href = 'http://localhost:3000/auth/google'
   // 실제 배포 시에는 이 URL을 백엔드 서버 주소로 변경해줘!
}
