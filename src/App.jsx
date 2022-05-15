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
          <Route exact path='/viewuser' component={ViewUser} />
          <Route exact path='/viewuser/edituser' component={EditUser} />
        </Switch>
    </> 
  )
}

export default App;