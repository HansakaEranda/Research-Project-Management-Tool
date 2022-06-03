import axios from 'axios';
import React, {Component} from 'react';

class CSuperGet extends Component{
    constructor(props){
        super(props)
        this.state = {
            topics:[]
        };
    }

    componentDidMount(){
        this.displayTopic();
    }

    displayTopic(){
        axios.get("http://localhost:8000/topic").then((res) => {
            if(res.data.success){
                this.setState({
                    topics:res.data.existingTopics
                });
                console.log(this.state.topics);
            }
        });
    }
    
    render(){
        return(
            
            <div className="addtopic">
                <div className="ish" style={{padding:"80px"}}> 
                <div class="cont"><h2>Research Requests</h2></div>
                    {this.state.topics.map((topics,index) => (
                 
                <div class="dis" style={{padding:"120px"}}>                       
                <label><b>Group ID</b></label> {topics.gId} <button className="vbtn" type="button" ><a href={`/csvtdtl/${topics._id}`}><b>View</b></a></button><br/>
                </div>
                ))} 
                <br/>
                <br/>
                </div>
            </div>
                             
        ); 
    }
}
export default CSuperGet;