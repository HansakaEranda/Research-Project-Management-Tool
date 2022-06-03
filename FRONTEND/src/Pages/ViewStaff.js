import React, {Component} from "react";
import { BrowserRouter as  Link } from 'react-router-dom';
import App from "../App";
import axios from 'axios';

export default class ViewStaff extends Component {
    constructor(props){
        super(props);
    
        this.state={
            staff:[]
        };
    }

    componentDidMount(){
        this.retrieveStaff();
    }
    
    retrieveStaff(){
        axios.get("http://localhost:8000/staff").then(res => {
            if (res.data.success) {
                this.setState({
                    staff:res.data.existingStaff
                });
                console.log(this.state.staff)
            }
        });
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:8000/staff/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveStaff();
        })
    }

    render(){
        return (
            <div className="container">
                <h1>Research Management Tool</h1>
                <p>All Staff Members</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Register Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Type</th>
                            <th scope="col">Username</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.staff.map((staff,index) => (
                        <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td><a href={`/staffmem/${staff._id}`} style={{textDecoration:"none"}}>{staff.lname}</a></td>
                                <td>{staff.lregNo}</td>
                                <td>{staff.lemail}</td>
                                <td>{staff.lcontactNo}</td>
                                <td>{staff.staff}</td>
                                <td>{staff.luserName}</td>
                                <td>{staff.lpwd}</td>
                                <td>
                                <a href={`/editStaff/${staff._id}`} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i>&nbsp;Edit</button></a>
                                
                                &nbsp;
                                <button className="btn btn-danger btn-sm" onClick={() => this.onDelete(staff._id)}><i className="far fa-trash-alt"></i>&nbsp;
                                Delete
                            </button> &nbsp;
                                <a href={`/staffmem/${staff._id}`} ><button className="btn btn-secondary btn-sm"><i className="fa fa-info-circle"></i>&nbsp;View</button></a>
                                </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}