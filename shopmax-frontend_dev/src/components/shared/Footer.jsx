import { Box, Typography, Link, Container, Button, Stack } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function Footer() {
   return (
      <Box component="footer" sx={{ backgroundColor: '#F2F2F2', borderTop: '1px solid #D8D8D8', py: 4 }}>
         <Container maxWidth="lg">
            {/* 1번째 줄: 상단 영역 */}
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 2,
                  pb: 2,
                  borderBottom: '1px solid #D8D8D8',
               }}
            >
               {/* 좌측: 링크들 */}
               <Stack direction="row" spacing={3} flexWrap="wrap">
                  <Link href="/" underline="none" color="inherit">
                     이용약관
                  </Link>
                  <Link href="/" underline="none" color="inherit">
                     개인정보처리방침
                  </Link>
                  <Link href="/" underline="none" color="inherit">
                     ABOUT US
                  </Link>
                  <Link href="/" underline="none" color="inherit">
                     공지사항
                  </Link>
               </Stack>

               {/* 우측: SNS 아이콘 */}
               <Stack direction="row" spacing={2}>
                  <Link href="https://facebook.com" target="_blank" color="inherit">
                     <FacebookIcon />
                  </Link>
                  <Link href="https://youtube.com" target="_blank" color="inherit">
                     <YouTubeIcon />
                  </Link>
                  <Link href="https://instagram.com" target="_blank" color="inherit">
                     <InstagramIcon />
                  </Link>
               </Stack>
            </Box>

            {/* 2번째 줄: 하단 영역 */}
            <Box sx={{ pt: 3 }}>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: { xs: 'column', sm: 'row' },
                     alignItems: { xs: 'flex-start', sm: 'center' },
                     justifyContent: 'space-between',
                     flexWrap: 'wrap',
                     rowGap: 1,
                  }}
               >
                  <Box>
                     <Typography variant="body2" fontWeight="bold">
                        PETHAUL(주)
                     </Typography>
                     <Button size="small" endIcon={<KeyboardArrowDownIcon />} sx={{ p: 0, textTransform: 'none', minWidth: 'auto' }}>
                        사업자정보
                     </Button>
                  </Box>
               </Box>

               {/* CopyRight */}
               <Typography variant="body2" sx={{ mt: 1 }}>
                  © 2024 SHOPMAX. All rights reserved.
               </Typography>
            </Box>
         </Container>
      </Box>
   )
}

export default Footer
