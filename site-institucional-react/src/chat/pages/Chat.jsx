import { useState } from "react";
import { Grid } from '@mui/material';
import ContainerChat from "../components/Chat/ContainerChat/ContainerChat";
import SideBarChat from "../components/Chat/SideBarChat/SideBarChat";
import "../reset.css"
import Menu from '../../components/menu/Menu_logado'
function Chat() {

  const [isActive, setIsActive] = useState(false)
  
  const [id, setId] = useState("")

  const pull_data = (data) => {
    setId(data)
  }


  return (
    <>
    <body style={{overflowY: "hidden"}}>
    <Menu/>
      <Grid container style={{display: "flex", flexDirection: "row", height: "100vh"}} >
       <SideBarChat func={pull_data}  onClick={()=>{
        setIsActive(isActive ? false : true);
         }}/>
       
       {isActive? <ContainerChat id={id} /> : <></>}
      </Grid>

    </body>
    
    </>
  );
}

export default Chat;