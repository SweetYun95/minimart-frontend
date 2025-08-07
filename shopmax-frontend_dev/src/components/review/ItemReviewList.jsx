import { Box, Button, Typography, Stack, TextField, keyframes, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemReviewThunk } from '../../features/reviewSlice'
import { useParams } from 'react-router-dom'

function ItemReviewList({ item }) {
   const dispatch = useDispatch()
   const { reviews, loading, error } = useSelector((state) => state.review)
   useEffect(() => {
      dispatch(getItemReviewThunk(item.id))
   }, [dispatch, item])

   if (reviews) console.log('🎁[ItemReviewList.jsx] 리뷰 데이터 확인:', reviews)

   return (
      <>
         {reviews && (
            <Box>
               <Accordion>
                  <AccordionSummary>
                     <Typography>REVIEW</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     {reviews?.map((review) => (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} key={review.id}>
                           <Typography
                              sx={{
                                 whiteSpace: 'nowrap',
                                 overflow: 'hidden',
                                 textOverflow: 'ellipsis',
                                 maxWidth: '1000px',
                              }}
                           >
                              {review?.reviewContent}
                           </Typography>
                           <Box maxWidth="120px">
                              <Typography sx={{ fontWeight: 'bold' }}>{review?.User.name}</Typography>
                              <Typography>{review?.reviewDate.slice(0, 10)}</Typography>
                           </Box>
                        </Box>
                     ))}
                  </AccordionDetails>
               </Accordion>
            </Box>
         )}
      </>
   )
}

export default ItemReviewList
