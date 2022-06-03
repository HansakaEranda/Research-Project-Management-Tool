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
    import CSuperGet from './Pages/CSuperGet';
    import CSuperView from './Pages/CSuperView';


    //Student Details Pages
    import ViewStudents from './Pages/ViewStudents';
    import EditStudent from './Pages/EditStudent';
    import StudentDetails from './Pages/StudentDetails';

    //Staff Details Pages
    import ViewStaff from './Pages/ViewStaff';
    import EditStaffMem from './Pages/EditStaffMem';
    import StaffMemberDet from './Pages/StaffMemberDet';
    
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
                  <Route path='/editStaff/:id' component={EditStaffMem}/>

                  <Route path='/viewstaff' component={ViewStaff}/>
                  <Route path='/staffmem/:id' component={StaffMemberDet}/>
                  <Route path='/editStudents/:id' component={EditStudent}/>

                  <Route exact path='/addTDtl' component={InsertTopicDtl}/>
                  <Route path='/viewTDtl' component={ViewStTopicDtl}/>
                  <Route path='/sgettopic' component={SuperGetTopic}/>
                  <Route path="/sviewtdtl/:id" component={SuperViewTopic}/>
                  <Route path="/sinviewtdtl/:id" component={ViewSingleTopic}/>
                  <Route path="/csgtdtl" component={CSuperGet}/>
                  <Route path="/csvtdtl/:id" component={CSuperView}/>
                                  
              </Switch>
            </div>
          </Router>
        );
      }
    }
    
    export default App;