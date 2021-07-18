import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CreatePropertyForm.module.css';

const CreatePropertyForm = ({ handleSubmit }) => {
  const [property, setProperty] = useState({
    name: '',
    address: '',
    description: '',
    price: '',
    image: '',
    rentable: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProperty({ ...property, [name]: value });
  };

  const onImageChange = (event) => {
    setProperty({ ...property, image: event.target.files[0] });
  };

  const handleCheck = (e) => {
    setProperty({ ...property, [e.target.name]: !property.rentalbe });
    console.log('Checked...', property.rentable, e.target.name, property);
  };

  const submitFrom = (event) => {
    event.preventDefault();
    console.log(property);
    const formData = new FormData();
    formData.append('name', property.name);
    formData.append('address', property.address);
    formData.append('description', property.description);
    formData.append('is_for_rent', property.rentalbe);
    formData.append('monthly_price', property.price);
    formData.append('featured_image', property.image);
    handleSubmit(event, formData);
  };

  return (
    <div className={styles.container}>
      <h2>Create a new property</h2>
      <div className={styles.formContainer}>
        <form onSubmit={submitFrom}>
          <div className={styles.formContainer__formInput}>
            <input
              type="text"
              name="name"
              value={property.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className={styles.formContainer__formInput}>
            <input
              type="text"
              name="address"
              value={property.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </div>
          <div className={styles.formContainer__formInput}>
            <input
              type="number"
              name="price"
              value={property.price}
              onChange={handleChange}
              placeholder="Monthly Price"
            />
          </div>
          <div className={styles.formContainer__formInput}>
            <textarea
              name="description"
              value={property.description}
              onChange={handleChange}
              id="description"
              placeholder="Proprty description goes here..."
              cols="40"
              rows="10"
            />
          </div>

          <div className={styles.formContainer__checkbox}>
            <input
              type="checkbox"
              name="rentable"
              checked={property.rentalbe}
              onChange={handleCheck}
            />
            {' '}
            Rentable
          </div>

          <div className={styles.formContainer__formInput__file}>
            <input
              type="file"
              accept="image/*"
              multiple={false}
              onChange={onImageChange}
            />
          </div>

          <div className={styles.formContainer__formInput}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

CreatePropertyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default CreatePropertyForm;
