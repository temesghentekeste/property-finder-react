/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WaveLoading from 'react-loadingg/lib/WaveLoading';
import { Redirect } from 'react-router-dom';
import { getUserTokenInfo } from '../../redux/loginSlice';
import LoginForm from '../../components/LoginForm';
import common from '../../common/common.module.css';

const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const {
    login, loading, error, user,
  } = useSelector(
    (state) => state.usernametoken,
  );

  const handleSubmit = (e, user) => {
    e.preventDefault();
    dispatch(getUserTokenInfo(user));

    setShowMessage(true);
  };

  useEffect(() => {
    setShowMessage(false);
  }, []);

  return (
    <div className={common.loginSignupContainer}>
      {showMessage && error && (
        <div className={common.error}>
          Incorrect username or password. Please try again!.
        </div>
      )}
      {loading && <WaveLoading />}
      {user && user.username && user.token && <Redirect to="/properties" />}
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
