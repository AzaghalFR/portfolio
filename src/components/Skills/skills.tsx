import { Typography } from '@mui/material'
import BackgroundImage from '../../assets/img/poisson1.jpg'

export const Skills = () =>
{
 return (
  <div style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"100vh"}}>
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
            COMPETENCES
          </Typography>
    </div>
    <div style={{backgroundColor: "white", width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{position:"relative", marginBlock:50, width:"80%", display:"flex", justifyContent: "center"}}>
        <p style={{backgroundColor: "#F7F2CA",  borderRadius:15, padding: 15, color:"grey", position:"absolute", top:-35, left: "-10%", alignSelf:"flex-start", width: 100, textAlign:"center"}}>Infographie</p>
        <div style={{ backgroundColor:"#E5F6CD", padding: 20, borderRadius:10, width:"100%", alignSelf:"center", overflowWrap:"break-word"}}>
          <p>Photoshop/illustrator</p>
          <p>Suite Adobe</p>
          <p>Microsoft Office</p>
          <p> Créativité </p>
        </div>
      </div>
      <div style={{position:"relative", marginBlock:50, width:"80%", display:"flex", justifyContent: "center"}}>
        <p style={{backgroundColor: "#F7F2CA",  borderRadius:15, padding: 15, color:"grey", position:"absolute", top:-35, left: "-10%", alignSelf:"flex-start", width: 100, textAlign:"center"}}>Social</p>
        <div style={{ backgroundColor:"#E5F6CD", padding: 20, borderRadius:10, width:"100%", alignSelf:"center", overflowWrap:"break-word"}}>
          <p>Travail d'équipe</p>
          <p>Polyvalence</p>
          <p>discipline</p>
          <p>Organisation</p>
        </div>
      </div>
    </div>
  </div>
 )
}