<<<<<<< Updated upstream
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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

//Student Group Details Pages
import ViewStGroups from './Pages/ViewStGroups';
import EditStGroup from './Pages/EditStGroup';
import StGroup from './Pages/StGroup';
import CreateStGroup from './Pages/CreateStGroup';

//loginpages
import Login from './Pages/Login';
import Register from './Pages/register';
import Home from './Pages/Home';

//staff login pages
import StaffLogin from './Pages/StaffLogin';
import StaffRegister from './Pages/StaffRegister';
import StaffHome from './Pages/StaffHome';


  function App(){

  const [ students, setLoginUser] = useState({});
  const [ staff, setLoginStaff] = useState({});
    return (
      
    <Router>
        <div>
          <NavBar />
          <Switch>
              <Route exact path='/'>
                {
                  students && students._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
                }
              </Route>

              <Route path='/login'>
              <Login setLoginUser={setLoginUser}/>
              </Route>
              <Route path='/register' component={Register}/>


              <Route path='/staffhome'>
                {
                  staff && staff._id ? <StaffHome setLoginStaff={setLoginStaff} /> : <StaffLogin setLoginStaff={setLoginStaff}/>
                }
              </Route>

              <Route path='/lclogin'>
              <Login setLoginStaff={setLoginStaff}/>
              </Route>
              <Route path='/lcregister' component={StaffRegister}/>

              <Route path='/viewstudents' component={ViewStudents}/>
              <Route path='/student/:id' component={StudentDetails}/>
              <Route path='/editStaff/:id' component={EditStaffMem}/>

              <Route path='/viewstaff' component={ViewStaff}/>
              <Route path='/staffmem/:id' component={StaffMemberDet}/>
              <Route path='/editStudents/:id' component={EditStudent}/>

              <Route path='/viewstgroups' component={ViewStGroups}/>
              <Route path='/stgroup/:id' component={StGroup}/>
              <Route path='/editstgroup/:id' component={EditStGroup}/>
              <Route path='/addstgroup' component={CreateStGroup}/>

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

export default App;
=======
    import React, { Component } from 'react';
    import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
    import Home from './Pages/Home';
    import NavBar from './Pages/NavBar';
    import Admin from './Pages/Admin'
    

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
    import ViewSpecificStaff from './Pages/ViewSpecificStaff';

    //Student Group Details Pages
    import ViewStGroups from './Pages/ViewStGroups';
    import EditStGroup from './Pages/EditStGroup';
    import StGroup from './Pages/StGroup';
    import CreateStGroup from './Pages/CreateStGroup';
    
    class App extends Component {
      render() {
        return (
        <Router>
            <div>
              <NavBar />
              <Switch>
                  <Route exact path='/' component={Home} />

                  <Route path='/admin' component={Admin}/>

                  <Route path='/viewstudents' component={ViewStudents}/>
                  <Route path='/student/:id' component={StudentDetails}/>
                  <Route path='/editStaff/:id' component={EditStaffMem}/>
                  <Route path='/specStaff' component={ViewSpecificStaff}/>

                  <Route path='/viewstaff' component={ViewStaff}/>
                  <Route path='/staffmem/:id' component={StaffMemberDet}/>
                  <Route path='/editStudents/:id' component={EditStudent}/>

                  <Route path='/viewstgroups' component={ViewStGroups}/>
                  <Route path='/stgroup/:id' component={StGroup}/>
                  <Route path='/editstgroup/:id' component={EditStGroup}/>
                  <Route path='/addstgroup' component={CreateStGroup}/>

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
>>>>>>> Stashed changes
