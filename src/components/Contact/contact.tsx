import { TextField, Typography } from '@mui/material';
import BackgroundImage from '../../assets/img/poisson1.jpg';
import ContactMeImage from '../../assets/img/contactme.png';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import cvImage from '../../assets/img/CV.png';
import { Dispatch, useEffect, useRef } from 'react';


export const Contact = (props: {
  setDisplayImage: Dispatch<any>;
}
  ) =>
{
  const {setDisplayImage} = props

 return (
  <div id='contact' style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
    <div style = {{height:"40vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
      <p style={{fontWeight: "bold", fontSize: 40, color:"white"}}>
            CONTACT
          </p>
    </div>
    <div style={{ width:"100%", display:"flex", flexDirection:"row", alignItems:"center",justifyContent:"space-evenly", backgroundColor:'white', flexWrap:"wrap"}}>
      <div style={{height: "50vh", width: "40vh", margin: 50}}>
        <img src={cvImage} height={window.innerHeight*0.5} alt="CV" onClick={() => setDisplayImage({img: cvImage, title:"CV"})}/>

      </div>
      <div style={{marginBottom:50, display:"flex", flexDirection:"column", alignItems:"center", maxWidth: "90%"}}>
        <img style={{justifySelf:"center"}} src={ContactMeImage} width={window.innerHeight > window.innerWidth ? window.innerWidth *0.4 : window.innerWidth * 0.2}/>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <PhoneIcon style={{color: 'rgb(245 207 212)'}}/>
          <p style={{marginLeft: 10}}>Téléphone : 
            <a style={{textDecoration:"none", color:'#8C685E'}} href="tel:0606487614"> 06 06 48 76 14</a>
          </p>
        </div>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <EmailIcon style={{color: 'rgb(245 207 212)'}}/>
          <p style={{marginLeft: 10}}>Adresse email : 
            <a style={{textDecoration:"none", color:'#8C685E'}} href="mailto:adele.ftnd@gmail.com" > adele.ftnd@gmail.com</a>
          </p>
        </div>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <RoomIcon style={{color: 'rgb(245 207 212)'}}/>
          <p style={{marginLeft: 10, wordWrap:"break-word"}}>Adresse : 500 route des Vallades 16410, FOUQUEBRUNE </p>
            
       
        </div>

        <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-evenly", marginTop:20, flexWrap:"wrap", alignItems:"center"}}>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} onClick={()=> window.open("https://www.linkedin.com/in/ad%C3%A8le-fontanaud-619410195/")}>
          <LinkedInIcon style={{color: 'rgb(245 207 212)', marginRight: 10}}/>
          <span style={{color:'#8C685E'}}>Adele Fontanaud</span>
        </div>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}} onClick={()=> window.open("https://www.instagram.com/monsteragatari/?hl=fr")}>
          <InstagramIcon style={{color: 'rgb(245 207 212)', marginRight: 10, marginLeft: 20}}/>
          <span style={{color:'#8C685E'}}>monsteragatari</span>
        </div>
        <div style={{display:"flex", flexDirection:"row",alignItems:"center"}} onClick={()=> window.open("https://www.instagram.com/fufu_et_momo/?hl=fr")}>
          <InstagramIcon style={{color: 'rgb(245 207 212)', marginRight: 10, marginLeft: 20}}/>
          <span style={{color:'#8C685E'}}>fufu_et_momo</span>
        </div>

        </div>
      </div>
    </div>
    <div style = {{height:"20vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
</div>
  </div>
 )
}