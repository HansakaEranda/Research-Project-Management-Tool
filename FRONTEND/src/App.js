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
    import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
    import Home from './Pages/Home';
    import NavBar from './Pages/NavBar';
    

    //Topic Details Pages
    import InsertTopicDtl from './Pages/InsertTopicDtl';
    import ViewStTopicDtl from './Pages/ViewStTopicDtl';
    import SuperGetTopic from './Pages/SuperGetTopic';
    import SuperViewTopic from './Pages/SuperViewTopic';
    import ViewSingleTopic from './Pages/ViewSingleTopic';

    //Student Details Pages
    import ViewStudents from './Pages/ViewStudents';
    import EditStudent from './Pages/EditStudent';
    import StudentDetails from './Pages/StudentDetails';

    
    class App extends Component {
      render() {
        return (
        <Router>
            <div>
              <NavBar />
              <Switch>
                  <Route exact path='/' component={Home} />

                  <Route path='/viewstudents' component={ViewStudents}/>
                  <Route path='/student/:id' component={StudentDetails}/>
                  <Route path='/editStudents/:id' component={EditStudent}/>

                  <Route exact path='/addTDtl' component={InsertTopicDtl}/>
                  <Route path='/viewTDtl' component={ViewStTopicDtl}/>
                  <Route path='/sgettopic' component={SuperGetTopic}/>
                  <Route path="/sviewtdtl" component={SuperViewTopic}/>
                  <Route path="/sinviewtdtl" component={ViewSingleTopic}/>
                                  
              </Switch>
            </div>
          </Router>
        );
      }
    }
    
    export default App;