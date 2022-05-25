import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import Heading from './SubComponents/Heading'



const Payroll = () => {

    const [values,setValues] = useState({ 
        'empName':'',
        'role':'',

    })

    const handleChange = (prop) => (e) =>{
        setValues({
            ...values,
            [prop]: e.target.value,
        })
    }

  return (
        <>
            <div className="container mt-5 nempMain bg-light">
                <Heading
                    heading="Payroll"
                />
                <div className="container mt-5 mb-3">
                    <h4>Employee Salary</h4>
                </div>
                <hr />
                <div className="container mt-3 mb-5">
                    <div className="ms-5 mb-5 d-flex row justify-content-center">
                        <div className="col-md-4" >
                           <TextField
                                fullWidth
                                variant='outlined'
                                label="Employee Name:"
                                value={values.empName}
                                onChange={handleChange('empName')}
                           />
                        </div>        
                        <div className="col-md-4" >
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Role: </InputLabel>
                                <Select

                                    value={values.department}
                                    label="Select Role:"
                                    onChange={handleChange('role')}
                                >
                                    <MenuItem value={"Staff"}>Staff</MenuItem>
                                    <MenuItem value={"HR Staff"}>HR Staff</MenuItem>
                                    <MenuItem value={"HR Admin"}>HR Admin</MenuItem>
                                    <MenuItem value={"System Administrator"}>System Administrator</MenuItem>
                                </Select>   
                            </FormControl>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <Button variant='contained' style={{width:'180px'}}  >Search</Button>
                        </div>        
                    </div>
                </div>
                <div className="container">
                    <table id="dtBasicExample" className="mt-5 mb-5 table table-hover table-responsive table-bordered" >
                        <thead className="bg-dark text-light">
                            <tr className='text-center'>
                            <th class="th-sm">Employee Name
                            </th>
                            <th class="th-sm">Employee ID
                            </th>
                            <th class="th-sm">Email
                            </th>
                            <th class="th-sm">Join Date
                            </th>
                            <th class="th-sm">Role
                            </th>
                            <th class="th-sm">Salary
                            </th>
                            <th class="th-sm">Action
                            </th>
                            </tr>
                        </thead>
                        <tbody className="mb-1">
                            <tr className="text-center">
                                <td>Suresh</td>
                                <td>PT001</td>
                                <td>something@some.som</td>
                                <td> 05/02/2022 </td>
                                <td> Web Developer </td>
                                <td>  1200000  </td>
                                <td>  
                                    
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td>Suresh</td>
                                <td>PT001</td>
                                <td>something@some.som</td>
                                <td> 05/02/2022 </td>
                                <td> Web Developer </td>
                                <td>  1200000  </td>    
                                <td>  
                                    
                                </td>    
                            </tr>
                            <tr className="text-center">
                                <td>Suresh</td>
                                <td>PT001</td>
                                <td>something@some.som</td>
                                <td> 05/02/2022 </td>
                                <td> Web Developer </td>
                                <td>  1200000  </td>
                                <td>  
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Payroll