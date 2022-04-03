// React
import React, { useState, useEffect } from 'react';
// Material UI Components
import SettingsIcon from '@mui/icons-material/Settings';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Switch from '@mui/material/Switch';
// react-grid-layout
import { WidthProvider, Responsive } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
// Custom Components
import Tile from "../../components/Tile/Tile";
import Clock from '../../components/Clock/Clock';
import ModalSettings from '../../components/ModalSettings/ModalSettings';
// Custom CSS
import styles from "./Home.module.css";

const getFromLS = (key) => {
  console.log("retrieving layout")
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

const saveToLS = (key, value) => {
  console.log("saving layout")
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

const savedLayout = getFromLS("layouts") || {};

export default function Home () {

  const ResponsiveReactGridLayout = WidthProvider(Responsive);

  const [isEditing, setIsEditing] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [layouts, setLayouts] = useState(JSON.parse(JSON.stringify(savedLayout)));

  const onLayoutChange = (layout, layouts) => {
    saveToLS("layouts", layouts);
  }

  const tile_width = 3;
  const tile_height = 12;
  const columns = 12;
  const row_height = 12;

  const handleSettingsOpen = () => setSettingsOpen(true);

  const handleSettingsClose = () => setSettingsOpen(false);

  const handleEditSwitchFlipped = (e) => {
    setIsEditing(e.target.checked);
  }

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
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={row_height}
      autoSize={false}
      isResizable={false}
      layouts={layouts}
      onLayoutChange={(layout, layouts) => onLayoutChange(layout, layouts)}
    >
      <div
        key="header"
        data-grid={{ w: 12, h: tile_height / 2, x: 0, y: 0, static: true }}
      >
        <Clock/>
        <Switch checked={isEditing} onChange={handleEditSwitchFlipped}/>
        <ButtonUnstyled className={styles.settings_button} onClick={handleSettingsOpen}>
          <SettingsIcon fontSize="large"/>
        </ButtonUnstyled>
        <ModalSettings
          open={settingsOpen}
          onSettingsClose={handleSettingsClose}
          isEditing={isEditing}
          onEditSwitchFlipped={handleEditSwitchFlipped}
        />
      </div>
      {
        apps.map((app, index) => {
          return (
            <div
              key={app.title}
              data-grid={{ w: tile_width, h: tile_height, x: (index * tile_width) % columns, y: tile_height / 2, static: !isEditing }}
            >
              <Tile
                imageString={app.image}
                imageAlt={app.title}
                url={app.url}
                isEditing={isEditing}
              />
            </div>
          )
        })
      }
    </ResponsiveReactGridLayout>
  );

}
