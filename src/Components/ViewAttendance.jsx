import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Heading from './SubComponents/Heading'
import axios from "axios"



const ViewAttendance = () => {

    const [values, setValues] = useState({
        employee: '',
    })

    const handleChange = (prop) => (e) => {
        setValues({
            ...values,
            [prop]: e.target.value
        })
    }

    const [list, setList] = useState([])

    const getAttendance = async () => {
        const res = await axios.get("http://localhost:5000/viewAttendanceList")
        // console.log(res.data);
        setList(res.data)
    }

    console.log(list);

    useEffect(() => {
        getAttendance()
    },[])

    var hours = 0;
    var minutes = 0;


    return (
        <>
            <div className="container mt-5 bg-light nempMain">
                <Heading
                    heading="View Attendance"
                />

                <div className="container mt-5 mb-5">
                    <h4>Employee Attendance</h4>
                </div>
                <hr />

                <div className="container">
                    <table id="dtBasicExample" className="mt-5 mb-5 table table-hover table-responsive table-bordered" >
                        <thead className="bg-dark text-light">
                            <tr className='text-center'>
                                <th class="th-sm">Name
                                </th>
                                <th class="th-sm">Date
                                </th>
                                <th class="th-sm">Time In
                                </th>
                                <th class="th-sm">Time Out
                                </th>
                                <th class="th-sm">Working Hours
                                </th>
                            </tr>
                        </thead>
                        <tbody className="mb-1">
                            {
                                list.map((curr, index) => {
                                    const [hoursin, minutein] = curr.time_in.split(':');
                                    const [hoursout, minuteout] = curr.time_out.split(':');
                                   return(<>
                                       <tr className="text-center">
                                           <td>{curr.name}</td>
                                           <td>{(curr.date).substring(0,10)}</td>
                                           <td>{curr.time_in}</td>
                                           <td>{curr.time_out}</td>
                                           <td>{hoursout-hoursin} hours {minuteout-minutein} minutes</td>
                                       </tr>
                                   </>)
                                })
                            }
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

export default ViewAttendance