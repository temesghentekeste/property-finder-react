import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <form onSubmit={(e) => handleSubmit(e, user)}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            ref={usernameRef}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
