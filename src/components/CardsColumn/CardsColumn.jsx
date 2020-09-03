import React, { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { StoreContext } from '../Store';
import Сard from '../Сard/Сard';
import styles from './styles.css';


const CardsColumn = (props) => {
  const { selectCardForRemove, cardForRemove } = useContext(StoreContext);
  const { title, isAllowDrop, cards } = props;


  const renderCards = () => cards.map((card) => {
    const selected = Boolean(cardForRemove && card.id === cardForRemove.id);

    return (
      <Сard
        key={`${card.id}_${card.type}`}
        card={card}
        select={selectCardForRemove}
        selected={selected}
      />
    );
  });

  return (
    <div className={styles.column}>
      <header className={styles.columnHeader}>
        {title}
      </header>
      <section className={styles.columnContent}>
        {renderCards()}
        <div className={cn(styles.cardPalcejolder, { [styles.active]: isAllowDrop })} />
      </section>
    </div>
  );
};

CardsColumn.propTypes = {
  cards: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  isAllowDrop: PropTypes.bool,
};

CardsColumn.defaultProps = {
  isAllowDrop: false,
};

export default CardsColumn;
