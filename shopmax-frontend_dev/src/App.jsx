import { Route, Routes } from 'react-router-dom'

import Navbar from './components/shared/Navbar'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Footer from './components/shared/Footer'

import './App.css'

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<RegisterPage />} />
         </Routes>
         <Footer />
      </>
   )
}

export default App
