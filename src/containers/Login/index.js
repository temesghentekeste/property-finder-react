/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';

import WaveLoading from 'react-loadingg/lib/WaveLoading';
import { Redirect } from 'react-router-dom';
import { getUserTokenInfo } from '../../redux/loginSlice';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const dispatch = useDispatch();
  const {
    login, loading, error, user,
  } = useSelector(
    (state) => state.usernametoken,
  );

  console.log('login ...');
  const handleSubmit = (e, user) => {
    console.log(user);
    e.preventDefault();
    dispatch(getUserTokenInfo(user));
  };

  console.log(login, loading, error, user);

  return (
    <div>
      <h1>Login</h1>
      {error && <h3>{error}</h3>}

      {loading && <WaveLoading />}
      {user && user.username && user.token && <Redirect to="/properties" />}
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
