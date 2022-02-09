import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContext';

const  AppAuthenticated = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <h1>Hello, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </>
  );
}

export default AppAuthenticated;
