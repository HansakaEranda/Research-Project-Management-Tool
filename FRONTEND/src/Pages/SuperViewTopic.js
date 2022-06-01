import axios from 'axios';
import React, {Component} from 'react';

class SuperViewTopic extends Component{
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
        axios.get("/topic/:id").then((res) => {
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
            
                <div >
                <div >
                <div class="cont"><h2>Topic Details</h2></div>                         
                <div>
                
                <table>
                        <tr>
                            <th scope="col">Group ID</th>
                            <th scope="col">Group Leader</th>
                            <th scope="col">Member 1</th>
                            <th scope="col">Member 2</th>
                            <th scope="col">Member 3</th>
                            <th scope="col">Topic</th>
                            
                        </tr>
                    <tbody>
                        {this.state.topics.map((topics,index) => (
                            <tr>
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
                <button>Accept    </button><button>Decline</button><br/><br/>
                <button type="button" ><a href="/sgettopic" style={{textDecoration:'none',color:'black'}}>Back</a></button><br/>
                <br/><br/></div>
            </div>
            </div>
        ); 
    }
}
export default SuperViewTopic;