import React, {Component} from 'react';
import axios from 'axios';

const dState = {
    gId:"",
    gLeader:"",
    mem1:"",
    mem2:"",
    mem3:"",
    topic:"",
    supervisor:"",
    gIdError:"",
    gLeaderError:"",
    mem1Error:"",
    mem2Error:"",
    mem3Error:"",
    topicError:"",
    supervisorError:""
}

export default class InsertTopicDtl extends Component{
    state = dState;
    
    validate = () => {
        let gIdError = "";
        let gLeaderError = "";
        let mem1Error = "";
        let mem2Error = "";
        let mem3Error = "";
        let topicError = "";
        let supervisorError = "";

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

        if(gIdError || gLeaderError || mem1Error || mem2Error ||mem3Error || topicError || supervisorError){
            this.setState({gIdError, gLeaderError, mem1Error, mem2Error, mem3Error, topicError, supervisorError});
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
        const{gId, gLeader, mem1, mem2, mem3, topic, supervisor} = this.state;

        const tpDtl = {
            gId:gId,
            gLeader:gLeader,
            mem1:mem1,
            mem2:mem2,
            mem3:mem3,
            topic:topic,
            supervisor:supervisor
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
                        supervisor:""
                })
            }
        }).catch((err)=>{
            alert(err)
        })
    };
    }

    render(){
        return (
            <div>
                <form class="container">
                    <button className="abtn" type="button"><a href="/viewTDtl" style={{textDecoration:'none',color:'black'}} required>View Details</a></button>
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
                    <div style={{color: "red"}}>{this.state.topicError}</div>

                    <div>
                        <label name="supervisor">Supervisor</label><br/>
                        <select>
                                <option value="0">Select Supervisor</option>
                                <option value="1">Prof. Sarath Gunawardhane</option>
                                <option value="2">Prof. Prageeth Wijayawardhane</option>
                                <option value="3">Prof. Anjaleena Fernandez</option>
                                <option value="4">Prof. Kamal Rajasooriya</option>
                                <option value="5">Prof. Bimal Perera</option>
                                <option value="6">Prof. Gihan Satharasinghe</option>
                        </select>
                    </div>

                    <br/><br/>
                    <button type="submit" onClick={this.onSubmit} >Save</button><br/>
                           
                </form> 
            </div>
        )
    }
}