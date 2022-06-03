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

    onDelete = (id) => {
        axios.delete(`http://localhost:8000/students/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveStudents();
        })
    }

    filterData(students, searchKey){
        const result = students.filter((student) =>
            student.stname.toLowerCase().includes(searchKey)||
            student.regNo.toLowerCase().includes(searchKey)||
            student.stemail.toLowerCase().includes(searchKey)||
            student.stuserName.toLowerCase().includes(searchKey)
        )

        this.setState({students:result})
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("http://localhost:8000/students").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingStudents,searchKey)
            }
        });
    }
    
        render(){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8-mt-2 mb-2">
                            <h2>All Students</h2>
                        </div>
                        <div className="col-lg-3 mt-2 mb-2">
                            <input 
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            name="searchQuery"
                            onChange={this.handleSearchArea}></input>
                        </div>
                    </div>
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
                                    <button className="btn btn-danger btn-sm" onClick={() => this.onDelete(students._id)}><i className="far fa-trash-alt"></i>&nbsp;
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