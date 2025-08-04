import { TextField, Button, Container, Typography, CircularProgress } from '@mui/material'

function RegisterForm() {
   return (
      <>
         <Container>
            <form>
               <TextField label={'ID'} name="id" fullWidth placeholder="아이디를 입력하세요" />
               <TextField label={'이름'} name="name" fullWidth placeholder="이름을 입력하세요" />
            </form>
         </Container>
      </>
   )
}

export default RegisterForm
