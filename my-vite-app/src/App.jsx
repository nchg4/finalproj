import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, NavLink } from 'react-router-dom';
import Login from './Login'; 
import RideForm from './RideForm'; 
import JoinRide from './JoinRide'; 
import Profile from './Profile'; 
import './App.css'; 
import Header from './Header'; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userInfo, setUserInfo] = useState(null); 

  const handleLogin = (user) => {
    setIsLoggedIn(true); 
    setUserInfo(user); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
    setUserInfo(null); 
  };

  const handleRideJoined = (newRide) => {
  };

  return (
    <Router>
      <Header /> 
      <nav>
        {isLoggedIn && (
          <>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/create-ride" activeClassName="active">Create Ride</NavLink>
            <NavLink to="/join-ride" activeClassName="active">Join a Ride</NavLink>
            <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
          </>
        )}
      </nav>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? (
            <div>
              <h1>Welcome to UniRide</h1>
              <div>
                <h2>Map of Your Location</h2>
                <iframe
                  src={`https://embed.waze.com/iframe?zoom=10&lat=${userInfo?.destinationLat || '32.0853'}&lon=${userInfo?.destinationLon || '34.7818'}`}
                  width="100%"
                  height="400"
                  allowFullScreen
                  style={{ border: 'none' }}
                  title="Waze Map"
                ></iframe>
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/create-ride"
          element={isLoggedIn ? <RideForm userInfo={userInfo} /> : <Navigate to="/login" />}
        />
        <Route
          path="/join-ride"
          element={isLoggedIn ? <JoinRide userInfo={userInfo} onRideJoined={handleRideJoined} /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile userInfo={userInfo} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;

