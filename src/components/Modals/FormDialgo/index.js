import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox } from '@material-ui/core';
import styles from './FormDialog.module.css';
import { createNewProperty } from '../../../redux/dashboardSlice';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    const formData = {
      name: property.name,
      address: property.address,
      monthly_price: property.price,
      description: property.description,
      is_for_rent: property.rentalbe,
      featured_image: property.image,
    };
    console.log(formData);
    dispatch(createNewProperty(formData));
    setOpen(false);
  };

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

  return (
    <div>
      <button
        type="button"
        onClick={handleClickOpen}
        className={styles.formDialog__btnCreate}
      >
        {' '}
        Create a new property
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleCreate} className="createForm">
          <DialogTitle id="form-dialog-title">
            Create a new property
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              value={property.name}
              onChange={handleChange}
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="address"
              name="address"
              value={property.address}
              onChange={handleChange}
              label="Address"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="description"
              name="description"
              value={property.description}
              onChange={handleChange}
              label="description"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="price"
              name="price"
              value={property.price}
              onChange={handleChange}
              label="Monthly Price"
              type="number"
              fullWidth
            />
            <label htmlFor="btn-upload">
              <input
                id="btn-upload"
                onChange={onImageChange}
                name="btn-upload"
                style={{ display: 'none' }}
                type="file"
                accept="image/*"
              />
              <Button
                className="btn-choose"
                variant="outlined"
                component="span"
              >
                Choose Image
              </Button>
            </label>
            <br />
            <FormControlLabel
              control={
                <Checkbox checked={property.rentable} onChange={handleCheck} />
              }
              label="Rentalbe"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <button type="submit" color="primary">
              Create
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
