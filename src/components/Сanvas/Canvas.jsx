import React from 'react';
import PropTypes from 'prop-types';

import CardsColumn from '../CardsColumn/CardsColumn';
import styles from './styles.css';


const Canvas = (props) => {
  const {
    cardTypes, cards, addCardOnCanvas, draggableType,
  } = props;


  const drop = (event) => {
    const type = event.dataTransfer.getData('type');
    addCardOnCanvas(type);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const selecetColumnCards = (type) => cards.filter((c) => c.type === type);

  const renderColumns = () => cardTypes.map((type) => {
    const title = `Type ${type}`;
    const columnCards = selecetColumnCards(type);
    const isAllowDrop = type === draggableType;

    return (
      <CardsColumn
        key={title}
        type={type}
        title={title}
        cards={columnCards}
        isAllowDrop={isAllowDrop}
      />
    );
  });

  return (
    <div
      className={styles.canvas}
      onDrop={drop}
      onDragOver={allowDrop}
    >
      {renderColumns()}
    </div>
  );
};

Canvas.propTypes = {
  cards: PropTypes.array.isRequired,
  cardTypes: PropTypes.array.isRequired,
  addCardOnCanvas: PropTypes.func.isRequired,
  draggableType: PropTypes.string.isRequired,
};

export default Canvas;
