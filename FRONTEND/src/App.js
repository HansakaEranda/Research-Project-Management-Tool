/*import React, {Component} from "react";
import App from "../App";
import axios from 'axios';

export default class App extends Component {

    constructor(props){
        super(props);
    
        this.state={
            students:[]
        };
    }
    
    componentDidMount(){
        this.retrieveStudents();
    }
    
    retrieveStudents(){
        axios.get("http://localhost:8000/students").then(res => {
            if (res.data.success) {
                this.setState({
                    students:res.data.existingStudents
                });
                console.log(this.state.students)
            }
        });
    }
    
        render(){
            return (
                <div className="container">
                    <h1>Research Management Tool</h1>
                    <p>All Students</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Register Number</th>
                                <th scope="col">Student Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Password</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.students.map((students,index) => (
                            <tr>
                                    <th scope="row">{index+1}</th>
                                    <td><a href={`/student/${students._id}`} style={{textDecoration:"none"}}>{students.stname}</a></td>
                                    <td>{students.regNo}</td>
                                    <td>{students.stemail}</td>
                                    <td>{students.stuserName}</td>
                                    <td>{students.stpwd}</td>
                                    <td>
                                        <a className="btn btn-warning" href="#">
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>
                                        &nbsp;
                                        <a className="btn btn-danger" href="#">
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </a>
                                    </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }*/

    import React, { Component } from 'react';
    import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
    import Home from './Pages/Home';
    

    //Topic Details Pages
    import InsertTopicDtl from './Pages/InsertTopicDtl';
    import ViewStTopicDtl from './Pages/ViewStTopicDtl';

    //Student Details Pages
    import ViewStudents from './Pages/ViewStudents';
    import EditStudent from './Pages/EditStudent';
    import StudentDetails from './Pages/StudentDetails';

    
    class App extends Component {
      render() {
        return (
        <Router>
            <div>
              <h2>Welcome to React Router Tutorial</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/viewstudents'} className="nav-link">ViewStudents</Link></li>
                <li><Link to={'/addTDtl'} className="nav-link">ViewStudents</Link></li>
                <li><Link to={'/viewTDtl'} className="nav-link">ViewStudents</Link></li>
                
              </ul>
              </nav>
              <hr />
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/viewstudents' component={ViewStudents}/>
                  <Route path='/addTDtl' component={InsertTopicDtl}/>
                  <Route path='/viewTDtl' component={ViewStTopicDtl}/>
                  <Route path='/editStudents/:id' component={EditStudent}/>
                  <Route path='/student/:id' component={StudentDetails}/>
                
              </Switch>
            </div>
          </Router>
        );
      }
    }
    
    export default App;

/*import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Pages/Home';
import NavBar from './Pages/NavBar';

//Topic Details Pages
import InsertTopicDtl from './Pages/InsertTopicDtl';
import ViewStTopicDtl from './Pages/ViewStTopicDtl';

//Student Details Pages
import ViewStudents from './Pages/ViewStudents';
import EditStudent from './Pages/EditStudent';
import StudentDetails from './Pages/StudentDetails';

function App()  {
    
        return(
            <BrowserRouter>
                <div className="container">
                    
                    <NavBar />
                    <Routes>
                    <Route path="/" exact component={<Home/>}></Route>
                    <Route path="/addTDtl" component={<InsertTopicDtl/>}></Route>
                    <Route path="/addTDtl" component={<ViewStTopicDtl/>}></Route>

                    <Route path="/viewstudents" component={<ViewStudents/>}></Route>
                    <Route path="/editStudents/:id" component={<EditStudent/>}></Route>
                    <Route path="/student/:id" component={<StudentDetails/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }

    export default App;*/

