import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styles from './TopBar.module.css';

const TopBar = () => (
  <div className={styles.topBarContainer}>
    <MenuIcon />
    <p>Property Finder</p>
    <SearchIcon />
  </div>
);

export default TopBar;
