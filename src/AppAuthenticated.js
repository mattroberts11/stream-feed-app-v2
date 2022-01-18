import React, { useContext } from 'react';
import { UserContext } from './contexts/UserContext';
import { Routes, Route } from 'react-router-dom';
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
