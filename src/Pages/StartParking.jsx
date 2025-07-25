// StartParking.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StartParking.css";
import BottomNav from './component/BottomNav';

const StartParking = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (!location) {
      alert("Please enter your location");
      return;
    }
    const selectedType = "All";
    navigate(`/spots?location=${encodeURIComponent(location)}&type=${selectedType}`);
  };

  

  return (
    <div className="start-container">
      <img src="/Parkify-logo.jpg" alt="Parkify Logo" className="logo" />
      <h2 className="title">Start Parking</h2>
      <p className="subtitle">No more circling the block – your perfect spot is just a tap away.</p>

      <div className="location-input">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="location-select"
        >
          <option value="">Select Location...</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Surrey">Surrey</option>
          <option value="New Westminster">New Westminster</option>
          <option value="Richmond">Richmond</option>
        </select>
        <button onClick={handleStart} className="search-btn">Search 🔎</button>
      </div>

      <div className="car"></div>


      <BottomNav />
   
    </div>
  );
};

export default StartParking;
