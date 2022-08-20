import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { title } from 'process';
import { useState } from "react";
import Button1 from '../../assets/img/contact.png';
import Button2 from '../../assets/img/creations.png';
import Button3 from '../../assets/img/contact.png';
import ImageIcon from '@mui/icons-material/Image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
export const Header = () =>
{
    const pages = [{title: 'A propos', target:'aboutme', img:Button1, icon:<AccountCircleIcon/>}, {title: 'Mes créations', target:'portfolio', img:Button2, icon:<ImageIcon/>}, {title: 'Contact', target:'contact', img:Button3, icon:<EmailIcon/>}];
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (target:string) => {
    const anchor = document.getElementById(target);
    
    if (anchor) {
      window.scrollTo({top:anchor.offsetTop, behavior:"smooth"})
    }
    handleCloseNavMenu();
};


 return (
       <AppBar position='fixed' sx={{backgroundColor: window.scrollY > 0 ?"#FFEBEE" : "transparent" , width: "100%", boxShadow: window.scrollY > 0 ? undefined : "none",}}>
       <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'baskervville',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ADELE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
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
              onClose={()=>handleCloseNavMenu()}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={()=> handleClick(page.target)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ADELE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', marginLeft:20 } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleClick(page.target)}
                sx={{ my: 2, color: 'white', display: 'flex', alignItems:"center" }}
              >
                {page.icon}
                 <p style={{fontWeight: "bold", fontSize: 15, color:"#8C685E", margin:0, marginLeft:5}}>
            {page.title}
          </p>
        {/* <img src={Button1} onClick={()=> console.log("button1")} height={20} style={{alignSelf:"center"}}/> */}

                {/* {page.img} */}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
           </AppBar>
 )
}