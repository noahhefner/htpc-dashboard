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

  var apps = [
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
  const handleSettingsClose = (newOrder) => {
    setLayout(newOrder);
    setSettingsOpen(false);
  }

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // styles we need to apply on draggables
    ...draggableStyle
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: "100%"
  });

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    // sort the list of apps to match displayed list
    const items = reorder(
      apps,
      result.source.index,
      result.destination.index
    );
    setApps(items);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid container item xs={12} mt={4} mb={4}>
          <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
            <Clock/>
          </Grid>
        </Grid>
      </Grid>
      <Box className={styles.settings_box}>
        <Grid container display="flex" alignItems="center" justifyContent="center">
          <Grid container item xs={6}>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div 
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {apps.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                          >
                            {item.id}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
