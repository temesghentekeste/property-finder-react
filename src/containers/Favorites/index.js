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

  if (
    !favorites
    || favorites === undefined
    || favorites.data === undefined
  ) {
    return <WaveLoading />;
  }

  console.log(loading, error, favorites);

  return (
    <div>
      <h2>All Properties</h2>
      {favorites.data.length > 0
        && favorites.data.map((favorite) => (
          <FavoriteItem
            key={favorite.id}
            id={favorite.id}
          />
        ))}
    </div>
  );
};

export default Favorites;
