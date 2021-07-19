/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import WaveLoading from 'react-loadingg/lib/WaveLoading';

import { signupUser } from '../../redux/signupSlice';
import SignupForm from '../../components/SignupForm';
import common from '../../common/common.module.css';

const Signup = () => {
  const dispatch = useDispatch();

  const { signup, loading } = useSelector((state) => state.signupuser);

  const { error, user } = useSelector((state) => state.signupuser);

  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e, user) => {
    console.log(user);
    e.preventDefault();
    dispatch(signupUser(user));

    setShowMessage(true);
  };

  useEffect(() => {
    console.log('Running');
    setShowMessage(false);
  }, []);

  return (
    <div className={common.loginSignupContainer}>
      {showMessage && error && (
      <div className={common.error}>
        Username and password are required, or try a different username.
      </div>
      )}
      {showMessage && user && user.data && (
      <div className={common.success}>
        Account created successfully! Sign in to proceed.
      </div>
      )}
      {showMessage && loading && <WaveLoading />}

      <SignupForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
