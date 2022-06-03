import React, { Component } from "react";
import axios from "axios";

export default class StaffMemberDet extends Component {

    constructor(props){
        super(props);

        this.state={
            staffmem:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/staff/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    staffmem:res.data.staff
                });

                console.log(this.state.staffmem);
            }
        })
    }

    render() {

        const {lname, lregNo, lemail, lcontactNo, staff, luserName, lpwd} = this.state.staffmem;

        return(
            <div style={{marginTop:'20px'}} className="container">
                <h4>{lname}</h4>
                <hr/>
                
                <dl className="row">
                    <dt className="col-sm-3">Register Number</dt>
                    <dd className="col-sm-9">{lregNo}</dd>

                    <dt className="col-sm-3">Email</dt>
                    <dd className="col-sm-9">{lemail}</dd>

                    <dt className="col-sm-3">Contact Number</dt>
                    <dd className="col-sm-9">{lcontactNo}</dd>

                    <dt className="col-sm-3">Type</dt>
                    <dd className="col-sm-9">{staff}</dd>

                    <dt className="col-sm-3">Username</dt>
                    <dd className="col-sm-9">{luserName}</dd>

                    <dt className="col-sm-3">Password</dt>
                    <dd className="col-sm-9">{lpwd}</dd>

                </dl>
            </div>
        )
    }
}