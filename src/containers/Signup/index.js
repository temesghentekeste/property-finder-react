/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';

import WaveLoading from 'react-loadingg/lib/WaveLoading';
import { Redirect } from 'react-router-dom';
import { signupUser } from '../../redux/signupSlice';
import SignupForm from '../../components/SignupForm';

const Signup = () => {
  const dispatch = useDispatch();

  const {
    signup, loading, error, user,
  } = useSelector(
    (state) => state.signupuser,
  );

  console.log('signup ...');
  const handleSubmit = (e, user) => {
    console.log(user);
    e.preventDefault();
    dispatch(signupUser(user));
  };

  console.log(signup, loading, error, user);

  return (
    <div>
      <h1>Sign Up</h1>
      {/* {error && <h3>{error}</h3>} */}

      {/* {loading && <WaveLoading />} */}
      {/* {user && user.username && user.token && <Redirect to="/properties" />} */}
      <SignupForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
