import React from "react";
import {
  Fab,
  Grid,
  InputBase,
} from "@mui/material";
import Send from "@mui/icons-material/Send";

export default function ChatInput(props) {



  return (
    <Grid container style={{ padding: "20px" }}>
      <Grid item xs={11}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Insira aqui a sua mensagem"
          fullWidth
          autoFocus={true}
          multiline
          rows={2}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              props.onClick()
            }
          }}
          onChangeCapture={(e) => props.onChange(e.target.value)}
          value={props.value}
          style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}
        />
      </Grid>
      <Grid xs={1} align="right" onClick={() => props.onClick()} >
        <Fab color="rgba(29, 185, 84, 0.25)" aria-label="add">
          <Send />
        </Fab>
      </Grid>
    </Grid>
  );
}
