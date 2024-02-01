import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function WishItem({ wish, onCompletedChange }) {
  const [age, setAge] = useState(0);
  useEffect(() => {
    let ageinterval;
    if (wish.completed) {
      setAge(0);
      clearInterval(ageinterval);
    } else {
      ageinterval = setInterval(() => {
        setAge((currentAge) => currentAge + 1);
      }, 1000);
    }

    return () => clearInterval(ageinterval);
  }, [wish.completed]);
  return (
    <li
      key={wish.id}
      className={`
            wish-list__item
            ${wish.completed ? 'wish-list__item--done' : ''}
            ${age >= 5 && age < 10 ? 'wish-list__item--warn' : ''}
            ${age >= 10 ? 'wish-list__item--danger' : ''}
            `}
    >
      <input
        type="checkbox"
        checked={wish.completed}
        onChange={(e) => {
          onCompletedChange(e.target.checked);
        }}
      />
      {' '}
      {wish.text}
    </li>
  );
}

WishItem.propTypes = {
  wish: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onCompletedChange: PropTypes.func.isRequired,
};
