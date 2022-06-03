import React, { Component } from "react";
import axios from "axios";

export default class StudentDetails extends Component {
    
    constructor(props){
        super(props);

        this.state={
            student:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/students/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    student:res.data.student
                });

                console.log(this.state.student);
            }
        })
    }

    render() {

        const {stname, regNo, stemail, stuserName, stpwd} = this.state.student;

        return(
            <div style={{marginTop:'20px'}} className="container">
                <h4>{stname}</h4>
                <hr/>
                
                <dl className="row">
                    <dt className="col-sm-3">Register Number</dt>
                    <dd className="col-sm-9">{regNo}</dd>

                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{stemail}</dd>

                    <dt className="col-sm-3">Username</dt>
                    <dd className="col-sm-9">{stuserName}</dd>

                    <dt className="col-sm-3">Password</dt>
                    <dd className="col-sm-9">{stpwd}</dd>

                </dl>
            </div>
        )
    }
}