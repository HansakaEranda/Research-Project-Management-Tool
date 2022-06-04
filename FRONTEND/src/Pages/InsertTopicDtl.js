import React, {Component} from 'react';
import axios from 'axios';
import '../index.css';

const dState = {
    gId:"",
    gLeader:"",
    mem1:"",
    mem2:"",
    mem3:"",
    topic:"",
    supervisor:"",
    csupervisor:"",
    gIdError:"",
    gLeaderError:"",
    mem1Error:"",
    mem2Error:"",
    mem3Error:"",
    topicError:"",
    supervisorError:"",
    csupervisorError:"",
}

export default class InsertTopicDtl extends Component{
    state = dState;

    constructor(props){
        super(props);
    
        this.state={
            staff:[],
            staff1:[]
        };
    }

    componentDidMount(){
        this.redtrievedata();
        this.redtrievedata1();
    }

    filterData(staff){
        const result = staff.filter((staffmem) =>
            staffmem.staff === "Supervisor"
        )

        this.setState({staff:result})
    }

    filterData1(staff1){
        const result = staff1.filter((staffmem) =>
            staffmem.staff === "Co-supervisor"
        )

        this.setState({staff1:result})
    }
    
    redtrievedata(){
        axios.get("http://localhost:8000/getstaff").then(res => {
            if (res.data.success) {
                this.setState({
                    specstaff:this.filterData(res.data.staff)
                })
                console.log(this.state.specstaff)
            }
        });
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

    validate = () => {
        let gIdError = "";
        let gLeaderError = "";
        let mem1Error = "";
        let mem2Error = "";
        let mem3Error = "";
        let topicError = "";
        let supervisorError = "";
        let csupervisorError = "";

        if(!this.state.gId){
            gIdError = 'Group ID field cannot be empty!';
        }

        if(!this.state.gLeader){
            gLeaderError = 'Group Leaders\' field cannot be empty!';
        }

        if(!this.state.mem1){
            mem1Error = 'Member 1 field cannot be empty!';
        }

        if(!this.state.mem2){
            mem2Error = 'Member 2 field cannot be empty!';
        }

        if(!this.state.mem3){
            mem3Error = 'Member 3 field cannot be empty!';
        }

        if(!this.state.topic){
            topicError = 'Topic field cannot be empty!';
        }

        if(!this.state.supervisor){
            topicError = 'Supervisor field cannot be empty!';
        }

        if(!this.state.csupervisor){
            topicError = 'Co-Supervisor field cannot be empty!';
        }

        if(gIdError || gLeaderError || mem1Error || mem2Error ||mem3Error || topicError || supervisorError || csupervisorError){
            this.setState({gIdError, gLeaderError, mem1Error, mem2Error, mem3Error, topicError, supervisorError, csupervisorError});
            return false;
        }

        return true;
    }

    InputChange =(e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }


    onSubmit = (e) =>{
        e.preventDefault();
        const{gId, gLeader, mem1, mem2, mem3, topic, supervisor, csupervisor} = this.state;

        const tpDtl = {
            gId:gId,
            gLeader:gLeader,
            mem1:mem1,
            mem2:mem2,
            mem3:mem3,
            topic:topic,
            supervisor:supervisor,
            csupervisor:csupervisor
        }

        //console.log(customer)
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            this.setState(dState);
    
        axios.post("http://localhost:8000/topic/insert",tpDtl).then((res) => {               
            alert("Details added successfully!");
            if(res.data.success){
                this.setState({
                    gId:"",
                    gLeader:"",
                    mem1:"",
                    mem2:"",
                    mem3:"",
                    topic:"",
                    supervisor:"",
                    csupervisor:"",
                })
            }
        }).catch((err)=>{
            alert(err)
        })
    };
    }

    render(){
        return (
            <div className="addtopic">
                <div className="ish">
                <button className="abtn" type="button"><a href="/viewTDtl" style={{textDecoration:'none',color:'black'}} required><b>View Details</b></a></button>
                <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center", }}>
                    <div >
                    <h2>Insert Topic Details</h2>

                    <div>
                        <label name="gId">Group ID</label><br/>
                        <input type="text" 
                            name='gId' 
                            id='gId' 
                            placeholder="Eg:G001" 
                            value={this.state.gId} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.gIdError}</div>
                    
                    <div>
                        <label name="gLeader">Group Leader</label><br/>
                        <input type="text" 
                            name='gLeader' 
                            id='gLeader' 
                            placeholder="Eg:Perera K.L." 
                            value={this.state.gLeader} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.gLeaderError}</div>

                    <div>
                        <label name="mem1">Member 1</label><br/>
                        <input type="text" 
                            name='mem1' 
                            id='mem1' 
                            placeholder="Eg:Perera K.L." 
                            value={this.state.mem1} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.mem1Error}</div>

                    <div>
                        <label name="mem2">Member 2</label><br/>
                        <input type="text" 
                            name='mem2' 
                            id='mem2' 
                            placeholder="Eg:Perera K.L." 
                            value={this.state.mem2} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.mem2Error}</div>

                    <div>
                        <label name="mem3">Member 3</label><br/>
                        <input type="text" 
                            name='mem3' 
                            id='mem3' 
                            placeholder="Eg:Perera K.L." 
                            value={this.state.mem3} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.mem3Error}</div>

                    <div>
                        <label name="topic">Topic</label><br/>
                        <input type="text" 
                            name='topic' 
                            id='topic' 
                            placeholder="Eg:Management Tool" 
                            value={this.state.topic} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.topicError}</div><br/>


                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Reg.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.staff.map((staff,index) => (
                                    <tr key={index}>
                                    <th>{staff.lregNo}</th>
                                    <td>{staff.lname}</td>
                                    <td>{staff.staff}</td>   
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <label name="supervisor">Supervisor (Enter ID of the supervisor you are requesting by searching above details) </label><br/>
                        <input type="text" 
                            name='supervisor' 
                            id='supervisor' 
                            placeholder="Eg:Perera M.F." 
                            value={this.state.supervisor} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.supervisorError}</div>

                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Reg.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.staff1.map((staff,index) => (
                                    <tr key={index}>
                                    <th>{staff.lregNo}</th>
                                    <td>{staff.lname}</td>
                                    <td>{staff.staff}</td>   
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <label name="csupervisor">Co-Supervisor (Enter ID of the co-supervisor you are requesting by searching above details)</label><br/>
                        <input type="text" 
                            name='csupervisor' 
                            id='csupervisor' 
                            placeholder="Eg:Perera M.F." 
                            value={this.state.csupervisor} 
                            onChange={this.InputChange}/>
                    </div>
                    <div style={{color: "red"}}>{this.state.csupervisorError}</div>

                    <br/><br/>
                    <button className="sbtn" type="submit" onClick={this.onSubmit} ><b>Save</b></button><br/>
                    </div>
                </form> 
                </div>
            </div>
        )
    }
}