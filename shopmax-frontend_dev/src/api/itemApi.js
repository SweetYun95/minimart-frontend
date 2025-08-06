import shopmaxApi from './axiosApi'

// 상품 등록
export const createItem = async (itemData) => {
   try {
      const response = await shopmaxApi.post('/item', itemData)
      return response
   } catch (error) {
      console.log(`API Request 오류: ${error}`)
      throw error
   }
}

// 상품 수정
export const updateItem = async (id, itemData) => {
   try {
      const response = await shopmaxApi.put(`/item/${id}`, itemData)
      return response
   } catch (error) {
      console.log(`API Request 오류: ${error}`)
      throw error
   }
}

// 상품 삭제
export const deleteItem = async (id) => {
   try {
      const response = await shopmaxApi.delete(`/item/${id}`)
      return response
   } catch (error) {
      console.log(`API Request 오류: ${error}`)
      throw error
   }
}

// 전체 상품 리스트 가져오기
export const getItems = async (data) => {
   try {
      const { searchTerm = '', sellCategory = '', categoryId = '' } = data
      const response = await shopmaxApi.get(`item?searchTerm=${searchTerm}&sellCategory=${sellCategory}&categoryId=${categoryId}`)
      return response
   } catch (error) {
      console.log(`API Request 오류: ${error}`)
      throw error
   }
}

// 특정 상품 가져오기
export const getItemById = async (id) => {
   try {
      const response = await shopmaxApi.get(`/item/${id}`)
      return response
   } catch (error) {
      console.log(`API Request 오류: ${error}`)
      throw error
   }
}
