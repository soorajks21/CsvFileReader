const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    workDate: {
        type: String,
        
    },
    hours: {
        type:Number,
    },
    employeeId: {
        type: Number,
    },
    group: {
        type: String
    },
    reportId: {
        type: mongoose.Schema.Types.Number,
        ref: 'Report'
    }


})

module.exports = mongoose.model('Employee',EmployeeSchema)