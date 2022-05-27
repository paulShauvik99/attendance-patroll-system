import React from 'react'
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import jsPDF from 'jspdf'\
import img1 from '../Images/treva.png'

const Payslip = () => {
    
   

    
    return (
        <>
        

                <div class="container bg-light" style={{marginTop:'-30px'}} id="#content">
                    <h3 class="text-center ">Payslip For The Month May'22</h3>
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
                                <h6>Employee Name</h6>
                                <p>Designation</p>
                                <p>Employee ID</p>
                                <p>Joining Date: 1st April'22</p>
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


