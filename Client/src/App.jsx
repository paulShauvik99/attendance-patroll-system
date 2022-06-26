import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
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
import ViewRole from './Components/ViewRole';
import Payroll from './Components/Payroll';
import EmployeeProfile from './Components/EmployeeProfile';
import ProfileEdit from './Components/ProfileEdit';
import Login from './Components/LogIn';
import Logout from './Components/LogOut';
import Payslip from './Components/Payslip';
import EmployeeSidebar from './Components/EmployeeSidebar';
import EmployeeDashboard from './Components/EmployeeDashboard';
import LeaveApplication from './Components/LeaveApplication';
import EmployeeViewAttendance from './Components/EmployeeViewAttendance';
import EmployeeEditAttendance from './Components/EmployeeEditAttendance';
import LeaveSettings from './Components/LeaveSettings'
import EmployeePayroll from "./Components/EmployeePayroll"
import EmployeeViewLeaves from './Components/EmployeeViewLeaves'


const App = () => {
  const history = useHistory();
  const [sets, setSets] = useState(true)
  return (

    <>
     
      {
        <div>
          {
            (sets === true) ?
              <div>
                {/* <Sidebar /> */}
                <EmployeeSidebar/>
                <Switch>
                  <div>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/employee/Dashboard' component={EmployeeDashboard} />
                    <Route exact path='/leaveapplication' component={LeaveApplication} />
                    <Route exact path='/employee/payroll' component={EmployeePayroll} />
                    <Route exact path='/employeeviewattendance' component={EmployeeViewAttendance} />
                    <Route exact path='/employeeviewattendance/edit' component={EmployeeEditAttendance} />
                    <Route exact path='/employeeviewleaves' component={EmployeeViewLeaves} />

                    {/* ---------------- VIEW EMPLOYEE ----------------- */}
                    <Route exact path='/viewemployee' component={ViewEmployee} />

                    {/* ------------------- VIEW EMPLOYEE ---> PROFILE ------------------ */}
                    <Route exact path='/viewemployee/profile/:id' component={EmployeeProfile} />

                    {/* ---------------------- VIEW EMPLOYEE ---> EDIT PROFILE ------------------ */}
                    <Route exact path='/viewemployee/edit/:id' component={ProfileEdit} />

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
                    <Route exact path='/leavesetting' component={LeaveSettings} />
                    <Route exact path='/viewuser/edituser/:id' component={EditUser} />
                    <Route exact path='/reportattendance' component={ReportAttendance} />

                    {/* --------------------- REPORT -----> LEAVES ---------------------- */}
                    <Route exact path='/reportleaves' component={ReportLeave} />
                    <Route exact path='/payroll/payslip/:id' component={Payslip} />
                    <Route exact path='/employee/payroll/payslip/:id' component={Payslip} />
                    {/* <Route exact path='/login' component={Dashboard} /> */}
                  </div>
                </Switch>
              </div>
              :
              <Switch>
                <div>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/employee/Dashboard' component={Login} />
                  <Route exact path='/leaveapplication' component={Login} />
                  <Route exact path='/employee/payroll' component={Login} />
                  <Route exact path='/employeeviewattendance' component={Login} />
                  <Route exact path='/employeeviewattendance/edit' component={Login} />
                  <Route exact path='/employeeviewleaves' component={Login} />

                  {/* ---------------- VIEW EMPLOYEE ----------------- */}
                  <Route exact path='/viewemployee' component={Login} />

                  {/* ------------------- VIEW EMPLOYEE ---> PROFILE ------------------ */}
                  <Route exact path='/viewemployee/profile/:id' component={Login} />

                  {/* ---------------------- VIEW EMPLOYEE ---> EDIT PROFILE ------------------ */}
                  <Route exact path='/viewemployee/edit/:id' component={Login} />

                  {/* ------------------ NEW EMPLOYEE ------------------ */}
                  <Route exact path='/newemployee' component={Login} />

                  {/* -------------- MANUAL ATTENDANCE ----------------- */}
                  <Route exact path='/attendance' component={Login} />

                  {/* -------------------- PAYROLL --------------------- */}
                  <Route exact path='/payroll' component={Login} />

                  {/* ---------------- ADD NEW USER -------------------    */}
                  <Route exact path='/adduser' component={Login} />

                  {/* -------------------- ADD ROLE -----------------------  */}
                  <Route exact path='/addrole' component={Login} />

                  {/* ------------------ VIEW USER -------------------- */}
                  <Route exact path='/viewuser' component={Login} />

                  {/* -------------------- VIEW ROLE --------------------  */}
                  <Route exact path='/viewrole' component={Login} />

                  {/* ------------------------- VIEW ATTENDANCE ----------------------- */}
                  <Route exact path='/viewattendance' component={Login} />

                  {/* ------------------------ VIEW LEAVE ---------------------- */}
                  <Route exact path='/viewleave' component={Login} />
                  <Route exact path='/leavesetting' component={Login} />
                  <Route exact path='/viewuser/edituser/:id' component={Login} />
                  <Route exact path='/reportattendance' component={Login} />

                  {/* --------------------- REPORT -----> LEAVES ---------------------- */}
                  <Route exact path='/reportleaves' component={Login} />
                  <Route exact path='/payroll/payslip/:id' component={Login} />
                  <Route exact path='/employee/payroll/payslip/:id' component={Login} />
                  <Route exact path='/login' component={Login} />
                </div>
              </Switch>
          }

        </div>
      }


    </>
  )
}

export default App;