import React, {Component} from "react";
import axios from 'axios';

export default class App extends Component {

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
            </div>
        )
    }
}