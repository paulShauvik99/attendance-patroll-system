import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Dashboard';
import ViewEmployee from './Components/ViewEmployee';
import NewEmployee from './Components/NewEmployee';
import ManualAttendance from './Components/ManualAttendance';
import NewUser from './Components/NewUser';
import ViewUser from './Components/ViewUser';
import EditUser from './Components/EditUser';
import ReportAttendance from './Components/ReportAttendance';
import ViewAttendance from './Components/ViewAttendance';
import ViewLeave from './Components/ViewLeave';
import ReportLeave from './Components/ReportLeave';
import AddRole from './Components/AddRole';
import Logout from "./Components/LogOut"
import Login from "./Components/LogIn"



const App = () => {
  return (
    <>
        <Sidebar />
        
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/viewemployee' component={ViewEmployee} />
          <Route exact path='/newemployee' component={NewEmployee} />
          <Route exact path='/attendance' component={ManualAttendance} />
          <Route exact path='/adduser' component={NewUser} />
          <Route exact path='/addrole' component={AddRole} />
          <Route exact path='/viewuser' component={ViewUser} />
          <Route exact path='/viewattendance' component={ViewAttendance} />
          <Route exact path='/viewleave' component={ViewLeave} />
          <Route exact path='/viewuser/edituser/:id' component={EditUser} />
          <Route exact path='/reportattendance' component={ReportAttendance} />
          <Route exact path='/reportleaves' component={ReportLeave} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
    </> 
  )
}

export default App;