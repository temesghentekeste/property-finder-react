import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg/lib';
import { Redirect } from 'react-router-dom';
import {
  getFavoritesAsync,
  createFavoriteAsync,
} from '../../redux/api/apiActions';
import FavoriteItem from '../../components/FavoriteItem';
import styles from './favorites.module.css';
import EmptypFav from './EmptypFav';

const Favorites = () => {
  const dispatch = useDispatch();
  const { loading, error, favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoritesAsync());
  }, [dispatch]);

  if (!localStorage.getItem('PropertyFinderUsername') || error) {
    return <Redirect to="/" />;
  }

  if (loading || loading === null || favorites === null) {
    return <WaveLoading />;
  }

  if (!favorites || favorites === undefined || favorites.data === undefined) {
    return <WaveLoading />;
  }

  if (favorites.data.length === 0) {
    return <EmptypFav />;
  }

  let ids = [];
  let data = [];
  if (favorites.data.length > 0) {
    ids = favorites.data.map((item) => item.id);
  }

  if (favorites.included.length > 0) {
    data = favorites.included.map((item, index) => {
      const {
        name,
        monthly_price: price,
        featured_image: image,
        is_for_rent: isForRent,
        description,
        address,
      } = item.attributes;
      return {
        id: parseInt(ids[index], 10),
        propertyId: parseInt(item.id, 10),
        name,
        price,
        image,
        isForRent,
        description,
        address,
      };
    });
  }

  const handleFavorirtes = (propertyId) => {
    dispatch(createFavoriteAsync(propertyId));
  };

  return (
    <>
      <section className={styles.favorites}>
        <h1>Your Favorites</h1>
        <div className={styles.favorites__container}>
          {data.length > 0
          && data.map((favorite) => (
            <FavoriteItem
              key={favorite.id}
              id={favorite.id}
              propertyId={favorite.propertyId}
              name={favorite.name}
              address={favorite.address}
              description={favorite.description}
              price={favorite.price}
              image={favorite.image}
              isForRent={favorite.isForRent}
              handleFavorirtes={handleFavorirtes}
            />
          ))}
        </div>
      </section>
      <p className={styles.scrollHorizontally}>Scroll Horizontally</p>

    </>
  );
};

export default Favorites;
