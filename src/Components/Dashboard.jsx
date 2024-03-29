import React from 'react'
import Cards from './SubComponents/Cards';
import { DashboardCard } from '../Data/DashboardCard';
// import '../Images/treva.png'

const Dashboard = () => {
  
  return (
    <>
        <div className="container main_div mt-5 nempMain justify-content-center">
            <div className="row">

                {
                  DashboardCard.map((currEle,ind)=>{
                    return(
                      <div className="col-md-4">

                      <Cards 
                          key={currEle.id}
                          num={currEle.num}
                          heading={currEle.heading}
                          para={currEle.para}
                          icon={currEle.icon}
                      />
                    </div>
                    )
                  })
                }  
            </div>


        </div>
    </>
  )
}

export default Dashboard;