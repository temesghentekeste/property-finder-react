import React from 'react';
import { useParams } from 'react-router-dom';

const Favorites = () => {
  const { username } = useParams();
  console.log('favorires for', username);
  return (
    <div>
      <h1>Favorites</h1>
    </div>
  );
};

export default Favorites;
