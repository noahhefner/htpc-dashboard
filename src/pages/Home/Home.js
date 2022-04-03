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

  const apps = [
    {
      "id": "netflix",
      "image": "tile_images/netflix.jpg",
      "url": "https://www.netflix.com",
    },
    {
      "id": "hulu",
      "image": "tile_images/hulu.png",
      "url": "https://www.hulu.com",
    },
    {
      "id": "prime",
      "image": "tile_images/prime.png",
      "url": "https://www.amazon.com/Prime-Video/b?node=2676882011",
    },
    {
      "id": "apple_tv_plus",
      "image": "tile_images/apple_tv_plus.png",
      "url": "https://tv.apple.com",
    },
    {
      "id": "spotify",
      "image": "tile_images/spotify.jpeg",
      "url": "https://open.spotify.com",
    },
    {
      "id": "disney_plus",
      "image": "tile_images/disney_plus.jpeg",
      "url": "https://www.disneyplus.com",
    },
    {
      "id": "espn_plus",
      "image": "tile_images/espn_plus.jpeg",
      "url": "https://plus.espn.com",
    },
    {
      "id": "peacock",
      "image": "tile_images/peacock.jpg",
      "url": "https://www.peacocktv.com",
    },
    {
      "id": "youtube",
      "image": "tile_images/youtube.jpg",
      "url": "https://www.youtube.com",
    },
    {
      "id": "youtube_tv",
      "image": "tile_images/youtube_tv.png",
      "url": "https://tv.youtube.com",
    },
  ];

  const [layout, setLayout] = useState(apps);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleSettingsOpen = () => setSettingsOpen(true);
  const handleSettingsClose = () => {
    setSettingsOpen(false);
  }

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
                <Grid item xs={3} display="flex" alignItems="center" justifyContent="center" key={app.id}>
                  <Tile
                    imageString={app.image}
                    imageAlt={app.id}
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
      <ModalSettings open={settingsOpen} onSettingsClose={handleSettingsClose} apps={apps}/>
    </Box>
  );
}
