import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
   const { user, isAuthenticated } = useSelector((state) => state.auth)

   return (
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 1 }}>
         <Container maxWidth="xl">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
               {/* 왼쪽 메뉴 영역 */}
               <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                     PETHAUL
                  </Typography>
                  <Typography>MENU</Typography>
                  <Typography>SEASON</Typography>
                  <Typography>이벤트/기획전</Typography>
                  <Typography>고객센터</Typography>
               </Box>

               {/* 오른쪽 아이콘 영역 */}
               <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  {isAuthenticated && user ? (
                     <Typography sx={{ fontWeight: 'bold' }}>{user.name}님 환영합니다</Typography>
                  ) : (
                     <Button variant="outlined" component={Link} to="/login" sx={{ textTransform: 'none' }}>
                        로그인 해주세요
                     </Button>
                  )}
                  <IconButton>
                     <SearchIcon />
                  </IconButton>
                  <IconButton>
                     <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton>
                     <ShoppingCartIcon />
                  </IconButton>
                  <IconButton>
                     <AccountCircleIcon />
                  </IconButton>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Navbar
