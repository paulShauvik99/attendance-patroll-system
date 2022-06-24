import axios from "axios"

export const getLeaveTypes = async () => {
    const res = await axios.get("http://localhost:5000/allLeaveTypes")
    return res;
}

export const allEmployeeList = async () => {
    const res = await axios.get("http://localhost:5000/findEmployee")
    return res;
}

export const getAllLeaveList = async () => {
    const res = await axios.get("http://localhost:5000/allLeaves")
    return res;
}

export const singleEmployeeleaveDetails = async (id) => {
    const res = await axios.post("http://localhost:5000/singleEmployeeLeave", {
        _id : id
    })
    return res;
}

export const updateLeaveStatuses = async (data) => {
    console.log(12345)
    const res = await axios.post("http://localhost:5000/updateLeaveStatus", data);
    // console.log(res)
    return res;
}

export const viewEmployeeLeaves = async(data) => {
    console.log(data)
    const res = await axios.post("http://localhost:5000/sendEmployeeLeaveList", { 
        empId : data
    })
    // console.log(res)
    return res
}


export const getCount = async () => {
  const res = await axios.get("http://localhost:5000/getCount");
  console.log(res)
  return res;
}


export const employeeLeaveCalculator = async (data) => {
    const res = await axios.post("http://localhost:5000/employeeAttendanceStats", {
        empId : data
    })
    return res;
}