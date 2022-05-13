import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';

const ViewEmployee = () => {

  const history = useHistory();

  return (
    <>
      <div className="bg-light container mt-5 employee">
        <div className="mb-2 d-flex justify-content-between align-items-center" >
          <h3 className="display-6">Employees</h3>
          <Link  className="homeBtn" onClick={() => {history.push('/')}}  > <i className="fa fa-home"></i> Home </Link>
        </div>
        <div className="container pl-4 pr-4 mt-5 d-flex justify-content-between align-items-center">
          <h4> Employee Table </h4>
          <button className="btn "><i className="fa fa-chevron-down"></i></button>
        </div>
        <hr />
        <h2 class='mb-3'>Basic example</h2>
    <table id="dtBasicExample" className="table table-hover table-responsive table-bordered" >
      <thead>
        <tr className='text-center'>
          <th class="th-sm">Name
          </th>
          <th class="th-sm">Position
          </th>
          <th class="th-sm">Department
          </th>
          <th class="th-sm">Salary
          </th>
          <th class="th-sm">Email
          </th>
          <th class="th-sm">Status
          </th>
          <th class="th-sm">Actions
          </th>
        </tr>
      </thead>
        <tbody>
          <tr className="text-center">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>$320,800</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Action
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"> <i class="fa fa-user"></i>  Profile</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-edit"></i>  Edit</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-trash"></i>  Delete</a>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>Edinburgh</td>
            <td>$433,060</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Action
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"> <i class="fa fa-user"></i>  Profile</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-edit"></i>  Edit</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-trash"></i>  Delete</a>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Airi Satou</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>$162,700</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Action
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"> <i class="fa fa-user"></i>  Profile</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-edit"></i>  Edit</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-trash"></i>  Delete</a>
                </div>
              </div>
            </td>
          </tr>
          
          <tr className="text-center">
            <td>Rhona Davidson</td>
            <td>Integration Specialist</td>
            <td>Tokyo</td>
            <td>$327,900</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Action
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"> <i class="fa fa-user"></i>  Profile</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-edit"></i>  Edit</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-trash"></i>  Delete</a>
                </div>
              </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Colleen Hurst</td>
            <td>Javascript Developer</td>
            <td>San Francisco</td>
            <td>$205,500</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Action
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"> <i class="fa fa-user"></i>  Profile</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-edit"></i>  Edit</a>
                  <a class="dropdown-item" href="#"><i className="fa fa-trash"></i>  Delete</a>
                </div>
              </div>
            </td>
          </tr>
          
          
        </tbody>
  
        </table>
      </div>
    </>
  )
}

export default ViewEmployee;