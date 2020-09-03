import React from 'react';
import PropTypes from 'prop-types';

import CardsColumn from '../CardsColumn/CardsColumn';
import styles from './styles.css';


const Canvas = (props) => {
  const {
    cardTypes, cards, drop, draggableType,
  } = props;

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const selecetColumnCards = (type) => cards.filter((card) => card.type === type);

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
    <section
      className={styles.canvas}
      onDrop={drop}
      onDragOver={allowDrop}
    >
      {renderColumns()}
    </section>
  );
};

Canvas.propTypes = {
  cards: PropTypes.array.isRequired,
  cardTypes: PropTypes.array.isRequired,
  drop: PropTypes.func.isRequired,
  draggableType: PropTypes.string.isRequired,
};

export default Canvas;
