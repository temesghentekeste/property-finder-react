import PropTypes from 'prop-types';
import styles from './favoriteItem.module.css';

const FavoriteItem = ({
  id,
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
        <p>{name}</p>
        <span>{address}</span>
      </div>
      <div className={styles.favoriteCard__body__bottom}>
        <p>{description}</p>
      </div>
    </div>
    <footer className={styles.favoriteCard__footer}>
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
    </footer>
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
