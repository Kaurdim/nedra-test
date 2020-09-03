import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.css';


const СolumnСard = (props) => {
  const { card, select, selected } = props;
  const handleSelect = () => {
    select(card);
  };

  return (
    <div
      className={cn(styles.columnСard, { [styles.selected]: selected })}
      onClick={handleSelect}
    >
      <div className={styles.cardContent}>{card.type}</div>
    </div>
  );
};

СolumnСard.propTypes = {
  card: PropTypes.object.isRequired,
  select: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};

СolumnСard.defaultProps = {
  selected: false,
};

export default СolumnСard;
