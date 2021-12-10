const moment = require('moment');
const fs = require('fs');
const path = require('path');

const formatDate = (date) => {
    return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
}

const firstOfMonth = (date) => {
    return moment(date, "YYYY-MM-DD").format("YYYY-MM-01");
}

const midOfMonth = (date) => {
    return moment(date, "YYYY-MM-DD").format("YYYY-MM-15");
}

const sixteenthOfMonth = (date) => {
    return moment(date, "YYYY-MM-DD").format("YYYY-MM-16");
}


const endOfMonth = (date) => {
    return moment(date, "YYYY/MM/DD").endOf('month').format("YYYY-MM-DD");
}


const checkDate = (date, startOfMonth, fifteenOfMonth, semiOfMonth, lastDay ) => {
    let isBetween = moment(date).isBetween(startOfMonth, fifteenOfMonth);
    if (isBetween) {
        return [startOfMonth, fifteenOfMonth];

    }
    else {
        return [semiOfMonth, lastDay];
    }
}


const totalAmount = (amt, hrs) => {
    return amt * hrs;
}


const getEmployeeDetails = (employeeId, startDate, endDate, group, amount) => {
    return    {
        employeeId: employeeId,
        payPeriod :{
         
            startDate: startDate,
            endDate: endDate,
        },
        group: group,
        amount: amount
        
    }
}


const getSortedEmployeeList = (employeeList) => {
    return (
        employeeList.sort((a, b) => {
            return (
                a.employeeId - b.employeeId || a.payPeriod.startDate - b.payPeriod.startDate
            )
        })
    )
}

const getEmployeeWithTotalAmt = (employeeList) => {
    
  return( employeeList.reduce((acc, curr) => {
        let item = acc.find(item => item.employeeId === curr.employeeId && item.payPeriod.startDate === curr.payPeriod.startDate && item.group === curr.group);
        item ? item.amount += curr.amount : acc.push(curr);
        return acc;
  }, []));
    
    
}

const generateEmployeeReport = (employeeList) => {

    const employeeReports = employeeList.map((x) => {
        return {
            "employeeId": x.employeeId,
            "payPeriod": x.payPeriod,
            "amount" : x.amount
        }
    });


    return employeeReports;
}


const getFileId = (fileName) => {
    const name = fileName.split('-');
    return parseInt(name[2]);
}


const removeFile = (filename) => {
    const pathDirectory = 'uploads';
    const filePath = '/' + pathDirectory + '/';
    const pathToFile = path.resolve(__basedir + filePath + filename);
    try {
        if (fs.existsSync(pathToFile)) {
            fs.unlinkSync(pathToFile)
    }
 
} catch(err) {
  throw err
}
}


module.exports = {
    formatDate: formatDate,
    firstOfMonth: firstOfMonth,
    midOfMonth: midOfMonth,
    sixteenthOfMonth: sixteenthOfMonth,
    endOfMonth: endOfMonth,
    checkDate: checkDate,
    totalAmount: totalAmount,
    getEmployeeDetails: getEmployeeDetails,
    getSortedEmployeeList: getSortedEmployeeList,
    getEmployeeWithTotalAmt: getEmployeeWithTotalAmt,
    getFileId: getFileId,
    removeFile: removeFile,
    generateEmployeeReport: generateEmployeeReport
}