import axios from 'axios';
import React, {Component} from 'react';

const rState = {
    ac:"",
    dc:"",
    accepted:"",
    declined:""
}

export default class SuperViewTopic extends Component{
    state = rState;

    constructor(props){
        super(props)
        this.state = {
            topics:{}
        };
    }

    componentDidMount(){
        this.displayTopic();
    }

    displayTopic(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8000/topic/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    topics:res.data.topics
                });
                console.log(this.state.topics);
            }
        });
    }

    decision1 = () => {
        let accepted = "";       

        if(!this.state.ac){
            accepted = "Accepted";
        }

        if(accepted){
            this.setState({accepted});
            return false;
        }

        return true;
    }

    decision2 = () => {
        let declined = "";

        if(!this.state.dc){
            declined = "Declined";
        }

        if(declined){
            this.setState({declined});
            return true;
        }

        return true;
    }
    
    render(){
        const {gId, gLeader, mem1, mem2, mem3, topic, supervisor} = this.state.topics;
        return(
            
                <div >
                <div >
                <div class="cont"><h2>Topic Details</h2></div>
                                                 
           <div>
               <label><b>Group ID - </b></label> {gId}<br/>

               <label><b>Group Leader - </b></label> {gLeader}<br/>

               <label><b>Member 1 - </b></label> {mem1}<br/>

               <label><b>Member 2 - </b></label> {mem2}<br/>

               <label><b>Member 3 - </b></label> {mem3}<br/>

               <label><b>Topic - </b></label> {topic}<br/>

               <label><b>Supervisor - </b></label> {supervisor}<br/>

           </div>
                <button name="ac" id="ac" onClick={this.decision1}>Accept</button>
                <button name="dc" id="dc" onClick={this.decision2}>Decline</button><br/><br/>
                <div style={{color: "red"}}><b>{this.state.accepted}</b></div>
                <div style={{color: "red"}}><b>{this.state.declined}</b></div>
                <button type="button"><a href="/sgettopic" style={{textDecoration:'none',color:'black'}}>Back</a></button><br/>
                <br/><br/></div>
            </div>
        ); 
    }
}