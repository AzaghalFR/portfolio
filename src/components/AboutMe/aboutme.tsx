import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button } from '@mui/material'
import { useState } from 'react'
import AboutMeTitle from '../../assets/img/aboutmeTitle.png'
import AboutMePhoto from '../../assets/img/aboutmephoto.png'
import frise from '../../assets/img/frise.png'
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
        <p>Je m’appelle Adèle Fontanaud et je suis titulaire d'un DUT Métiers du Multimédia et de l'Internet (MMI) effectué à Angoulême. </p>
        <p>Au milieu de ma formation je me suis spécialisée dans le domaine de la communication visuelle. Cela m’a permis d'enrichir mes compétences et mes connaissances dans de nombreux domaines. Pendant cette formation et grâce à sa pluridisciplinarité j’ai aussi utilisé différents logiciels tels que Photoshop et Illustrator ou encore des logiciels d’animation et de montage.
</p>
        <p>Après avoir passé une année en tant qu’animatrice en service civique au sein d’un EHPAD, je souhaite dorénavant trouver un travail dans lequel je pourrai m'épanouir.</p>
        <p>Ce que j’aime le plus c’est pouvoir exprimer ma créativité à travers différents projets, autant professionnels que personnels. </p>

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
      
      {displayMore &&<div style={{position:"relative", marginBlock:30, width:"100%", display:"flex", justifyContent: "space-evenly", alignItems:"flex-start", flexDirection:"row", flexWrap:"wrap"}}>
        <div className='shadow-portfolio' style={{  border : "2px solid #8C685E" , width: window.innerHeight > window.innerWidth ? "90%" :"20%", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"3px solid white", paddingBlock: 15, fontSize: 20,  fontWeight: "bold" , top:0, width: '100%', textAlign:"center", margin:0}}>DUT MMI</p>
          <div style= {{padding:20}}> 
          <p>Pour ma dernière année à l'IUT je me suis spécialisée dans l'option Communication et Presse Numérique que propose ma formation.</p>
          <p>Dans le cadre de celle-ci j'ai eu l'opportunité être chargée de communication digitale stagiaire pour Le Potager D'à Côté pour une durée de deux mois.
</p>
          <p>J'ai aussi effectué des missions en tant que graphiste stagiaire chez Atelier Graphic en 2019 pendant une durée de trois semaines.</p>
          
          
          </div>
        </div>
       
        <div className='shadow-portfolio' style={{ border : "2px solid #8C685E", width: window.innerHeight > window.innerWidth ? "90%" :"20%", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"3px solid white", fontSize: 20, fontWeight: "bold", paddingBlock: 15,  top:0, width: '100%', textAlign:"center", margin:0}}>Service Civique</p>
          <div style= {{padding:20}}>
          <p> J'ai éfféctué un service civique Dans un EHPAD pour une durée de 8 mois</p>
          <p> En charge de personnes âgées et/ou en situation de handicap, afin de m'assurer de leur bien-être et de les aider dans leurs quotidiens.</p>
          <p> J'ai aussi pu être en charge de différentes animations, et de l'accueil des familles. </p>
          <p> Cela m'a permis d'améliorer mon travail d'équipe et mon aisance auprès de nombreux publics. </p>

          </div>
        </div>

        <div className='shadow-portfolio' style={{  border : "2px solid #8C685E", width: window.innerHeight > window.innerWidth ? "90%" :"20%", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"3px solid white", paddingBlock: 15, fontSize: 20, fontWeight: "bold" , top:0, width: '100%', textAlign:"center", margin:0}}> Garde d'enfants </p>
          <div style= {{padding:20}}>
          <p>Après mon service civique j'ai encore découvert un autre domaine d'activité.</p>
          <p>J'ai acquis de nombreuses compétences en m'occupant de différents enfants pendant maintenant bientôt une année.</p>
          <p>Aux côtés des enfants, il faut savoir gérer les situations de stress, les situations conflictuelles et les imprévues.</p>
          <p>J'ai beaucoup aimé les voir s'épanouir à mes côtés et créer du lien avec eux, cela m'a entre autres permis de gagner confiance en moi.</p>
        
          </div>
        </div>
        <div className='shadow-portfolio' style={{ border : "2px solid #8C685E", width: window.innerHeight > window.innerWidth ? "90%" :"20%", overflowWrap:"break-word", margin: 20}}>
          
          <p style={{borderBottom:"3px solid white", paddingBlock: 15, fontSize: 20, fontWeight: "bold" , top:0, width: '100%', textAlign:"center", margin:0}}> Et maintenant ? </p>
          <div style= {{padding:20}}>
          <p>À l'heure actuelle, malgré les bons moments que je passe aux côtés des enfants, j'aimerais trouver un travail qui met en action toutes mes compétences et mes centres d'intérêt.</p>
          <p>Un travail dans lequel je pourrais m'épanouir et découvrir de nouvelles perspectives d'avenir. </p>
          <p>C'est pour cela que je postule aujourd'hui à des offres d'emploi, qui peuvent me correspondre.</p>

        
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



