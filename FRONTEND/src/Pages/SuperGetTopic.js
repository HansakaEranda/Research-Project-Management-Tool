import axios from 'axios';
import React, {Component} from 'react';

const vState = {
    vi:"",
    viewed:""
}

class SuperGetTopic extends Component{
    state = vState;

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

    action = () => {
        let viewed = "";       

        if(!this.state.vi){
            viewed = "Viewed";
        }

        if(viewed){
            this.setState({viewed});
            return false;
        }

        return true;
    }
    
    render(){
        return(
            
                <div >
                    <div class="cont"><h2>Research Requests</h2></div>
                    {this.state.topics.map((topics,index) => (
                 
                <div>                       
                <label><b>Group ID</b></label>{topics.gId}<button type="button" name="vi" id="vi" onClick={this.action}><a href={`/sviewtdtl/${topics._id}`}>View</a></button>
                <b style={{color: "red"}}>{this.state.viewed}</b>
                    </div>
                    ))} 
                <br/>
                <br/>
            </div>
                             
        ); 
    }
}
export default SuperGetTopic;