import { Button, ImageList, ImageListItem, Typography } from "@mui/material";
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

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${Totoro}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${Totoro}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,    
  };
}

  const [displayMore, setDisplayMore] = useState<boolean>(false);
 return (
    <div ref={portfolioSectionRef} style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
      <div style = {{height:"40vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
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
      <ImageList
      sx={{  width: "80%" }}
      variant="quilted"
      cols={4}
    >
      {itemData.map((item, idx) => (
        <ImageListItem key={idx} cols={item.cols || 1} rows={item.rows || 1}>
          <img
          key={item.title}
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            onClick={()=> console.log(item)}
          />
        </ImageListItem>
      ))}
    </ImageList>
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
      </div>
   </div>
 )
}

const itemData = [
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Burger',
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Camera',
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Basketball',
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Fern',
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Tomato basil',
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Sea star',
  },
  {
    img: '../../assets/img/Totoro.jpg',
    title: 'Bike',
    cols: 2,
  },
];