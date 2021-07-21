/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import styles from './Home.module.css';
import LoginSignUp from './LoginSignUp';

export default function Home() {
  const reloadPage = () => {
    const currentDocumentTimestamp = new Date(
      performance.timing.domLoading,
    ).getTime();
    const now = Date.now();
    const tenSec = 10 * 1000;
    const plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec && !open) {
      location.reload();
    }
  };

  if (!localStorage.getItem('PropertyFinderUsername')) {
    reloadPage();
  }

  useEffect(() => {
    localStorage.setItem('PropertyFinderUsername', null);
    localStorage.setItem('PropertyFinderToken', null);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContainer__welcome}>
        <h1>Property Finder.</h1>
        <p>Enjoy the adventure of discovering stunning properties around the globe!</p>
        <LoginSignUp />
      </div>
    </div>
  );
}
