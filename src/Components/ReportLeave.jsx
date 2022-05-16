import React from 'react'
import Heading from './SubComponents/Heading'

const ReportLeave = () => {
  return (
    <>

        <div className="bg-light container mb-5 mt-5 nempMain">
            <Heading
                heading="Reports"
            />
            <div className="container mt-5 mb-3">
                <h4>Leave Reports</h4>
            </div>
            <hr />
            <div className="container">
            <table id="dtBasicExample" className="mt-5 mb-5 table table-hover table-responsive table-bordered" >
                <thead className="bg-dark text-light">
                <tr className='text-center'>
                    <th class="th-sm">Name
                    </th>
                    <th class="th-sm">Leave Type
                    </th>
                    <th class="th-sm">Allowance
                    </th>
                    <th class="th-sm">Used
                    </th>
                    <th class="th-sm">Balance
                    </th>
                </tr>
                </thead>
                <tbody className="mb-1">
                    <tr className="text-center">
                        <td>Tiger Nixon</td>
                        <td>Sick Leave</td>
                        <td>30</td>
                        <td>5</td>
                        <td> 25 </td>
                    </tr>
                    <tr className="text-center">
                        <td>Tiger Nixon</td>
                        <td>Sick Leave</td>
                        <td>30</td>
                        <td>5</td>
                        <td> 25 </td>
                    </tr>
                    <tr className="text-center">
                        <td>Tiger Nixon</td>
                        <td>Sick Leave</td>
                        <td>30</td>
                        <td>5</td>
                        <td> 25 </td>
                    </tr>
                    <tr className="text-center">
                        <td>Tiger Nixon</td>
                        <td>Sick Leave</td>
                        <td>30</td>
                        <td>5</td>
                        <td> 25 </td>
                    </tr>
                    <tr className="text-center">
                        <td>Tiger Nixon</td>
                        <td>Sick Leave</td>
                        <td>30</td>
                        <td>5</td>
                        <td> 25 </td>
                    </tr>
                    <tr className="text-center">
                        <td>Tiger Nixon</td>
                        <td>Sick Leave</td>
                        <td>30</td>
                        <td>5</td>
                        <td> 25 </td>               
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

export default ReportLeave