import React, { useState, useEffect} from 'react'
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import jsPDF from 'jspdf'\
import {useParams} from "react-router-dom"
import img1 from '../Images/treva.png'
import axios from "axios"

const Payslip = () => {

    const {id} = useParams()

    const [list,setList] = useState({})

    const getInfo = async ()=>{
        const res = await axios.post("http://localhost:5000/empInfo",{
            id : id
        })

        console.log(res.data.firstname);
        setList(res.data)
    }

    useEffect(() => {
        getInfo();
    }, [])
    

    return (
        <>
            <div class="container bg-light" style={{ marginTop: '-30px' }} id="#content">
                <h3 class="text-center mt-5">Payslip For The Month May'22</h3>
                <div class="row container lh-1 justify-content-between">
                    <div class="col-md-4">
                        <img height="100" width="100" src={img1} alt="dummy img" />
                        <div class="">
                            <p>Company Name</p>
                            <p>Company Address</p>
                            <p>Company Address 2</p>
                        </div>
                        <br />
                        <div class="">
                            <h6>{list.firstname} {list.lastname}</h6>
                            <p>{list.role}</p>
                            <p>{list.employeeID}</p>
                            <p>Joining Date: {list.joinDate}</p>
                        </div>
                    </div>
                    <div class="col-md-4 text-center" >
                        <h4 class="mt-5">PAYSLIP #21223</h4>
                        <h6>Salary Month: May'22</h6>
                    </div>
                </div>
                <br />
                <div class=" row container">
                    <div class="col-md-6 container">
                        <table class="table table-striped">
                            <thead>
                                <tr class="font-weight-bold"><h4>Earnings</h4></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Basic Salary</td>
                                    <td class="text-center">6500</td>
                                </tr>
                                <tr>
                                    <td>House Rent Allowance(H.R.A)</td>
                                    <td class="text-center">55</td>
                                </tr>
                                <tr>
                                    <td>Conveyance</td>
                                    <td class="text-center">55</td>
                                </tr>
                                <tr>
                                    <td>Other Allowance</td>
                                    <td class="text-center">55</td>
                                </tr>
                                <tr>
                                    <td>Total Earnings</td>
                                    <td class="text-center">3000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-6 container">
                        <table class="table table-striped">
                            <thead>
                                <tr class="font-weight-bold"><h4>Deductions</h4></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tax Deducted at Source (T.D.S) </td>
                                    <td class="text-center">0</td>
                                </tr>
                                <tr>
                                    <td>Provinent Fund</td>
                                    <td class="text-center">0</td>
                                </tr>
                                <tr>
                                    <td>ESI</td>
                                    <td class="text-center">0</td>
                                </tr>
                                <tr>
                                    <td>Loan</td>
                                    <td class="text-center">300</td>
                                </tr>
                                <tr>
                                    <td>Total Deductions</td>
                                    <td class="text-center">500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br />
                <div class="container ps-4 pb-1">
                    <p><b>Net Salary: 5860</b>(Salary in Words)</p>
                </div>
            </div>

            <div id="elementH"></div>

        </>
    )
}

export default Payslip



