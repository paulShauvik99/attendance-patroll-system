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
<<<<<<< HEAD
import ViewRole from './Components/ViewRole';
import Payroll from './Components/Payroll';
import EmployeeProfile from './Components/EmployeeProfile';
import ProfileEdit from './Components/ProfileEdit';
=======
import Logout from "./Components/LogOut"
import Login from "./Components/LogIn"
>>>>>>> 83b901f3eee03fee36f38f3a892e99e62ea84725



const App = () => {
  return (
    <>
        <Sidebar />
        
        <Switch>
          {/* -------------- DASHBOARD ---------------- */}
          <Route exact path='/' component={Dashboard} />

          {/* ---------------- VIEW EMPLOYEE ----------------- */}
          <Route exact path='/viewemployee' component={ViewEmployee} />
          
          {/* ------------------- VIEW EMPLOYEE ---> PROFILE ------------------ */}
          <Route exact path='/viewemployee/profile' component={EmployeeProfile} />

          {/* ---------------------- VIEW EMPLOYEE ---> EDIT PROFILE ------------------ */}
          <Route exact path='/viewemployee/edit' component={ProfileEdit} />
          
          {/* ------------------ NEW EMPLOYEE ------------------ */}
          <Route exact path='/newemployee' component={NewEmployee} />

          {/* -------------- MANUAL ATTENDANCE ----------------- */}
          <Route exact path='/attendance' component={ManualAttendance} />

          {/* -------------------- PAYROLL --------------------- */}
          <Route exact path='/payroll' component={Payroll} />

          {/* ---------------- ADD NEW USER -------------------    */}
          <Route exact path='/adduser' component={NewUser} />

          {/* -------------------- ADD ROLE -----------------------  */}
          <Route exact path='/addrole' component={AddRole} />

          {/* ------------------ VIEW USER -------------------- */}
          <Route exact path='/viewuser' component={ViewUser} />

          {/* -------------------- VIEW ROLE --------------------  */}
          <Route exact path='/viewrole' component={ViewRole} />

          {/* ------------------------- VIEW ATTENDANCE ----------------------- */}
          <Route exact path='/viewattendance' component={ViewAttendance} />

          {/* ------------------------ VIEW LEAVE ---------------------- */}
          <Route exact path='/viewleave' component={ViewLeave} />
<<<<<<< HEAD

          {/* --------------------- VIEW USER ---> EDIT USER ---------------------------  */}
          <Route exact path='/viewuser/edituser' component={EditUser} />

          {/* ------------------ REPORT ----> ATTENDANCE -------------------------  */}
=======
          <Route exact path='/viewuser/edituser/:id' component={EditUser} />
>>>>>>> 83b901f3eee03fee36f38f3a892e99e62ea84725
          <Route exact path='/reportattendance' component={ReportAttendance} />
          
          {/* --------------------- REPORT -----> LEAVES ---------------------- */}
          <Route exact path='/reportleaves' component={ReportLeave} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
        </Switch>
    </> 
  )
}

export default App;