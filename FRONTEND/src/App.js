import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//Topic Details Pages
import InsertTopicDtl from './Pages/InsertTopicDtl';
import ViewStTopicDtl from './Pages/ViewStTopicDtl';

export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route path="" exact Component={}></Route>

                    <Route path="/addTDtl" Component={InsertTopicDtl}></Route>
                    <Route path="/addTDtl" Component={ViewStTopicDtl}></Route>

                </div>
            </BrowserRouter>
        )
    }
}