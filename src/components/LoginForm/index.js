import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ handleSubmit }) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const userNameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, user)}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            value={user.email}
            onChange={handleChange}
            ref={userNameRef}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            ref={passwordRef}
          />
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
