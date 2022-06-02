    import React, { Component } from 'react';
    import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
    import Home from './Pages/Home';
    import NavBar from './Pages/NavBar';
    

    //Topic Details Pages
    import InsertTopicDtl from './Pages/InsertTopicDtl';
    import ViewStTopicDtl from './Pages/ViewStTopicDtl';
    import SuperGetTopic from './Pages/SuperGetTopic';
    import SuperViewTopic from './Pages/SuperViewTopic';
    import ViewSingleTopic from './Pages/ViewSingleTopic';

    //Student Details Pages
    import ViewStudents from './Pages/ViewStudents';
    import EditStudent from './Pages/EditStudent';
    import StudentDetails from './Pages/StudentDetails';

    
    class App extends Component {
      render() {
        return (
        <Router>
            <div>
              <NavBar />
              <Switch>
                  <Route exact path='/' component={Home} />

                  <Route path='/viewstudents' component={ViewStudents}/>
                  <Route path='/student/:id' component={StudentDetails}/>
                  <Route path='/editStudents/:id' component={EditStudent}/>

                  <Route exact path='/addTDtl' component={InsertTopicDtl}/>
                  <Route path='/viewTDtl' component={ViewStTopicDtl}/>
                  <Route path='/sgettopic' component={SuperGetTopic}/>
                  <Route path="/sviewtdtl" component={SuperViewTopic}/>
                  <Route path="/sinviewtdtl" component={ViewSingleTopic}/>
                                  
              </Switch>
            </div>
          </Router>
        );
      }
    }
    
    export default App;