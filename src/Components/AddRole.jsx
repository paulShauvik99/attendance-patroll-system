import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import Heading from './SubComponents/Heading'





const AddRole = () => {
    

    const [values,setValues] = useState({
        role:'',
        description:'',
        hod:''
    })
    

    const handleChange = (prop) => (e) => {
        setValues({
            ...values,
            [prop] : e.target.value
        })
    }

    return (
        <>
            <div className="container bg-light mt-5 nempMain">
          <Heading 
            heading="Roles"
          />
          
          <div className="container  mt-5 mb-4">
            <h4 className="mt-5 mb-3">Add New Role</h4>
          </div>
          <hr />
          <div className="container mt-5 mb-5 attMain ">
              <div className="row form-group justify-content-center d-flex">
                  <label className="col-md-2 control-label"> Role: </label>
                  <div className="col-md-4">
                       <TextField id="outlined" label="Role" fullWidth required value={values.role} onChange={handleChange('role')} /> 
                  </div>
              </div>
              <br />
              <div className="row form-group justify-content-center d-flex ">
                  <label className="col-md-2 control-label"> Description: </label>
                  <div className="col-md-4">
                    <TextField id="outlined" label="Description" fullWidth value={values.description} onChange={handleChange('description')} /> 
                  </div>
              </div>
              <br />
              <div className="row form-group justify-content-center d-flex">
                  <label className="col-md-2 control-label"> Head of Department: </label>
                  <div className="col-md-4">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Head of Department: </InputLabel>
                            <Select
                             labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.hod}
                                label="Select Head of Department:"
                                onChange={handleChange('hod')}
                            >
                                <MenuItem value={"Harish"}>Harish</MenuItem>
                                <MenuItem value={"Kartik"}>Kartik</MenuItem>
                                <MenuItem value={"Aryan"}>Aryan</MenuItem>
                                <MenuItem value={"Sonali"}>Sonali</MenuItem>
                            </Select>   
                        </FormControl>
                  </div>
              </div>
              <br />
              <div className='mt-3 justify-content-center d-flex'>
                <Button variant='contained' style={{width:'180px'}} href="#" className="mb-5">
                    Submit
                </Button>
              </div>
          </div>
            

      </div>
        </>
    )
}

export default AddRole