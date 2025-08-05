import shopmaxApi from './axiosApi'

//상품 등록하기
export const createItem = async (itemData) => {
   try {
      const config = {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      }
      const response = await shopmaxApi.post('/', itemData, config)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error}`)
      throw error
   }
}
//상품 수정
export const updateItem = async (id, itemData) => {
   try {
      const config = {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      }
      const response = await shopmaxApi.put(`/item/${id}`, itemData, config)
      return response
   } catch (error) {
      console.error(`API Request 오류: ${error}`)
   }
}
//상품삭제
export const deleteItem = async (id) => {
   try {
      const response = await shopmaxApi.delete(`/item/${id}`)
      return response
   } catch (error) {
      console.log(`API Request 오류:${error}`)
      throw error
   }
}
//전체상품 리스트 가져오기
export const getItems = async (data) => {
   try {
      const { searchTerm = '', searchCategory = '', sellCategory = '' } = data

      const response = await shopmaxApi.get(`item?searchTerm=${searchTerm}&searchCategory=${searchCategory}&sellCategory=${sellCategory}`)
      return response
   } catch (error) {
      console.log(`API Request 오류:${error}`)
      throw error
   }
}

//특정 상품 가져오기
export const getItemById = async (id) => {
   try {
      const response = await shopmaxApi.get(`/item/${id}`)
      return response
   } catch (error) {
      console.log(`API Request 오류:${error}`)
      throw error
   }
}
