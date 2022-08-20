import { Dispatch, LegacyRef, useEffect, useRef } from 'react'
import  ThreshImage from '../../assets/img/noemie.jpg'

export const AboutMe = (props: {
  setSectionPosition:Dispatch<number>
}
  ) =>
{
  const { setSectionPosition} = props
  const aboutSectionRef= useRef(null)
useEffect(() => {
  if (!aboutSectionRef) return;
  setSectionPosition((aboutSectionRef?.current as any)?.offsetTop)
}, [aboutSectionRef]);
 return (
   <div style= {{ display:"flex", justifyContent:"space-evenly", alignItems:"center", flexWrap:"wrap", flexDirection:"row", minHeight:"100vh"}} ref={aboutSectionRef}>
      <img 
      style={{marginTop: 40}}
      src={ThreshImage} 
      width={window.innerHeight < window.innerWidth ? window.innerWidth * 0.3 : window.innerWidth *0.8} 
      />

    <div style={{position:"relative", marginBlock:40, padding: 20, maxWidth: window.innerHeight < window.innerWidth ? window.innerWidth * 0.3 : window.innerWidth *0.8, display:"flex", justifyContent: "center", flexDirection:'column', alignItems:"center"}}>
      <h3 >Pour mieux me connaitre</h3>
      <div style={{alignSelf:"center", overflowWrap:"break-word", fontSize: window.innerHeight > window.innerWidth ? 17 : 20
    }}>
        <p>Bienvenue dans mon portfolio!</p>
        <p>Je m’appelle Adèle Fontanaud et je suis titulaire d'un DUT Métiers du Multimédia et de l'Internet (MMI) effectué à Angoulême.</p>
        <p>Après avoir passé une année en tant qu’animatrice en service civique au sein d’un EHPAD, je souhaite dorénavant trouver un travail dans lequel je pourrais m'épanouir.</p>
        <p>Pendant ma formation je me suis spécialisée dans le parcours de la communication. Cela m’a permis d'enrichir mes compétences et mes connaissance dans de nombreux domaines. Pendans cette formation et grâce à sa pluridisciplinarité j’ai aussi utilisé differents logiciels tel que Photoshop et Illustrator ou encore des logiciels d’animation et de montage.</p>
        <p>Ce que j’aime le plus c’est pouvoir exprimer ma créativité à travers mes différents projets.</p>
      </div>
    </div>
  </div>
 )
}



