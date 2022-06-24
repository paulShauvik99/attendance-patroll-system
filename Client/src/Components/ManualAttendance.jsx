import Button from '@mui/material/Button';
import React, { useState, useEffect, } from 'react'
import Heading from './SubComponents/Heading';
import axios from "axios"


const ManualAttendance = () => {



  // const history = useHistory();

  const name = "Ana Roy"


  const [values, setValues] = useState({
    date: Date.now(),
    intime: '',
    outtime: '',
  });

  const handleChange = (prop) => (e) => {
    setValues({
      ...values,
      [prop]: e.target.value
    })
  }


  const addAttendance = async (event) => {
    const res = await axios.post("http://localhost:5000/addAttendance", {
      // name, date, time_in, time_out
      name: name,
      empId : "23145",
      date: date,
      time_in: timeIn,
      time_out: timeOut

    })
    console.log(res);
    if (res.status === 201) {
      window.alert(res.data.message)
    } else {
      window.alert(res.data.message)
    }
  }
  const [date, setDate] = useState('')
  const [timeIn, setTimeIn] = useState('00:00')
  const [timeOut, setTimeOut] = useState('00:00')
  const [disable, setDisable] = useState(false)
  const [disables, setDisables] = useState(false)
  const getTime = async () => {
    const date = new Date();
    setDate(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate())
    console.log(date.getHours());
    console.log(date.getMinutes());
  }

  const settimesIn =  () => {
    console.log(123456);
    const date = new Date();
    setTimeIn(date.getHours() + ":" + date.getMinutes() )
    console.log(timeIn);
    setDisable(true)
  }
  const settimesOut =  () => {
    console.log(123456);
    const date = new Date();
    setTimeOut(date.getHours() + ":" + date.getMinutes())
    console.log(timeIn);
    setDisables(true)
  }


  useEffect(() => {
    getTime();
    setDisable(false);
    setDisable(false)
  }, [])



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
            <div className="col-md-5">
              <input className="form-control" type="text" readOnly={true} value={date} />
            </div>
          </div>
          <br />
          <div className="row form-group justify-content-center d-flex ">
            <label className="col-md-1 control-label"> Time In: </label>
            <div className="col-md-3">
              <input className="form-control" type="text" value={timeIn} readOnly={true} />
            </div>
            <div className="col-md-2 ">
              <button className="btnClickHeres" onClick={settimesIn} disabled={disable} >Click Here</button>
            </div>
          </div>
          <br />
          <div className="row form-group justify-content-center d-flex">
            <label className="col-md-1 control-label"> Time Out: </label>
            <div className="col-md-3">
              <input className="form-control" type="text" value={timeOut} readOnly={true} />
            </div>
            <div className="col-md-2 ">
              <button className="btnClickHeress" onClick={settimesOut} disabled={disables} >Click Here</button>
            </div>
          </div>
          <br />
          <div className='mt-3 justify-content-center d-flex'>
            <Button variant='contained' style={{ width: '180px' }} className="mb-5" onClick={addAttendance}>
              Submit
            </Button>
          </div>
        </div>

      
      </div>

    </>
  )
}

export default ManualAttendance;