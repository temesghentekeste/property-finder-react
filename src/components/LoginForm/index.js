import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
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
    <div className={styles.formContainer}>
      <header className={styles.formContainer_header}>
        <h2>Log In</h2>
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
          <button type="submit" className={styles.formContainer_btn}>Log In</button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
