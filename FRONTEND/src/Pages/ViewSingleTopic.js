import React, {Component} from "react";
import axios from "axios";

export default class ViewSingleTopic extends Component{
    constructor(props){
        super(props);
        this.state={
            topics:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:8000/topic/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    topics:res.data.topics
                });
                console.log(this.state.topics);
            }
        });
    }
    render(){
        const {gId, gLeader, mem1, mem2, mem3, topic} = this.state.topics;
      return(
        
        <div>                    

           <div>
               <label><b>Group ID - </b></label> {gId}<br/>

               <label><b>Group Leader - </b></label> {gLeader}<br/>

               <label><b>Member 1 - </b></label> {mem1}<br/>

               <label><b>Member 2 - </b></label> {mem2}<br/>

               <label><b>Member 3 - </b></label> {mem3}<br/>

               <label><b>Topic - </b></label> {topic}<br/>

           </div>
  
        </div>
       
      )
    }
  }