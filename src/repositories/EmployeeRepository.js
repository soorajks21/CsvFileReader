const Employee = require('../model/Employee');


const insertEmployees = async (employees) =>  await Employee.insertMany(employees).then((data) => data).catch((err) => err);
    
   
const getEmployees = async () => await Employee.find().then((data) => data).catch((err) => err);


module.exports = { insertEmployees, getEmployees };