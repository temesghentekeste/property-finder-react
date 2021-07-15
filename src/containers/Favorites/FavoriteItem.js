import PropTypes from 'prop-types';
import React from 'react';

const FavoriteItem = ({
  id,
  name,
  address,
  price,
  image,
  isForRent,
  description,
}) => (
  <div>
    Favorite Item
    <h1>{id}</h1>
    <p>{name}</p>
    <p>{address}</p>
    <p>{isForRent}</p>
    <p>{description}</p>
    <p>{price}</p>
    <img src={image} alt="" />
  </div>
);

FavoriteItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isForRent: PropTypes.bool.isRequired,
};

export default FavoriteItem;
