import React, {Component} from "react";
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
            <div>
                <h1>Research Management Tool</h1>
                {this.state.students.map(students => (
                    <div>
                        <p>{students.stname}</p>
                        <p>{students.regNo}</p>
                        <p>{students.stemail}</p>
                        <p>{students.stuserName}</p>
                        <p>{students.stpwd}</p>
                    </div>
                ))}
            </div>
        )
    }
}



