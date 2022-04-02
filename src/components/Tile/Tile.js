import React from 'react';
import Box from '@mui/material/Box';

import styles from "./Tile.module.css";

export default function Tile (props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: 400,
        maxHeight: 200,
      }}
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
