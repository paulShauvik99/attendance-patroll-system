import React from 'react'
import {NavLink} from 'react-router-dom';


const Sidebar = () => {
    
    
    
     
  const arrow = (e) =>{
      let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
  }

  const sidebar = () => {

    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("close");
    
  }  





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
                <i className='bx bx-log-out'></i>
              </div>
            </li>
            <li>
              <NavLink to='/'>
                <i className='bx bxs-grid-alt'></i>
                <span className="link_name">Dashboard</span>
              </NavLink>
              {/* <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Dashboard</a></li>
              </ul> */}
            </li>
            <li>
              <div className="iocn-link">
                <NavLink to='#'>
                  <i className='bx bxs-user'></i>
                  <span className="link_name">Employee</span>
                </NavLink>
                <i className='bx bxs-chevron-down arrow' onClick={arrow} ></i>
              </div>
              <ul className="sub-menu">
                <li><NavLink className="link_name" to="#">Employee</NavLink></li>
                <li><NavLink to="/viewemployee">View Employee</NavLink></li>
                <li><NavLink to="/newemployee">New Employee</NavLink></li>
              </ul>
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
                <li><NavLink to="#">View Attendance</NavLink></li>
                <li><NavLink to="attendance">Manual</NavLink></li>
              </ul>
            </li>
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className="fa fa-bed"></i>
                  <span className="link_name">Leaves</span>
                </a>
                <i className='bx bxs-chevron-down arrow' onClick={arrow} ></i>
              </div>
              <ul className="sub-menu">
                <li><a className="link_name" href="#">Leaves</a></li>
                <li><a href="#">View Leaves</a></li>
                <li><a href="#">Leave Calender</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className='bx bxs-wallet'></i>
                <span className="link_name">Payroll</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Payroll</a></li>
              </ul>
            </li>
            <li>
              <div className="iocn-link">
                <a href="#">
                  <i className='bx bxs-bar-chart-alt-2'></i>
                  <span className="link_name">Reports</span>
                </a>
                <i className='bx bxs-chevron-down arrow' onClick={arrow} ></i>
              </div>
              <ul className="sub-menu">
                <li><a className="link_name" href="#">Reports</a></li>
                <li><a href="#">Attendance</a></li>
                <li><a href="#">Leaves</a></li>
                <li><a href="#">General Reports</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className='bx bxs-building'></i>
                <span className="link_name">Department</span>
              </a>
              <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Department</a></li>
                <li><a href="#">View Department </a></li>
                <li><a href="#">Add Department</a></li>
                <li><a href="#">View Role</a></li>
                <li><a href="#">Add Role</a></li>
              </ul>
            </li>
            <li>
              <NavLink to="#">
                <i className='bx bxs-user-rectangle'></i>
                <span className="link_name">Users</span>
              </NavLink>
              <ul className="sub-menu blank">
                <li><NavLink className="link_name" to="#">Users</NavLink></li>
                <li><NavLink to="#">View Users </NavLink></li>
                <li><NavLink to="adduser">Add Admins</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
    </>
  )
}

export default Sidebar