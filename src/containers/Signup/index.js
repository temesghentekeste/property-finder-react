/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WaveLoading from 'react-loadingg/lib/WaveLoading';

import { signupUser } from '../../redux/api/apiActions';
import SignupForm from '../../components/SignupForm';
import common from '../../common/common.module.css';

const Signup = () => {
  const dispatch = useDispatch();

  const { signup, loading } = useSelector((state) => state.signupuser);

  const { error, user, message } = useSelector((state) => state.signupuser);

  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e, user) => {
    e.preventDefault();
    dispatch(signupUser(user));

    setShowMessage(true);
  };

  useEffect(() => {
    setShowMessage(false);
    localStorage.setItem('PropertyFinderUsername', null);
    localStorage.setItem('PropertyFinderToken', null);
  }, []);

  return (
    <div className={common.loginSignupContainer}>

      {showMessage && loading && <WaveLoading />}

      <SignupForm
        handleSubmit={handleSubmit}
        successMessage={showMessage && message ? message : ''}
        errorMessage={showMessage && error ? error : ''}
      />
    </div>
  );
};

export default Signup;
