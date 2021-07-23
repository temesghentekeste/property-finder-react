/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import styles from './Property.module.css';

const PropertyComponent = ({
  name = '',
  address = '',
  price = '',
  description = '',
  image = '',
  isForRent = false,
}) => (
  <section className={styles.propertyContainer}>
    <h1>
      About&nbsp;
      { name }
    </h1>
    <div className={styles.propertyCard} data-testid="property">
      <img src={image} alt={name} />
      <div className={styles.propertyCard__info}>
        <p data-testid="property-name">
          <span>Name: </span>
          {name}
        </p>
        <p data-testid="property-address">
          <span>Address: </span>
          {address}
        </p>
        <p data-testid="property-price">
          <span>Price: </span>
          $
          {price}
        </p>
        <p data-testid="property-description">
          <span>Description: </span>
          {description}
        </p>
        <p data-testid="property-rentable">
          <span>Availability: </span>
          {isForRent ? 'Available' : 'Rented'}
        </p>
      </div>
    </div>
  </section>
);

PropertyComponent.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
  isForRent: PropTypes.bool,
};

export default PropertyComponent;
