import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import itemReducer from '../features/itemSlice'
import tokenReducer from '../features/tokenSlice'
import orderReducer from '../features/orderSlice' // 주문 slice 추가
import likeReducer from '../features/likeSlice'
import cartReducer from '../features/cartSlice'
const store = configureStore({
   reducer: {
      auth: authReducer,
      item: itemReducer,
      token: tokenReducer,
      order: orderReducer, // 주문 slice 등록
      like: likeReducer,
      cart: cartReducer,
   },
})

export default store
