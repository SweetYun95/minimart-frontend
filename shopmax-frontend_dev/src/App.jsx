import { Route, Routes } from 'react-router-dom'

import Navbar from './components/shared/Navbar'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TokenPage from './pages/TokenPage'
import ItemDetailPage from './pages/itemDetailPage'
import OrderPage from './pages/OrderPage'
import Footer from './components/shared/Footer'
import ItemSellListPage from './pages/ItemSellListPage'
import ItemCreatePage from './pages/ItemCreatePage'
import './App.css'
import ReviewCreatePage from './pages/ReviewCreatePage'
import ItemLikePage from './pages/ItemLikePage'

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
            {/* 상품좋아요 페이지 */}
            <Route path="/items/liked" element={<ItemLikePage />} />
         </Routes>
         <Footer />
      </>
   )
}

export default App
