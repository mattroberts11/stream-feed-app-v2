import { useContext, useMemo, useState } from 'react';
import { FeedClientProvider } from './contexts/FeedClientContext';
import { UserContext } from './contexts/UserContext';
import { Routes, Route } from 'react-router-dom';

import { CssBaseline, } from '@mui/material';

import TopNav from './components/TopNav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';

import AppAuthenticated from './AppAuthenticated';
import AppUnauthenticated from './AppUnauthenticated';

// import './App.scss';

function App() {

  const { user } = useContext(UserContext);

  return (
    <CssBaseline>
     
      <FeedClientProvider >
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
        { user.auth ? <AppAuthenticated /> : <AppUnauthenticated /> }
      </FeedClientProvider>
     
    </CssBaseline>
  );
}

export default App;
