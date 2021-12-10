const request = require('supertest');
const fs = require('fs');
const path = require('path')
const app = require('../app')
const Employee = require('../model/Employee')
const Report = require('../model/Report')
const { removeFile } = require('../utility/HelperFunctions')
const pathDirectory = 'uploads';
const filePath = '/' + pathDirectory + '/';
const cwd = process.cwd();




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
