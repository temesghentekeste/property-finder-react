import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WaveLoading } from 'react-loadingg';
import { getPropertiesAsync } from '../../redux/propertiesSlice';

const Properties = () => {
  const dispatch = useDispatch();
  const { loading, properties } = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(getPropertiesAsync());
  }, [dispatch]);

  console.log(properties);

  if (loading || loading === null || loading === undefined) {
    return <WaveLoading />;
  }
  return (
    <div>
      <h2>All Properties</h2>
    </div>
  );
};

export default Properties;
