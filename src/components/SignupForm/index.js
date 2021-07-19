import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import styles from './Signup.module.css';
import common from '../../common/common.module.css';

const SignupForm = ({ handleSubmit }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const usernameRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className={`${styles.formContainer} ${styles.content}`}>
      <header className={styles.formContainer_header}>

        <h2>Sign Up</h2>
        <p>Hello there! Sign up and enjoy wonderful properies.</p>
      </header>
      <form onSubmit={(e) => handleSubmit(e, user)}>
        <div className={styles.formContainer__formInput}>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            ref={usernameRef}
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
          <button type="submit" className={styles.formContainer_btn}>
            Sign Up
          </button>
        </div>
      </form>
      <div className={styles.signin}>
        <span>If you already have an account,&nbsp;</span>
        <Link to="/login">sign in</Link>
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

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,

};

export default SignupForm;
