import { NavLink } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'

import '../css/Navbar.css'


function Navbar() {
   return (
      <AppBar position="fixed" color='transparent' sx={{ backgroundColor: 'transparent', color: '#000', boxShadow: 'none'}}>
 
         <Container maxWidth="xl">
            <Toolbar sx={{ margin: '0 auto',justifyContent: 'space-between', maxWidth: "1200px" }}>
                <NavLink to='/' className="galindo logo">
                     PETHAUL
                  </NavLink>
               <ul>
                  <li>
                      <NavLink>MENU</NavLink>
                  </li>
                  <li>
                      <NavLink>SEASON<iconify-icon style={{marginLeft: '5px'}} icon="fluent-emoji-flat:watermelon" width="16
                  " height="16
                  "></iconify-icon></NavLink>
                  </li>
                  <li>
                     <NavLink >이벤트/기획전<iconify-icon style={{marginLeft: '5px'}} icon="fluent-emoji:star" width="16
                  " height="16
                  "></iconify-icon></NavLink></li>
                <li>
                  <NavLink >고객센터</NavLink>
                </li>
               </ul>
               <div className='right-icon-bar'>
               <div className='pc-search-icon search'>
                  <IconButton className=''>
                     <iconify-icon icon="pixelarticons:search" width="24" height="24"></iconify-icon>
                  </IconButton>
               </div>
               <div className='mob-search-icon search'>
                  <IconButton >
                     <iconify-icon  icon="pixelarticons:search" width="28" height="28"></iconify-icon>
                  </IconButton>
               </div>

               {/* 오른쪽 아이콘 영역 */}
               <div className='icon'>
                  <IconButton>
                     <iconify-icon icon="pixelarticons:heart" width="24" height="24"></iconify-icon>
                  </IconButton>
                  <IconButton>
                     <iconify-icon icon="streamline-pixel:shopping-shipping-basket" width="24" height="24"></iconify-icon>
                  </IconButton>
                  <IconButton>
                     <iconify-icon icon="streamline-pixel:user-single-aim" width="24" height="24"></iconify-icon>
                  </IconButton>
               </div>
               <div className='mobile-menu'>
                  <iconify-icon icon="streamline-pixel:interface-essential-navigation-menu-3" width="35" height="35"></iconify-icon>
               </div>
               </div>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Navbar
