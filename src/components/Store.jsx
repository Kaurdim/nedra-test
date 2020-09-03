import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export const StoreContext = React.createContext();

export const CARD_TYPES = ['1', '2', '3', '4', '5'];

function Store(props) {
  const { children } = props;

  const [cards, setCards] = useState([]);
  const [cardTypes] = useState(CARD_TYPES);
  const [cardForRemove, setCardForRemove] = useState(null);
  const [draggableType, setDraggableType] = useState('');

  const addCardOnCanvas = (type) => {
    const id = cards.length ? cards[cards.length - 1].id + 1 : 0;
    const card = {
      id,
      type,
    };

    setCards([...cards, card]);
  };

  const selectCardForRemove = (card) => {
    setCardForRemove(card);
  };

  const removeCard = (event) => {
    const keyCodes = [8, 46];
    const canRemove = !!cardForRemove && keyCodes.includes(event.keyCode);

    if (!canRemove) {
      return;
    }

    setCards(cards.filter((card) => card.id !== cardForRemove.id));
    setCardForRemove(null);
  };

  useEffect(() => {
    window.addEventListener('keydown', removeCard);
    return () => {
      window.removeEventListener('keydown', removeCard);
    };
  });

  return (
    <StoreContext.Provider value={{
      cards,
      cardForRemove,
      cardTypes,
      draggableType,
      addCardOnCanvas,
      selectCardForRemove,
      setDraggableType,
    }}
    >
      {children}
    </StoreContext.Provider>
  );
}

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
