import { Typography, Alert } from '@mui/material'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { loginUserThunk } from '../../features/authSlice'

import '../css/LoginForm.css'

function LoginForm() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const { isAuthenticated, loading, error } = useSelector((state) => state.auth)

   const [formData, setFormData] = useState({
      id: '',
      password: '',
      saveIdToggle: false,
   })

   useEffect(() => {
      if (isAuthenticated) {
         navigate('/') // 로그인 성공 시 이동
      }
   }, [isAuthenticated, navigate])

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target
      setFormData((prev) => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value,
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      // 로그인 thunk 호출 (userId: formData.id, password: formData.password)
      dispatch(loginUserThunk({ userId: formData.id, password: formData.password }))
   }

   return (
      <section id='login-section'>
         <div className='login-form'>
         <h1 className='section-title'>
            로그인
            <img src="../../../public/images/발바닥.png" alt="발바닥" />
         </h1>
         <form style={{width: '100%'}} onSubmit={handleSubmit}>
            <div className='login-inside' >
               <div className='input-section'>
                  <div>
                  <p>ID</p>
                 <input label="ID" name="id" value={formData.id} onChange={handleChange}  placeholder="아이디를 입력하세요" />
                  </div>
                 <div>
                 <p>Password</p>
                 <input label="Password" name="password" type="password" value={formData.password} onChange={handleChange}  placeholder="비밀번호를 입력하세요" />
                 </div>
               <label className="checkbox">
              <input type="checkbox" name="saveIdToggle" checked={formData.saveIdToggle} onChange={handleChange}/> 아이디 저장 </label>
               </div>
               {error && <Alert severity="error">{error}</Alert>}
               {loading && <Typography>로그인 중...</Typography>}
               <div className='find-section'>
                  <Link className='find-link' to="/find-id">아이디 찾기</Link>
                  <Link className='find-link' to="/find-password">비밀번호 찾기</Link>
                  <Link className='find-link' to="/join">회원가입</Link>
               </div>
               <div className='button-section'>
               <button className='login-btn' type="submit" variant="contained"  disabled={loading}>
                  로그인
               </button>
               <button className='google-login-btn' variant="outlined" ><img src="../../../public/images/Google.png" alt="google" />
                  구글 아이디로 로그인
               </button>
               </div>
            </div>
         </form>
         </div>
      </section>
   )
}

export default LoginForm
