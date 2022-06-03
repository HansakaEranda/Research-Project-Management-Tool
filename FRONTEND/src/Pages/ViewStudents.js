import React, {Component} from "react";
import { BrowserRouter as  Link } from 'react-router-dom';
import App from "../App";
import axios from 'axios';

export default class ViewStudents extends Component {

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
                    <table className="table">
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
                            <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td><a href={`/student/${students._id}`} style={{textDecoration:"none"}}>{students.stname}</a></td>
                                    <td>{students.regNo}</td>
                                    <td>{students.stemail}</td>
                                    <td>{students.stuserName}</td>
                                    <td>{students.stpwd}</td>
                                    <td>
                                    <a href={`/editStudents/${students._id}`} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i>&nbsp;Edit</button></a>
                                    
                                    &nbsp;
                                    <button className="btn btn-danger btn-sm" onClick={() => onDeletePayment(students.id)}><i className="far fa-trash-alt"></i>&nbsp;
                                    Delete
                                </button> &nbsp;
                                    <a href={`/student/${students._id}`} ><button className="btn btn-secondary btn-sm"><i className="fa fa-info-circle"></i>&nbsp;View</button></a>
                                    </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
        }
    }