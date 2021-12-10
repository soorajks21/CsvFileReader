const testData = () => {

    return (		[
        {
          employeeId: 1,
          payPeriod: { startDate: '2023-01-01', endDate: '2023-01-15' },
          group: 'A',
          amount: 200
        },
        {
          employeeId: 1,
          payPeriod: { startDate: '2023-01-01', endDate: '2023-01-15' },
          group: 'A',
          amount: 100
        }
      ])    
}


const amtCalculatedEmpList = [
    {
        employeeId: 1,
        payPeriod: { startDate: '2023-01-01', endDate: '2023-01-15' },
        group: 'A',
        amount: 300
    }];

const FileName = 'time-report-47';

const Dates = {

    formatDate: '4/1/2023',
    startDate: '2023-01-14',
    fifteenthDate: '2023-01-14',
    sixteenthDate: '2023-01-16',
     lastDate: '2023-01-19',

}

const convertedDates = {
    
    changedDate: '2023-01-04',
    startDate: '2023-01-01',
    midDate: '2023-01-15',
    sixteenthDate: '2023-01-16',
    endDate : '2023-01-31'
}



module.exports = {
    testData,
    amtCalculatedEmpList,
    Dates,
    FileName,
    convertedDates
};