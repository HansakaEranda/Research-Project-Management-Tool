import React, {Component} from "react";
import { BrowserRouter as  Link } from 'react-router-dom';
import App from "../App";
import axios from 'axios';

export default class ViewStGroups extends Component {

    constructor(props){
        super(props);
    
        this.state={
            stgroups:[]
        };
    }

    componentDidMount(){
        this.retrieveStGroups();
    }
    
    retrieveStGroups(){
        axios.get("http://localhost:8000/stgroups").then(res => {
            if (res.data.success) {
                this.setState({
                    stgroups:res.data.existingStGroups
                });
                console.log(this.state.stgroups)
            }
        });
    }

    onDelete = (id) => {
        axios.delete(`http://localhost:8000/stgroups/delete/${id}`).then((res) => {
            alert("Delete Successfully");
            this.retrieveStGroups();
        })
    }

    render(){
        return (
            <div className="container">
                <h1>Research Management Tool</h1>
                <p>All Student Groups</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Leader ID</th>
                            <th scope="col">Leader Name</th>
                            <th scope="col">Member 1(ID)</th>
                            <th scope="col">Member 1(Name)</th>
                            <th scope="col">Member 2(ID)</th>
                            <th scope="col">Member 2(Name)</th>
                            <th scope="col">Member 3(ID)</th>
                            <th scope="col">Member 3(Name)</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.stgroups.map((stgroups,index) => (
                        <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td><a href={`/stgroup/${stgroups._id}`} style={{textDecoration:"none"}}>{stgroups.gLeaderID}</a></td>
                                <td>{stgroups.gLeaderName}</td>
                                <td>{stgroups.mem1ID}</td>
                                <td>{stgroups.mem1Name}</td>
                                <td>{stgroups.mem2ID}</td>
                                <td>{stgroups.mem2Name}</td>
                                <td>{stgroups.mem3ID}</td>
                                <td>{stgroups.mem3Name}</td>
                                <td>
                                <a href={`/editstgroup/${stgroups._id}`} ><button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i>&nbsp;Edit</button></a>
                                
                                &nbsp;
                                <button className="btn btn-danger btn-sm" onClick={() => this.onDelete(stgroups._id)}><i className="far fa-trash-alt"></i>&nbsp;
                                Delete
                            </button> &nbsp;
                                <a href={`/stgroup/${stgroups._id}`} ><button className="btn btn-secondary btn-sm"><i className="fa fa-info-circle"></i>&nbsp;View</button></a>
                                </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}