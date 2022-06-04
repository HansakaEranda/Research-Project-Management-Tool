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

    filterData(topics,searchKey){
        const result = topics.filter((topics)=>
        topics.supervisor.includes(searchKey)
        )
        this.setState({topics:result})
    }

    handleSearchArea= (e)=>{
        const searchKey =e.currentTarget.value;
        axios.get("http://localhost:8000/topic").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingTopics,searchKey)
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

    }
    
    render(){
        return(
            <div className="addtopic">
                <div className="ish" style={{padding:"80px", textAlign:"center", paddingTop:"50px"}}> 
                <h2 style={{paddingLeft:"100px"}}>Research Requests: Supervisor</h2> 
                <input className="search" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
            </input><br/><br/>
                <div class="dis" style={{padding:"70px"}}>                       
                
                    {this.state.topics.map((topics,index) => (
                
                <div >                       
                <label><b>Group ID</b></label> {topics.gId} <br/>
                <label><b>Supervisor ID</b></label> {topics.supervisor} <br/>
                <button className="vbtn1" type="button" name="vi" id="vi" onClick={this.action}><a href={`/sviewtdtl/${topics._id}`}><b>View</b></a></button><br/><br/>
                </div>
                ))} 
                <br/>
                <br/>
            </div>
            </div>
            </div>
                             
        ); 
    }
}
export default SuperGetTopic;