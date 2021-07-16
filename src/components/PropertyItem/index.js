/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PropertyItem.module.css';

const PropertyItem = ({
  id,
  attributes: {
    name,
    address,
    description,
    monthly_price: monthlyPrice,
    is_for_rent: isForRent,
    featured_image: featured,
  },
}) => (
  <Link to={`/properties/${id}`}>
    <div className={styles.propertyCard}>
      <header>
        <img src={featured} alt="" />
      </header>
      <div className={styles.propertyCard__body}>
        <div className={styles.propertyCard__body__top}>
          <p>{name}</p>
          <span>{address}</span>
        </div>
        <div className={styles.propertyCard__body__bottom}>
          <p>{description}</p>
        </div>
      </div>
      <footer className={styles.propertyCard__footer}>
        <p className={isForRent ? styles.available : styles.notAvailable}>
          {isForRent ? 'Available' : 'Not Available'}
        </p>
        <div className={styles.propertyCard__footer__price}>
          <p>
            $
            {Math.round(monthlyPrice, 2)}
          </p>
          <span>per Month</span>
        </div>
      </footer>
    </div>
  </Link>
);

PropertyItem.propTypes = {
  attributes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default PropertyItem;
