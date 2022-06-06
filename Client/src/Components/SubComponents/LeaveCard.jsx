import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
const LeaveCard = (props) => {
        
    
    return (
        <>
            <div className="card mt-2 mb-2">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title" style={{fontSize:"28px"}}>{props.heading}</h5>
                        <h5 className="card-title" style={{fontSize: "40px"}}>{props.num}</h5>
                    </div>
                    
                    <p className="card-text" style={{fontSize: "14px"}}>{props.para}</p>
                    <div className="d-flex justify-content-end">
                        <Button variant="contained" onClick={()=>{props.onClick(props.id)}} className="me-2">
                            <EditIcon  />
                        </Button>
                        <Button variant="contained">
                            <DeleteIcon />
                        </Button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaveCard