const mongoose = require('mongoose');


const attendanceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    date: {
        type: Date,
        required: true,
        
    },
    time_in: {
        type: String,
        required: true
    },
    time_out: {
        type: String,
        required:true
    }
},
{
    timestamps: true

});


const Attendance = mongoose.model('Attendance',attendanceSchema);


module.exports = Attendance;