/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg/lib';
import { getPropertyAsync } from '../../redux/propertySlice';
import PropertyComponent from '../../components/PropertyComponent';

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
  let name;
  let description;
  let featuredImage;
  let address;
  let isForRent;
  let price;
  let attributes;
  if (
    typeof property === 'object'
    && property !== null
    && property.data.attributes
  ) {
    name = property.data.attributes.name;
    address = property.data.attributes.address;
    price = property.data.attributes.monthly_price;
    description = property.data.attributes.description;
    featuredImage = property.data.attributes.featured_image;
    isForRent = property.data.attributes.is_for_rent;
  }
  return (
    property && (
      <PropertyComponent
        name={name}
        address={address}
        description={description}
        image={featuredImage}
        isForRent={isForRent}
        price={price}
      />
    )
  );
};

export default Property;
