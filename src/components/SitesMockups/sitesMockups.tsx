import { useState } from "react"
import BackgroundImage from '../../assets/img/poisson.webp'
import FBWebsite from '../../assets/img/pro/Fradin-bretton-website.webp'
import IEPWebsite from '../../assets/img/pro/iep-website.webp'
import MBP from '../../assets/img/pro/mbp16.webp'

import { Button } from "@mui/material"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "./style.css"
export const SitesMockups = () =>
{

  const [swiperRef, setSwiperRef] = useState<any>(null);
  const slideTo = (index: number) => {
    if (!swiperRef) return;
    swiperRef.slideTo(index);
    setSelectedSwiper(index);
  };
  const [selectedSwiper, setSelectedSwiper] = useState<number>(0);
  
  const Mockup = (props: {name: string, url: string, imagePath: string}) =>  {
    const {name, url, imagePath} = props;
return(
  <div className="mockup-computer" style={{
    height: "85.5%",
    overflowY: "scroll",
    width: "77%",
    marginTop: "2.5%",
    display:"flex",
    justifyContent:"center",
  }}>
  <div style={{
  }}>
    
                  <img
                    alt={name}
                    src={imagePath}
                    style={{
                      width: "100%",
                    }}
                    />
                    </div>
                    </div>
);
  }
 return (
  <div
        style={{
          paddingBottom: "40vh",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundAttachment: "fixed",
          backgroundPositionX: "center",
          backgroundPositionY: "0%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "#8C685E",
              textAlign: "center",
            }}
          >
            ♡ Sites internet ♡
          </p>
          
        </div>
        <Swiper
          onSlideChange={(e: any) => setSelectedSwiper(e.activeIndex)}
          navigation={true}
          modules={[Navigation, Pagination]}
          slidesPerView={"auto"}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          color="pink"
          spaceBetween={30}
          onSwiper={setSwiperRef}
          style={{backgroundColor:"white", paddingBottom: 30}}
        >
          <SwiperSlide virtualIndex={1} style={{position: "relative"}}>
            <div style={{paddingInline: window.innerHeight < window.innerWidth ? 300 : 50, aspectRatio:"16/9", display: "flex", justifyContent:"center",
          backgroundImage: `url(${MBP})`,
          backgroundAttachment: "fixed",
          backgroundPositionX: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
            }}>
              <Mockup name="Site web IEP" url="https://www.i-e-p.fr/" imagePath={IEPWebsite}/>
            </div>
            <div style={{
marginTop: 10, width:"100%", display:"flex", justifyContent: "center"
            }}>
            <Button
      variant="outlined"
      aria-label="IEP"
      style={{ color: "pink", borderColor: "#8C685E", marginInline: 5}}
      onClick={() => {
        window.open("https://www.i-e-p.fr/");
      }}
    >
    IEP
    </Button>
    </div>
          </SwiperSlide>
          <SwiperSlide virtualIndex={2}>
          <div style={{
            paddingInline: window.innerHeight < window.innerWidth ? 300 : 50, 
            aspectRatio:"16/9", 
            display: "flex", 
            justifyContent:"center",

backgroundImage: `url(${MBP})`,
backgroundAttachment: "fixed",
backgroundPositionX: "center",
backgroundRepeat: "no-repeat",
backgroundSize: "contain",
  }}>              <Mockup name="Site web Fradin Bretton" url="https://www.fradin-bretton.fr/" imagePath={FBWebsite}/>
            </div>
            <div style={{
marginTop: 10, width:"100%", display:"flex", justifyContent: "center"
            }}>
            <Button
      variant="outlined"
      aria-label="Fradin Bretton"
      style={{ color: "pink", borderColor: "#8C685E", marginInline: 5}}
      onClick={() => {
        window.open("https://www.fradin-bretton.fr/");
      }}
    >
    Fradin Bretton
    </Button>
    </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
 )
}