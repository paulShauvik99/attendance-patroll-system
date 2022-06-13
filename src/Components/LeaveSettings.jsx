import React, { useState } from 'react'
import Heading from './SubComponents/Heading'
import { LeaveDetails } from '../Data/DashboardCard'
import { Backdrop, Box, Button, Modal, TextField } from '@mui/material'
import LeaveCard from './SubComponents/LeaveCard'

const LeaveSettings = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

    const [values,setValues] = useState({
        lname:'',
        ldesc:'',
        lnum:0
    });

    const handleChange = (prop) => (e) => {
        setValues({
            ...values,
            [prop]:e.target.value
        })
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height:'380px',
        borderRadius:'13px',
        bgcolor: 'background.paper',
        borderLeft: '2px solid #000',
        borderBottom: '2px solid #000',
        boxShadow: 24,
        p: 4,
        fontSize: 14,
      };
    
    return (
        <>
            <div className="container nempMain bg-light mt-5 mb-5">
                <Heading
                    heading="Leave Types"
                />
                <div className="container main_div mt-5 mb-5 justify-content-center">
                    <div className="row">
                            {
                                LeaveDetails.map((currEle,ind)=>{
                                    return(
                                        <div className="col-md-3">
                                            <LeaveCard
                                                key={ind}
                                                num={currEle.num}
                                                heading={currEle.heading}
                                                para={currEle.para}
                                                onClick={handleOpenEdit}
                                                // icon={currEle.icon}
                                            />
                                        </div>
                                )
                            })
                            }  
                    </div>
                </div>

                <div className="container" onClick={handleOpen}>
                    <Button variant='contained' className='mb-5' style={{width:'180px'}}>
                        Add Leave
                    </Button>
                </div>

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
                                <div className="container " >
                                    <TextField
                                         fullWidth
                                         inputProps={
                                             { autocomplete: "off"}
                                         }
                                         variant='outlined'
                                         label='Leave Name'
                                         className="m-2"
                                         onChange = {handleChange('lname')}
                                         value={values.lname}
                                    />
                                    
                                    <TextField
                                         fullWidth
                                         inputProps={
                                             { autocomplete: "off"}
                                         }
                                         variant='outlined'
                                         label='Leave Description'
                                         className="m-2"
                                         onChange = {handleChange('ldesc')}
                                         value={values.ldesc}
                                    />
                                    
                                    <TextField
                                         inputProps={
                                            { 
                                                type:'number',
                                                autocomplete: 'off'
                                            }
                                         }
                                         
                                         fullWidth
                                         variant='outlined'
                                         label='Max Days Allowed'
                                         className="m-2"
                                         onChange = {handleChange('lnum')}
                                         value={values.lnum}
                                    />
                                    
                                </div>
                                <div className="conatainer mb-2 mt-2 d-flex justify-content-end">
                                    <Button variant='contained' onClick={handleClose} > Add </Button>
                                </div>
                            </div>
                        </Box>
                        </Modal>
               
               
               
                <Modal
                            
                            open={openEdit}
                            onClose={handleCloseEdit}
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
                                <div className="container " >
                                    <TextField
                                         inputProps={
                                             { readOnly: true}
                                         }
                                         value="Leave Name"
                                         fullWidth
                                         variant='outlined'
                                         label='Leave Name'
                                         className="m-2"
                                    />
                                    
                                    <TextField
                                         fullWidth
                                         variant='outlined'
                                         label='Leave Description'
                                         className="m-2"
                                         value={values.ldesc}

                                    />
                                    
                                    <TextField
                                         inputProps={
                                            { type:'number'}
                                         }
                                         fullWidth
                                         variant='outlined'
                                         label='Max Days Allowed'
                                         className="m-2"
                                    />
                                    
                                </div>
                                <div className="conatainer mb-2 mt-2 d-flex justify-content-end">
                                    <Button variant='contained' onClick={handleCloseEdit} > Update </Button>
                                </div>
                            </div>
                        </Box>
                        </Modal>

            </div>
        </>
    )
}

export default LeaveSettings