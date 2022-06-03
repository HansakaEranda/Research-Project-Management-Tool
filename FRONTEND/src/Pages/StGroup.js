import React, { Component } from "react";
import axios from "axios";

export default class StGroup extends Component {
    constructor(props){
        super(props);

        this.state={
            stgroup:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/stgroups/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    stgroup:res.data.stGroup
                });

                console.log(this.state.stgroup);
            }
        })
    }
    render() {

        const {gLeaderID, gLeaderName, mem1ID, mem1Name, mem2ID, mem2Name, mem3ID, mem3Name} = this.state.stgroup;

        return(
            <div style={{marginTop:'20px'}} className="container">
                <h4>Group Details</h4>
                <hr/>
                
                <dl className="row">
                    <dt className="col-sm-3">Leader ID</dt>
                    <dd className="col-sm-9">{gLeaderID}</dd>

                    <dt className="col-sm-3">Leader Name</dt>
                    <dd className="col-sm-9">{gLeaderName}</dd>

                    <dt className="col-sm-3">Member1 ID</dt>
                    <dd className="col-sm-9">{mem1ID}</dd>

                    <dt className="col-sm-3">Member1 Name</dt>
                    <dd className="col-sm-9">{mem1Name}</dd>

                    <dt className="col-sm-3">Member2 ID</dt>
                    <dd className="col-sm-9">{mem2ID}</dd>

                    <dt className="col-sm-3">Member2 Name</dt>
                    <dd className="col-sm-9">{mem2Name}</dd>

                    <dt className="col-sm-3">Member3 ID</dt>
                    <dd className="col-sm-9">{mem3ID}</dd>

                    <dt className="col-sm-3">Member3 Name</dt>
                    <dd className="col-sm-9">{mem3Name}</dd>

                </dl>
            </div>
        )
    }
}