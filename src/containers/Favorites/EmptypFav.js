import { Link } from 'react-router-dom';
import React from 'react';
import styles from './EmptyFav.module.css';

const EmptypFav = () => (
  <div className={styles.emptyFavContainer}>
    <p>
      You don&apos;t have any favorites. To add some click on the favorite icon
      from the available properties&nbsp;
      <Link to="/properties">Here</Link>
    </p>
  </div>
);

export default EmptypFav;
