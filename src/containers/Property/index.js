/*  eslint-disable no-unreachable */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg/lib';
import { getPropertyAsync } from '../../redux/propertySlice';

const Property = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, error, property } = useSelector((state) => state.property);

  useEffect(() => {
    dispatch(getPropertyAsync(id));
  }, [dispatch]);

  if (loading || loading === null || property === null) {
    return <WaveLoading />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (property && property.error) {
    return <h1>Error</h1>;
  }

  return (
    property && property.data.attributes && (
      <div>
        <img src={property.data.attributes.featured_image} alt="" />
        <h1>{property.data.attributes.name}</h1>
        <h1>{property.data.attributes.address}</h1>
        <h1>{property.data.attributes.description}</h1>
        <h1>{property.data.attributes.is_for_Rent}</h1>
        <h1>{property.data.attributes.monthly_price}</h1>
        <hr />
      </div>
    )
  );
};

export default Property;
