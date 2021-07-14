import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WaveLoading } from 'react-loadingg';
import { getPropertiesAsync } from '../../redux/propertiesSlice';
import Property from './Property';

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
    <div>
      <h2>All Properties</h2>
      {properties.data.length > 0
        && properties.data.map((property) => (
          <Property key={property.id} attributes={property.attributes} />
        ))}
    </div>
  );
};

export default Properties;
