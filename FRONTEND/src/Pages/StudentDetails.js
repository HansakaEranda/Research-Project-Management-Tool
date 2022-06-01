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
        return(
            <div>
                Student Details
            </div>
        )
    }
}