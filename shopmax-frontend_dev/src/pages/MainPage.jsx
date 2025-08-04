import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Grid } from '@mui/material'

function MainPage() {
   const products = [1, 2, 3]

   return (
      <div>
         {/* 메인 배너 이미지 */}
         <section>
            <img src="/images/main-banner.jpg" alt="메인 배너" style={{ width: '100%' }} />
         </section>

         {/* 상품 섹션 */}
         <section>
            <Typography variant="h5">오늘의 BEST HAUL</Typography>
            <Button variant="outlined">More</Button>

            <Grid container spacing={3}>
               {products.map((num) => (
                  <Grid key={num} size={{ xs: 12, sm: 6, md: 4 }}>
                     <Card>
                        <CardMedia component="img" height="160" image={`/images/sample${num}.jpg`} alt={`상품 ${num}`} />
                        <CardContent>
                           <Typography variant="h6">상품 {num}</Typography>
                           <Typography variant="body2" color="text.secondary">
                              ₩가격
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </section>

         {/* 너에 대해 알려줄래? 종류를 선택해 주세요 ! (반려동물 이미지출력) */}
         <section id="pet-selector">
            <h2>너에 대해 알려줄래? 종류를 선택해 주세요!</h2>
            <div className="pet-list">
               <div className="pet-card">
                  <img src="/images/dog.jpg" alt="강아지" />
                  <p>강아지</p>
               </div>
               <div className="pet-card">
                  <img src="/images/cat.jpg" alt="고양이" />
                  <p>고양이</p>
               </div>
            </div>
         </section>

         {/* NEW CONTENTS, BEST REVIEW */}
         <section id="contents-review">
            <h2>NEW CONTENTS</h2>
            <div className="content-card">콘텐츠 1</div>

            <h2>BEST REVIEW</h2>
            <div className="review-card">리뷰 1</div>
         </section>

         {/* 댕댕이 장마대비준 (틀만) */}
         <section id="rainy-dog" style={{ padding: '20px' }}>
            <Typography variant="h5">댕댕이 장마대비준</Typography>

            <Grid container spacing={3} style={{ marginTop: '10px' }}>
               {[1, 2].map((num) => (
                  <Grid key={num} size={{ xs: 12, sm: 6, md: 4 }}>
                     <Card>
                        <CardMedia component="img" height="160" image={`/images/sample${num}.jpg`} alt={`상품 ${num}`} />
                        <CardContent>
                           <Typography variant="h6">상품 {num}</Typography>
                           <Typography variant="body2" color="text.secondary">
                              ₩가격
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </section>
         {/* 2025 S/S 신상템 */}
         <section id="ss-new" style={{ padding: '20px' }}>
            <Typography variant="h5">2025 S/S 신상템</Typography>

            <Grid container spacing={3} style={{ marginTop: '10px' }}>
               {[1, 2].map((num) => (
                  <Grid key={num} size={{ xs: 12, sm: 6, md: 4 }}>
                     <Card>
                        <CardMedia component="img" height="160" image={`/images/ss${num}.jpg`} alt={`상품 ${num}`} />
                        <CardContent>
                           <Typography variant="h6">상품 {num}</Typography>
                           <Typography variant="body2" color="text.secondary">
                              ₩가격
                           </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
            </Grid>
         </section>
      </div>
   )
}

export default MainPage
