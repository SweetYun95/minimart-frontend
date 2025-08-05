import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createItem, updateItem, deleteItem, getItems, getItemById } from '../api/itemApi'

//상품삭제
export const deleteItemThunk = createAsyncThunk('items/deleteItem', async (id, { rejectWithValue }) => {
   try {
      await deleteItem(id)
      return id
   } catch (error) {
      return rejectWithValue(error.response?.data?.message)
   }
})
//전체 상품리스트 가져오기
export const fetchItemsThunk = createAsyncThunk('items/getItems', async (data, { rejectWithValue }) => {
   try {
      console.log('data:', data)
      const response = await getItems(data)
      return response.data
   } catch (error) {
      return rejectWithValue(error.response?.data?.message)
   }
})
//특정 상품 가져오기
export const fetchItemByIdThunk = createAsyncThunk('items/fetchItemById', async (id, { rejectWithValue }) => {
   try {
      const response = await getItemById(id)
      return response.data.item
   } catch (error) {
      return rejectWithValue(error.response?.data?.message)
   }
})
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
      //상품삭제
      builder
         .addCase(deleteItemThunk.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(deleteItemThunk.fulfilled, (state) => {
            state.loading = false
         })
         .addCase(deleteItemThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
      //전체 상품리스트 가져오기
      builder
         .addCase(fetchItemsThunk.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchItemsThunk.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload.items
            state.pagination = action.payload.pagination
         })
         .addCase(fetchItemsThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
      //특정 상품가져오기
      builder
         .addCase(fetchItemByIdThunk.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchItemByIdThunk.fulfilled, (state, action) => {
            state.loading = false
            state.item = action.payload
         })
         .addCase(fetchItemByIdThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
         })
   },
})

export default itemSlice.reducer
