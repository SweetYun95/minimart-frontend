import React, { useState } from 'react'
import { CircularProgress } from '@mui/material'
import { useDispatch } from 'react-redux'

import { registerUserThunk } from '../../features/authSlice'

import '../css/RegisterForm.css'

function RegisterForm() {
   const dispatch = useDispatch()
   const [form, setForm] = useState({
      userId: '',
      password: '',
      confirmPassword: '',
      name: '',
      address: '',
      phone: '',
      email: '',
      gender: '', // 선택 필드
   })
   const [idChecking, setIdChecking] = useState(false)

   const handleChange = (e) => {
      const { name, value } = e.target
      setForm((prev) => ({ ...prev, [name]: value }))
   }

   const handleIdCheck = async () => {
      if (!form.userId.trim()) {
         alert('아이디를 입력하세요')
         return
      }

      setIdChecking(true)
      try {
         await new Promise((resolve) => setTimeout(resolve, 1000)) // 실제 API로 대체
         alert('사용 가능한 아이디입니다')
      } catch (e) {
         alert('중복 확인 중 오류 발생')
      } finally {
         setIdChecking(false)
      }
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (form.password !== form.confirmPassword) {
         alert('비밀번호가 일치하지 않습니다')
         return
      }

      try {
         const payload = {
            userId: form.userId,
            password: form.password,
            name: form.name,
            address: form.address,
            phone: form.phone,
            email: form.email,
            gender: form.gender || null,
         }

         await dispatch(registerUserThunk(payload)).unwrap()
         alert('회원가입 성공!')
         // 예: navigate('/login')
      } catch (err) {
         alert(`회원가입 실패: ${err.message || err}`)
      }
   }

   return (
      <section id='register-section'>
        <div className='register-form'>
         <h1 className='section-title'>
            회원가입
             <img src="../../../public/images/발바닥.png" alt="발바닥" />
         </h1>

         <form style={{width: '100%'}} onSubmit={handleSubmit}>
            <div className='register-inside'>

            {/* 아이디 + 중복확인 */}
            <div className='id-section'>
             <p style={{width: '70%'}}>ID</p>
             <div className='id-inside'>
               <input label="아이디" name="userId" placeholder='아이디를 입력해주세요.' value={form.userId} onChange={handleChange}  required />
               <button onClick={handleIdCheck} disabled={idChecking}>
                  {idChecking ? <CircularProgress size={20} /> : '중복확인'}
               </button>
             </div>
            </div>

            <div className='password-section'>
             <p style={{width: '70%'}}>Password</p>
             <input label="비밀번호" name="password" type="password" value={form.password} onChange={handleChange} placeholder='비밀번호를 입력하세요.' required margin="normal" />
             <input label="비밀번호 확인" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder='비밀번호를 다시 한번 입력해주세요.' required margin="normal" />
            </div>
            
            <div className='input-section'>
               <p>이름</p>
              <input label="이름" name="name" value={form.name} onChange={handleChange} placeholder='이름을 입력하세요.' required margin="normal" />
            </div>
            <div className='input-section'>
               <p>전화번호</p>
               <input label="전화번호" name="phone" value={form.phone} onChange={handleChange} placeholder='010-1234-5678' required margin="normal" />
            </div>
            <div className='input-section'>
               <p>이메일(선택)</p>
              <input label="이메일 (선택)" name="email" value={form.email} onChange={handleChange} placeholder='abc1234@gmail.com' margin="normal" />
            </div>
            <div className='input-section'>
               <p>주소</p>
              <input label="주소" name="address" value={form.address} onChange={handleChange} placeholder='주소를 입력해주세요.' required margin="normal" />
            </div>

            {/* 성별 선택 */}
         <div className="form-group">
           <label htmlFor="gender">성별(선택)</label>
             <select id="gender" name="gender" value={form.gender} onChange={handleChange} >
                <option value="">선택 안 함</option>
                <option value="M">남성</option>
                <option value="F">여성</option>
             </select>
         </div>

            <button className='register-btn' type="submit" >
               회원가입
            </button>
           </div>
         </form>
       </div>
      </section>
   )
}

export default RegisterForm
