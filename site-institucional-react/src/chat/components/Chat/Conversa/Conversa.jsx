import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'



function Conversa(props) {
    return (
        <>
            <ListItem alignItems="flex-start" style={{ display: "flex", flexDirection: "row" }} id={props.id} onClick={() => props.onClick()} button>
                <ListItemText sx={{m:1}}
                    primary={props.nome}
                    secondary={props.utlimaMensagem}
                />
            </ListItem>
            <Divider />
        </>
    )
}

export default Conversa
