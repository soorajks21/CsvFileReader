const { formatDate, firstOfMonth, midOfMonth,
    sixteenthOfMonth, endOfMonth,
    getEmployeeWithTotalAmt, getFileId } = require('../utility/HelperFunctions');

const { testData, FileName, Dates, convertedDates, amtCalculatedEmpList } = require('./fixtures/testData');



test('should give the formated Date in YYYY-MM-DD', () => {

    const formatedDate = formatDate(Dates.formatDate);
    expect(formatedDate).toBe(convertedDates.changedDate);
})


test('should give the start Date in YYYY-MM-DD', () => {

    const formatedDate = firstOfMonth(Dates.startDate);
    expect(formatedDate).toBe(convertedDates.startDate);
})


test('should give the mid Date in YYYY-MM-DD', () => {

    const formatedDate = midOfMonth(Dates.fifteenthDate);
    expect(formatedDate).toBe(convertedDates.midDate);
})


test('should give the sixteenth Date of the month in YYYY-MM-DD', () => {

    const formatedDate = sixteenthOfMonth(Dates.sixteenthDate);
    expect(formatedDate).toBe(convertedDates.sixteenthDate);
})

test('should give the last date of the month in YYYY-MM-DD', () => {

    const formatedDate = endOfMonth(Dates.lastDate);
    expect(formatedDate).toBe(convertedDates.endDate);
})


test('should give the file id', () => {
    const id = getFileId(FileName);
    expect(id).toBe(47)
})


test('should return employeelist with total amount based group and id', () => {

    const emplist = getEmployeeWithTotalAmt(testData());
    expect(emplist).toEqual(amtCalculatedEmpList);

        
},30000)