import React, { useState } from 'react'
import Heading from './SubComponents/Heading'
import {Link, useHistory} from 'react-router-dom'
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';


const ProfileEdit = () => {
  
    const [values,setValues] = useState({
        'fname':'',
        'lname':'',
        'mname':'',
        'gender':'male'    
    })


    const handleChange = (prop) => (e) =>{
        setValues({
            ...values,
            [prop]: e.target.value
        })
    }


    const history = useHistory();
  
    return (
    <>
        <div className="container bg-light nempMain mt-5 mb-5">
            <Heading
                heading="Edit Employee"
            />
            
            <div className="container mt-3 mb-3">
                <h4> <Link onClick={() => { history.push('/viewemployee') }} className="homeBtn" > <ReplayRoundedIcon fontSize="small" />  Return </Link>  </h4>
            </div>
            <hr />
            <div className="container">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    {/* <button class="nav-link active" id="edit-personal-tab" data-bs-toggle="tab" data-bs-target="#edit-personal" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Personal Details</button>
                    <button class="nav-link" id="edit-employment-tab" data-bs-toggle="tab" data-bs-target="#edit-employment" type="button" role="tab" aria-controls="edit-employment" aria-selected="false">Employment Details</button> */}
                    
                </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">

                    {/* ----------------- PERSONAL DETAILS ------------------ */}
{/* 
                    <div class="tab-pane fade show active" id="edit-personal" role="tabpanel" aria-labelledby="edit-personal-tab">
                        <div className="container mt-4 mb-5 ">
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex text-right align-items-center col-md-2"> 
                                            First Name:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField  variant="standard"  fullWidth label="First Name" size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Last Name:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField  variant="standard" label="Last Name"  fullWidth size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Middle Name:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField  variant="standard" label="Middle Name"fullWidth size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Gender:
                                    </label>
                                    <div className="col-md-7">
                                        <FormControl>
                                            <RadioGroup
                                                onChange={handleChange('gender')}
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Birthday:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField type="date" variant="standard" fullWidth size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Age:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField  disabled variant="standard" fullWidth size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Email:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField label="Email"  variant="standard" fullWidth size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Mobile Number:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField label="Mobile Number"   variant="standard" fullWidth size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Maritial Status:
                                    </label>
                                    <div className="col-md-7">
                                        <FormControl fullWidth variant="standard"  >
                                            <InputLabel id="demo-simple-select-label">Maritial Status </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={marStatus}
                                                label="Maritial Status"
                                                // onChange={handleMarStatus}
                                            >
                                                <MenuItem value={"single"}>Single</MenuItem>
                                                <MenuItem value={"married"}>Married</MenuItem>
                                                <MenuItem value={"divorced"}>Divorced</MenuItem>
                                                <MenuItem value={"widowed"}>Widowed</MenuItem>
                                            </Select>   
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Education Level:
                                    </label>
                                    <div className="col-md-7">
                                        <FormControl variant="standard" fullWidth>
                                            <InputLabel id="demo-simple-select-label">Education Level </InputLabel>
                                            <Select
                                                
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={marStatus}
                                                label="Education Level"
                                                // onChange={handleMarStatus}
                                            >
                                                <MenuItem value={"Under Graduate"}>Under Graduate</MenuItem>
                                                <MenuItem value={"Post Graduate"}>Post Graduate</MenuItem>
                                                <MenuItem value={"Associate"}>Associate</MenuItem>
                                            </Select>   
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                        </div>
                        <hr />
                        <div className="container d-flex mb-5 me-5 justify-content-end">
                            <Button variant="contained" style={{width:"180px"}} > Update </Button>
                        </div>
                        <br />
                    </div> */}


                    {/* --------------------- EMPLOYMENT DETAILS ---------------------  */}


                    {/* <div class="tab-pane fade" id="edit-employment" role="tabpanel" aria-labelledby="edit-employment-tab"> */}
                           <h3>Update Employee Details</h3>
                            <div className="container mt-4 mb-5">

                                <div className="row justify-content-center">
                                    <label className="control-label d-flex text-right align-items-center col-md-2"> 
                                           Employee ID:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField  variant="standard"  fullWidth label="Employee ID" size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Department:
                                    </label>
                                    <div className="col-md-7">
                                        <FormControl fullWidth variant="standard"  >
                                            <InputLabel id="demo-simple-select-label">Department </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={marStatus}
                                                label="Department"
                                                // onChange={handleMarStatus}
                                            >
                                                <MenuItem value={"HR"}>HR</MenuItem>
                                                <MenuItem value={"IT"}>IT</MenuItem>
                                                <MenuItem value={"Software"}>Software</MenuItem>
                                            </Select>   
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Role:
                                    </label>
                                    <div className="col-md-7">
                                        <FormControl fullWidth variant="standard"  >
                                            <InputLabel id="demo-simple-select-label">Role </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={marStatus}
                                                label="Role"
                                                // onChange={handleMarStatus}
                                            >
                                                <MenuItem value={"Faculty"}>Faculty</MenuItem>
                                                <MenuItem value={"Engineer"}>Engineer</MenuItem>
                                                <MenuItem value={"Manager"}>Manager</MenuItem>
                                            </Select>   
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                           Employment Type:
                                    </label>
                                    <div className="col-md-7">
                                        <FormControl fullWidth variant="standard"  >
                                            <InputLabel id="demo-simple-select-label">Employment Type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={marStatus}
                                                label="Employment Type"
                                                // onChange={handleMarStatus}
                                            >
                                                <MenuItem value={"Full Time"}>Full Time</MenuItem>
                                                <MenuItem value={"Part Time"}>Part Time</MenuItem>
                                            </Select>   
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Salary:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField type="number" label="Salary" variant="standard" fullWidth size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Date Of Joining:
                                    </label>
                                    <div className="col-md-7">
                                        <TextField  type="date"  variant="standard" fullWidth size="small"  />
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Status:
                                    </label>
                                    <div className="col-md-7">
                                        <FormControl fullWidth variant="standard"  >
                                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={marStatus}
                                                label="Status"
                                                // onChange={handleMarStatus}
                                            >
                                                <MenuItem value={"Active"}>Active</MenuItem>
                                                <MenuItem value={"In Active"}>In Active</MenuItem>
                                            </Select>   
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                                <div className="row justify-content-center">
                                    <label className="control-label d-flex align-items-center text-right col-md-2"> 
                                            Tenure:
                                    </label>
                                    <div className="col-md-7">
                                        <FormControl variant="standard" fullWidth>
                                            <InputLabel id="demo-simple-select-label">Tenure </InputLabel>
                                            <Select
                                                
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={marStatus}
                                                label="Tenure"
                                                // onChange={handleMarStatus}
                                            >
                                                <MenuItem value={"Yes"}>Yes</MenuItem>
                                                <MenuItem value={"No"}>No</MenuItem>
                                            </Select>   
                                        </FormControl>
                                    </div>
                                </div>
                                <br />
                        </div>
                        <hr />
                        <div className="container d-flex mb-5 me-5 justify-content-end">
                            <Button variant="contained" style={{width:"180px"}} > Update </Button>
                        </div>
                        <br />
                    </div>
                    </div>
            {/* </div> */}
            



        </div>
    </>
  )
}

export default ProfileEdit