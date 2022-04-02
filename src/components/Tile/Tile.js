// React
import React from 'react';
// Material UI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// Custom CSS
import styles from "./Tile.module.css";

export default function Tile (props) {

  if (props.isEditing) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 600,
          maxHeight: 300,
        }}
      >
        <img
          className={styles.tile_img_editing}
          src={props.imageString}
          alt={props.imageAlt}
        />
      </Box>
    );
  } else {
    return (
      <Button
        href={props.url}
        sx={{
          width: "100%",
          height: "100%",
          maxWidth: 600,
          maxHeight: 300,
          p:2,
        }}>
        <img
          className={styles.tile_img}
          src={props.imageString}
          alt={props.imageAlt}
        />
      </Button>
    );
  }

}
