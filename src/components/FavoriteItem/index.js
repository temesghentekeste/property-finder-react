import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';
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
  handleFavorirtes,
}) => (
  <div className={styles.favoriteCard} data-id={id}>
    <header>
      <img src={image} alt="" />
    </header>
    <div className={styles.favoriteCard__body}>
      <div className={styles.favoriteCard__body__top}>
        <div>
          <button type="button">
            {' '}
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.normalHeart}
              onClick={() => handleFavorirtes(propertyId)}
            />
          </button>
          <p>{name}</p>
        </div>
        <span>{address}</span>
      </div>
      <div className={styles.favoriteCard__body__bottom}>
        <p>{description}</p>
      </div>
    </div>
    <footer className={styles.favoriteCard__footer}>
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
    </footer>
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
  handleFavorirtes: PropTypes.instanceOf(Function).isRequired,
};

export default FavoriteItem;
