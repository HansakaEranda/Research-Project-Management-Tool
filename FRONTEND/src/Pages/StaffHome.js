import React, { Component } from 'react';
import "../index.css";

const StaffHome = ({setLoginStaff}) => {
  return (
      <div className='container'>
      <div className="homepage">
          <h1>Staff Homepage</h1>
          <div className="button" onClick={() => setLoginStaff({})} >Logout</div>
      </div>
      </div>
  )
}

export default StaffHome;