import React, { useContext } from 'react';

import { StoreContext } from '../Store';
import Canvas from '../Сanvas/Canvas';
import Panel from '../Panel/Panel';
import styles from './styles.css';


const Dashboard = () => {
  const {
    cardTypes,
    addCardOnCanvas,
    cards,
    setDraggableType,
    draggableType,
  } = useContext(StoreContext);

  const dragStart = (type) => (event) => {
    setDraggableType(type);
    event.dataTransfer.setData('type', type);
  };

  const dragEnd = () => {
    draggableType && setDraggableType('');
  };

  const drop = (event) => {
    const type = event.dataTransfer.getData('type');
    addCardOnCanvas(type);
    dragEnd();
  };

  return (
    <div className={styles.dashboard}>
      <Canvas
        cardTypes={cardTypes}
        cards={cards}
        draggableType={draggableType}
        drop={drop}
      />
      <Panel cardTypes={cardTypes} dragStart={dragStart} dragEnd={dragEnd} />
    </div>
  );
};

export default Dashboard;
