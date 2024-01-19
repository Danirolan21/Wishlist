import React from 'react';

const wishes = [
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
  return (
    <div>
      <h1>My wishlist</h1>
      <fieldset>
        <legend>New wish:</legend>
        <input type="text" placeholder="My new wish" />
      </fieldset>
      <ul>
        {wishes
          .map((wish) => <input type="checkbox" checked={wish.completed} />)}
        {/* .map((wish) => <li key={wish.id}>{wish.text}</li>) */}
      </ul>
    </div>
  );
}
