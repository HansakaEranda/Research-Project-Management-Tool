import axios from "axios";
import React,{Component} from "react";

export default class EditStudent extends Component{

    constructor(props){
        super(props);
        this.state={
            stname:"",
            regNo:"",
            stemail:"",
            stuserName:"",
            stpwd:"",
        }
    }

    handleinputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {stname,regNo,stemail,stuserName,stpwd} = this.state;

        const data={
            stname:stname,
            regNo:regNo,
            stemail:stemail,
            stuserName:stuserName,
            stpwd:stpwd
        }

        console.log(data)

        axios.put(`/students/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Details Updated Successfully")
                this.setState(
                    {
                        stname:"",
                        regNo:"",
                        stemail:"",
                        stuserName:"",
                        stpwd:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/students/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    stname:res.data.student.stname,
                    regNo:res.data.student.regNo,
                    stemail:res.data.student.stemail,
                    stuserName:res.data.student.stuserName,
                    stpwd:res.data.student.stpwd
                });

                console.log(this.state.student);
            }
        })
    }


    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Student Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Student Name</label>
                        <input type="text"
                        className="form-control"
                        name="stname"
                        placeholder="Enter Name"
                        value={this.state.stname}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Register Number</label>
                        <input type="text"
                        className="form-control"
                        name="regNo"
                        placeholder="ITxxxxxxxx"
                        value={this.state.regNo}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="email"
                        className="form-control"
                        name="stemail"
                        placeholder="itxxxxxxxx@my.sliit.lk"
                        value={this.state.stemail}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Username</label>
                        <input type="text"
                        className="form-control"
                        name="stuserName"
                        placeholder="Enter a username"
                        value={this.state.stuserName}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Password</label>
                        <input type="password"
                        className="form-control"
                        name="stpwd"
                        placeholder="at least 6 charactors"
                        value={this.state.stpwd}
                        onChange={this.handleinputChange}/>
                    </div>
                </form>
            </div>
        )
        
    }
}