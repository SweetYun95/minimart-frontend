import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import itemReducer from '../features/itemSlice'
import tokenReducer from '../features/tokenSlice'
import orderReducer from '../features/orderSlice' // 주문 slice 추가
import reviewSlice from '../features/reviewSlice'

const store = configureStore({
   reducer: {
      auth: authReducer,
      item: itemReducer,
      token: tokenReducer,
      order: orderReducer, // 주문 slice 등록
      review: reviewSlice,
   },
})

export default store
