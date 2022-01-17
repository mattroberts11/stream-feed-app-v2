import { useContext, useMemo, useState } from 'react';
import { FeedClientProvider } from './contexts/FeedClientContext';
import { UserContext, UserProvider } from './contexts/UserContext';
import { Routes, Route } from 'react-router-dom';

import { CssBaseline, } from '@mui/material';

import TopNav from './components/TopNav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';

// import './App.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBirgIwDzDc3sGUzrCQmNSMVo72rfKRZFk",
  authDomain: "stream-feeds.firebaseapp.com",
  projectId: "stream-feeds",
  storageBucket: "stream-feeds.appspot.com",
  messagingSenderId: "773234007256",
  appId: "1:773234007256:web:c24d414c197786c5b6cbad",
  measurementId: "G-9NERW797RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  const { userId, login, logout } = useContext(UserContext);

  // const [userId, setUserId] = useState('katy');

  

  return (
    <CssBaseline>
      <UserProvider >
      <FeedClientProvider >
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </FeedClientProvider>
      </UserProvider>
    </CssBaseline>
  );
}

export default App;
