import { Button, ImageList, ImageListItem, Typography } from "@mui/material";
import { Dispatch, useEffect, useRef, useState } from "react";
import "./style.css";
import  Totoro from '../../assets/img/Tototo.jpg'
import  ThreshImage from '../../assets/img/Thresh.jpg'
import  DIYSImage from '../../assets/img/DIYS.jpg'
import  Hwasa from '../../assets/img/hwasa.jpg'
import  Fille from '../../assets/img/fille.jpg'
import  Jenie from '../../assets/img/jenie.jpg'
import  Rousse from '../../assets/img/Rousse.jpg'
import  Banniere from '../../assets/img/banniere.jpg'

import  Fille2 from '../../assets/img/fille2.jpg'
import  Nayeon from '../../assets/img/Nayeon.jpg'

import  Luca from '../../assets/img/luca.jpg'

import  Bibliotheque from '../../assets/img/bibliotheque.jpg'

import  TheOffice from '../../assets/img/theOffice.jpg'
import  Moi from '../../assets/img/Moi.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


import BackgroundImage from '../../assets/img/poisson2.jpg'

interface IImage {img: string, title: string, cols: number, rows: number};

export const Portfolio =(props: {
  setDisplayImage: Dispatch<IImage>
}
  ) =>
{
  const { setDisplayImage} = props
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
// const [displayImage, setDisplayImage] = useState<IImage | null>(null);

  const [displayMore, setDisplayMore] = useState<boolean>(false);
 return (
    <div id="portfolio" style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
     
     <div style = {{height:"40vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
     
    </div>
    

      <div className="portfolio-main-container">
      <div style = {{height:"30vh", display:"flex", justifyContent:"center", alignItems:'center'}}>       
  
  <p style={{fontWeight: "bold", fontSize: 30, color:"#8C685E"}}>
  ♡ Quelques-unes de mes créations ♡ </p>
          
          </div>
      <ImageList
      sx={{  width: "70%" }}
      variant={window.innerHeight > window.innerWidth ? "masonry" : "quilted"}
      cols={window.innerHeight > window.innerWidth ? 1 : 3}
      gap={20}
      rowHeight= {window.innerHeight < window.innerWidth ? window.innerWidth * 0.2  : undefined }
      
    >



      {itemData.map((item, idx) => ( 
        
          (idx < 7 || displayMore) &&  
          <ImageListItem key={idx} cols={item.cols || 1} rows={item.rows || 1}>
            <img
            key={item.title}
              {...srcset(item.img, window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 : window.innerWidth *0.8, item.rows, item.cols)}
              // src={
              //   `${Totoro}
              //   ?w=${window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 * item.cols : window.innerWidth *0.8 * item.cols }
              //   &h=${window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 * item.rows : window.innerWidth *0.8 * item.rows }
              //   &fit=crop&auto=format`
              // }
              // srcSet={
              //   `${Totoro}
              //   ?w=${window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 * item.cols : window.innerWidth *0.8 * item.cols}
              //   &h=${window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 * item.rows : window.innerWidth *0.8 * item.rows }
              //   &fit=crop&auto=format&dpr=2 2x`
              // }
              width={window.innerHeight < window.innerWidth ? undefined: window.innerWidth *0.8}
              alt={item.title}
              loading="lazy"
              onClick={()=> {setDisplayImage(item); console.log(`${item.img}
              ?w=${window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 * item.cols : window.innerWidth *0.8 * item.cols }
              &h=${window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 * item.rows : window.innerWidth *0.8 * item.rows }
              &fit=crop&auto=format`);
              }}
            />

            
          </ImageListItem>
        
      
      ))}
    </ImageList>
    {/* {!!displayImage && 
    <div 
    style={{
      width: window.innerWidth, 
      height: window.innerHeight, 
      position: "absolute", 
      backgroundColor:"pink", 
      zIndex:10, 
      top:0, 
      left:0, 
      display:"flex", 
      justifyContent: "center", 
      alignItems: "center"
    }}
    onClick={()=> setDisplayImage(null)}
    > 
      <img
            key={displayImage.title}
              // {...srcset(item.img, window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 : window.innerWidth *0.8)}
              src={displayImage.img}
              width={window.innerHeight < window.innerWidth ? undefined : window.innerWidth *0.8}
              height={window.innerHeight < window.innerWidth ? window.innerHeight *0.8 : undefined}
              
              srcSet={displayImage.img}
              alt={displayImage.title}
              loading="lazy"
            />
        </div>} */}
      {/* <div style={{position:"relative", marginBlock:50, width:"80%", display:"flex", justifyContent: "center"}}>
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
      </div> */}
      <Button variant="outlined" 
        style={{color:"pink", borderColor:"#8C685E", marginBottom:20}} 
        endIcon={displayMore ? <ExpandLessIcon style={{color:"pink"}} /> : <ExpandMoreIcon style={{color:"pink"}} />} 
        onClick={() => setDisplayMore(!displayMore)}>
          {!displayMore ? "Voir plus" : "Voir moins"}
      </Button>
      </div>
   </div>
 )
}


const itemData : IImage[] = [
  
  {
    img: Nayeon,
    title: 'Totoro',
    cols: 2,
    rows:2
  },
  
  {
    img: Moi,
    title: 'Totoro',
    cols: 1,
    rows:2
  },
  {
    img: Fille,
    title: 'Totoro',
    cols: 1,
    rows:2
  },
  {
    img: Bibliotheque,
    title: 'Totoro',
    cols: 2,
    rows:1
  },
  {
    img: Banniere,
    title: 'Totoro',
    cols: 2,
    rows:1
  },
  {
    img: Jenie,
    title: 'Totoro',
    cols: 2,
    rows:2
  },
  {
    img: Rousse,
    title: 'Totoro',
    cols: 1,
    rows:2
  },
  {
    img: Luca,
    title: 'Totoro',
    cols: 1,
    rows:2
  },
  {
    img: TheOffice,
    title: 'Totoro',
    cols: 2,
    rows:2
  },
  {
    img: DIYSImage,
    title: 'Totoro',
    cols: 1,
    rows:1
  },
  {
    img: Totoro,
    title: 'Totoro',
    cols: 2,
    rows:2
  },
  {
    img: ThreshImage,
    title: 'Totoro',
    cols: 1,
    rows:1
  },
];