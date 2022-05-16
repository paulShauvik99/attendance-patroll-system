import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Heading from './SubComponents/Heading'



const ReportAttendance = () => {

    const [values,setValues] = useState({
        employee:'',
        department:'',
    })

    const handleChange = (prop) => (e) =>{
        setValues({
            ...values,
            [prop] : e.target.value
        })
    }


    return (
    <>
        <div className="container mt-5 bg-light nempMain">
            <Heading 
                heading="Reports"
            />
            
            <div className="container mt-5 mb-5">
                <h4>Employee Attendance</h4>
            </div>
            <hr />
            <div className="container mt-3 mb-5">
                <div className="form-group row justify-content-around">
                    <div className="col-md-4" >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Employee: </InputLabel>
                            <Select

                                value={values.employee}
                                label="Select Employee:"
                                onChange={handleChange('employee')}
                            >
                                <MenuItem value={"Staff"}>Staff</MenuItem>
                                <MenuItem value={"HR Staff"}>HR Staff</MenuItem>
                                <MenuItem value={"HR Admin"}>HR Admin</MenuItem>
                                <MenuItem value={"System Administrator"}>System Administrator</MenuItem>
                            </Select>   
                        </FormControl>
                    </div>        
                    <div className="col-md-4" >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Department: </InputLabel>
                            <Select

                                value={values.department}
                                label="Select Department:"
                                onChange={handleChange('department')}
                            >
                                <MenuItem value={"Staff"}>Staff</MenuItem>
                                <MenuItem value={"HR Staff"}>HR Staff</MenuItem>
                                <MenuItem value={"HR Admin"}>HR Admin</MenuItem>
                                <MenuItem value={"System Administrator"}>System Administrator</MenuItem>
                            </Select>   
                        </FormControl>
                    </div>        
                </div>
            </div>
            <div className="container">
            <table id="dtBasicExample" className="mt-5 mb-5 table table-hover table-responsive table-bordered" >
      <thead className="bg-dark text-light">
        <tr className='text-center'>
          <th class="th-sm">Name
          </th>
          <th class="th-sm">Date
          </th>
          <th class="th-sm">Time In
          </th>
          <th class="th-sm">Time Out
          </th>
          <th class="th-sm">Working Hours
          </th>

        </tr>
      </thead>
        <tbody className="mb-1">
          <tr className="text-center">
            <td>Krishna</td>
            <td>2022-11-14</td>
            <td>9:45 AM</td>
            <td>5:30 PM</td>
            <td>8</td>
            
            
            
          </tr>
          <tr className="text-center">
            <td>Krishna</td>
            <td>2022-11-14</td>
            <td>9:45 AM</td>
            <td>5:30 PM</td>
            <td>8</td>
            
            
            
          </tr>
          <tr className="text-center">
            <td>Krishna</td>
            <td>2022-11-14</td>
            <td>9:45 AM</td>
            <td>5:30 PM</td>
            <td>8</td>
            
            
            
          </tr>
          <tr className="text-center">
            <td>Krishna</td>
            <td>2022-11-14</td>
            <td>9:45 AM</td>
            <td>5:30 PM</td>
            <td>8</td>
            
            
            
          </tr>
          <tr className="text-center">
            <td>Krishna</td>
            <td>2022-11-14</td>
            <td>9:45 AM</td>
            <td>5:30 PM</td>
            <td>8</td>
            
          </tr>
          <tr className="text-center">
            <td>Krishna</td>
            <td>2022-11-14</td>
            <td>9:45 AM</td>
            <td>5:30 PM</td>
            <td>8</td>
            
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

        </div>
    </>
  )
}

export default ReportAttendance