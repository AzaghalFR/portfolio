import { Button, IconButton, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import BackgroundImage2 from "./assets/img/poisson.webp";
import portfolioTitle from "./assets/img/portfolio.webp";
import { AboutMe } from "./components/AboutMe/aboutme";
import { Contact } from "./components/Contact/contact";
import { Header } from "./components/Header/header";
import { Portfolio } from "./components/Portfolio/portfolio";
import { Skills } from "./components/Skills/skills";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// portfolio1
import Banniere from "./assets/img/banniere.webp";
import DIYSImage from "./assets/img/perso/DIYS.webp";
import Luca from "./assets/img/perso/Luca.webp";
import Moi from "./assets/img/perso/Moi.webp";
import Nayeon from "./assets/img/perso/Nayeon.webp";
import Rousse from "./assets/img/perso/Rousse.webp";
import TheOffice from "./assets/img/perso/TheOffice.webp";
import ThreshImage from "./assets/img/perso/Thresh.webp";
import Totoro from "./assets/img/perso/Totoro.webp";
import Bibliotheque from "./assets/img/perso/bibliotheque.webp";
import Fille from "./assets/img/perso/fille.webp";
import Fille2 from "./assets/img/perso/fille2.webp";
import Hwasa from "./assets/img/perso/hwasa.webp";
import Jenie from "./assets/img/perso/jenie.webp";

// portfolio2
import CreartistesNoel from "./assets/img/pro/Cre_Noel.webp";
import CreartistesImg from "./assets/img/pro/Cre_artiste.webp";
import CreartistesHoraires from "./assets/img/pro/Cre_horaire.webp";
import CreartistesInsta from "./assets/img/pro/Cre_insta.webp";
import StudioCarte2 from "./assets/img/pro/Studio_Carte_visite2.webp";
import StudioSignature from "./assets/img/pro/Studio_Signature.webp";
import StudioHoraires from "./assets/img/pro/Studio_horaire.webp";
import StudioMariage from "./assets/img/pro/Studio_mariage.webp";
import CreartistesMarathon from "./assets/img/pro/cre_marathon.webp";
import Kakemono from "./assets/img/pro/kakemono.webp";
import Carte from "./assets/img/pro/map.webp";
import IEP from "./assets/img/pro/plaquette-iep.webp";
import StudioCarte1 from "./assets/img/pro/studio_carte_visite.webp";
import StudioPrestations from "./assets/img/pro/studio_prestations.webp";
import Ville from "./assets/img/pro/villeconnectee.webp";
import { SitesMockups } from "./components/SitesMockups/sitesMockups";

export interface IImage {
  img: string;
  title: string;
  cols: number;
  rows: number;
}

export interface ILinks {
  title: string;
  path: string;
}

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

  const [swiperRef, setSwiperRef] = useState<any>(null);
  const slideTo = (index: number) => {
    if (!swiperRef) return;
    swiperRef.slideTo(index);
    setSelectedSwiper(index);
  };
  const [selectedSwiper, setSelectedSwiper] = useState<number>(0);

  return (
    <div id="app">
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundImage: `url(${Banniere})`,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundPositionX: "center",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          alt="Portfolio"
          src={portfolioTitle}
          width={
            window.innerHeight < window.innerWidth
              ? window.innerWidth * 0.4
              : window.innerWidth * 0.8
          }
        />

        {scrollPosition === 0 && (
          <IconButton
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            aria-label="scroll to content"
            size="medium"
            style={{
              position: "absolute",
              bottom: 20,
              left: window.innerWidth / 2 - 20,
              backgroundColor: "pink",
            }}
          >
            <KeyboardDoubleArrowDownIcon style={{ color: "white" }} />
          </IconButton>
        )}
      </div>
      <AboutMe />
      <Skills />
      <div
       id='portfolio' 
        style={{
          paddingBottom: "40vh",
          backgroundImage: `url(${BackgroundImage2})`,
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
            padding: 10,
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
            ♡ Visuels de communication ♡
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant={selectedSwiper == 0 ? "outlined" : "text"}
              style={{
                color: "pink",
                borderColor: "#8C685E",
                minHeight: 0,
                marginInline: 5,
                lineHeight: 0,
                textTransform: "none",
                fontSize: selectedSwiper == 0 ? 25 : 15,
                fontWeight: selectedSwiper == 0 ? "bold" : "normal",
                flexWrap: "wrap",
              }}
              onClick={() => slideTo(0)}
            >
              <p>VINCI Energies</p>
            </Button>
            <Button
              variant={selectedSwiper == 1 ? "outlined" : "text"}
              style={{
                color: "pink",
                borderColor: "#8C685E",
                textTransform: "none",
                minHeight: 0,
                marginInline: 5,
                lineHeight: 0,
                fontSize: selectedSwiper == 1 ? 25 : 15,
                fontWeight: selectedSwiper == 1 ? "bold" : "normal",
                flexWrap: "wrap",
              }}
              onClick={() => slideTo(1)}
            >
              <p>Galerie Cré'Artistes</p>
            </Button>
            <Button
              variant={selectedSwiper == 2 ? "outlined" : "text"}
              style={{
                color: "pink",
                borderColor: "#8C685E",
                textTransform: "none",
                minHeight: 0,
                marginInline: 5,
                lineHeight: 0,
                fontSize: selectedSwiper == 2 ? 25 : 15,
                fontWeight: selectedSwiper == 2 ? "bold" : "normal",
              }}
              onClick={() => slideTo(2)}
            >
              <p>Studio photo Jarnac</p>
            </Button>
          </div>
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
          style={{backgroundColor:"white", height: "auto"}}
        >
          <SwiperSlide virtualIndex={1}>
            <Portfolio
              itemData={portfolioVinci}
              setDisplayImage={setDisplayImage}
              itemLimit={5}
              linksData={websiteVinci}
            />
          </SwiperSlide>
          <SwiperSlide virtualIndex={2}>
            <Portfolio
              itemData={portfolioCreartiste}
              setDisplayImage={setDisplayImage}
              itemLimit={window.innerHeight < window.innerWidth ? 5 : 2}
            />
          </SwiperSlide>
          <SwiperSlide virtualIndex={3}>
            <Portfolio
              itemData={portfolioStudio}
              setDisplayImage={setDisplayImage}
              itemLimit={window.innerHeight < window.innerWidth ? 5 : 3}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      
        <SitesMockups
          // title="♡ Quelques-unes de mes créations ♡"
          // itemData={portfolioPerso}
          // setDisplayImage={setDisplayImage}
          // itemLimit={5}
        />
      <div
        style={{
          backgroundImage: `url(${BackgroundImage2})`,
          backgroundAttachment: "fixed",
          backgroundPositionX: "center",
          backgroundPositionY: "0%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingBottom: "40vh",
        }}
      >
        <Portfolio
          title="♡ Quelques-unes de mes créations ♡"
          itemData={portfolioPerso}
          setDisplayImage={setDisplayImage}
          itemLimit={5}
        />
      </div>
      <Contact setDisplayImage={setDisplayImage} />

      <Modal open={!!displayImage} onClose={() => setDisplayImage(null)}>
        <div
          style={{
            width: window.innerWidth,
            height: window.innerHeight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setDisplayImage(null)}
        >
          <img
            key={displayImage?.title}
            // {...srcset(item.img, window.innerHeight < window.innerWidth ? window.innerWidth * 0.2 : window.innerWidth *0.8)}
            src={displayImage?.img}
            width={
              window.innerHeight < window.innerWidth
                ? undefined
                : window.innerWidth * 0.8
            }
            height={
              window.innerHeight < window.innerWidth
                ? window.innerHeight * 0.8
                : undefined
            }
            style={{ border: "5px solid white" }}
            srcSet={displayImage?.img}
            alt={displayImage?.title}
            loading="lazy"
          />
        </div>
      </Modal>
      {window.scrollY >= window.innerHeight && (
        <IconButton
          size="medium"
          aria-label="scroll to top"
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            backgroundColor: "#6ac0d1AA",
            color: "white",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </div>
  );
}

export default App;

const portfolioPerso: IImage[] = [
  {
    img: Nayeon,
    title: "Nayeon",
    cols: 2,
    rows: 2,
  },

  {
    img: DIYSImage,
    title: "DIYS",
    cols: 1,
    rows: 1,
  },
  {
    img: Banniere,
    title: "Banniere",
    cols: 1,
    rows: 1,
  },
  {
    img: Moi,
    title: "IMG",
    cols: 1,
    rows: 1,
  },

  {
    img: Bibliotheque,
    title: "Bibliotheque",
    cols: 2,
    rows: 1,
  },
  {
    img: Jenie,
    title: "Jennie",
    cols: 1,
    rows: 2,
  },
  {
    img: Fille2,
    title: "IMG",
    cols: 1,
    rows: 1,
  },
  {
    img: Fille,
    title: "IMG",
    cols: 1,
    rows: 1,
  },
  {
    img: TheOffice,
    title: "TheOffice",
    cols: 1,
    rows: 1,
  },
  {
    img: Rousse,
    title: "IMG",
    cols: 1,
    rows: 2,
  },
  {
    img: Luca,
    title: "Luca",
    cols: 1,
    rows: 2,
  },

  {
    img: Hwasa,
    title: "Hwasa",
    cols: 1,
    rows: 1,
  },
  {
    img: Totoro,
    title: "Totoro",
    cols: 2,
    rows: 2,
  },
  {
    img: ThreshImage,
    title: "Thresh",
    cols: 1,
    rows: 1,
  },
];

const portfolioVinci: IImage[] = [
 
  {
    img: IEP,
    title: "Plaquette IEP",
    cols: 2,
    rows: 1,
  },  
  {
    img: Carte,
    title: "Carte Charent'elec",
    cols: 1,
    rows: 1,
  },
  {
    img: Kakemono,
    title: "Kakemonos",
    cols: 1,
    rows: 1,
  },
  {
    img: Ville,
    title: "Ville connectée",
    cols: 2,
    rows: 1,
  },
];
const websiteVinci: ILinks[] = [
 
  {
    title: "Site web IEP",
    path: "https://www.i-e-p.fr/"
  },  
  {
    title: "Site web Fradin Bretton",
    path: "https://www.fradin-bretton.fr/"
  },  
];

const portfolioStudio: IImage[] = [
 
  {
    img: StudioCarte1,
    title: "Carte de visite studio 1",
    cols: 2,
    rows: 1,
  },  {
    img: StudioCarte2,
    title: "Carte de visite studio 2",
    cols: 1,
    rows: 1,
  },
  {
    img: StudioPrestations,
    title: "Prestations studio",
    cols: 1,
    rows: 1,
  },
  {
    img: StudioHoraires,
    title: "Horaires studio",
    cols: 1,
    rows: 1,
  },
  {
    img: StudioSignature,
    title: "Signature studio",
    cols: 1,
    rows: 1,
  },

  {
    img: StudioMariage,
    title: "Studio photo mariage",
    cols: 3,
    rows: 2,
  }
  ,
];

const portfolioCreartiste: IImage[] = [
  {
    img: CreartistesMarathon,
    title: "Marathon creartistes",
    cols: 1,
    rows: 2,
  },
  {
    img: CreartistesNoel,
    title: "Noel creartistes",
    cols: 1,
    rows: 1,
  },
  {
    img: CreartistesHoraires,
    title: "Horaires creartistes",
    cols: 1,
    rows: 1,
  },
  {
    img: CreartistesInsta,
    title: "Instagram creartistes",
    cols: 1,
    rows: 1,
  },
  {
    img: CreartistesImg,
    title: "Image creartistes",
    cols: 1,
    rows: 1,
  },
];
