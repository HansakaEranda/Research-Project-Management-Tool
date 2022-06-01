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
    
    render(){
        return(
            
                <div className="container">
                <div >
                <h2>All Topic Details</h2>                        
                <div>
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
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
                                <td>{topics.gId}</td>
                                <td>{topics.gLeader}</td>
                                <td>{topics.mem1}</td>
                                <td>{topics.mem2}</td>
                                <td>{topics.mem3}</td>
                                <td>{topics.topic}</td>
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