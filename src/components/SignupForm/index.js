import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Signup.module.css';

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
    <div className={styles.formContainer}>
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
          <button type="submit" className={styles.formContainer_btn}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
