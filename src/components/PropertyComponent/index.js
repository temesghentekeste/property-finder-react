/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

const PropertyComponent = ({
  name,
  address,
  price,
  description,
  image,
  isForRent,
}) => (
  <div>
    <img src={image} alt={name} />
    <h1>{name}</h1>
    <h1>{address}</h1>
    <h1>{price}</h1>
    <h1>{description}</h1>
    <h1>{isForRent ? 'Available' : 'Rented'}</h1>
  </div>
);

PropertyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isForRent: PropTypes.bool.isRequired,
};

export default PropertyComponent;
