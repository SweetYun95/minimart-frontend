import { Box, Button, Typography, Stack, TextField, Card, CardMedia, CardContent } from '@mui/material'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteItemThunk, fetchItemsThunk } from '../../features/itemSlice'
import { Link, useParams } from 'react-router-dom'

function ItemPanel({ searchTerm, sellCategory }) {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchItemsThunk({ searchTerm, sellCategory }))
   }, [dispatch])

   const { items, loading, error } = useSelector((state) => state.item)

   const onClickDelete = (e) => {
      const res = confirm('정말 삭제하시겠습니까?')
      if (res) {
         dispatch(deleteItemThunk(e.target.id))
            .unwrap()
            .then(() => alert('상품이 삭제되었습니다!'))
            .catch(() => alert('상품 삭제 중 오류 발생'))
      }
   }

   return (
      <>
         <Box
            sx={{
               display: 'grid',
               gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
               },
               gap: '16px',
               justifyItems: 'center',
            }}
         >
            {items &&
               items.map((item) => (
                  <Card key={item.id} sx={{ width: '200px' }}>
                     <CardMedia component="img" image={`${import.meta.env.VITE_APP_API_URL}${item.ItemImages?.filter((data) => data.repImgYn === 'Y')[0].imgUrl}`} />
                     <CardContent>
                        <Typography>{item.itemNm}</Typography>
                     </CardContent>
                     <Box>
                        <Link to={``}>
                           <Button>수정</Button>
                        </Link>
                        <Button onClick={onClickDelete} id={item.id}>
                           삭제
                        </Button>
                     </Box>
                  </Card>
               ))}
         </Box>
      </>
   )
}

export default ItemPanel
