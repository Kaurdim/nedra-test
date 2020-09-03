import React, { useContext } from 'react';

import { StoreContext } from '../../Store';
import Canvas from '../Сanvas/Canvas';
import Panel from '../Panel/Panel';
import styles from './styles.css';


const Dashboard = () => {
  const {
    cardTypes, addCardOnCanvas, cards, setDraggableType, draggableType,
  } = useContext(StoreContext);

  const dragStart = (type) => (event) => {
    setDraggableType(type);
    event.dataTransfer.setData('type', type);
  };

  const dragEnd = () => {
    draggableType && setDraggableType('');
  };

  return (
    <div className={styles.dashboard} onDrop={dragEnd} onDragEnd={dragEnd}>
      <section className={styles.canvas}>
        <Canvas
          cardTypes={cardTypes}
          cards={cards}
          addCardOnCanvas={addCardOnCanvas}
          draggableType={draggableType}
        />
      </section>
      <section className={styles.panel}>
        <Panel cardTypes={cardTypes} dragStart={dragStart} />
      </section>
    </div>
  );
};

export default Dashboard;
