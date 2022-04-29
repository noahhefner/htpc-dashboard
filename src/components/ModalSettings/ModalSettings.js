import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import styles from './ModalSettings.module.css';

export default function ModalSettings (props) {

  const [apps, setApps] = useState(props.apps);

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
    <Modal
      open={props.open}
      onClose={props.onSettingsClose(apps)}
    >
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
    </Modal>
  );
};
