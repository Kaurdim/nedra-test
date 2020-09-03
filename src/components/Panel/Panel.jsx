import React from 'react';
import PropTypes from 'prop-types';

import CardType from '../CardType/CardType';
import styles from './styles.css';


const Panel = (props) => {
  const { cardTypes, dragStart, dragEnd } = props;

  const renderCardTypes = () => cardTypes.map((type) => (
    <CardType
      key={type}
      type={type}
      dragStart={dragStart(type)}
      dragEnd={dragEnd}
    />
  ));

  return (
    <section className={styles.panel}>
      {renderCardTypes()}
    </section>
  );
};

Panel.propTypes = {
  cardTypes: PropTypes.array.isRequired,
  dragStart: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
};

export default Panel;
