import React, { useEffect, useState } from 'react';

const Profile = ({ userInfo, onLogout }) => {
  const [joinedRides, setJoinedRides] = useState([]);

  useEffect(() => {
    const userJoinedRides = JSON.parse(localStorage.getItem('userJoinedRides')) || [];
    setJoinedRides(userJoinedRides);
  }, []);

  const handleRideJoined = (newRide) => {
    setJoinedRides((prevRides) => [...prevRides, newRide]);
  };

  return (
    <div>
      <h2>My Profile</h2>
      {userInfo ? (
        <div>
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Phone Number:</strong> {userInfo.phoneNumber}</p>
          <p><strong>Student ID:</strong> {userInfo.studentID}</p>
          <button 
            onClick={onLogout} 
            style={{ backgroundColor: 'black', color: 'white' }} 
          >
            Logout
          </button>
          
          <h3>My Upcoming Rides</h3>
          <ul>
            {joinedRides.length > 0 ? (
              joinedRides.map((ride, index) => (
                <li key={index}>
                  <strong>Destination:</strong> {ride.destination} <br />
                  <strong>Car Details:</strong> {ride.carDetails} <br />
                  <strong>Seats Available:</strong> {ride.seatsAvailable} <br />
                  <strong>Pick-up Preference:</strong> {ride.pickupPreference} <br />
                  <strong>Date:</strong> {ride.rideDate} <br />
                  <strong>Time:</strong> {ride.rideTime} <br />
                </li>
              ))
            ) : (
              <p>No upcoming rides.</p>
            )}
          </ul>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

export default Profile;
