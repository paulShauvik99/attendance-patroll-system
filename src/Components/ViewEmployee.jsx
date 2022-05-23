import React, { useState, useEffect } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom';
import Heading from './SubComponents/Heading';
import axios from "axios"

const ViewEmployee = () => {

  const [list, setList] = useState([])
  const getList = async () => {
    const res = await axios.get("http://localhost:5000/findEmployee")
    console.log(res.data);
    setList(res.data)
  }

  useEffect(() => {
    getList();
  }, [])



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
              <th class="th-sm">Joining Date
              </th>
              <th class="th-sm">Address
              </th>
              <th class="th-sm">Email
              </th>
              <th class="th-sm">Mobile</th>
              <th class="th-sm">Department
              </th>
              <th class="th-sm">Gender
              </th>
              <th class="th-sm">Employment Type
              </th>
              <th class="th-sm">Salary (in Rs.)
              </th>


              <th class="th-sm">Actions
              </th>
            </tr>
          </thead>
          <tbody>

            {
              list.map((curr, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <td>{curr.firstname} {curr.lastname}</td>
                    <td>{curr.joinDate}</td>
                    <td>{curr.streetAdd} {curr.city} {curr.state}</td>
                    <td>{curr.email}</td>
                    <td>{curr.mobile}</td>
                    <td>{curr.role}</td>
                    <td>{curr.gender}</td>
                    <td>{curr.employmentType}</td>
                    <td>{curr.salary}</td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Action
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <Link className="dropdown-item" to="#"> <i className="fa fa-user"></i>  Profile</Link>
                          <Link className="dropdown-item" to="#"><i className="fa fa-edit"></i>  Edit</Link>
                          <Link className="dropdown-item" to="#"><i className="fa fa-trash"></i>  Delete</Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })
            }


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