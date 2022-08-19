import { TextField, Typography } from '@mui/material'
import BackgroundImage from '../../assets/img/poisson1.jpg'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Dispatch, useEffect, useRef } from 'react';
export let contactSectionRef: any;

export const Contact = (props: {
  setSectionPosition:Dispatch<number>
}
  ) =>
{
  const {setSectionPosition} = props
  const contactSectionRef= useRef(null)
useEffect(() => {
  if (!contactSectionRef) return;
  setSectionPosition((contactSectionRef?.current as any)?.offsetTop)
}, [contactSectionRef]);
 return (
  <div ref={contactSectionRef} style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
    <div style = {{height:"25vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
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
            CONTACT
          </Typography>
    </div>
    <div style={{ width:"100%", display:"flex", flexDirection:"row", alignItems:"center",justifyContent:"space-evenly", backgroundColor:'white', flexWrap:"wrap"}}>
      <div style={{height: "50vh", width: "35vh", backgroundColor:"red", margin: 50}}>CV</div>
      <div style={{marginBottom:50}}>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <PhoneIcon/>
          <p style={{marginLeft: 10}}>Téléphone : 
            <a href="tel:0606487614"> 06 06 48 76 14</a>
          </p>
        </div>
        <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
          <EmailIcon/>
          <p style={{marginLeft: 10}}>Adresse email : 
            <a href="mailto:adele.ftnd@gmail.com" > adele.ftnd@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
    <div style = {{height:"25vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
</div>
  </div>
 )
}