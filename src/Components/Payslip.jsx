import React, { useEffect, useState } from 'react'
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import jsPDF from 'jspdf'\
import img1 from '../Images/treva.png'
import {ToWords} from 'to-words'
import { Button } from '@mui/material';






const Payslip = () => {


    const printPage =() =>{
        var content = document.getElementById('content').innerHTML;
        var origin = document.body.innerHTML;
        
        document.body.innerHTML = content;
        // var a = window.open('', '', 'height=1000, width=1000');
        // a.document.write('<html>');
        // a.document.write('<body>');
        // a.document.write(content);
        // a.document.write('</body></html>');
        // a.document.close();
        // a.print();
        // var a = window.open('','', 'height:500 ' )

        window.print(); 
        

        document.body.innerHTML = origin;
    }


    const toWords = new ToWords({
        localeCode: 'en-IN',
        converterOptions: {
          currency: true,
          ignoreDecimal: false,
          ignoreZeroCurrency: false,
          doNotAddOnly: false,
        }
      });

    const d= new Date();
    var yr = Number(String(d.getFullYear()).slice(-2));
    var mon = d.getMonth();
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    // console.log(month[mon]+"'"+yr);

    const [salary,setSalary] = useState(2500000)
    
    const [salBreak, setSalBreak] = useState({
        'basic':0,
        'hra':0,
        'splAll':0,
        'pf':0,
        'it':0,
        'grat':0,
        'medIns':0,
        'grosstot':0,
    })

    const [salInWord,setSalInWord] = useState('');

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

        var grosstot = Number(basic+hra+splAll+pf+it).toFixed(2);
        // console.log(grosstot);
        setSalBreak({
            ['basic']: basic,
            ['hra']:hra,
            ['splAll']: splAll,
            ['pf']: pf,
            ['it']: it,
            ['grat']: grat,
            ['medIns']: medIns,
            ['grosstot']: grosstot,
        })
        // handleChange('basic')
        var salWord = toWords.convert(grosstot);
        setSalInWord(salWord);
        
    }

    // console.log(salInWord);
    useEffect(() => {
        calculateSalaryBreakdown(salary);
    },[])

    
    return (
        <>
        

                <div className="align-items-center container bg-light mt-3 nempMain" id="content">
                    <h3 className="text-center ">Payslip For The Month {`${month[mon]}'${yr}`}</h3>
                    <div className="row container lh-1 justify-content-between">
                        <div className="col-md-4">
                            <img height="100" width="100" src={img1} alt="dummy img" />
                            <div className="">
                                <p>Company Name</p>
                                <p>Company Address</p>
                                <p>Company Address 2</p>
                                <br />
                                <br />
                                <p><b>CTC: &nbsp; Rs. {`${salary}`}</b></p>
                            </div>
                            <br />   
                        </div>

                        <div className="col-md-4  payslipRight text-left" >
                                <h6>Employee Name</h6>
                                <p>Designation</p>
                                <p>Employee ID</p>
                                <p>Joining Date: 1st April'22</p>
                        </div>
                    </div>
                    <br />
                    <div className=" row container">
                        <div className="col-md-6 container">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="font-weight-bold"><h4>Earnings</h4></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Basic Salary</td>
                                        <td className="text-center">{salBreak.basic}</td>
                                    </tr>
                                    <tr>
                                        <td>House Rent Allowance (H.R.A)</td>
                                        <td className="text-center">{salBreak.hra}</td>
                                    </tr>
                                    <tr>
                                        <td>Special Allowance</td>
                                        <td className="text-center">{salBreak.splAll}</td>
                                    </tr>
                                    {/* <tr>
                                        <td>g</td>
                                        <td className="text-center">55</td>
                                    </tr>
                                    <tr>
                                        <td>Total Earnings</td>
                                        <td className="text-center">3000</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6 container">
                            <table className="table table-striped">
                                <thead>
                                    <tr className="font-weight-bold"><h4>Deductions</h4></tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <td>Provinent Fund (PF)</td>
                                        <td className="text-center">{salBreak.pf}</td>
                                    </tr>
                                    <tr>
                                        <td>Proffesional Tax (PT)</td>
                                        <td className="text-center">{salBreak.it}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <br />
                    <div className="container text-capitalize ps-4 pb-1">
                        <p>Gratuity: &nbsp; Rs. {`${salBreak.grat}`}</p>
                        <p>Medical Insurance: &nbsp; Rs. {`${salBreak.medIns}`}</p>
                        <p><b>Monthly Gross : &nbsp; Rs. {`${salBreak.grosstot}`}</b>({`${salInWord}`})</p>
                    </div>
                </div>
                    <div className="container d-flex justify-content-center mt-2 mb-5">
                        <Button variant='contained' onClick={printPage}> Print </Button>
                    </div>

                
                
        
    </>
  )
}

export default Payslip



