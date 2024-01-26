import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function WishInput({ onNewWish }) {
  const [newWish, setNewWish] = useState('');

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && newWish !== '') {
      const newWishObject = {
        id: Date.now(),
        text: newWish,
        completed: false,
      };
      // Insert a new Wish object in the wishes array of the father component
      onNewWish(newWishObject);

      // Reset the input field after pressing Enter
      setNewWish('');
    }
  };

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish:</legend>
      <input
        type="text"
        placeholder="My new wish"
        onChange={(e) => setNewWish(e.target.value)}
        value={newWish}
        onKeyUp={handleKeyUp}
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func.isRequired,
};
