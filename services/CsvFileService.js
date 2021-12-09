const csv = require('csvtojson')
const groupName = require('../utility/groups');
const payment = require('../utility/paymentEnum');
const { insertEmployees, getEmployees } = require('../repositories/EmployeeRepository')
const { addReport } = require('../repositories/ReportRepository');
const mcache = require('memory-cache');

const { formatDate, firstOfMonth, midOfMonth,
    sixteenthOfMonth, endOfMonth, checkDate, totalAmount,
    getEmployeeDetails, getSortedEmployeeList, getEmployeeWithTotalAmt, getFileId, removeFile } = require('../utility/HelperFunctions');

const readCsvFile = async (req, res) => {
        
 
        const employees = [];
        let hasData = true;
        const _id = getFileId(req.file.filename);
        const uploadedTime = Date.now();

    await csv({
        noheader: false,
        headers: ['date', 'hours', 'employeeId', 'group', 'reportId'],
        delimiter: ','
    }).
        fromFile(__basedir + "/uploads/" + req.file.filename).
        then(source => {
            if (source[0].date != '') {
                                    
                for (let i = 1; i < source.length; i++) {
                        
                    let row = {
                            
                        workDate: source[i].date,
                        hours: source[i].hours,
                        employeeId: source[i].employeeId,
                        group: source[i].group,
                        reportId: _id
                    };
                    employees.push(row);
                }
            }
            else {
                removeFile(req.file.filename);
                hasData = false;
            }
        }).catch((err) => err);
    if (hasData) {
        await addReport(_id, uploadedTime);
       const values = await insertEmployees(employees).then((data) => data);
        return {sucess : true, body : values};  
    }
    else {
        return {sucess: false}
    }
            
    }
   
       
      

const fetchEmployee = async (req, res, next) => {


    let employeeList = [];
    let result = await getEmployees();
    console.log(result.length);
    try {

        let key = '__express__'+  result.length + req.originalUrl || req.url;
        let cachedBody = mcache.get(key);

        if (cachedBody) {
            return cachedBody;
        }
        else {
        

            

            result.map((x) => {
                let dateWorked = formatDate(x.workDate);
                let startOfMonth = firstOfMonth(dateWorked);
                let fifteenOfMonth = midOfMonth(dateWorked);
                let semiOfMonth = sixteenthOfMonth(dateWorked);
                let lastDayOfMonth = endOfMonth(dateWorked);
                let amount = '';

                let getPayRollDates = checkDate(dateWorked, startOfMonth, fifteenOfMonth, semiOfMonth, lastDayOfMonth);

                let startPayDate = getPayRollDates[0];
                let endPayDate = getPayRollDates[1];

                switch (x.group) {
                    case groupName.groupA: amount = totalAmount(payment.paymentOfA, x.hours);
                        break;
                    case groupName.groupB: amount = totalAmount(payment.paymentOfB, x.hours);
                        break;
                    default:
                        throw x.group;
        
                }

 
                let employeeDetails = getEmployeeDetails(x.employeeId, startPayDate, endPayDate, x.group, amount);


                employeeList.push(employeeDetails);
            });

            const sortEmployeeList = getSortedEmployeeList(employeeList);




            const employeeWithTotalAmt = getEmployeeWithTotalAmt(sortEmployeeList);

            mcache.put(key, employeeWithTotalAmt);
            return employeeWithTotalAmt;
  
        }
    }
    catch (err) {
        const result = {
            status: 'fail',
            message: 'err' + err.message
        }
    }
      
   }
   


module.exports = { readCsvFile ,fetchEmployee };