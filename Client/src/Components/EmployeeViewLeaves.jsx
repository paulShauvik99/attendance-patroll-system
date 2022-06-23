import { Backdrop, Box, Button, FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material'
import React, { useState } from 'react'
import Heading from './SubComponents/Heading'



const EmployeeViewLeaves = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [status, setStatus] = useState();
    const handleChange = (e) => setStatus(e.target.value)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '380px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        fontSize: 14,
    };




    return (
        <>
            <div className="container mt-5 mb-5 nempMain bg-light">
                <Heading
                    heading="Leaves"
                />
                <div className="container mb-3 mt-5">
                    <h4>Leave Applications</h4>
                </div>
                <hr />
                <div className="container">
                    <table id="dtBasicExample" className="mt-5 mb-5 table table-hover table-responsive table-bordered" >
                        <thead className="bg-dark text-light">
                            <tr className='text-center'>
                                <th class="th-sm">Date
                                </th>
                                <th class="th-sm">Name
                                </th>
                                <th class="th-sm"> Leave Type
                                </th>
                                <th class="th-sm">From
                                </th>
                                <th class="th-sm">To
                                </th>
                                <th class="th-sm statusLeave">Status
                                </th>
                                <th class="th-sm">Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="mb-1">
                            
                            <tr className="text-center">
                                <td>2022-11-14</td>
                                <td> Gautam </td>
                                <td>Fever</td>
                                <td>2022-05-10</td>
                                <td>2022-05-15</td>
                                <td> <span className="badge rounded-pill bg-rejected"> Rejected </span> </td>
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
                                                <div className="container">
                                                    <p>Name: Anonymous</p>
                                                    <p>Date: 2022-05-12</p>
                                                    <p>Status: Pending</p>
                                                    <p>Description: Leave due to Fever</p>
                                                    <p>Reason: Fever</p>
                                                    <p>Number of Days: 5</p>
                                                </div>
                                                <div className="conatainer mb-2 mt-2 d-flex justify-content-end">
                                                    <Button variant='contained' onClick={handleClose} > Close </Button>

                                                </div>
                                            </div>
                                        </Box>
                                    </Modal>
                                </td>


                            </tr>
                            <tr className="text-center">
                                <td>2022-11-14</td>
                                <td> Abhishek </td>
                                <td>Fever</td>
                                <td>2022-05-10</td>
                                <td>2022-05-15</td>
                                <td> <span className="badge rounded-pill bg-accepted"> Accepted </span></td>
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
                                                <div className="container">
                                                    <p>Name: Anonymous</p>
                                                    <p>Date: 2022-05-12</p>
                                                    <p>Status: Pending</p>
                                                    <p>Description: Leave due to Fever</p>
                                                    <p>Reason: Fever</p>
                                                    <p>Number of Days: 5</p>
                                                </div>
                                                <div className="conatainer mb-2 mt-2 d-flex justify-content-end">
                                                    <Button variant='contained' onClick={handleClose} > Close </Button>
                                                </div>
                                            </div>
                                        </Box>
                                    </Modal>
                                </td>


                            </tr>
                            <tr className="text-center">
                                <td>2022-11-14</td>
                                <td> Gautam </td>
                                <td>Fever</td>
                                <td>2022-05-10</td>
                                <td>2022-05-15</td>
                                <td> <span className="badge rounded-pill bg-warning"> Pending </span> </td>
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
                                                <div className="container">
                                                    <p>Name: Anonymous</p>
                                                    <p>Date: 2022-05-12</p>
                                                    <p>Status: Pending</p>
                                                    <p>Description: Leave due to Fever</p>
                                                    <p>Reason: Fever</p>
                                                    <p>Number of Days: 5</p>
                                                </div>
                                                <div className="conatainer mb-2 mt-2 d-flex justify-content-end">
                                                    <Button variant='contained' onClick={handleClose} > Close </Button>
                                                </div>
                                            </div>
                                        </Box>
                                    </Modal>
                                </td>

                            </tr>
                            <tr className="text-center">
                                <td>2022-11-14</td>
                                <td> Gautam </td>
                                <td>Fever</td>
                                <td>2022-05-10</td>
                                <td>2022-05-15</td>
                                <td> <span className="badge rounded-pill bg-warning"> Pending </span> </td>
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
                                                <div className="container">
                                                    <p>Name: Anonymous</p>
                                                    <p>Date: 2022-05-12</p>
                                                    <p>Status: Pending</p>
                                                    <p>Description: Leave due to Fever</p>
                                                    <p>Reason: Fever</p>
                                                    <p>Number of Days: 5</p>
                                                </div>
                                                <div className="conatainer mb-2 mt-2 d-flex justify-content-end">
                                                    <Button variant='contained' onClick={handleClose} > Close </Button>
                                                </div>
                                            </div>
                                        </Box>
                                    </Modal>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td>2022-11-14</td>
                                <td> Gautam </td>
                                <td>Fever</td>
                                <td>2022-05-10</td>
                                <td>2022-05-15</td>
                                <td><span className="badge rounded-pill bg-warning"> Pending </span> </td>
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
                                                <div className="container">
                                                    <p>Name: Anonymous</p>
                                                    <p>Date: 2022-05-12</p>
                                                    <p>Status: Pending</p>
                                                    <p>Description: Leave due to Fever</p>
                                                    <p>Reason: Fever</p>
                                                    <p>Number of Days: 5</p>
                                                </div>
                                                <div className="conatainer mb-2 mt-2 d-flex justify-content-end">
                                                    <Button variant='contained' onClick={handleClose} > Close </Button>
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

export default EmployeeViewLeaves