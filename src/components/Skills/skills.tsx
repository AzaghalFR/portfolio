import { Typography } from '@mui/material'
import BackgroundImage from '../../assets/img/poisson1.jpg'

export const Skills = () =>
{
 return (
  <div style={{backgroundImage:`url(${BackgroundImage})`, backgroundAttachment:"fixed", backgroundPositionX:"center", backgroundPositionY:"20%", backgroundRepeat:"no-repeat", backgroundSize:"cover", minHeight:"100vh"}}>
    <div style = {{height:"40vh", display:"flex", justifyContent:"center", alignItems:'center'}}>
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
    <div style={{backgroundColor: "lightcoral", width:"100%", display:"flex", flexDirection:"column", alignItems:"center", minHeight:'100vh'}}>
      <div style={{position:"relative", marginBlock:50, width:"80%", display:"flex", justifyContent: "space-evenly", flexDirection:"row", flexWrap:"wrap"}}>
        <div style={{ backgroundColor:"#FFFFFFAA",borderRadius:10, width: 250, alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"1px solid grey", paddingBlock: 15,  top:0, width: '100%', textAlign:"center", margin:0}}>Infographie</p>
          <div style= {{padding:20}}>
          <p>Photoshop/illustrator</p>
          <p>Suite Adobe</p>
          <p>Microsoft Office</p>
          <p> Créativité </p>
          </div>
        </div>
        <div style={{ backgroundColor:"#FFFFFFAA",borderRadius:10, width: 250, alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"1px solid grey", paddingBlock: 15,  top:0, width: '100%', textAlign:"center", margin:0}}>Infographie</p>
          <div style= {{padding:20}}>
          <p>Photoshop/illustrator</p>
          <p>Suite Adobe</p>
          <p>Microsoft Office</p>
          <p> Créativité </p>
          <p> Créativité </p>
          <p> Créativité </p>
          <p> Créativité </p>
          <p> Créativité </p>

          </div>
        </div>
        <div style={{ backgroundColor:"#FFFFFFAA",borderRadius:10, width: 250, alignSelf:"center", overflowWrap:"break-word", margin: 20}}>
          <p style={{borderBottom:"1px solid grey", paddingBlock: 15,  top:0, width: '100%', textAlign:"center", margin:0}}>Infographie</p>
          <div style= {{padding:20}}>
          <p>Photoshop/illustrator</p>
          <p>Suite Adobe</p>
          <p>Microsoft Office</p>
          <p> Créativité </p>
          </div>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', backgroundColor:"#4444FFAA",borderRadius:10,  alignSelf:"center",  margin: 20, height: 400, width:"80%", position:"relative"}}>
        <h2 style={{position: 'absolute', top: -35}}>Mes centres d'interets</h2>
        {/* <div style={{width: "80%", height: "100%"}}></div> */}
      </div>
    </div>
  </div>
 )
}