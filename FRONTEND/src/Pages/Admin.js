import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
        <div>
          <h2>Admin</h2>
          <Link to={'/viewstudents'} className="nav-link"> Students </Link>
          <Link to={'/viewstaff'} className="nav-link"> Staff </Link>
          <Link to={'/viewstgroups'} className="nav-link"> Staff </Link>
          <Link to={'/viewTDtl'} className="nav-link"> Staff </Link>
          <Link to={'/viewTDtl'} className="nav-link"> Staff </Link>
        </div>
    );
  }
}

export default Admin;