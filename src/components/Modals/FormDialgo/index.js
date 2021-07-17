import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox } from '@material-ui/core';
import styles from './FormDialog.module.css';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <DialogTitle id="form-dialog-title">Create a new property</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
          />

          <TextField
            margin="dense"
            id="name"
            label="Description"
            type="text"
            fullWidth
          />

          <TextField
            margin="dense"
            id="name"
            label="Monthly Price"
            type="number"
            fullWidth
          />
          <label htmlFor="btn-upload">
            <input
              id="btn-upload"
              name="btn-upload"
              style={{ display: 'none' }}
              type="file"
              accept="image/*"
            />
            <Button className="btn-choose" variant="outlined" component="span">
              Choose Image
            </Button>
          </label>
          <Checkbox
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          {' '}
          Rentable
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
