/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PropertyItem = ({
  id,
  attributes: {
    name,
    address,
    description,
    monthly_price: monthlyPrice,
    is_for_rent: isForRent,
    featured_image: featured,
  },
}) => (
  <Link to={`/properties/${id}`}>
    <div>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <h1>{description}</h1>
      <h1>{isForRent}</h1>
      <h1>{monthlyPrice}</h1>
      <img src={featured} alt="" />
      <hr />
    </div>
  </Link>
);

PropertyItem.propTypes = {
  attributes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default PropertyItem;
