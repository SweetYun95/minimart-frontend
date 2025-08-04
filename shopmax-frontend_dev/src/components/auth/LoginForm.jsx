import { Stack, Button, Container, Box, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function LoginForm() {
   return (
      <>
         <Container>
            <form>
               <TextField label={'ID'} name="id" fullWidth placeholder="아이디를 입력하세요" />
               <TextField label={'Password'} name="password" fullWidth placeholder="비밀번호를 입력하세요" />
            </form>
            <FormControlLabel control={<Checkbox name="saveIdToggle" />} label="아이디 저장" />
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
               {/* 위 sx는 임시 지정값이므로 수정해 주세요 */}
               <Link to={''}>
                  <p>아이디 찾기</p>
               </Link>
               <Link to={''}>
                  <p>비밀번호 찾기</p>
               </Link>
            </Box>
            <Stack spacing={2} direction="column">
               <Button variant="outlined" fullWidth>
                  로그인
               </Button>
               <Button variant="outlined" fullWidth>
                  구글아이디로 로그인
               </Button>
            </Stack>
         </Container>
      </>
   )
}

export default LoginForm
