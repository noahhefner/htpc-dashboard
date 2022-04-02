import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styles from './ModalSettings.module.css';

export default function ModalSettings (props) {
  return (
    <Modal
      open={props.open}
      onClose={props.onSettingsClose}
    >
      <Box className={styles.settings_box}>
      </Box>
    </Modal>
  );
};
