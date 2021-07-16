import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import styles from './Properties.module.css';

import { getPropertiesAsync } from '../../redux/propertiesSlice';
import PropertyItem from '../../components/PropertyItem';

const Properties = () => {
  const dispatch = useDispatch();
  const { loading, properties } = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(getPropertiesAsync());
  }, [dispatch]);

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
    <>
      <h2>All Properties</h2>
      <section className={styles.propertiesContainer}>
        {properties.data.length > 0
          && properties.data.map((property) => (
            <PropertyItem
              key={property.id}
              id={property.id}
              attributes={property.attributes}
            />
          ))}
      </section>
    </>
  );
};

export default Properties;
