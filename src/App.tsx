import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import BackgroundImage from './assets/img/baniere.jpg';
import { AboutMe } from './components/AboutMe/aboutme';
import { Contact } from './components/Contact/contact';
import { Header } from './components/Header/header';
import { Portfolio } from './components/Portfolio/portfolio';
import { Skills } from './components/Skills/skills';


function App() {
const [aboutSectionPosition, setAboutSectionPosition] = useState<number>(0);
const [portfolioSectionPosition, setPortfolioSectionPosition] = useState<number>(0);
const [contactSectionPosition, setContactSectionPosition] = useState<number>(0);

const [scrollPosition, setScrollPosition] = useState<number>(0);

const handleScroll = () => {
  const position = window.scrollY;
  setScrollPosition(position);
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
console.log(window.navigator.platform);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div id="app">
      {((scrollPosition >= window.innerHeight && window.navigator.platform.toLowerCase().includes('win')) || !window.navigator.platform.toLowerCase().includes('win')) && <Header aboutSectionPosition={aboutSectionPosition} portfolioSectionPosition={portfolioSectionPosition} contactSectionPosition={contactSectionPosition}/>}
      <div style={{display:"flex", flexDirection:"column", position:"relative",backgroundImage:`url(${BackgroundImage})`, justifyContent:"center", alignItems:'center', height: "100vh", backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"bottom", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className='shadow-portfolio' style={{backgroundColor:"#B0CFDD", padding:20, width:"50%", borderRadius:20, display:'flex', justifyContent:"center", maxWidth: 350}}>
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
        </div>
        {window.navigator.platform.toLowerCase().includes('win') && <div style={{display:'flex', flexDirection:'row', position: 'absolute', bottom: '10%', flexWrap:"wrap"}}>

        <div className='shadow-portfolio' style={{margin: 20, backgroundColor:"#B0CFDD", padding:20, width:150, borderRadius:20, display:'flex', justifyContent:"center", maxWidth: 350}}>
            Oui

        </div>
        <div className='shadow-portfolio' style={{margin: 20, backgroundColor:"#B0CFDD", padding:20,  width:150,  borderRadius:20, display:'flex', justifyContent:"center", maxWidth: 350}}>
            Oui

        </div>
        <div className='shadow-portfolio' style={{margin: 20, backgroundColor:"#B0CFDD", padding:20,  width:150,  borderRadius:20, display:'flex', justifyContent:"center", maxWidth: 350}}>
            Oui

        </div>
        </div>}
      </div>
      <AboutMe setSectionPosition={setAboutSectionPosition}/>
      <Skills/>
      <Portfolio setSectionPosition={setPortfolioSectionPosition}/>
      <Contact setSectionPosition={setContactSectionPosition}/>
    </div>
  );
}

export default App;
