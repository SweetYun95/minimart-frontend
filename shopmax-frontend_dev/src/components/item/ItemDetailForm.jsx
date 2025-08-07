// src/components/item/ItemDetailForm.jsx
import { Box, Button, Typography, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCartThunk } from '../../features/cartSlice'
import { createOrderThunk } from '../../features/orderSlice'

function ItemDetailForm({ item }) {
   const dispatch = useDispatch()
   const [quantity, setQuantity] = useState(1)

   if (!item) {
      return <Typography>상품 정보를 불러오는 중입니다...</Typography>
   }

   const handleQuantityChange = (e) => {
      const value = Math.max(1, Number(e.target.value) || 1)
      setQuantity(value)
   }

   const handleBuyNow = async () => {
      try {
         const orderData = {
            items: [
               {
                  itemId: item.id,
                  price: item.price,
                  quantity: quantity,
               },
            ],
         }

         await dispatch(createOrderThunk(orderData)).unwrap()
         alert('주문이 완료되었습니다.')
      } catch (err) {
         alert(`주문 실패: ${err}`)
      }
   }

  const handleAddToCart = async () => {
     try {
        await dispatch(addToCartThunk({ itemId: item.id, count: quantity })).unwrap()
        alert('장바구니에 추가되었습니다.')
        
     } catch (err) {
        alert(`장바구니 추가 실패: ${err}`)
     }
  }

   return (
      <Box>
         {/* 상품 이름 */}
         <Typography variant="h4" gutterBottom>
            {item.itemNm}
         </Typography>

         {/* 상품 가격 */}
         <Typography variant="h6" gutterBottom>
            {item.price.toLocaleString()} 원
         </Typography>

         {/* 간단 설명 */}
         {item.itemDetail && (
            <Typography variant="body1" gutterBottom>
               {item.itemDetail}
            </Typography>
         )}

         {/* 수량 선택 */}
         <Stack direction="row" spacing={2} alignItems="center" sx={{ my: 2 }}>
            <TextField label="수량" type="number" value={quantity} onChange={handleQuantityChange} InputProps={{ inputProps: { min: 1 } }} size="small" sx={{ width: '100px' }} />
            <Typography>총 {(item.price * quantity).toLocaleString()} 원</Typography>
         </Stack>

         {/* 버튼 영역 */}
         <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={handleAddToCart} fullWidth>
               장바구니
            </Button>
            <Button variant="contained" color="primary" onClick={handleBuyNow} fullWidth>
               구매하기
            </Button>
         </Stack>
      </Box>
   )
}

export default ItemDetailForm
