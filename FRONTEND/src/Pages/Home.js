import React, { Component } from 'react';
import "../index.css";

const Home = ({setLoginUser}) => {
  return (
      <div className='container'>
      <div className="homepage">
          <h1>Hello Homepage</h1>
          <div className="button" onClick={() => setLoginUser({})} >Logout</div>
      </div>
      </div>
  )
}

export default Home;