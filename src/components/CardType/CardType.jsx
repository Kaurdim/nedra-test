import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';


const CardType = ({ type, dragStart }) => {
  const notAllowDrop = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={styles.card}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={notAllowDrop}
    >
      <div className={styles.cardContent}>{type}</div>
    </div>
  );
};

CardType.propTypes = {
  type: PropTypes.string.isRequired,
  dragStart: PropTypes.func.isRequired,
};

export default CardType;
