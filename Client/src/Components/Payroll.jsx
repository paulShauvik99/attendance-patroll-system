import { Backdrop, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Heading from './SubComponents/Heading'


const Payroll = () => {





    
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        // console.log("ckd")
    }
    const handleClose = () => {
        setOpen(false);
        setRefSal(sal);
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height:'95vh',
        bgcolor: 'white',
        border: '2px solid rgba(0,0,0,0.2)',
        boxShadow: 24,
        p: 4,
        fontSize: 14,
        };
    
        const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95vw',
        height:'95vh',
        bgcolor: 'white',
        border: '2px solid rgba(0,0,0,0.2)',
        boxShadow: 24,
        p: 4,
        fontSize: 14,
        };
  
        //DB
    const [values,setValues] = useState({ 
        'empName':'',
        'role':'Staff',
        'salary':'1200000',
    })

//Input Field
    const [sal,setSal] = useState(1200000)
    

    //Refresh
    const [refSal,setRefSal] = useState(0)


    const [salBreak, setSalBreak] = useState({
        'basic':'0',
        'hra':'0',
        'splAll':'0',
        'pf':'0',
        'it':'0',
        'grat':'0',
        'medIns':'0',
    })
    const handleChange = (prop) => (e) =>{
        setValues({
            ...values,
            [prop]: e.target.value,
        })
    }

    const calculateSalaryBreakdown = (sal) =>{
        // console.log("Check"+sal)
        var perMon = sal/12;
        perMon = perMon.toFixed(2);
        // console.log(perMon);
        var basic = Number((0.4*perMon).toFixed(2));
        // console.log(basic);
        
        var hra = Number((0.2*perMon).toFixed(2));
        // console.log(hra);
        var splAll = Number((0.17*perMon).toFixed(2));
        // console.log(splAll);
        var pf = Number((0.08*perMon).toFixed(2));
        // console.log(pf);
        var it = Number((0.05*perMon).toFixed(2));
        // console.log(it);
        var grat = Number((0.05*perMon).toFixed(2));
        // console.log(grat);
        var medIns =  Number((0.05*perMon).toFixed(2));
        // console.log(medIns);

        var grosstot = basic+hra+splAll-pf-it;
        // console.log(grosstot);
        setSalBreak({
            ['basic']: basic,
            ['hra']:hra,
            ['splAll']: splAll,
            ['pf']: pf,
            ['it']: it,
            ['grat']: grat,
            ['medIns']: medIns,
        })
        // handleChange('basic')
        
        
    }

    useEffect(() => {
        calculateSalaryBreakdown(sal);
    },[sal,refSal])

    console.log(refSal);








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

                                    value={values.role}
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
                                <td>  {values.salary}  </td>
                                <td>  
                                    <div class="dropdown">
                                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">    
                                        <li>     
                                            <Button className="dropdown-item" onClick={handleOpen}><i className="fa fa-edit"></i>  Edit</Button>
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
                                                        Update Salary
                                                    </h5>
                                                    <hr className='mb-3'/>
                                                    <div className="row container mb-3 mt-2 " >
                                                        <div className="col-md-6">
                                                            <TextField 
                                                                fullWidth
                                                                variant='outlined'
                                                                label="Employee Name"
                                                                disabled
                                                                value="John Doe" 
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <TextField 
                                                            variant='outlined'
                                                            label="Salary"
                                                            fullWidth
                                                            value={sal}
                                                            onChange={(e)=> setSal(e.target.value)} 
                                                            />
                                                        </div> 
                                                    </div>
                                                    <hr className='mt-4 mb-5'/>
                                                  
                                                    <div className="row container">
                                                        <div className="row col-md-6 leftSide">
                                                            <div className="col-md-12 pb-3">
                                                                <TextField
                                                                    fullWidth
                                                                    label="Basic (40%)"
                                                                    value={salBreak.basic}
                                                                    variant='outlined'
                                                                    disabled
                                                                />
                                                            </div>
                                                            <div className="col-md-12 pb-3">
                                                                <TextField
                                                                    fullWidth
                                                                    label="H.R.A (20%)"
                                                                    value={salBreak.hra}
                                                                    variant='outlined'
                                                                    disabled
                                                                />
                                                            </div>
                                                            <div className="col-md-12">
                                                                <TextField
                                                                    fullWidth
                                                                    label="Special Allowance(17%)"
                                                                    value={salBreak.splAll}
                                                                    variant='outlined'
                                                                    disabled
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 rightSide">
                                                            <div className="col-md-12 pb-3">
                                                                <TextField
                                                                    fullWidth
                                                                    disabled
                                                                    label="PF(8%)"
                                                                    value={salBreak.pf}
                                                                    variant='outlined'  
                                                                />
                                                            </div>
                                                            <div className="col-md-12 pb-3">
                                                                <TextField
                                                                    fullWidth
                                                                    disabled
                                                                    label="IT(5%)"
                                                                    value={salBreak.it}
                                                                    variant='outlined'  
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <hr className="mb-4" />
                                                    <div className="row container col-md-7">
                                                            <div className="col-md-12 pb-3">
                                                                <TextField
                                                                    fullWidth
                                                                    disabled
                                                                    label="Gratuity(5%)"
                                                                    value={salBreak.grat}
                                                                    variant='outlined'  
                                                                />
                                                            </div>
                                                            <div className="col-md-12 pb-3">
                                                                <TextField
                                                                    fullWidth
                                                                    disabled
                                                                    label="Medical Insurance(5%)"
                                                                    value={salBreak.medIns}
                                                                    variant='outlined'  
                                                                />
                                                            </div>
                                                    </div>                                                       
                                                    <div className="container mt-3 d-flex justify-content-end">
                                                        <Button variant='contained' style={{width:'180px'}} onClick={handleClose} >
                                                            Update
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Box>
                                            </Modal>
                                        </li>


                                        <li>
                                            {/* <Button className="dropdown-item" onClick={handleOpen}><i className="fa fa-edit"></i>  Generate Payslip</Button>
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
                                                <Box sx={style1}>
                                                    <Payslip 

                                                    />
                                                </Box>
                                            </Modal> */}
                                            {/* <PayslipDet.Provider value={salBreak.basic}> */}
                                                <Link className="dropdown-item" to="payroll/payslip"><i className="fa fa-trash"></i> Generate Payslip</Link>
                                            {/* </PayslipDet.Provider> */}
                                        </li>
                                        </ul>
                                    </div>
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
