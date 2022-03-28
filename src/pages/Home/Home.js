// import styles from './Home.module.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Tile from '../../components/Tile/Tile';
import Clock from '../../components/Clock/Clock';

export default function Home () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} mt={2} mb={2}>
          <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
            <Clock/>
          </Grid>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/netflix.jpg" imageAlt="netflix" url="https://www.netflix.com/"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/hulu.png" imageAlt="hulu" url="https://www.hulu.com"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/prime.png" imageAlt="prime" url="https://www.amazon.com/Prime-Video/b?node=2676882011"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/spotify.jpeg" imageAlt="spotify" url="https://open.spotify.com"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/disney_plus.jpeg" imageAlt="disney_plus" url="https://www.disneyplus.com"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/espn_plus.jpeg" imageAlt="espn_plus" url="https://plus.espn.com/"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/apple_tv_plus.png" imageAlt="apple_tv_plus" url="https://tv.apple.com/"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/peacock.jpg" imageAlt="peacock" url="https://www.peacocktv.com/"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/youtube.jpg" imageAlt="youtube" url="https://www.youtube.com/"/>
        </Grid>
        <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
          <Tile imageString="tile_images/youtube_tv.png" imageAlt="youtube_tv" url="https://tv.youtube.com/"/>
        </Grid>
      </Grid>
    </Box>
  );
}
