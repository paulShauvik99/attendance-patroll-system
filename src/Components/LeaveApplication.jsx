import React, { useState } from 'react'
import Heading from './SubComponents/Heading'
import { LeaveDetails } from '../Data/DashboardCard'
import Cards from './SubComponents/Cards'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'





const LeaveApplication = () => {

    const [values, setValues] = useState({
        leaveType: '',
        leaveMode:'',
        startDate:'00/00/0000',
        endDate:new Date(),
        reason:'',
        file:'',
    })

    const handleChange = (prop) => (e) => {
        setValues({
            ...values,
            [prop]:e.target.value
        })
    }



    return (
        <>
            <div className="container nempMain mt-5 mb-5 bg-light">
                <Heading
                    heading="Leave Application"
                />

                
                <div className="container main_div mt-5 mb-5 justify-content-center">
                    <h4>Leave Status</h4>
                    <hr />
                    
                    <div className="row">
                            {
                                LeaveDetails.map((currEle,ind)=>{
                                    return(
                                        <div className="col-md-3">
                                            <Cards
                                                key={ind}
                                                num={currEle.num}
                                                heading={currEle.heading}
                                                // para={currEle.para}
                                                icon={currEle.icon}
                                            />
                                        </div>
                                )
                            })
                            }  
                    </div>
                </div>
                <div className="mt-4 mb-5 container">
                    <h4>Application</h4>
                </div>
                <hr />
                <div className="row container ">
                    <div className="col-md-7 mt-3 mb-5">
                       <div className="row">
                            <div className="col-md-5">
                                    <label className="control-label mb-3"> Leave Type  </label>
                                    <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Leave Type: </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={values.leaveType}
                                                label="Leave Type:"
                                                onChange={handleChange('leaveType')}
                                            >
                                                <MenuItem value={"Sick"}>Sick</MenuItem>
                                                <MenuItem value={"Casual"}>Casual</MenuItem>
                                                <MenuItem value={"Etc"}>Etc</MenuItem>
                                            </Select>
                                    </FormControl>
                            </div>   
                            <div className="col-md-5">
                                    <label className="control-label mb-3"> Leave Mode </label>
                                    <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Leave Mode: </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={values.leaveMode}
                                                label="Leave Mode:"
                                                onChange={handleChange('leaveMode')}
                                            >
                                                <MenuItem value={"Long"}>Long</MenuItem>
                                                <MenuItem value={"Short"}>Short</MenuItem>
                                            </Select>
                                    </FormControl>
                            </div>   
                        </div>
                        <br />
                       <div className="row">
                            <div className="col-md-5">
                                <label className="control-label mb-3"> Start Date </label>
                                <TextField
                                    label="Start Date"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    value={values.endDate}
                                    varient="outlined"
                                    fullWidth
                                    onChange={handleChange('endDate')}
                                    type="date"
                                />
                            </div>   
                            <div className="col-md-5">
                                <label className="control-label mb-3"> End Date </label>
                                <TextField
                                    label="End Date"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    value={values.endDate}
                                    varient="outlined"
                                    fullWidth
                                    onChange={handleChange('endDate')}
                                    type="date"
                                />
                            </div>   
                        </div>
                        <br />    
                       <div className="row">
                            <div className="col-md-5">
                                <label className="control-label mb-3"> Reason </label>
                                <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Leave Type: </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.leaveType}
                                            label="Leave Type:"
                                            onChange={handleChange('leaveType')}
                                        >
                                            <MenuItem value={"Sick"}>Sick</MenuItem>
                                            <MenuItem value={"Casual"}>Casual</MenuItem>
                                            <MenuItem value={"Etc"}>Etc</MenuItem>
                                        </Select>
                                </FormControl>
                            </div>   
                            <div className="col-md-5">
                                    <label className="control-label mb-3"> Upload Documents </label>
                                    <TextField 
                                        label="Upload Documents"
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        type="file"

                                    />
                            </div>   
                        </div>

                    </div>



                    
                    <div className="col-md-5  bg-light scrollableDivLeave mb-5">
                        <h4>Leave Balance</h4>
                        <hr />
                        <div className="app container row">
                            <div className="col-md-8">
                                <h5><b><i> Sick Leave </i></b></h5>
                            </div>
                            <div className="col-md-4">
                                <h6><b><i> 5 / 10 </i></b></h6>
                            </div>
                        </div>
                        <div className="app container row">
                            <div className="col-md-8">
                                <h5><b><i> Casual Leave </i></b></h5>
                            </div>
                            <div className="col-md-4">
                                <h6><b><i> 2 / 10 </i></b></h6>
                            </div>
                        </div>
                        <div className="app container row">
                            <div className="col-md-8">
                                <h5><b><i> Sick Leave </i></b></h5>
                            </div>
                            <div className="col-md-4">
                                <h6><b><i> 5 / 10 </i></b></h6>
                            </div>
                        </div>
                        <div className="app container row">
                            <div className="col-md-8">
                                <h5><b><i> Sick Leave </i></b></h5>
                            </div>
                            <div className="col-md-4">
                                <h6><b><i> 5 / 10 </i></b></h6>
                            </div>
                        </div>
                        
                    </div>         
                </div>

            </div>
        </>
    )
}

export default LeaveApplication