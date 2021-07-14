import React from 'react';
import LoginForm from '../../components/LoginForm';

const Logi = () => {
  console.log('Login');
  const handleSubmit = (e, user) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Logi;
