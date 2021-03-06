import React, {useState} from 'react';

import styles from './Home.module.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SettingsIcon from '@mui/icons-material/Settings';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

import Tile from '../../components/Tile/Tile';
import Clock from '../../components/Clock/Clock';
import ModalSettings from '../../components/ModalSettings/ModalSettings';

export default function Home () {

  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen = () => setSettingsOpen(true);
  const handleSettingsClose = () => setSettingsOpen(false);

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid container item xs={12} mt={4} mb={4}>
          <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
            <Clock/>
          </Grid>
        </Grid>
        <Grid container item xs={12} rowSpacing={8} columnSpacing={3}>
          {
            apps.map((app) => {
              return (
                <Grid item xs={3} display="flex" alignItems="center" justifyContent="center" key={app.title}>
                  <Tile
                    imageString={app.image}
                    imageAlt={app.title}
                    url={app.url}
                  />
                </Grid>
              );
            })
          }
        </Grid>
      </Grid>
      <ButtonUnstyled className={styles.settings_button} onClick={handleSettingsOpen}>
        <SettingsIcon fontSize="large"/>
      </ButtonUnstyled>
      <ModalSettings open={settingsOpen} onSettingsClose={handleSettingsClose}/>
    </Box>
  );
}
