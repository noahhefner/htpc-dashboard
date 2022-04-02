import React, {useState} from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import Grid from '@mui/material/Grid';
import Tile from "../../components/Tile/Tile";
import styles from "./Home.module.css";

export default function Home () {

  const ReactGridLayout = WidthProvider(RGL);

  const apps = [
    {
      "title": "netflix",
      "image": "tile_images/netflix.jpg",
      "url": "https://www.netflix.com",
    },
    {
      "title": "hulu",
      "image": "tile_images/hulu.png",
      "url": "https://www.hulu.com",
    },
    {
      "title": "prime",
      "image": "tile_images/prime.png",
      "url": "https://www.amazon.com/Prime-Video/b?node=2676882011",
    },
    {
      "title": "apple_tv_plus",
      "image": "tile_images/apple_tv_plus.png",
      "url": "https://tv.apple.com",
    },
    {
      "title": "spotify",
      "image": "tile_images/spotify.jpeg",
      "url": "https://open.spotify.com",
    },
    {
      "title": "disney_plus",
      "image": "tile_images/disney_plus.jpeg",
      "url": "https://www.disneyplus.com",
    },
    {
      "title": "espn_plus",
      "image": "tile_images/espn_plus.jpeg",
      "url": "https://plus.espn.com",
    },
    {
      "title": "peacock",
      "image": "tile_images/peacock.jpg",
      "url": "https://www.peacocktv.com",
    },
    {
      "title": "youtube",
      "image": "tile_images/youtube.jpg",
      "url": "https://www.youtube.com",
    },
    {
      "title": "youtube_tv",
      "image": "tile_images/youtube_tv.png",
      "url": "https://tv.youtube.com",
    },
  ];

  const tile_width = 3;
  const tile_height = 12;
  const columns = 12;
  const row_height = 12;

  /*

  When editing layout:
    - disable pointer-events on images
    - disable user-select on images
    - set static to false on tile divs
  When not editing layout:
  - enable pointer-events on images
  - enable user-select on images
  - set static to true on tile divs

  .react-grid-item img {
    pointer-events: none;
    user-select: none;
  }
  */

  return (
    <div>
      <ReactGridLayout
        className="layout"
        cols={columns}
        rowHeight={row_height}
      >
        {
          apps.map((app, index) => {
            return (
              <div
                className={styles.box}
                key={app.title}
                data-grid={{ w: tile_width, h: tile_height, x: (index * tile_width) % columns, y: 0, static: true }}
              >
                <Grid item display="flex" alignItems="center" justifyContent="center" key={app.title}>
                  <Tile
                    imageString={app.image}
                    imageAlt={app.title}
                    url={app.url}
                  />
                </Grid>
              </div>
            )
          })
        }
      </ReactGridLayout>
    </div>
  );

}
