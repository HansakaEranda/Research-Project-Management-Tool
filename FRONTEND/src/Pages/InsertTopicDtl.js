import React, {Component} from 'react';

export default class InsertTopicDtl extends Component{

    constructor(props){
        super(props);
        this.state={
            gId:"",
            gLeader:"",
            mem1:"",
            mem2:"",
            mem3:"",
            topic:""
        }
    }

    InputChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const [gId, gLeader, mem1, mem2, mem3, topic] = this. state;

        const data = {
            gId:gId,
            gLeader:gLeader,
            mem1:mem1,
            mem2:mem2,
            mem3:mem3,
            topic:topic
        }

        axios.post("/topic/insert", data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        gId:"",
                        gLeader:"",
                        mem1:"",
                        mem2:"",
                        mem3:"",
                        topic:""
                    }
                )
            }
        })
    }

    render(){
        return(
            <div>
                <form class="container">               
                    <h1>Insert Topic Details</h1>
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
                            placeholder="Eg:Perera K.L." 
                            value={this.state.topic} 
                            onChange={this.InputChange}/>
                        </div>
                        <div style={{color: "red"}}>{this.state.topicError}</div>

                        <button type="submit" onClick={this.onSubmit} >Submit</button><br/>
                
                </form>
            </div>
        )
    }
}