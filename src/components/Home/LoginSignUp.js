import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

const LoginForm = () => (
  <div className={`${styles.signinSignupContainer} ${styles.content}`}>

    <div className={styles.signin}>
      <Link to="/login">Sign in</Link>
    </div>
    <div className={styles.signup}>
      <Link to="/signup">Sign up</Link>
    </div>
  </div>
);

export default LoginForm;
