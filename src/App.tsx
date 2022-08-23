import { Button, IconButton, Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import BackgroundImage from './assets/img/baniere.png';

import { AboutMe } from './components/AboutMe/aboutme';
import { Contact } from './components/Contact/contact';
import { Header } from './components/Header/header';
import { Portfolio } from './components/Portfolio/portfolio';
import { Skills } from './components/Skills/skills';
import portfolioTitle from './assets/img/portfolio.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

interface IImage {img: string, title: string};

function App() {

const [scrollPosition, setScrollPosition] = useState<number>(0);
const [displayImage, setDisplayImage] = useState<IImage | null>(null);

const handleScroll = () => {
  const position = window.scrollY;
  setScrollPosition(position);
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div id="app">
       <Header/>
      <div style={{display:"flex", flexDirection:"column", position:"relative",backgroundImage:`url(${BackgroundImage})`, justifyContent:"center", alignItems:'center', height: "100vh", backgroundPositionX:"center", backgroundPositionY:"bottom", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <img src={portfolioTitle} width={window.innerHeight < window.innerWidth ? window.innerWidth * 0.4 : window.innerWidth * 0.8}/>
        {/* <div className='shadow-portfolio' style={{backgroundColor:"#B0CFDD", padding:20, width:"50%", borderRadius:20, display:'flex', justifyContent:"center", maxWidth: 350}}>
          <Typography
            variant="h6"
            component="a"
            sx={{
              textAlign:"center",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#707070',
              textDecoration: 'none',
            }}
          >
            MON PORTFOLIO
          </Typography>
        </div> */}

        {scrollPosition === 0 && 
          <IconButton onClick={() => window.scrollTo({top : window.innerHeight, behavior: "smooth"})} size="medium" style={{position: "absolute", bottom: 20, left: window.innerWidth/2 -20, backgroundColor:"pink"}}>
            <KeyboardDoubleArrowDownIcon style={{ color:"white"}}/>
          </IconButton>
        }
      </div>
      <AboutMe />
      <Skills/>
      <Portfolio setDisplayImage={setDisplayImage}/>
      <Contact setDisplayImage={setDisplayImage}/>

      <Modal
      open={!!displayImage}
      onClose={()=> setDisplayImage(null)}
      
      >

        <div 
      style={{
        width: window.innerWidth, 
        height: window.innerHeight, 
        display:"flex", 
        justifyContent: "center", 
        alignItems: "center"
      }}
      onClick={()=> setDisplayImage(null)}
      > 
        <img
              key={displayImage?.title}
                // {...srcset(item.img, window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 : window.innerWidth *0.8)}
                src={displayImage?.img}
                width={window.innerHeight < window.innerWidth ? undefined : window.innerWidth *0.9}
                height={window.innerHeight < window.innerWidth ? window.innerHeight *0.9 : undefined}
                style={{border: "5px solid white"}}
                srcSet={displayImage?.img}
                alt={displayImage?.title}
                loading="lazy"
              />
        </div>
      </Modal>
      {window.scrollY >= window.innerHeight && 
        <IconButton size="medium" style={{position:"fixed", bottom:30, right:30, backgroundColor:"#6ac0d1AA", color:"white"}} onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>
          <KeyboardArrowUpIcon />
        </IconButton>
         } 
    </div>
  );
}

export default App;
