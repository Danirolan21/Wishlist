import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

export default function WishList({ wishes, setwishes }) {
  return (
    <ul className="wish-list">
      {wishes
        .map((wish, i) => (
          <WishItem
            wish={wish}
            onCompletedChange={(checked) => {
              const tempWishes = [...wishes];
              tempWishes[i].completed = checked;
              setwishes(tempWishes);
            }}
          />
        ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  })),

  setwishes: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  setwishes: () => [],
};
