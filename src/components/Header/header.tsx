import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { title } from 'process';
import { useState } from "react";

export const Header = (props:{aboutSectionPosition:number, portfolioSectionPosition:number, contactSectionPosition:number}) =>
{
  const {aboutSectionPosition, portfolioSectionPosition, contactSectionPosition} = props;
    const pages = [{title: 'A propos', offset:'aboutMe'}, {title: 'Mes créations', offset:'portfolio'}, {title: 'Contact', offset:'contact'}];
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page?: any) => {
    if (page)
    switch (page?.offset) {
      case "aboutMe":
      window.scrollTo({top: aboutSectionPosition+200, behavior:"smooth"})
        
        break;
      case "portfolio":
      window.scrollTo({top: portfolioSectionPosition+200, behavior:"smooth"})

        break;
      case "contact": 
      window.scrollTo({top: contactSectionPosition+200, behavior:"smooth"})

      break;
      default:
      window.scrollTo({top: 0, behavior:"smooth"})

        break;
    }
    console.log(aboutSectionPosition, contactSectionPosition);

    // if (page) {
    //   window.scrollTo({top: portfolioSectionPosition, behavior:"smooth"})
    // }
    setAnchorElNav(null);
  };

 return (
       <AppBar position='fixed' sx={{backgroundColor:"#FEE7F0", width: "100%"}}>
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
              fontFamily: 'monospace',
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
              onClose={()=>handleCloseNavMenu(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={()=> handleCloseNavMenu(page)}>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Container>
           </AppBar>
 )
}