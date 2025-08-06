import { Route, Routes } from 'react-router-dom'

import Navbar from './components/shared/Navber'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TokenPage from './pages/TokenPage'
import Footer from './components/shared/Footer'

import './App.css'
import ReviewPage from './pages/ReviewPage'

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<RegisterPage />} />
            <Route path="/token" element={<TokenPage />} />
            <Route path="review" element={<ReviewPage />} />
         </Routes>
         <Footer />
      </>
   )
}

export default App
