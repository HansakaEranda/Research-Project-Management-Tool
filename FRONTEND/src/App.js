import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//Topic Details Pages
import InsertTopicDtl from './Pages/InsertTopicDtl';
import ViewStTopicDtl from './Pages/ViewStTopicDtl';
import ViewStudents from './Pages/ViewStudents';

export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    

                    <Route path="/addTDtl" Component={InsertTopicDtl}></Route>
                    <Route path="/addTDtl" Component={ViewStTopicDtl}></Route>
                    <Route path="/viewstudents" Component={ViewStudents}></Route>

                </div>
            </BrowserRouter>
        )
    }
}