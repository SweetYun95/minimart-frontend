// src/pages/OrderPage.jsx
import { Container, Typography } from '@mui/material'

import OrderForm from '../components/order/OrderForm'

function OrderPage() {
   return (
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
         <Typography variant="h4" gutterBottom>
            주문 / 결제
         </Typography>
         <OrderForm />
      </Container>
   )
}

export default OrderPage
