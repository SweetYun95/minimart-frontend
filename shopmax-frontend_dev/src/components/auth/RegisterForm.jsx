import React, { useState } from 'react'
import { TextField, Button, Container, Typography, CircularProgress, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useDispatch } from 'react-redux'

import { registerUserThunk } from '../../features/authSlice'

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
      <Container maxWidth="sm" sx={{ mt: 5 }}>
         <Typography variant="h5" gutterBottom>
            회원가입
         </Typography>

         <form onSubmit={handleSubmit}>
            {/* 아이디 + 중복확인 */}
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
               <TextField label="아이디" name="userId" value={form.userId} onChange={handleChange} fullWidth required />
               <Button variant="outlined" onClick={handleIdCheck} disabled={idChecking}>
                  {idChecking ? <CircularProgress size={20} /> : '중복확인'}
               </Button>
            </Stack>

            <TextField label="비밀번호" name="password" type="password" value={form.password} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="비밀번호 확인" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="이름" name="name" value={form.name} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="전화번호" name="phone" value={form.phone} onChange={handleChange} fullWidth required margin="normal" />
            <TextField label="이메일 (선택)" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="주소" name="address" value={form.address} onChange={handleChange} fullWidth required margin="normal" />

            {/* 성별 선택 */}
            <FormControl fullWidth margin="normal">
               <InputLabel>성별 (선택)</InputLabel>
               <Select name="gender" value={form.gender} onChange={handleChange} label="성별 (선택)">
                  <MenuItem value="">선택 안 함</MenuItem>
                  <MenuItem value="M">남성</MenuItem>
                  <MenuItem value="F">여성</MenuItem>
               </Select>
            </FormControl>

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
               회원가입
            </Button>
         </form>
      </Container>
   )
}

export default RegisterForm
