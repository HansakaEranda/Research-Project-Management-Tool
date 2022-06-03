import React,{ Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component{
    render(){
        return(
        <div>
            <h2>Project Management Tool</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/viewstudents'} className="nav-link">View Students</Link></li>
                <li><Link to={'/viewstaff'} className="nav-link">View Staff</Link></li>
                <li><Link to={'/viewstgroups'} className="nav-link">View Student Groups</Link></li>
                <li><Link to={'/addTDtl'} className="nav-link">Topic Details</Link></li>
                <li><Link to={'/viewTDtl'} className="nav-link">View Topic Details</Link></li>
                <li><Link to={'/sgettopic'} className="nav-link">Research Requests</Link></li>
                <li><Link to={'/sviewtdtl'} className="nav-link">View Research Requests</Link></li>
                
              </ul>
              </nav>
              <hr />
        </div>
        )}
}