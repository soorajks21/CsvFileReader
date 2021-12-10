const request = require('supertest');
const app = require('../src/app')
const Employee = require('../src/model/Employee')
const Report = require('../src/model/Report')
const { removeFile } = require('../src/utility/HelperFunctions')





    beforeAll( async () => {
    await Employee.deleteMany();
    await Report.deleteMany();
   await removeFile('time-report-47.csv');
}, 30000)


test('should upload csv file', async () => {

    await request(app)
        .post('/api/file/upload')
        .attach('file', 'tests/fixtures/time-report-47.csv')
        .expect(200)
}, 30000);


test('should throw files exist', async () => {

    await request(app)
        .post('/api/file/upload')
        .attach('file', 'tests/fixtures/time-report-47.csv')
        .expect(400)
}, 30000);


test('should get payroll details', async () => {

    await request(app)
        .get('/api/report')
        .send()
        .expect(200)
}, 30000);
