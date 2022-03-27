import React from 'react';
import Box from '@mui/material/Box';
import styles from "./Tile.module.css";

export default function Tile (props) {
  return (
    <Box>
  	  <img
          src={props.imageString}
          alt={props.imageAlt}
      />
    </Box>
  );
}
