// src/components/order/OrderForm.jsx
import React, { useState } from 'react'
import { Box, Typography, Grid, Button, ToggleButton, ToggleButtonGroup, TextField, MenuItem, FormControl, InputLabel, Select, Paper } from '@mui/material'

function OrderForm() {
   const [paymentMethod, setPaymentMethod] = useState('간편결제')
   const [simplePay, setSimplePay] = useState('')

   const handlePaymentChange = (event, newMethod) => {
      if (newMethod !== null) {
         setPaymentMethod(newMethod)
      }
   }

   const handleSimplePaySelect = (method) => {
      setSimplePay(method)
   }

   return (
      <Grid container spacing={2}>
         {/* 좌측 */}
         <Grid item xs={8}>
            {/* 배송지 입력 */}
            <Paper sx={{ p: 2, mb: 2 }}>
               <Typography variant="h6" gutterBottom>
                  배송지 입력
               </Typography>
               <Button variant="outlined" size="small" sx={{ mb: 2 }}>
                  배송지 변경하기
               </Button>
               <TextField label="이름 / 배송지명" fullWidth sx={{ mb: 2 }} />
               <TextField label="전화번호" fullWidth sx={{ mb: 2 }} />
               <TextField label="주소" fullWidth sx={{ mb: 2 }} />
               <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>배송시 요청사항</InputLabel>
                  <Select defaultValue="">
                     <MenuItem value="">선택 안 함</MenuItem>
                     <MenuItem value="문 앞에 두고 가주세요">문 앞에 두고 가주세요</MenuItem>
                     <MenuItem value="배송 전 연락주세요">배송 전 연락주세요</MenuItem>
                  </Select>
               </FormControl>
            </Paper>

            {/* 결제수단 */}
            <Paper sx={{ p: 2 }}>
               <Typography variant="h6" gutterBottom>
                  결제수단
               </Typography>
               <ToggleButtonGroup value={paymentMethod} exclusive onChange={handlePaymentChange} sx={{ mb: 2 }}>
                  <ToggleButton value="간편결제">간편결제</ToggleButton>
                  <ToggleButton value="카드결제">카드결제</ToggleButton>
                  <ToggleButton value="현금결제">현금결제</ToggleButton>
                  <ToggleButton value="휴대폰결제">휴대폰결제</ToggleButton>
               </ToggleButtonGroup>

               {/* 간편결제 */}
               {paymentMethod === '간편결제' && (
                  <Grid container spacing={2}>
                     {['토스페이', '네이버페이', '애플페이', '카카오페이'].map((pay, index) => (
                        <Grid item xs={6} key={index}>
                           <Button variant={simplePay === pay ? 'contained' : 'outlined'} fullWidth onClick={() => handleSimplePaySelect(pay)}>
                              {pay}
                           </Button>
                        </Grid>
                     ))}
                  </Grid>
               )}

               {/* 카드결제 */}
               {paymentMethod === '카드결제' && (
                  <Box sx={{ mt: 2 }}>
                     <TextField label="카드번호" fullWidth sx={{ mb: 2 }} placeholder="0000-0000-0000-0000" />
                     <Grid container spacing={2}>
                        <Grid item xs={4}>
                           <TextField label="만료일" placeholder="MM/YY" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                           <TextField label="CVC" placeholder="123" fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                           <TextField label="비밀번호" placeholder="앞 2자리" fullWidth />
                        </Grid>
                     </Grid>
                  </Box>
               )}

               {/* 현금결제 */}
               {paymentMethod === '현금결제' && (
                  <Box sx={{ mt: 2 }}>
                     <Button variant="outlined" sx={{ mr: 1 }}>
                        무통장입금
                     </Button>
                     <Button variant="outlined">편의점결제</Button>
                  </Box>
               )}

               {/* 휴대폰결제 */}
               {paymentMethod === '휴대폰결제' && (
                  <Box sx={{ mt: 2 }}>
                     <Typography>휴대폰 결제를 진행합니다.</Typography>
                  </Box>
               )}
            </Paper>
         </Grid>

         {/* 우측 결제하기 */}
         <Grid item xs={4}>
            <Paper sx={{ p: 2 }}>
               <Typography variant="h6" gutterBottom>
                  결제하기
               </Typography>
               <Typography>총 상품금액: 00,000원</Typography>
               <Typography>상품할인: -00,000원</Typography>
               <Typography>쿠폰할인: (쿠폰선택)</Typography>
               <Typography>배송비: 0,000원</Typography>
               <Box sx={{ my: 2 }}>
                  <Typography variant="subtitle1">총 0개 주문금액</Typography>
                  <Typography variant="h5" fontWeight="bold">
                     00,000원
                  </Typography>
               </Box>
               <Button variant="contained" color="primary" fullWidth>
                  구매하기
               </Button>
            </Paper>
         </Grid>
      </Grid>
   )
}

export default OrderForm
