const mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema({
    _id: {
        type:Number
    },
    uploadedTime: {
        type: Date
    }
})

module.exports = mongoose.model('Report',ReportSchema)