import React from 'react'
import { NavLink } from 'react-router-dom';



const EmployeeSidebar = () => {




  const arrow = (e) => {
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  }

  const sidebar = () => {

    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");

  }


  const value = window.localStorage.getItem("id")



  return (
    <>
      <div className="sidebar close"  >
        <div className="logo-details">
          <i className='bx bx-menu' onClick={sidebar} ></i>
          <span className="logo_name">Payroll System</span>
        </div>
        <ul className="nav-links">
          <li>
            
            <div className="profile-details">
              <div className="name-job">
                <div className="profile_name">Admin</div>
                <div className="job">Admin Role</div>
              </div>
              <NavLink to="/logout">
                <i className='bx bx-log-out'></i>
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to='/'>
              <i className='bx bxs-grid-alt'></i>
              <span className="link_name">Dashboard</span>
            </NavLink>
            {/* <ul className="sub-menu blank">
                <li><NavLink className="link_name" to="#">Dashboard</NavLink></li>
              </ul> */}
          </li>
          
          <li>
            <div className="iocn-link">
              <NavLink to="#">
                <i className='bx bxs-time'></i>
                <span className="link_name">Attendance</span>
              </NavLink>
              <i className='bx bxs-chevron-down arrow' onClick={arrow} ></i>
            </div>
            <ul className="sub-menu">
              <li><NavLink className="link_name" to="#">Attendance</NavLink></li>
              <li><NavLink to="/employeeviewattendance">View Attendance</NavLink></li>
              <li><NavLink to="/attendance">Manual</NavLink></li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <NavLink to="#">
                <i className="fa fa-bed"></i>
                <span className="link_name">Leaves</span>
              </NavLink>
              <i className='bx bxs-chevron-down arrow' onClick={arrow} ></i>
            </div>
            <ul className="sub-menu">
              <li><NavLink className="link_name" to="#">Leaves</NavLink></li>
              <li><NavLink to="/employeeviewleaves">View Leaves</NavLink></li>
              <li><NavLink to="/leaveapplication">Leave Application </NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <i className='bx bxs-wallet'></i>
              <span className="link_name">Payroll</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li><NavLink className="link_name" to={`/employee/payroll/${value}`}>Payroll</NavLink></li>
            </ul>
          </li>
          {/* <li>
            <div className="iocn-link">
              <NavLink to="#">
                <i className='bx bxs-bar-chart-alt-2'></i>
                <span className="link_name">Reports</span>
              </NavLink>
              <i className='bx bxs-chevron-down arrow' onClick={arrow} ></i>
            </div>
            <ul className="sub-menu">
              <li><NavLink className="link_name" to="#">Reports</NavLink></li>
              <li><NavLink to="/reportattendance">Attendance</NavLink></li>
              <li><NavLink to="/reportleaves">Leaves</NavLink></li>
            </ul>
          </li> */}
          {/* <li>
            <NavLink to="#">
              <i className='bx bxs-user-circle'></i>
              <span className="link_name">Department</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li><NavLink className="link_name" to="#">Roles</NavLink></li>
              <li><NavLink to="/viewrole">View Role</NavLink></li>
              <li><NavLink to="/addrole">Add Role</NavLink></li>
            </ul>
          </li> */}
          {/* <li>
            <NavLink to="#">
              <i className='bx bxs-user-rectangle'></i>
              <span className="link_name">Users</span>
            </NavLink>
            <ul className="sub-menu blank">
              <li><NavLink className="link_name" to="#">Users</NavLink></li>
              <li><NavLink to="/viewuser">View Users </NavLink></li>
              <li><NavLink to="/adduser">Add Admins</NavLink></li>
            </ul>
          </li> */}
        </ul>
      </div>
    </>
  )
}

export default EmployeeSidebar