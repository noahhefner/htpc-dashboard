import './App.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Tile from './components/Tile/Tile';

function App () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Tile imageString="tile_images/netflix.jpg" imageAlt="netflix"/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
