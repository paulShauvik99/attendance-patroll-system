const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


require("../DB/connection")

const User = require("../models/user")
const Attendance = require("../models/attendance");
const Leave = require("../models/leave");
const Payment = require("../models/payment.js")
const Admin = require("../models/admin.js");
const Role = require("../models/department")

router.get('/any', (req, res) => {
    res.cookie("test", 'hello')
    res.send("router First Page");

})

// all Employees
router.get("/findEmployee", async (req, res) => {
    const Employee = await User.find({})
    res.send(Employee)
})

// new Employee

router.post("/addEmployee", async (req, res) => {
    
    try {
        const { firstname, lastname, streetAdd, city, state, zip, gender, birthday,
            email, mobile, phone, marital, education, employeeID,
            role, joinDate, employmentType } = req.body;

        console.log(req.body)

        if (!firstname || !lastname || !streetAdd || !city || !state || !zip || !gender || !birthday ||
            !email || !mobile || !marital || !education || !employeeID ||
            !role || !joinDate || !employmentType) {
            return (res.json({ error: "Field here Required" }));
        }
        const response = await User.findOne({ employeeID: employeeID });
        if (response) {
            return (res.json({ error: "Employee ID must be different" }));
        }
        else {
            const password = "Password@123"
            const hashedPassword = await bcrypt.hash(password, 12);

            const user = new User({
                firstname, lastname, streetAdd, city, state, zip, gender, birthday,
                email,mobile, phone, marital, education, employeeID,
                role, joinDate, employmentType, password: hashedPassword
            })

            const userSave = await user.save()

            const roleEdit = await Role.updateOne({name : role},{
               $inc : {
                   no_of_employee : 1
               }
            })

            if (userSave && roleEdit) {
                return res.status(201).json({ message: "Added Successfully" })
            } else {
                return res.json({ error: "Failed to register" })
            }
        }

    } catch (error) {
        console.log(error)
    }
})

// new admin
router.post("/addAdmin", async (req, res) => {
    try {
        const { name, email, id, role, password, conpassword} = req.body;
        if (password !== conpassword) {
            return res.json({ message: "Password and Confirm Password must be same" })
        } else {
            const hashedPassword = await bcrypt.hash(password, 12);
            const response = new Admin({ name: name, email: email, adminId : id,
                role: role, password: hashedPassword });
            const admin = await response.save();
            if (admin) {
                return res.status(201).json({ message: "Added Successfully" })
            } else {
                return res.json({ message: "Failed to register" })
            }
        }
    } catch (err) {

    }
})

// single employee

router.post("/empInfo" ,async (req, res)=>{
    const {id} = req.body;
    try {
       const response = await User.findOne({_id : id})
       res.send(response)
    } catch (error) {
        console.log(error)
    }
})


// login

router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body)
        if (!email || !password) {
            return (res.json({ error: "Field Required" }));
        }

        const response = await User.findOne({ email: email });

        if (response) {
            const isMatch = await bcrypt.compare(password, response.password);
            const token = await response.generateAuthToken();
            console.log(token);
            res.cookie("lmstoken", token, {
                expires: new Date(Date.now() + 3600000),
                httpOnly: true
            })

            if (isMatch) {
                return res.status(201).json({ message: "success" })
            } else {
                console.log(1234)
                return (res.json({ error: "Invalid Details1" }));   //.status(422)
                // return res.status(201).json({ message: " success" })    
            }
        } else {
            return (res.json({ error: "Invalid Details1" }));
        }


    } catch (err) { console.log(err) }
})

// update Employee

router.post("/updateEmployee", async (req, res) => {
    try {
        const { firstname, lastname, streetAdd, city, state, zip, gender, birthday,
            email, phone, marital, education, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const respond = await User.updateOne({ _id: _id },
            {
                $set: {
                    firstname: firstname,
                    lastname: lastname,
                    streetAdd: streetAdd,
                    city: city,
                    state: state,
                    zip: zip,
                    gender: gender,
                    birthday: birthday,
                    email: email,
                    phone: phone,
                    marital: marital,
                    education: education,
                    password: hashedPassword

                }
            })

        res.send(respond);

    } catch (err) {
        console.log(err)
    }
})


// update role
router.post("/updateAdminRole", async (req, res) => {
    try {
        const { _id, name, email, role } = req.body;
        const respond = await Admin.updateOne({ _id: _id }, {
            $set: {
                role: role
            }
        })
        res.send(respond);

    } catch (err) {
        console.log(err)
    }
})

router.post("/updateUserRole", async (req, res) => {
    try {
        const { _id, name, email, role } = req.body;
        const respond = await User.updateOne({ _id: _id }, {
            $set: {
                role: role
            }
        })
        res.send(respond);

    } catch (err) {
        console.log(err)
    }
})

// delete employee
router.post("/deleteUser", async (req, res) => {
    const { _id } = req.body;
    console.log(_id);
    const respond = await User.deleteOne({ _id: _id })
    console.log(respond);
    res.send(respond)
})


// add attendance

router.post("/addAttendance", async (req, res) => {
    const { name, date, time_in, time_out } = req.body;
    try {
        const [hoursin, minutein] = time_in.split(':');
        const [hoursout, minuteout] = time_out.split(':');
        if (hoursin > hoursout) {
            return res.send({ message: "Time in cannot be after time out" })
        } else if (hoursin == hoursout) {
            if (minutein > minuteout) {
                return res.send({ message: "Time in cannot be after time out" })
            }
        } else {
            const response = await new Attendance({ name: name, date: date, time_in: time_in, time_out: time_out });
            const attendance = await response.save();

            if (attendance) {
                return res.status(201).json({ message: "Attendance Recorded Successfully" })
            } else {
                return res.send({ message: "Attendance failed to record" })
            }
        }
    } catch (err) {
        console.log(err);
    }

})

// employee list for Attendance

router.get("/viewAttendanceList", async (req, res) => {
    Attendance.find({}, (error, response) => {
        if (error) {
            console.log(error)
        }
        res.send(response)
    })
})



// add role
router.post("/addRole", async (req, res) => {
    const { name, description, head } = req.body;
    // console.log(req.body);
    try {
        console.log(25);
        const response = new Role({
            name: name,
            description: description,
            no_of_employee: 0,
            head_of_dept: head

        })
        console.log(28);
        console.log(response);

        const role = await response.save();
        console.log(29);
        console.log(role);

        if (role) {
            return res.json({ message: "New role added" })
        } else {
            return res.json({ error: "Role cannot be added" })
        }

    } catch (error) {

    }
})

// edit Role


router.post("/editRole", async (req, res) => {
    const { name, description, head } = req.body;

    try {
        if (description && head) {
            const response = await Role.updateOne({ name: name }, {
                $set: {
                    description: description,
                    head_of_dept: head
                }
            })
            res.send(response)
        } else if (!head && description) {
            const response = await Role.updateOne({ name: name }, {
                $set: {
                    description: description,

                }
            })
            res.send(response)
        } else if (!description && head) {
            const response = await Role.updateOne({ name: name }, {
                $set: {

                    head_of_dept: head
                }
            })
            res.send(response)
        } else {
            res.send({ message: "Nothing Updated" })
        }

    } catch (error) {
        console.log(error)
    }
})


// get all roles
router.get("/getAllRoles", async (req, res) => {
    try {
        const response = await Role.find({});
        console.log(548);
        console.log(response)
        res.send(response)
    } catch (error) {
        console.log(error);
    }
})

// dept employee name
router.post("/getRoleEmployeeName", async (req, res)=>{
    try {
        const {name} = req.body;
        const response = await User.find({role : name})
        res.send(response);
    } catch (error) {
        console.log(error);
    }
})

// employee attendance

router.post("/viewEmployeeAttendance", async (req,res)=>{
    const {name} = req.body;
    console.log(556);
    console.log(name);

    Attendance.find({name:name},(error, response) => {
        if (error) {
            console.log(error)
        }
        res.send(response)
    })
})



router.get("/logout", (req, res) => {
    res.clearCookie("lmstoken", { path: '/' })
    res.send({ message: "Logged out Successfully" })
})

module.exports = router;