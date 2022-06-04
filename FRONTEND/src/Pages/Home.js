import React, { Component } from 'react';
import "../index.css";

const Home = ({setLoginUser}) => {
  return (
      <div className='container'>
      <div className="homepage">
          <h1>Hello Homepage</h1><br></br>
          <a href={'/addstgroup'} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i>&nbsp;Add Group Details</button></a><br></br>
          <a href={'/viewspecstaff'} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i>&nbsp;View Supervisors</button></a><br></br>
          <div className="button" onClick={() => setLoginUser({})} >Logout</div>
      </div>
      </div>
  )
}

export default Home;