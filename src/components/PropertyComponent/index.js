/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Sidebar from '../../containers/Sidebar';
import styles from './Property.module.css';

const PropertyComponent = ({
  name,
  address,
  price,
  description,
  image,
  isForRent,
}) => (
  <section className={styles.propertyContainer}>
    <Sidebar currentPage={name} />
    <div className={styles.propertyCard}>
      <img src={image} alt={name} />
      <div className={styles.propertyCard__info}>
        <p>
          <span>Name: </span>
          {name}
        </p>
        <p>
          <span>Address: </span>
          {address}
        </p>
        <p>
          <span>Price: </span>
          $
          {price}
        </p>
        <p>
          <span>Description: </span>
          {description}
        </p>
        <p>
          <span>Availability: </span>
          {isForRent ? 'Available' : 'Rented'}
        </p>
      </div>
    </div>
  </section>
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
