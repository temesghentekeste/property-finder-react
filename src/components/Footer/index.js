import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.mainFooter}>
    <p className={styles.mainFooter__text}>
      <a href="https://www.temesghen.me" target="_blank" rel="noreferrer">
        &copy;Temesghen Tekeste
      </a>
      2021, All Rights Reserved
    </p>
  </footer>
);

export default Footer;
