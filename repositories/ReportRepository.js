const Report = require('../model/Report');

const addReport = async (id, uploadedTime) => {
   
   return  Report.insertMany({ _id: id, uploadedTime: uploadedTime }).then((data) => data);
}

module.exports = { addReport };