/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg/lib';
import { getFavoritesAsync } from '../../redux/favoritesSlice';
import FavoriteItem from './FavoriteItem';

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
    <div>
      <h2>All Favorites</h2>
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
  );
};

export default Favorites;
