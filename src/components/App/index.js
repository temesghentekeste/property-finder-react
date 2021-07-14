/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WaveLoading } from 'react-loadingg';
import Properties from '../../containers/properties';
import styles from './App.module.css';

import { getPropertiesAsync } from '../../redux/propertiesSlice';

function App() {
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
    <div className={styles.App}>
      <h1>Property Finder</h1>
      <Properties properties={properties} />
    </div>
  );
}

export default App;
