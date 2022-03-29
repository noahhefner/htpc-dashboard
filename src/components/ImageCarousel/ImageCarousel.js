import React from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'

import styles from "./ImageCarousel.module.css";

export default function ImageCarousel (props) {

  return (
    <Carousel>
      {
        props.photos.map( (photo, i) => {
          return (
            <Box
              sx={{
                width: "80%",
                height: "90%",
                maxWidth: 400,
                maxHeight: 200,
              }}
            >
              <img
                  src={photo}
                  alt={"carousel_image_" + i}
              />
            </Box>
          );
        })
      }
    </Carousel>
  );
}
