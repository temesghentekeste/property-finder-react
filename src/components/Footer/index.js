import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.mainFooter} data-testid="footer">
    <p className={styles.mainFooter__text}>
      <a href="https://www.temesghen.me" target="_blank" rel="noreferrer">
        &copy;Temesghen Tekeste
      </a>
      &nbsp;2021, All Rights Reserved
    </p>
  </footer>
);

export default Footer;
