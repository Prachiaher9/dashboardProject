// App.js
import React, { useState } from 'react';
import CardSection from "./assets/components/cardSection";
import "../src/assets/css/style.css";
import Sidebar from "../src/assets/components/Sidebar";
import Navbar from "./assets/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
          <Navbar/> 
        <div className="card-section">
          <CardSection /> 
        </div>
      </div>
    </div>
  );
}

export default App;
