import { TextField, Button, Container, Typography, CircularProgress, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import axios from 'axios'

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
      gender: '',
   })

   const [idChecking, setIdChecking] = useState(false)
   const [isIdAvailable, setIsIdAvailable] = useState(null) // null: 미확인, true: 사용 가능, false: 중복

   const handleChange = (e) => {
      const { name, value } = e.target
      setForm((prev) => ({ ...prev, [name]: value }))
      if (name === 'userId') {
         setIsIdAvailable(null) // 아이디 변경 시 상태 초기화
      }
   }

   const handleIdCheck = async () => {
      const userId = form.userId.trim()
      if (!userId) {
         alert('아이디를 입력하세요')
         return
      }

      setIdChecking(true)
      try {
         const res = await axios.get(`/api/users/check-id?userId=${encodeURIComponent(userId)}`)
         if (res.data.available) {
            alert('사용 가능한 아이디입니다')
            setIsIdAvailable(true)
         } else {
            alert('이미 사용 중인 아이디입니다')
            setIsIdAvailable(false)
         }
      } catch (e) {
         alert('중복 확인 중 오류가 발생했습니다')
         setIsIdAvailable(false)
      } finally {
         setIdChecking(false)
      }
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (!isIdAvailable) {
         alert('아이디 중복 확인이 필요하거나, 이미 사용 중인 아이디입니다')
         return
      }

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
         // navigate('/login')
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
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
               <TextField label="아이디" name="userId" value={form.userId} onChange={handleChange} fullWidth required error={isIdAvailable === false} helperText={isIdAvailable === false ? '이미 사용 중인 아이디입니다' : ''} />
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
