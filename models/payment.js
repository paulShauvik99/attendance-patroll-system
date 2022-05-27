const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    date : {
        type : Date,
        required : true
    },
    name : {
        type: String,
        required: true,
    },
    amount : {
        type : Number,
        required : true
    }
},
{
    timestamps: true

})

const payment = new mongoose.model("payment",paymentSchema);

module.exports = payment;