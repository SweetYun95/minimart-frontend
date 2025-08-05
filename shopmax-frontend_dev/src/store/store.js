import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import itemReducer from '../features/itemSlice'
import tokenReducer from '../features/tokenSlice'

const store = configureStore({
   reducer: {
      auth: authReducer,
      item: itemReducer,
      token: tokenReducer,
   },
})

export default store
