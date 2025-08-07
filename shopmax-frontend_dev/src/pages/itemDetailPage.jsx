import { Container, CircularProgress, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchItemByIdThunk } from '../features/itemSlice'
import ItemDetailForm from '../components/item/ItemDetailForm'

function ItemDetailPage() {
   const { id } = useParams()
   const dispatch = useDispatch()
   const { item, loading, error } = useSelector((state) => state.item)

   if (item) console.log('📁[ItemDetailPage.jsx] item:', item)

   useEffect(() => {
      if (id) {
         dispatch(fetchItemByIdThunk(id))
      }
   }, [id, dispatch])

   if (loading) {
      return (
         <Container sx={{ textAlign: 'center', mt: 5 }}>
            <CircularProgress />
         </Container>
      )
   }

   if (error) {
      return (
         <Container sx={{ textAlign: 'center', mt: 5 }}>
            <Typography color="error">{error}</Typography>
         </Container>
      )
   }

   if (!item) {
      return (
         <Container sx={{ textAlign: 'center', mt: 5 }}>
            <Typography>상품 정보를 불러올 수 없습니다.</Typography>
         </Container>
      )
   }

   return (
      <Container sx={{ mt: 5 }}>
         <ItemDetailForm item={item} />
      </Container>
   )
}

export default ItemDetailPage
