import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import Heading from './SubComponents/Heading';

const ViewEmployee = () => {


  return (
    <>
      <div className="bg-light container mt-5 employee nempMain">
        <Heading
          heading="Employee"
        />
        <div className="container pl-4 pr-4 mt-5 d-flex justify-content-between align-items-center">
          <h4> Employee Table </h4>
        </div>
        <hr />
        
    <table id="dtBasicExample" className="mt-5 mb-5 table table-hover table-responsive table-bordered" >
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
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Action
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link className="dropdown-item" to="viewemployee/profile"> <i className="fa fa-user"></i>  Profile</Link>
                  </li>
                  <li>     
                    <Link className="dropdown-item" to="viewemployee/edit"><i className="fa fa-edit"></i>  Edit</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i>  Delete</Link>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>$320,800</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                  <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="viewemployee/profile"> <i className="fa fa-user"></i>  Profile</Link>
                    </li>
                    <li>     
                      <Link className="dropdown-item" to="viewemployee/edit"><i className="fa fa-edit"></i>  Edit</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i>  Delete</Link>
                    </li>
                  </ul>
               </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>$320,800</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                  <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="viewemployee/profile"> <i className="fa fa-user"></i>  Profile</Link>
                    </li>
                    <li>     
                      <Link className="dropdown-item" to="viewemployee/edit"><i className="fa fa-edit"></i>  Edit</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i>  Delete</Link>
                    </li>
                  </ul>
                </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>$320,800</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                  <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="viewemployee/profile"> <i className="fa fa-user"></i>  Profile</Link>
                    </li>
                    <li>     
                      <Link className="dropdown-item" to="viewemployee/edit"><i className="fa fa-edit"></i>  Edit</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i>  Delete</Link>
                    </li>
                  </ul>
                </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>$320,800</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                  <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="viewemployee/profile"> <i className="fa fa-user"></i>  Profile</Link>
                    </li>
                    <li>     
                      <Link className="dropdown-item" to="viewemployee/edit"><i className="fa fa-edit"></i>  Edit</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i>  Delete</Link>
                    </li>
                  </ul>
                </div>
            </td>
          </tr>
          <tr className="text-center">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>$320,800</td>
            <td>example@gmail.com</td>
            <td>Active</td>
            <td>
              <div class="dropdown">
                  <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <Link className="dropdown-item" to="viewemployee/profile"> <i className="fa fa-user"></i>  Profile</Link>
                    </li>
                    <li>     
                      <Link className="dropdown-item" to="viewemployee/edit"><i className="fa fa-edit"></i>  Edit</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i>  Delete</Link>
                    </li>
                  </ul>
                </div>
            </td>
          </tr>  
        </tbody>
  
      </table>
        <div className='pagination'>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>



      </div>
    </>
  )
}

export default ViewEmployee;