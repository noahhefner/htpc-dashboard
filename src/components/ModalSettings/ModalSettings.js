// React
import React from 'react';
// Material UI Components
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
// Custom CSS
import styles from './ModalSettings.module.css';

export default function ModalSettings (props) {
  
  return (
    <Modal
      open={props.open}
      onClose={props.onSettingsClose}
    >
      <Box className={styles.settings_box}>
        Edit Mode
        <Switch checked={props.isEditing} onChange={props.onEditSwitchFlipped}/>
      </Box>
    </Modal>
  );

};
