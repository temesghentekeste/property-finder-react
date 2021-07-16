import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg/lib';
import { getFavoritesAsync } from '../../redux/favoritesSlice';
import FavoriteItem from '../../components/FavoriteItem';
import styles from './favorites.module.css';

const Favorites = () => {
  const dispatch = useDispatch();
  const { loading, error, favorites } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoritesAsync());
  }, [dispatch]);

  if (loading || loading === null || favorites === null) {
    return <WaveLoading />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!favorites || favorites === undefined || favorites.data === undefined) {
    return <WaveLoading />;
  }

  if (favorites.data.length === 0) {
    return (
      <h1>Currently you don&apos;t have any favorites. Please add some.</h1>
    );
  }

  console.log(loading, error, favorites);

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
        name,
        price,
        image,
        isForRent,
        description,
        address,
      };
    });
  }

  console.log(ids);
  console.log(data);

  return (
    <section className={styles.favorites}>
      <h2 className={styles.favorites__heading}>All Favorites</h2>
      <div className={styles.favorites__container}>
        {data.length > 0
          && data.map((favorite) => (
            <FavoriteItem
              key={favorite.id}
              id={favorite.id}
              name={favorite.name}
              address={favorite.address}
              description={favorite.description}
              price={favorite.price}
              image={favorite.image}
            />
          ))}
      </div>
    </section>
  );
};

export default Favorites;
