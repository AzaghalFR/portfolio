import { Dispatch, LegacyRef, useEffect, useRef, useState } from 'react'
import  AboutMePhoto from '../../assets/img/aboutmephoto.png'
import AboutMeTitle from '../../assets/img/aboutme.png'
import frise from '../../assets/img/frise.png'
import { Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export const AboutMe = (

  ) =>
{
  const [displayMore, setDisplayMore] = useState<boolean>(false);
  
 return (
   <div id="aboutme" style= {{ display:"flex", justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap", flexDirection:"row", minHeight:"100vh"}}>
      <img 
      style={{marginBlock: 40}}
      src={AboutMePhoto} 
      width={window.innerHeight < window.innerWidth ? window.innerWidth * 0.4 : window.innerWidth *0.8} 
      />

    <div style={{position:"relative", marginBlock:40, padding: 20, maxWidth: window.innerHeight < window.innerWidth ? window.innerWidth * 0.3 : window.innerWidth *0.8, display:"flex", justifyContent: "center", flexDirection:'column', alignItems:"center"}}>
      <img src={AboutMeTitle} width={ window.innerHeight < window.innerWidth ? window.innerWidth * 0.3 : window.innerWidth *0.6}/>

      <div style={{alignSelf:"center", overflowWrap:"break-word", fontSize: window.innerHeight > window.innerWidth ? 17 : 20
    }}>
        <p>Bienvenue dans mon portfolio!</p>
        <p>Je m’appelle Adèle Fontanaud et je suis titulaire d'un DUT Métiers du Multimédia et de l'Internet (MMI) effectué à Angoulême.</p>
        <p>Pendant ma formation je me suis spécialisée dans le parcours de la communication. Cela m’a permis d'enrichir mes compétences et mes connaissance dans de nombreux domaines. Pendans cette formation et grâce à sa pluridisciplinarité j’ai aussi utilisé differents logiciels tel que Photoshop et Illustrator ou encore des logiciels d’animation et de montage.</p>
        <p>Après avoir passé une année en tant qu’animatrice en service civique au sein d’un EHPAD, je souhaite dorénavant trouver un travail dans lequel je pourrais m'épanouir.</p>
        <p>Ce que j’aime le plus c’est pouvoir exprimer ma créativité à travers différents projets, autant professionnel que personnel.</p>

      </div>
    </div>

    {/* Frise chronologique */}
    <div>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", width: window.innerWidth *0.8}}>
    <p style={{margin: 0, marginTop: 20, fontSize: 20, width:"100%"}}>Pour en savoir un peu plus sur mes expériences professionelles :</p>
    <img 
      style={{marginBottom: 40}}
      src={frise} 
      width={window.innerHeight < window.innerWidth ? window.innerWidth * 0.6 : window.innerWidth *0.8} 
      />
      
      {displayMore &&<div style={{position:"relative", marginBlock:30, width:"100%", display:"flex", justifyContent: "space-evenly", flexDirection:"row", flexWrap:"wrap"}}>
        <div className='shadow-portfolio' style={{  border : "2px solid #8C685E" , width: window.innerHeight > window.innerWidth ? "90%" :"20%", alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"3px solid white", paddingBlock: 15, fontSize: 20,  fontWeight: "bold" , top:0, width: '100%', textAlign:"center", margin:0}}>DUT MMI</p>
          <div style= {{padding:20}}>
          <p>Option Communication et presse et numérique</p>
          <p>Chargée de communication digitale stagiaire pour Le Potager D'à Cotè</p>
          <p>Graphiste stagiaire pour Atelier Graphic (2019)</p>
          
          
          </div>
        </div>
       
        <div className='shadow-portfolio' style={{ border : "2px solid #8C685E", width: window.innerHeight > window.innerWidth ? "90%" :"20%", alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"3px solid white", fontSize: 20, fontWeight: "bold", paddingBlock: 15,  top:0, width: '100%', textAlign:"center", margin:0}}>Savoir-êtres</p>
          <div style= {{padding:20}}>
          <p> Organisation </p>
          <p> Patience </p>
          <p> Polyvalence </p>
          <p> Travail d'équipe </p>
          <p> Créativité </p>
          <p> Etre a l'écoute </p>

          </div>
        </div>

        <div className='shadow-portfolio' style={{  border : "2px solid #8C685E", width: window.innerHeight > window.innerWidth ? "90%" :"20%", alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"3px solid white", paddingBlock: 15, fontSize: 20, fontWeight: "bold" , top:0, width: '100%', textAlign:"center", margin:0}}> Savoir-faire </p>
          <div style= {{padding:20}}>
          <p></p>
          <p>Gestions de conflits</p>
          <p>Gestion des reasaux sociaux</p>
          <p>Illustrer des projets</p>
        
          </div>
        </div>
        <div className='shadow-portfolio' style={{ border : "2px solid #8C685E", width: window.innerHeight > window.innerWidth ? "90%" :"20%", alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          
          <p style={{borderBottom:"3px solid white", paddingBlock: 15, fontSize: 20, fontWeight: "bold" , top:0, width: '100%', textAlign:"center", margin:0}}> Service Civique</p>
          <div style= {{padding:20}}>
          <p></p>
          <p>Gestions de conflits</p>
          <p>Gestion des reasaux sociaux</p>
          <p>Illustrer des projets</p>
        
          </div>
        </div>
      </div>}
      <Button variant="outlined" 
        style={{color:"pink", borderColor:"#8C685E", marginBottom:20}} 
        endIcon={displayMore ? <ExpandLessIcon style={{color:"pink"}} /> : <ExpandMoreIcon style={{color:"pink"}} />} 
        onClick={() => setDisplayMore(!displayMore)}>
          {!displayMore ? "Voir plus" : "Voir moins"}
      </Button>
      </div>
    </div>
  </div>
 )
}



