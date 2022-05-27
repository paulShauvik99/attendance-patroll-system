const mongoose = require('mongoose');

const leaveSchema = mongoose.Schema({
    date : {
        type : Date,
        required : true
    },
    name : {
        type: String,
        required: true,
    },
    leaveType : {
        type : String,
        required : true
    },
    issuedFrom : {
        type: Date,
        required: true,
       
    },
    issuedUpto : {
        type : Date,
        required: true,
    },
    status : {
        type : String,
        required: true,
        default : "Pending"
    },
    description :{
        type : String,
        required : true,
    }
},
{
    timestamps: true

})

const leave = new mongoose.model("Leave",leaveSchema);

module.exports = leave;