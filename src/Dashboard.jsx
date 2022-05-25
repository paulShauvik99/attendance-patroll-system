import React from 'react'
import Cards from './Components/Cards';
import { DashboardCard } from './Data/DashboardCard';


const Dashboard = () => {
  
  return (
    <>
        <div className="container main_div mt-5 justify-content-center">
            <div className="row">
                {
                  DashboardCard.map((currEle,ind)=>{
                    return <Cards 
                        key={currEle.id}
                        num={currEle.num}
                        heading={currEle.heading}
                        para={currEle.para}
                        icon={currEle.icon}
                    />
                  })
                }  
            </div>


        </div>
    </>
  )
}

export default Dashboard;