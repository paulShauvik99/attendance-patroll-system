import Button from '@mui/material/Button';
import React, { useState } from 'react'
import Heading from './SubComponents/Heading';


const ManualAttendance = () => {
  
  // const history = useHistory();
  
  const [values,setValues] = useState({
    date:'',
    intime:'',
    outtime:'',
  });

  const handleChange = (prop) => (e) =>{
    setValues({
      ...values,
      [prop] : e.target.value
    })
  }
  return (
    <>  
      
      <div className="container bg-light mt-5 nempMain">
          <Heading 
            heading="Attendance"
          />
          
          <div className="container  mt-5 mb-4">
            <h4 className="mt-5 mb-3">Manual Entry</h4>
          </div>
          <hr />
          <div className="container mt-5 mb-5 attMain ">
              <div className="row form-group justify-content-center d-flex">
                  <label className="col-md-1 control-label"> Date: </label>
                  <div className="col-md-4">
                    <input className="form-control" type="date" onChange={handleChange('date')} />
                  </div>
              </div>
              <br />
              <div className="row form-group justify-content-center d-flex ">
                  <label className="col-md-1 control-label"> Time In: </label>
                  <div className="col-md-4">
                    <input className="form-control" type="time" onChange={handleChange('intime')} />
                  </div>
              </div>
              <br />
              <div className="row form-group justify-content-center d-flex">
                  <label className="col-md-1 control-label"> Time Out: </label>
                  <div className="col-md-4">
                    <input className="form-control" type="time" onChange={handleChange('outtime')} />
                  </div>
              </div>
              <br />
              <div className='mt-3 justify-content-center d-flex'>
                <Button variant='contained attSub' href="#" className="mb-5">
                    Submit
                </Button>
              </div>
          </div>
            

      </div>
        
    </>
  )
}

export default ManualAttendance;