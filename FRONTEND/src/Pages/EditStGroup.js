import axios from "axios";
import React,{Component} from "react";

export default class EditStGroup extends Component {

    constructor(props){
        super(props);
        this.state={
            gLeaderID:"", 
            gLeaderName:"", 
            mem1ID:"", 
            mem1Name:"", 
            mem2ID:"", 
            mem2Name:"", 
            mem3ID:"", 
            mem3Name:""
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

        const {gLeaderID, gLeaderName, mem1ID, mem1Name, mem2ID, mem2Name, mem3ID, mem3Name} = this.state;

        const data={
            gLeaderID:gLeaderID, 
            gLeaderName:gLeaderName, 
            mem1ID:mem1ID, 
            mem1Name:mem1Name, 
            mem2ID:mem2ID, 
            mem2Name:mem2Name, 
            mem3ID:mem3ID, 
            mem3Name:mem3Name
        }

        console.log(data)

        axios.put(`http://localhost:8000/stgroups/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert("Details Updated Successfully")
                this.setState(
                    {
                        gLeaderID:"", 
                        gLeaderName:"", 
                        mem1ID:"", 
                        mem1Name:"", 
                        mem2ID:"", 
                        mem2Name:"", 
                        mem3ID:"", 
                        mem3Name:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/stgroups/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    gLeaderID:res.data.stGroup.gLeaderID, 
                    gLeaderName:res.data.stGroup.gLeaderName, 
                    mem1ID:res.data.stGroup.mem1ID, 
                    mem1Name:res.data.stGroup.mem1Name, 
                    mem2ID:res.data.stGroup.mem2ID, 
                    mem2Name:res.data.stGroup.mem2Name, 
                    mem3ID:res.data.stGroup.mem3ID, 
                    mem3Name:res.data.stGroup.mem3Name
                });

                console.log(this.state.stGroup);
            }
        })
    }

    render(){
        return(
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Edit Group Details</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Leader ID</label>
                        <input type="text"
                        className="form-control"
                        name="gLeaderID"
                        placeholder="ITxxxxxxxx"
                        value={this.state.gLeaderID}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Leader Name</label>
                        <input type="text"
                        className="form-control"
                        name="gLeaderName"
                        placeholder="Enter Name"
                        value={this.state.gLeaderName}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Member1 ID</label>
                        <input type="text"
                        className="form-control"
                        name="mem1ID"
                        placeholder="itxxxxxxxx"
                        value={this.state.mem1ID}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Member1 Name</label>
                        <input type="text"
                        className="form-control"
                        name="mem1Name"
                        placeholder="Enter Name"
                        value={this.state.mem1Name}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Member2 ID</label>
                        <input type="text"
                        className="form-control"
                        name="mem2ID"
                        placeholder="itxxxxxxxx"
                        value={this.state.mem2ID}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Member2 Name</label>
                        <input type="text"
                        className="form-control"
                        name="mem2Name"
                        placeholder="Enter Name"
                        value={this.state.mem2Name}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Member3 ID</label>
                        <input type="text"
                        className="form-control"
                        name="mem3ID"
                        placeholder="itxxxxxxxx"
                        value={this.state.mem3ID}
                        onChange={this.handleinputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Member3 Name</label>
                        <input type="text"
                        className="form-control"
                        name="mem3Name"
                        placeholder="Enter Name"
                        value={this.state.mem3Name}
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