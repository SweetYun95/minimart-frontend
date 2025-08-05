import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createItem, updateItem } from '../api/itemApi'

//상품 등록
export const createItemThunk = createAsyncThunk('items/createItem', async (itemData, { rejectWithValue }) => {
   try {
      const response = await createItem(itemData)
      return response.data.item
   } catch (error) {
      return rejectWithValue(error.response?.data?.message)
   }
})

//상품 수정
export const updateItemThunk = createAsyncThunk('items/updateItem', async (updateData, { rejectWithValue }) => {
   try {
      console.log('💾[itemSlice.js] updateItemThunk-updateData: ', updateData)
      const { id, itemData } = updateData
      await updateItem(id, itemData)
      return id
   } catch (error) {
      return rejectWithValue(error.response?.data?.message)
   }
})

//슬라이스
const itemSlice = createSlice({
   name: 'items',
   initialState: {
      item: null,
      items: [],
      pagination: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // 상품 등록
         .addCase(createItemThunk.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(createItemThunk.fulfilled, (state, action) => {
            state.loading = false
            state.item = action.payload
         })
         .addCase(createItemThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
         // 상품 수정
         .addCase(updateItemThunk.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(updateItemThunk.fulfilled, (state) => {
            state.loading = false
         })
         .addCase(updateItemThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

export default itemSlice.reducer
