import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { WaveLoading } from 'react-loadingg';
import styles from './Properties.module.css';

import { getPropertiesAsync } from '../../redux/propertiesSlice';
import { createFavoriteAsync } from '../../redux/favoritesSlice';
import PropertyItem from '../../components/PropertyItem';
import Sidebar from '../Sidebar';

const Properties = () => {
  const [favoriteFlag, setFavoriteFlag] = useState(false);
  const dispatch = useDispatch();
  const { loading, properties, error } = useSelector((state) => state.properties);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(getPropertiesAsync());
    return () => {
      abortController.abort();
    };
  }, [dispatch, favoriteFlag]);

  const handleFavorirtes = (propertyId, value) => {
    console.log(typeof propertyId, propertyId);
    dispatch(createFavoriteAsync(propertyId));
    setFavoriteFlag(value);
  };

  if (error) {
    return <Redirect to="/" />;
  }

  if (loading || loading === null || loading === undefined) {
    return <WaveLoading />;
  }

  if (
    !properties
    || properties === undefined
    || properties.data === undefined
  ) {
    return <WaveLoading />;
  }

  if (properties && properties.error) {
    return <h1>Something went wrong, please try again!</h1>;
  }

  return (
    <section className={styles.properties}>
      <Sidebar />
      <div className={styles.properties__container}>
        {properties.data.length > 0
          && properties.data.map((property) => (
            <PropertyItem
              key={property.id}
              id={property.id}
              attributes={property.attributes}
              handleFavorirtes={handleFavorirtes}
              favoriteFlag={favoriteFlag}
            />
          ))}
      </div>
    </section>
  );
};

export default Properties;
