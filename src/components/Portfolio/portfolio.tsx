import { Button, Typography } from "@mui/material";
import { Dispatch, useEffect, useRef, useState } from "react";
import "./style.css";
import  Totoro from '../../assets/img/Totoro.jpg'
import  ThreshImage from '../../assets/img/Thresh.png'
import BackgroundImage from '../../assets/img/poisson2.jpg'
export let portfolioSectionRef: any;

export const Portfolio =(props: {
  setSectionPosition:Dispatch<number>
}
  ) =>
{
  const { setSectionPosition} = props
  const portfolioSectionRef= useRef(null)
useEffect(() => {
  if (!portfolioSectionRef) return;
  setSectionPosition((portfolioSectionRef?.current as any)?.offsetTop)
}, [portfolioSectionRef]);
  const [displayMore, setDisplayMore] = useState<boolean>(false);
 return (
    <div ref={portfolioSectionRef} style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <div style = {{height:"25vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
    <Typography
            variant="h4"
            component="a"
            sx={{
              textAlign:"center",
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000000',
              textDecoration: 'none',
            }}
          >
            MES CREATIONS
          </Typography>
    </div>
    
      <div className="portfolio-main-container">
      <div style={{position:"relative", marginBlock:50, width:"80%", display:"flex", justifyContent: "center"}}>
        <p style={{backgroundColor: "#ECBBC3",  borderRadius:15, padding: 15, color:"grey", position:"absolute", top:-35, left: "-10%", alignSelf:"flex-start", width: 100, textAlign:"center"}}>Scolarité</p>
        <div style={{ backgroundColor:"#C9E9EF", padding: 20, borderRadius:10, width:"100%", alignSelf:"center", display:"flex", overflow:"auto"}}>
          <img src={Totoro} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>

        </div>
      </div>
      <div style={{position:"relative", marginBlock:50, width:"80%", display:"flex", justifyContent: "center"}}>
        <p style={{backgroundColor: "#ECBBC3",  borderRadius:15, padding: 15, color:"grey", position:"absolute", top:-35, left: "-10%", alignSelf:"flex-start", width: 100, textAlign:"center"}}>Art</p>
        <div style={{ backgroundColor:"#C9E9EF", padding: 20, borderRadius:10, width:"100%", alignSelf:"center", display:"flex", overflow:"auto"}}>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>
          <img src={ThreshImage} className="image-container" width={140} height={200} style={{marginInline: 20}}/>

        </div>
      </div>
      </div>
   </div>
 )
}