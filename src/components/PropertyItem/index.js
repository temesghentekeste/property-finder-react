/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';
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
    is_favorite: isFavorite,
  },
  handleFavorirtes,
}) => (
  <div className={styles.propertyCard}>
    <header>
      <img src={featured} alt="" />
    </header>
    <div className={styles.propertyCard__body}>
      <div className={styles.propertyCard__body__top}>
        <p>{name}</p>
        <button type="button">
          {' '}
          <FontAwesomeIcon
            icon={faHeart}
            className={isFavorite ? styles.favoriteHeart : styles.normalHeart}
            onClick={() => handleFavorirtes(id)}
          />
        </button>
        <span>{address}</span>
      </div>
      <div className={styles.propertyCard__body__bottom}>
        <p>{description}</p>
      </div>
    </div>
    <footer className={styles.propertyCard__footer}>
      <div className={styles.favoriteCard__footer__top}>
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
      </div>
      <Link to={`/properties/${id}`}>More...</Link>
    </footer>
  </div>
);

PropertyItem.propTypes = {
  attributes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  handleFavorirtes: PropTypes.instanceOf(Object).isRequired,
};

export default PropertyItem;
