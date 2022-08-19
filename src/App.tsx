import React, { useRef, useState } from 'react';
import './App.css';
import { Header } from './components/Header/header';
import { AboutMe } from './components/AboutMe/aboutme';
import { Portfolio } from './components/Portfolio/portfolio';
import { Skills } from './components/Skills/skills';
import { createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import BackgroundImage from './assets/img/baniere.jpg'
import { Contact } from './components/Contact/contact';


function App() {
const [aboutSectionPosition, setAboutSectionPosition] = useState<number>(0);
const [portfolioSectionPosition, setPortfolioSectionPosition] = useState<number>(0);
const [contactSectionPosition, setContactSectionPosition] = useState<number>(0);

console.log(aboutSectionPosition, portfolioSectionPosition, contactSectionPosition);


  return (
    <div id="app">
      <Header aboutSectionPosition={aboutSectionPosition} portfolioSectionPosition={portfolioSectionPosition} contactSectionPosition={contactSectionPosition}/>
      <div style={{display:"flex", backgroundImage:`url(${BackgroundImage})`, justifyContent:"center", alignItems:'center', height: "100vh", backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"10%", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div style={{backgroundColor:"#B0CFDD", padding:20, width:"50%", borderRadius:20, display:'flex', justifyContent:"center"}}>
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
      </div>
      <AboutMe setSectionPosition={setAboutSectionPosition}/>
      <Skills/>
      <Portfolio setSectionPosition={setPortfolioSectionPosition}/>
      <Contact setSectionPosition={setContactSectionPosition}/>
    </div>
  );
}

export default App;
