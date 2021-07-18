/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Dashboard.module.css';
import CreatePropertyForm from './CreatePropertyForm';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DashboardComp = ({ data }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={styles.dashboard}>
        <h3>Manage your propertries</h3>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={styles.dashboard__table__head}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Price&nbsp;($)</TableCell>
                <TableCell align="left">Rentable</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                const {
                  name,
                  address,
                  monthly_price: price,
                  featured_image: image,
                  is_for_rent: isForRent,
                  description,
                  is_favorite: isFavorite,
                } = row.attributes;
                const { id } = row;
                return (
                  <TableRow key={id}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={styles.dashboard__name}
                    >
                      {name}
                    </TableCell>
                    <TableCell align="left">{address}</TableCell>
                    <TableCell align="left">
                      {Math.ceil(parseFloat(price))}
                    </TableCell>
                    <TableCell align="left">
                      {isForRent ? 'Yes' : 'No'}
                    </TableCell>
                    <TableCell
                      align="left"
                      className={styles.dashboard_actions}
                    >
                      <button
                        type="button"
                        className={styles.dashboard__actions__btnEdit}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className={styles.dashboard__actions__btnDelete}
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

DashboardComp.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default DashboardComp;
