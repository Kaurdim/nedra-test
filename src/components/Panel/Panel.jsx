import React from 'react';
import PropTypes from 'prop-types';

import CardType from '../CardType/CardType';
import styles from './styles.css';


const Panel = (props) => {
  const { cardTypes, dragStart } = props;

  const renderCardTypes = () => cardTypes.map((type) => (
    <CardType
      key={type}
      type={type}
      dragStart={dragStart(type)}
    />
  ));

  return (
    <div className={styles.panel}>
      {renderCardTypes()}
    </div>
  );
};

Panel.propTypes = {
  cardTypes: PropTypes.array.isRequired,
  dragStart: PropTypes.func.isRequired,
};

export default Panel;
