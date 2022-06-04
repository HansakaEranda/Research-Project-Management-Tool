import axios from "axios";
import React,{Component} from "react";

export default class EditStaffMem extends Component {

    constructor(props){
        super(props);
        this.state={
            lname:"",
            lregNo:"",
            lemail:"",
            lcontactNo:"",
            staff:"",
            luserName:"",
            lpwd:""
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

        const {lname, lregNo, lemail, lcontactNo, staff, luserName, lpwd} = this.state;

        const data={
            lname: lname ,
            lregNo: lregNo ,
            lemail: lemail ,
            lcontactNo: lcontactNo ,
            staff: staff ,
            luserName: luserName ,
            lpwd:lpwd 
        }

        console.log(data)

        axios.put(`http://localhost:8000/staff/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Details Updated Successfully")
                this.setState(
                    {
                        lname:"",
                        lregNo:"",
                        lemail:"",
                        lcontactNo:"",
                        staff:"",
                        luserName:"",
                        lpwd:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/staff/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    lname: res.data.staff.lname ,
                    lregNo: res.data.staff.lregNo ,
                    lemail: res.data.staff.lemail ,
                    lcontactNo: res.data.staff.lcontactNo ,
                    staff: res.data.staff.staff ,
                    luserName: res.data.staff.luserName ,
                    lpwd: res.data.staff.lpwd 
                });

                console.log(this.state.staff);
            }
        })
    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Staff Member Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text"
                        className="form-control"
                        name="lname"
                        placeholder="Enter Name"
                        value={this.state.lname}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Register Number</label>
                        <input type="text"
                        className="form-control"
                        name="lregNo"
                        placeholder="ITxxxxxxxx"
                        value={this.state.lregNo}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type="email"
                        className="form-control"
                        name="lemail"
                        placeholder="itxxxxxxxx@my.sliit.lk"
                        value={this.state.lemail}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact Number</label>
                        <input type="tel"
                        className="form-control"
                        name="lcontactNo"
                        value={this.state.lcontactNo}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Type</label>
                        <input type="text"
                        className="form-control"
                        name="staff"
                        value={this.state.staff}
                        onChange={this.handleinputChange}/>
                    </div>



                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Username</label>
                        <input type="text"
                        className="form-control"
                        name="luserName"
                        placeholder="Enter a username"
                        value={this.state.luserName}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Password</label>
                        <input type="password"
                        className="form-control"
                        name="lpwd"
                        placeholder="at least 6 charactors"
                        value={this.state.lpwd}
                        onChange={this.handleinputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
        )
        
    }
}