import React, {Component} from "react";
import { BrowserRouter as  Link } from 'react-router-dom';
import App from "../App";
import axios from 'axios';

export default class ViewSpecificStaff extends Component {

    constructor(props){
        super(props);
    
        this.state={
            staff:[],
        };
    }

    

    componentDidMount(){
        this.redtrievedata();
    }
    
    

    filterData1(staff){
        const result = staff.filter((staffmem) =>
            staffmem.staff === "Supervisor"
        )

        this.setState({staff:result})
    }

    redtrievedata1(){
        axios.get("http://localhost:8000/getstaff").then(res => {
            if (res.data.success) {
                this.setState({
                    specstaff:this.filterData1(res.data.staff)
                })
                console.log(this.state.specstaff)
            }
        });
    }

    

    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact Number</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.staff.map((staff,index) => (
                        <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{staff.lname}</td>
                                <td>{staff.lemail}</td>
                                <td>{staff.lcontactNo}</td>
                                <td>{staff.staff}</td>   
                        </tr>
                    ))}
                    </tbody>
                </table>

               
            </div>
        )
    }
    
}