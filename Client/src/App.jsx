import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import LoginImage from "./Images/login-img.png"
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
import { goLogOut } from "./Apis/apis"




const App = () => {
  // const history = useHistory();

  const [sets, setSets] = useState(false)
  const [localstore, setLocalStore] = useState("")

  // setSets(window.localStorage.getItem("loggedState"))

  // console.log(localstore)
  // console.log(sets)




  // login
  const history = useHistory();
  let name, value

  const [userLog, setUserLog] = useState({
    email: "",
    password: "",
    type: ""
  })


  const handleInputs = (event) => {
    // event.preventDefault()
    name = event.target.name
    value = event.target.value

    setUserLog({ ...userLog, [name]: value })
  }


  const PostData = async (event) => {
    event.preventDefault()
    const { email, password } = userLog;
    // const res = await axios.post("http://localhost:5000/login",{
    //   email:email, password:password
    // })

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        employeeId: email, password: password, type: "Employee"
      })
    })

    console.log(res);
    const data = await res.json()
    console.log(data);
    console.log(data.message)
    console.log(data.response.role);

    if (data.message == "success") {
      window.alert("Success")
      // window.localStorage.setItem("loggedState", true)
      // window.location.reload()
      setSets(true)
      setLocalStore(data.response.role)
      history.push("/")
    } else {
      window.alert("Not Success")
    }

  }

  const response = async () => {
    const res = await goLogOut();
    console.log(res)
    // window.localStorage.setItem("loggedState", false)
    setSets(false)
    setLocalStore("")
    setUserLog({
      email: "",
      password: "",
      type: ""
    })
    // history.push("/login")
  }

  useEffect(() => {
    console.log(sets)
  }, [sets])


  return (

    <>
      {

        (sets === true) ?
          <>
            <Switch>
              <div>
                {
                  (localstore === "system admin") ?
                    <div>
                      <Sidebar response={response} />
                      <Switch>
                        <Route exact path='/' component={Dashboard} />
                        {/* ---------------- VIEW EMPLOYEE ----------------- */}
                        <Route exact path='/viewemployee' component={ViewEmployee} />
                        {/* ------------------- VIEW EMPLOYEE ---> PROFILE ------------------ */}
                        <Route exact path='/viewemployee/profile/:id' component={EmployeeProfile} />
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
                      </Switch>
                    </div>
                    :
                    <div>
                      <EmployeeSidebar response={response} />
                      <Switch>
                        <Route exact path='/adduser' component={NewUser} />
                        <Route exact path='/' component={EmployeeDashboard} />
                        <Route exact path='/leaveapplication' component={LeaveApplication} />
                        <Route exact path='/employee/payroll/:id' component={Payslip} />
                        <Route exact path='/employeeviewattendance' component={EmployeeViewAttendance} />
                        <Route exact path='/employeeviewattendance/edit' component={EmployeeEditAttendance} />
                        <Route exact path='/employeeviewleaves' component={EmployeeViewLeaves} />
                        {/* ---------------------- VIEW EMPLOYEE ---> EDIT PROFILE ------------------ */}
                        <Route exact path='/viewemployee/edit/:id' component={ProfileEdit} />
                        {/* -------------- MANUAL ATTENDANCE ----------------- */}
                        <Route exact path='/attendance' component={ManualAttendance} />
                        <Route exact path='/logout' component={Logout} />
                      </Switch>
                    </div>
                }
              </div>
            </Switch>
          </>

          :

          <div>
            {/* <Switch>
              <Route path='/login' component={
                
              } />
            </Switch> */}
            <section className="signup">
              <div className="container">
                <div className="signup-content">
                  <div className="signup-image">
                    <figure>
                      <img src={LoginImage} alt="Book Image" srcSet="" />
                    </figure>

                  </div>
                  <div className="signup-form">
                    <h2 className="form-title">
                      Log In  Here
                    </h2>
                    <form method="POST" id="addBooks" className="register-form">
                      <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="text" name="email" id="email" autoComplete="off" value={userLog.email}
                          onChange={handleInputs} placeholder="Employee Id" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password" autoComplete="off" value={userLog.password}
                          onChange={handleInputs} placeholder="Password" />
                      </div>

                      <div className="form-group form-button">
                        <input type="submit" name="register" id='register' className="form-submit" onClick={PostData} value="Log In" />
                      </div>
                    </form>

                  </div>

                </div>
              </div>
            </section>

          </div>

      }

    </>
  )
}

export default App;