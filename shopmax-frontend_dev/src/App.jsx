import { Route, Routes } from 'react-router-dom'

import LoginPage from './components/auth/LoginForm'
import RegisterPage from './pages/RegisterPage'

function App() {
   return (
      <>
         <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<RegisterPage />} />
         </Routes>
      </>
   )
}

export default App
