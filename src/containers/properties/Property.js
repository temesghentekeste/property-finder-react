/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

const Property = ({
  attributes: {
    name,
    address,
    description,
    monthly_price: monthlyPrice,
    is_for_rent: isForRent,
    featured_image: featured,
  },
}) => (
  <div>
    <h1>{name}</h1>
    <h1>{address}</h1>
    <h1>{description}</h1>
    <h1>{isForRent}</h1>
    <h1>{monthlyPrice}</h1>
    <img src={featured} alt="" />
    <hr />
  </div>
);

Property.propTypes = {
  attributes: PropTypes.object.isRequired,
};

export default Property;
