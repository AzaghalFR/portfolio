import Interest1 from "../../assets/img/Interest1.png"
import Interest2 from "../../assets/img/Interest2.png"
import InterestTitle from "../../assets/img/interetTitre.png"
import BackgroundImage from '../../assets/img/poisson2.jpg'

export const Skills = () =>
{
 return (
  <div style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"100vh"}}>
    <div style = {{height:"40vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
   
          
    </div>
     
    <div style={{backgroundColor: "rgb(245 207 212)", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", minHeight:'100vh', paddingTop: 20}}>
   
    <p style={{fontWeight: "bold",textAlign:"center", fontSize: 30, color:"white", height:"30vh", display:"flex", justifyContent:"center", alignItems:'center', margin: 0}}>
   Toutes mes aptitudes professionnelles</p>

      
      <div style={{position:"relative", width:"80%", display:"flex", justifyContent: "space-evenly", flexDirection:"row", flexWrap:"wrap"}}>
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

      <div style={{display:'flex', alignItems:'center', flexDirection:'column', border:"5px solid #FFFFFFAA",borderRadius:10, marginBlock: 60,  width:"80%", position:"relative", paddingBlock:20}}>
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