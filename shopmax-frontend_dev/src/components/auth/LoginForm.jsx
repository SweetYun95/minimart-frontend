import { Container, Stack, Button, TextField, FormControlLabel, Checkbox, Typography, Alert, Box } from '@mui/material'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { loginUserThunk } from '../../features/authSlice'

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
      <Container maxWidth="sm">
         <Typography variant="h4" gutterBottom>
            로그인
         </Typography>
         <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
               <TextField label="ID" name="id" value={formData.id} onChange={handleChange} fullWidth placeholder="아이디를 입력하세요" />
               <TextField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} fullWidth placeholder="비밀번호를 입력하세요" />
               <FormControlLabel control={<Checkbox name="saveIdToggle" checked={formData.saveIdToggle} onChange={handleChange} />} label="아이디 저장" />
               {error && <Alert severity="error">{error}</Alert>}
               {loading && <Typography>로그인 중...</Typography>}
               <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="/find-id">아이디 찾기</Link>
                  <Link to="/find-password">비밀번호 찾기</Link>
               </Box>
               <Button type="submit" variant="contained" fullWidth disabled={loading}>
                  로그인
               </Button>
               <Button variant="outlined" fullWidth>
                  구글 아이디로 로그인
               </Button>
            </Stack>
         </form>
      </Container>
   )
}

export default LoginForm
