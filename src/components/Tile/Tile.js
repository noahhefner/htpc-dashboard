import React from 'react';
import Box from '@mui/material/Box';

import styles from "./Tile.module.css";

export default function Tile (props) {
  return (
    <Box
      sx={{
        width: "80%",
        height: "90%",
        maxWidth: 400,
        maxHeight: 200,
      }}
    >
      <a href={props.url}>
        <img
            src={props.imageString}
            alt={props.imageAlt}
        />
      </a>
    </Box>
  );
}
