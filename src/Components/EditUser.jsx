import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Heading from './SubComponents/Heading'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'

const EditUser = () => {
    
    const history = useHistory();
    console.log(history.location.pathname)

    const [values,setValues] = useState({
        fullName:'user',
        email:'user@rmail.com',
        role:'',
    });

    const handleChange =(prop) => (e) => {
        setValues({
            ...values,
            [prop]:e.target.value
        })
    }


    return (

    <>
        <div className="container mt-5 employee nempMain">
            <Heading
                heading="Edit User"
            /> 

            <div className="container  mt-5 mb-5">
                    <div className="d-flex mt-3 align-items-center">
                            <h4> New User Form </h4>
                    </div>
                    <hr />
                    <div className="container mt-5" >
                        <div className="container mt-5 mb-5">
                            <div className="row form-group justify-content-center d-flex">
                                <label className="col-md-3 ps-5 text-center control-label"> Full Name: </label>
                                <div className="col-md-5 me-5">
                                    <TextField
                                        variant='outlined'
                                        disabled
                                        label="Full Name"
                                        fullWidth
                                        value={values.fullName}
                                        // onChange={handleChange('fullName')}
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="row form-group justify-content-center d-flex">
                                <label className="col-md-3 ps-5 text-center control-label"> Email: </label>
                                <div className="col-md-5 me-5">
                                    <TextField
                                        variant='outlined'
                                        disabled                                        
                                        label="Email"
                                        fullWidth
                                        // onChange={handleChange('email')}
                                        value={values.email}
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="form-group row justify-content-center">
                                <label className="col-md-3  text-center ps-5 control-label"> Role: </label>
                                <div className="col-md-5 me-5" >
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select Role: </InputLabel>
                                        <Select
                                            
                                            value={values.role}
                                            label="Select Status:"
                                            onChange={handleChange('role')}
                                        >
                                            <MenuItem value={"Staff"}>Staff</MenuItem>
                                            <MenuItem value={"HR Staff"}>HR Staff</MenuItem>
                                            <MenuItem value={"HR Admin"}>HR Admin</MenuItem>
                                            <MenuItem value={"System Administrator"}>System Administrator</MenuItem>
                                        </Select>   
                                    </FormControl>
                                </div>        
                            </div>
                            <br />
                            <div className='mt-3 justify-content-center d-flex'>
                            <Button variant='contained attSub' href="#" className="mb-5">
                                Update
                            </Button>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default EditUser