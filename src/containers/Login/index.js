/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';

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
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
