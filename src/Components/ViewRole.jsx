import React, { useState } from 'react'
import Heading from './SubComponents/Heading'
import { Backdrop, Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'


const ViewRole = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '700px',
      height:'350px',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      fontSize: 14,
    };
  

    

  const [values,setValues] = useState({
    
    'hod':'',
    'description':'Faculty'
  })

  

  const handleChange = (prop) => (e) =>{
    setValues({
      ...values,
      [prop]: e.target.value,
    })
  }

  return (
        <>
            <div className="container mt-5 bg-light nempMain">
              <Heading
                heading="View Roles"
              />
              <div className="mt-5 mb-3 container">
                <h4>Roles List</h4>
              </div>
              <hr />
              <div className="container">
              <table id="dtBasicExample" className="mt-5 mb-5 table table-hover table-responsive table-bordered" >
              <thead className="bg-dark text-light">
                  <tr className='text-center'>
                  <th class="th-sm">Department
                  </th>
                  <th class="th-sm">Role Name
                  </th>
                  <th class="th-sm">Description
                  </th>
                  <th class="th-sm">HOD
                  </th>
                  <th class="th-sm">Number of Employees
                  </th>
                  <th class="th-sm">Action
                  </th>
                  </tr>
              </thead>
                  <tbody className="mb-1">
                  <tr className="text-center">
                      <td>IT</td>
                      <td>Teacher</td>
                      <td>{values.description}</td>
                      <td> {values.hod} </td>
                      <td> 34 </td>
                      <td>
                          <Button onClick={handleOpen} variant="contained" >
                              View    
                          </Button>
                          <Modal
                              
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                              timeout: 500,
                              }}
                          >
                          <Box sx={style}>

                              <div className="container">
                                  <h5>
                                      Leave Details
                                  </h5>
                                  <hr />
                                  <div className="row container " >
                                      <div className="col-md-4">
                                        <TextField 
                                          variant='outlined'
                                          label="Department"
                                          disabled
                                          value="IT" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                          variant='outlined'
                                          label="Role Name"
                                          disabled
                                          value="Teacher" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                          variant='outlined'
                                          label="Description"
                                          onChange={handleChange('description')}
                                          value={values.description} 
                                        />
                                      </div>
                                  </div>
                                  <div className="row container">
                                      <div className="col-md-6">
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select HOD: </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.hod}
                                            label="Select HOD:"
                                            onChange={handleChange('hod')}
                                        >
                                            <MenuItem value={"Rajan"}>Rajan</MenuItem>
                                            <MenuItem value={"Mainak"}>Mainak</MenuItem>
                                            <MenuItem value={"Dhruba"}>Dhruba</MenuItem>
                                        </Select>   
                                      </FormControl>
                                      </div>
                                      <div className="col-md-6">
                                      <TextField
                                          label="Number of Employee"
                                          value={values.numEmp}
                                          onChange={handleChange('numEmp')}                                          variant='outlined'  />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="container mt-5 d-flex justify-content-end">
                                    <Button variant='contained' style={{width:'180px'}} onClick={handleClose} >
                                        Submit
                                    </Button>
                                  </div>
                              </div>
                          </Box>
                          </Modal>
                      </td>
                      
                      
                  </tr>
                  <tr className="text-center">
                      <td>IT</td>
                      <td>Teacher</td>
                      <td>{values.description}</td>
                      <td> {values.hod} </td>
                      <td> 34 </td>
                      <td>
                          <Button onClick={handleOpen} variant="contained" >
                              View    
                          </Button>
                          <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                              timeout: 500,
                              }}
                          >
                              <Box sx={style}>

                              <div className="container">
                                  <h5>
                                      Leave Details
                                  </h5>
                                  <hr />
                                  <div className="row container">
                                      <div className="col-md-4">
                                        <TextField 
                                          variant='outlined'
                                          label="Department"
                                          disabled
                                          value="IT" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                          variant='outlined'
                                          label="Role Name"
                                          disabled
                                          value="Teacher" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                          variant='outlined'
                                          label="Description"
                                          onChange={handleChange('description')}
                                          value={values.description} 
                                        />
                                      </div>
                                  </div>
                                  <div className="row container">
                                      <div className="col-md-6">
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select HOD: </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.hod}
                                            label="Select HOD:"
                                            onChange={handleChange('hod')}
                                        >
                                            <MenuItem value={"Rajan"}>Rajan</MenuItem>
                                            <MenuItem value={"Mainak"}>Mainak</MenuItem>
                                            <MenuItem value={"Dhruba"}>Dhruba</MenuItem>
                                        </Select>   
                                      </FormControl>
                                      </div>
                                      <div className="col-md-6">
                                      <TextField
                                          label="Number of Employee"
                                          value={values.numEmp}
                                          onChange={handleChange('numEmp')}                                          variant='outlined'  />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="container mt-5 d-flex justify-content-end">
                                  <Button variant='contained' style={{width:'180px'}} onClick={handleClose} className="mb-5">
                                      Submit
                                  </Button>
                                  </div>
                              </div>
                              </Box>
                          </Modal>
                      </td>
                      
                      
                  </tr>
                  <tr className="text-center">
                      <td>IT</td>
                      <td>Teacher</td>
                      <td>{values.description}</td>
                      <td> {values.hod} </td>
                      <td> 34 </td>
                      <td>
                          <Button onClick={handleOpen} variant="contained" >
                              View    
                          </Button>
                          <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                              timeout: 500,
                              }}
                          >
                          <Box sx={style}>
                              
                              <div className="container">
                                  <h5>
                                      Leave Details
                                  </h5>
                                  <hr />
                                  <div className="row container">
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Department"
                                          disabled
                                          value="IT" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Role Name"
                                          disabled
                                          value="Teacher" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Description"
                                          onChange={handleChange('description')}
                                          value={values.description} 
                                        />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="row container">
                                      <div className="col-md-6">
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select HOD: </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.hod}
                                            label="Select HOD:"
                                            onChange={handleChange('hod')}
                                        >
                                            <MenuItem value={"Rajan"}>Rajan</MenuItem>
                                            <MenuItem value={"Mainak"}>Mainak</MenuItem>
                                            <MenuItem value={"Dhruba"}>Dhruba</MenuItem>
                                        </Select>   
                                      </FormControl>
                                      </div>
                                      <div className="col-md-6">
                                      <TextField
                                          label="Number of Employee"
                                          value={values.numEmp}
                                          onChange={handleChange('numEmp')}                                          variant='outlined'  />
                                      </div>
                                      <br />
                                      <div className="container mt-5 d-flex justify-content-end">
                                        <Button variant='contained' style={{width:'180px'}}  onClick={handleClose} className="mb-5">
                                            Submit
                                        </Button>
                                      </div>
                                  </div>
                              </div>
                          </Box>
                          </Modal>
                      </td>
                      
                      
                  </tr>
                  <tr className="text-center">
                      <td>IT</td>
                      <td>Teacher</td>
                      <td>{values.description}</td>
                      <td> {values.hod} </td>
                      <td> 34 </td>
                      <td>
                          <Button onClick={handleOpen} variant="contained" >
                              View    
                          </Button>
                          <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                              timeout: 500,
                              }}
                          >
                              <Box sx={style}>
                                  
                              <div className="container">
                                  <h5>
                                      Leave Details
                                  </h5>
                                  <hr />
                                  <div className="row container">
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Department"
                                          disabled
                                          value="IT" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Role Name"
                                          disabled
                                          value="Teacher" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Description"
                                          onChange={handleChange('description')}
                                          value={values.description} 
                                        />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="row container">
                                      <div className="col-md-6">
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select HOD: </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.hod}
                                            label="Select HOD:"
                                            onChange={handleChange('hod')}
                                        >
                                            <MenuItem value={"Rajan"}>Rajan</MenuItem>
                                            <MenuItem value={"Mainak"}>Mainak</MenuItem>
                                            <MenuItem value={"Dhruba"}>Dhruba</MenuItem>
                                        </Select>   
                                      </FormControl>
                                      </div>
                                      <div className="col-md-6">
                                        <TextField
                                          label="Number of Employee"
                                          value={values.numEmp}
                                          onChange={handleChange('numEmp')}                                          variant='outlined'  />
                                      </div>
                                      <br />
                                      <div className="container mt-5 d-flex justify-content-end">
                                        <Button variant='contained' style={{width:'180px'}} onClick={handleClose} className="mb-5">
                                            Submit
                                        </Button>
                                      </div>
                                  </div>
                              </div>
                              </Box>
                          </Modal>
                      </td>
                      
                  </tr>
                  <tr className="text-center">
                      <td>IT</td>
                      <td>Teacher</td>
                      <td>{values.description}</td>
                      <td> {values.hod} </td>
                      <td> 34 </td>
                      <td>
                          <Button onClick={handleOpen} variant="contained" >
                              View    
                          </Button>
                          <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                              timeout: 500,
                              }}
                          >
                              <Box sx={style}>

                              <div className="container">
                                  <h5>
                                      Leave Details
                                  </h5>
                                  <hr />
                                  <div className="row container">
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Department"
                                          disabled
                                          value="IT" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Role Name"
                                          disabled
                                          value="Teacher" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Description"
                                          onChange={handleChange('description')}
                                          value={values.description} 
                                        />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="row container">
                                      <div className="col-md-6">
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select HOD: </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.hod}
                                            label="Select HOD:"
                                            onChange={handleChange('hod')}
                                        >
                                            <MenuItem value={"Rajan"}>Rajan</MenuItem>
                                            <MenuItem value={"Mainak"}>Mainak</MenuItem>
                                            <MenuItem value={"Dhruba"}>Dhruba</MenuItem>
                                        </Select>   
                                      </FormControl>
                                      </div>
                                      <div className="col-md-6">
                                        <TextField
                                          label="Number of Employee"
                                          value={values.numEmp}
                                          onChange={handleChange('numEmp')}                                          variant='outlined'                                        />
                                      </div>
                                      <br />
                                      <div className="container mt-5 d-flex justify-content-end">
                                        <Button variant='contained' style={{width:'180px'}} onClick={handleClose} className="mb-5">
                                            Submit
                                        </Button>
                                      </div>
                                  </div>
                              </div>
                              </Box>
                          </Modal>
                      </td>
                  </tr>
                  <tr className="text-center">
                      <td>IT</td>
                      <td>Teacher</td>
                      <td>{values.description}</td>
                      <td> {values.hod} </td>
                      <td> 34 </td>
                      <td>
                          <Button onClick={handleOpen} variant="contained" >
                              View    
                          </Button>
                          <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                              timeout: 500,
                              }}
                          >
                              <Box sx={style}>

                              <div className="container">
                                  <h5>
                                      Leave Details
                                  </h5>
                                  <hr />
                                  <div className="row container">
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Department"
                                          disabled
                                          value="IT" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Role Name"
                                          disabled
                                          value="Teacher" 
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <TextField 
                                        variant='outlined'
                                          label="Description"
                                          onChange={handleChange('description')}
                                          value={values.description} 
                                        />
                                      </div>
                                  </div>
                                  <br />
                                  <div className="row container">
                                      <div className="col-md-6">
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Select HOD: </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.hod}
                                            label="Select HOD:"
                                            onChange={handleChange('hod')}
                                        >
                                            <MenuItem value={"Rajan"}>Rajan</MenuItem>
                                            <MenuItem value={"Mainak"}>Mainak</MenuItem>
                                            <MenuItem value={"Dhruba"}>Dhruba</MenuItem>
                                        </Select>   
                                      </FormControl>
                                      </div>
                                      <div className="col-md-6">
                                        <TextField
                                          label="Number of Employee"
                                          value={values.numEmp}
                                          onChange={handleChange('numEmp')}                                          variant='outlined'                                        />
                                      </div>
                                      <br />
                                      <div className="container mt-5 d-flex justify-content-end">
                                        <Button variant='contained' style={{width:'180px'}} onClick={handleClose} className="mb-5">
                                            Submit
                                        </Button>
                                      </div>
                                  </div>
                              </div>
                              </Box>
                          </Modal>
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

            </div>
        </>
    )
}

export default ViewRole