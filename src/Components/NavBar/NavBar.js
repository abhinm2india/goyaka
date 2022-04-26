import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';



const pages = ['Home', 'Tour Packages', 'Transport Booking', 'About Us', 'Contact Us'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {

  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color='cusWhite' position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* <Typography

            variant="h6"

            onClick={() => { navigate("/"); }}
            noWrap
            // component="div"
            color='primary'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 'bold', cursor: 'pointer' }}
          >
            LOGO
          </Typography> */}

          <Box component="img"
            onClick={() => { navigate("/"); }}
            sx={{
              height: '50px',
              width: '135px',
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              mr: 2, 
              display: { xs: 'none', md: 'flex' },
              cursor: 'pointer',
            }}
            alt="Logo"
            src="./images/goyaka.png"
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => ( */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => { navigate("/"); }}>Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => { navigate("/tour"); }}>Tour Packages</Typography>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => { navigate("/transport"); }}> Transport Booking</Typography>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => { navigate("/about-us"); }}> About Us</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => { navigate("/contact-us"); }}> Contact Us</Typography>
              </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          {/* <Typography onClick={() => { navigate("/"); }}
            variant="h6"
            noWrap
            component="div"
            color='primary'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontWeight: 'bold' }}
          >
            LOGO
          </Typography> */}
          <Box component="img"
            onClick={() => { navigate("/"); }}
            sx={{
              height: '50px',
              width: '100px',
              maxHeight: { xs: 50, md: 167 },
              maxWidth: { xs: 130, md: 250 },
              flexGrow: 1, 
              display: { xs: 'flex', md: 'none' }
            }}
            alt="Logo"
            src="./images/goyaka.png"
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent:'flex-end' }}>
            {/* {pages.map((page) => ( */}
            <Button
              // key={page}
              onClick={() => { navigate("/"); }}
              color='cusBlack'

              sx={{ mr: 4, display: 'block', textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}
            >
              {/* {page} */}
              Home
            </Button>
            <Button
              // key={page}
              onClick={() => { navigate("/tour"); }}
              color='cusBlack'

              sx={{ mr: 4, display: 'block', textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}
            >
              {/* {page} */}
              Tour Packages
            </Button>
            {/* <Button
             
              onClick={() => { navigate("/transport"); }}
              color='cusBlack'

              sx={{ mr: 4, display: 'block', textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}
            >
            
              Transport Booking
            </Button> */}
            <Button
              // key={page}
              onClick={() => { navigate("/about-us"); }}
              color='cusBlack'

              sx={{ mr: 4, display: 'block', textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}
            >
              {/* {page} */}
              About Us
            </Button>
            <Button
              // key={page}
              onClick={() => { navigate("/contact-us"); }}
              color='cusBlack'

              sx={{ mr: 4, display: 'block', textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}
            >
              {/* {page} */}
              Contact Us
            </Button>
            {/* ))} */}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar