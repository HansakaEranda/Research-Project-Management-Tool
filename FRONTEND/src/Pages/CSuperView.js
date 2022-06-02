import axios from 'axios';
import React, {Component} from 'react';

class CSuperView extends Component{
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
    
    render(){
        const {gId, gLeader, mem1, mem2, mem3, topic} = this.state.topics;
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

           </div>
                <button>Accept    </button><button>Decline</button><br/><br/>
                <button type="button" ><a href="/csgtdtl" style={{textDecoration:'none',color:'black'}}>Back</a></button><br/>
                <br/><br/></div>
            </div>
        ); 
    }
}
export default CSuperView;