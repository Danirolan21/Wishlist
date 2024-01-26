import React, { useState } from 'react';
import './App.css';
import WishInput from '../Wishinput/WishInput';
import WishList from '../WishList/WishList';

const initialWishes = [
  {
    id: 0,
    text: 'Travel to Moon',
    completed: false,
  },
  {
    id: 0,
    text: 'Travel to Barcelona',
    completed: true,
  },
  {
    id: 0,
    text: 'Eat a Hamburguer',
    completed: false,
  },
];
export default function App() {
  const [wishes, setwishes] = useState(initialWishes);
  const onNewWish = (newWish) => {
    setwishes((currentWishes) => [...currentWishes, newWish]);
  };
  return (
    <div className="app">
      <h1>My wishlist</h1>
      <WishInput onNewWish={onNewWish} />
      <WishList wishes={wishes} />
    </div>
  );
}
