import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './favoriteItem.module.css';

const FavoriteItem = ({
  id,
  propertyId,
  name,
  address,
  price,
  image,
  isForRent,
  description,
}) => (
  <div className={styles.favoriteCard} data-id={id}>
    <header>
      <img src={image} alt="" />
    </header>
    <div className={styles.favoriteCard__body}>
      <div className={styles.favoriteCard__body__top}>
        <div>
          <p>{name}</p>
        </div>
        <span>{address}</span>
      </div>
      <div className={styles.favoriteCard__body__bottom}>
        <p>{description}</p>
      </div>
    </div>
    <div className={styles.favoriteCard__footer}>
      <div className={styles.favoriteCard__footer__top}>
        <p className={isForRent ? styles.available : styles.notAvailable}>
          {isForRent ? 'Available' : 'Not Available'}
        </p>
        <div className={styles.favoriteCard__footer__price}>
          <p>
            $
            {Math.round(price, 2)}
          </p>
          <span>per Month</span>
        </div>
      </div>
      <Link to={`/properties/${propertyId}`}>More...</Link>
    </div>
  </div>
);

FavoriteItem.propTypes = {
  id: PropTypes.number.isRequired,
  propertyId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isForRent: PropTypes.bool.isRequired,
};

export default FavoriteItem;
