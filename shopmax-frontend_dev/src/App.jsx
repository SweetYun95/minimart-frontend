import { Route, Routes } from 'react-router-dom'

import Navbar from './components/shared/Navber'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TokenPage from './pages/TokenPage'
import Footer from './components/shared/Footer'
import ItemSellListPage from './pages/ItemSellListPage'
import ItemCreatePage from './pages/ItemCreatePage'
import './App.css'

function App() {
   return (
      <>
         <Navbar />
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<RegisterPage />} />
            <Route path="/token" element={<TokenPage />} />
            <Route path="/item" element={<ItemSellListPage />} />
            {/* 상품등록 */}
            <Route path="/items/create" element={<ItemCreatePage />} />
         </Routes>
         <Footer />
      </>
   )
}

export default App
