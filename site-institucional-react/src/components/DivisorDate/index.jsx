import { ListItemText, Box } from "@mui/material";
import React from "react";
import "./style.css";

export default function DivisorDate(props) {
  
  if(props.data === "00/00/0000"){
    return(
      <></>
    )
  }
  return (
    <Box className="divisor">
        <Box className="data_centralizada">
            <Box className="linha"></Box>
            <Box className="data">
                <ListItemText primary={props.data}/>
                </Box>
            <Box className="linha"></Box>
        </Box>
    </Box>
  );
}
