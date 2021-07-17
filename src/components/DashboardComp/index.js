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
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Price&nbsp;($)</TableCell>
                <TableCell align="right">Rentable</TableCell>
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
                    <TableCell align="right">{address}</TableCell>
                    <TableCell align="right">{price}</TableCell>
                    <TableCell align="right">{isForRent}</TableCell>
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
