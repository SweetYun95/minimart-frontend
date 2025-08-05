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
      throw error
   }
}
