import React, { useState, useEffect } from 'react'
import Cards from './SubComponents/Cards';
import { DashboardCard } from '../Data/DashboardCard';
// import '../Images/treva.png'
import ReactECharts from 'echarts-for-react';
// import { department, Leave } from "../EchartsOptions/options"
import { getCount } from "../Apis/apis"
import Heading from './SubComponents/Heading';

const Dashboard = () => {



  const [dept, setDept] = useState([]);
  const [leaveStat, setLeaveStat] = useState([]);
  const [totalLeave, setTotalLeave] = useState(0);
  const getCounts = async () => {
    const res = await getCount();
    setDept(res.data.employeeInDept)
    console.log(res.data.statusLeaves);
    setLeaveStat(res.data.statusLeaves)
    setTotalLeave(res.data.value)

  }

  const colorPalette = ['#198754', '#dc3545', '#ffc107', '#0d6efd']

  const deptObj = dept.map((item, index) => {
    return {
      name: item._id,
      value: item.count
    };
  });

  const leaveObj = leaveStat.map(item => {
    return {
      name: item._id,
      value: item.count
    };
  });

  leaveObj.push({ name: 'Total Leaves', value: totalLeave })

  console.log(leaveObj);

  useEffect(() => {
    getCounts()
  }, []);

  var x = [];
  var y = [];

  leaveObj.map((curr, i) => {
    x.push(curr.name)
    y.push({
      value: curr.value,
      itemStyle: {
        color: colorPalette[i]
      }
    })
  })


  const leave = {
    legend: {
      bottom: '10%',
      left: '15%'
    },
    color: ['#00DDFF'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          backgroundColor: '#00000'
        },
        animation: true
      }
    },
    xAxis: {
      type: 'category',
      data: x,
    },
    yAxis: {
      type: 'value',
      nameTextStyle: {
        fontStyle: 'oblique',
        fontWeight: 500
      }
    },
    series: [
      {
        // name: 'Leave Chart',
        data: y,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };


  const department = {

    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '10%',
      left: '15%'
    },

    series: [
      {
        name: 'Department Chart',
        type: 'pie',
        radius: [50, 180],
        center: ['55%', '40%'],
        // roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: deptObj
      }
    ]
  };




  return (
    <>
      <div className="container main_div mt-5 nempMain justify-content-center" >

        <div className="row">

          {
            DashboardCard.map((currEle, ind) => {
              return (
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
      <div className="stopScroll">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <h2 className="moveRight">No of employees per department</h2>
          </div>
          <div className="col-sm-6 col-md-6">
            <h2 className="moveRights">Leave Statistics</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <ReactECharts option={department} style={{ height: '600px', width: '95%' }} />
          </div>
          <div className="col-sm-6 col-md-6">
            <ReactECharts option={leave} style={{ height: '500px', width: '95%' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;