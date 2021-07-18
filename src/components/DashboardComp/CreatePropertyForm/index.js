import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createNewProperty } from '../../../redux/dashboardSlice';

const CreatePropertyForm = () => {
  const [property, setProperty] = useState({
    name: '',
    address: '',
    description: '',
    price: '',
    image: '',
    rentalbe: true,
  });

  const dispatch = useDispatch();

  const {
    created,
    loading,
    error,
    property: createdPropery,
  } = useSelector((state) => state.userdashboard);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProperty({ ...property, [name]: value });
  };

  const onImageChange = (event) => {
    setProperty({ ...property, image: event.target.files[0] });
  };

  const handleCheck = (e) => {
    setProperty({ ...property, [e.target.name]: !property.rentalbe });
    console.log('Checked...', property.rentable, e.target.name);
  };

  console.log(loading, error, created, createdPropery, 'New one');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(property);
    const formData = new FormData();
    formData.append('name', property.name);
    formData.append('address', property.address);
    formData.append('description', property.description);
    formData.append('is_for_rent', property.rentalbe);
    formData.append('monthly_price', property.price);
    formData.append('featured_image', property.image);
    console.log(formData);
    dispatch(createNewProperty(formData));
  };

  return (
    <div className="App">
      <h1>Image Uploader</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={property.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="address"
          value={property.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <textarea
          name="description"
          value={property.description}
          onChange={handleChange}
          id="description"
          cols="30"
          rows="10"
        />
        <input
          type="number"
          name="price"
          value={property.price}
          onChange={handleChange}
          placeholder="Monthly Price"
        />
        <input
          type="checkbox"
          name="rentable"
          checked={property.rentalbe}
          onChange={handleCheck}
        />
        {' '}
        Rentable
        <input
          type="file"
          accept="image/*"
          multiple={false}
          onChange={onImageChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePropertyForm;
