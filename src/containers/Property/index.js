import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg/lib';
import { getPropertyAsync } from '../../redux/propertySlice';

const Property = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const property = useSelector((state) => state.property.property);
  const loading = useSelector((state) => state.property.loading);

  useEffect(() => {
    dispatch(getPropertyAsync(id));
  }, [dispatch]);

  if (loading || loading === null || property === null) {
    return <WaveLoading />;
  }

  if (property && property.error) {
    return <h1>Error</h1>;
  }

  const {
    name,
    address,
    description,
    monthly_price: monthlyPrice,
    is_for_rent: isForRent,
    featured_image: featured,
  } = property.data.attributes;
  return (
    <div>
      <img src={featured} alt="" />
      <h1>{name}</h1>
      <h1>{address}</h1>
      <h1>{description}</h1>
      <h1>{isForRent}</h1>
      <h1>{monthlyPrice}</h1>
      <hr />
    </div>
  );
};

export default Property;
