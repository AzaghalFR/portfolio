import { Typography } from '@mui/material'
import BackgroundImage from '../../assets/img/poisson1.jpg'
import InterestTitle from "../../assets/img/centre_interet.png"
import Interest from "../../assets/img/interets.png"
import Interest1 from "../../assets/img/Interest1.png"
import Interest2 from "../../assets/img/Interest2.png"
import { flexbox } from '@mui/system'

export const Skills = () =>
{
 return (
  <div style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"100vh"}}>
    <div style = {{height:"40vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
    <p style={{fontWeight: "bold", fontSize: 40, color:"white"}}>
            COMPETENCES
          </p>
          
    </div>
     
    <div style={{backgroundColor: "rgb(245 207 212)", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", minHeight:'100vh'}}>
  
  <p 
  style= {{ 
    border:"5px solid #FFFFFFAA",
    borderRadius:10, 
 
    margin: 20,
    width:"80%",
    position:"relative",
    marginBottom: 40,

    justifyContent:"space-evenly", 
    alignItems:"center", 
    flexWrap:"wrap", 
    flexDirection:"row", 
    display: "flex",
    fontSize:22, 
    maxWidth: window.innerHeight>window.innerWidth ? window.innerWidth * 0.8 : window.innerWidth * 0.5, 
    textAlign:"center",
    marginTop: 40,
    padding: 20,
    }}
  >
    Durant mes nombreuses expériences professionnelles, j'ai pu en apprendre d'avantage sur moi et en tirer de nombreuses compétences :</p>
      
      <div style={{position:"relative", marginBlock:30, width:"80%", display:"flex", justifyContent: "space-evenly", flexDirection:"row", flexWrap:"wrap"}}>
        <div className='shadow-portfolio' style={{ backgroundColor:"#FFFFFF77",borderRadius:10, width: 250, alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"3px solid white", paddingBlock: 15, fontSize: 20,  fontWeight: "bold" , top:0, width: '100%', textAlign:"center", margin:0}}>Outils</p>
          <div style= {{padding:20}}>
          <p>Photoshop </p>
          <p>Illustrator</p>
          <p>InDesign</p>
          <p>AdobeXD</p>
          <p>Microsoft Office</p>
          
          
          </div>
        </div>
       
        <div className='shadow-portfolio' style={{ backgroundColor:"#FFFFFFAA",borderRadius:10, width: 250, alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
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

        <div className='shadow-portfolio' style={{ backgroundColor:"#FFFFFF77",borderRadius:10, width: 250, alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"3px solid white", paddingBlock: 15, fontSize: 20, fontWeight: "bold" , top:0, width: '100%', textAlign:"center", margin:0}}> Savoir-faire </p>
          <div style= {{padding:20}}>
          <p></p>
          <p>Gestions de conflits</p>
          <p>Gestion des reasaux sociaux</p>
          <p>Illustrer des projets</p>
        
          </div>
        </div>
      </div>

      <div style={{display:'flex', alignItems:'center', flexDirection:'column', border:"5px solid #FFFFFFAA",borderRadius:10,   margin: 20,  width:"80%", position:"relative", marginBottom: 40, paddingBlock:20}}>
        <img src={InterestTitle} 
        width={ window.innerHeight < window.innerWidth ? window.innerWidth * 0.4 : window.innerWidth *0.6} 
        style={{position: 'absolute', top: window.innerHeight < window.innerWidth ? (-(window.innerWidth * 265 / 1423) /4) : (-(window.innerWidth * 265 / 1423) /3)}}/>
          <div style={{display:'flex', flexWrap:"wrap",  justifyContent:'center', flexDirection:'row', width:"100%"}}>
          <img src={Interest1}
         width={ window.innerHeight < window.innerWidth ? window.innerWidth * 0.3 : window.innerWidth *0.8} 
          /> 
          <img src={Interest2}
           width={ window.innerHeight < window.innerWidth ? window.innerWidth * 0.3 : window.innerWidth *0.8} 
          /> 
      </div>
      </div>
    </div>
  </div>
 )
}