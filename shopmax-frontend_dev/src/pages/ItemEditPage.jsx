import { Container } from '@mui/material'

import { useLocation } from 'react-router-dom'

import ItemEditForm from '../components/item/ItemEditForm'

function ItemEditPage() {
   const location = useLocation()
   const { initialData } = location.state || {}

   console.log(initialData)

   return (
      <>
         <Container maxWidth="md" sx={{ marginTop: 10, marginBottom: 13 }}>
            <h1>상품 수정</h1>
            <ItemEditForm initialData={initialData} />
         </Container>
      </>
   )
}

export default ItemEditPage
