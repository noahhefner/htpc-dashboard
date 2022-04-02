import React from 'react';
import Box from '@mui/material/Box';

import styles from "./Tile.module.css";

export default function Tile (props) {
  return (
    <Box
      sx={{
        width: 400,
        height: 200,
      }}
      alignItems="center"
      justifyContent="center"
    >
      <a href={props.url}>
        <img
          className={styles.tile_img}
          src={props.imageString}
          alt={props.imageAlt}
        />
      </a>
    </Box>
  );
}
