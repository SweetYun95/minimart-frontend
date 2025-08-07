import { Route, Routes } from 'react-router-dom'

import Navbar from './components/shared/Navbar'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TokenPage from './pages/TokenPage'
import ItemSellListPage from './pages/ItemSellListPage'
import ItemDetailPage from './pages/ItemDetailPage'
import ItemCreatePage from './pages/ItemCreatePage'
import OrderPage from './pages/OrderPage'
import ReviewCreatePage from './pages/ReviewCreatePage'
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
            <Route path="/token" element={<TokenPage />} />
            {/* 상품 상세 페이지 */}
            <Route path="/items/detail/:id" element={<ItemDetailPage />} />
            {/* 주문/결제 페이지 */}
            <Route path="/order" element={<OrderPage />} />
            {/* 상품리스트 */}
            <Route path="/item" element={<ItemSellListPage />} />

            {/* 상품등록 */}
            <Route path="/items/create" element={<ItemCreatePage />} />
            {/* 리뷰 등록 */}
            <Route path="/review/create" element={<ReviewCreatePage />} />
         </Routes>
         <Footer />
      </>
   )
}

export default App
