import axios from 'axios';
import React, {Component} from 'react';

class ViewStTopicDtl extends Component{
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
        topics.gId.includes(searchKey)||
        topics.gLeader.includes(searchKey)||
        topics.mem1.includes(searchKey)||
        topics.mem2.includes(searchKey)||
        topics.mem3.includes(searchKey)||
        topics.topic.includes(searchKey)
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
    
    render(){
        return(
            
                <div className="container">
                <div >
                <h2>All Topic Details</h2>                        
                <div>
                <input className="search" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}>
            </input>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Group ID</th>
                            <th scope="col">Group Leader</th>
                            <th scope="col">Member 1</th>
                            <th scope="col">Member 2</th>
                            <th scope="col">Member 3</th>
                            <th scope="col">Topic</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.topics.map((topics,index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td><a href={`/topic/${topics._id}`}>{topics.gId}</a></td>
                                <td><a href={`/topic/${topics._id}`}>{topics.gLeader}</a></td>
                                <td><a href={`/topic/${topics._id}`}>{topics.mem1}</a></td>
                                <td><a href={`/topic/${topics._id}`}>{topics.mem2}</a></td>
                                <td><a href={`/topic/${topics._id}`}>{topics.mem3}</a></td>
                                <td><a href={`/topic/${topics._id}`}>{topics.topic}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" ><a href="/addtdtl" style={{textDecoration:'none',color:'black'}}>Add new</a></button><br/>
                <br/><br/></div>
            </div>
            </div>
        ); 
    }
}
export default ViewStTopicDtl;