import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import common from '../../common/common.module.css';
import styles from './LoginForm.module.css';

const LoginForm = ({ handleSubmit }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const userNameRef = useRef();
  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className={`${styles.formContainer} ${styles.content}`} data-testid="loginForm">
      <header className={styles.formContainer_header}>
        <h2 data-testid="loginForm-heading">Sign In</h2>
        <p>Hello there! Log in and start managing your system.</p>
      </header>

      <form onSubmit={(e) => handleSubmit(e, user)}>
        <div className={styles.formContainer__formInput}>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            ref={userNameRef}
          />
        </div>
        <div className={styles.formContainer__formInput}>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formContainer__formInput}>
          <button type="submit" className={styles.formContainer_btn}>Sign In</button>
        </div>
      </form>

      <div className={styles.signup}>
        <span>If you are new, please,&nbsp;</span>
        <Link to="/signup">Sign up</Link>
      </div>

      <div className={common.backToHome}>
        <Link to="/">
          Back to&nbsp;
          <HomeIcon />
        </Link>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
