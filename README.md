## Instructions to run node app

Navigate to SE-CHALLENGE-PAYROLL
INSTALL THE DEPENDENCIES - npm install
RUN APPLICATION - npm run dev
TEST APPLICATION - npm run test


When application started

## How to consume api to upload file.


Can upload the csv file through : http://localhost:3000/api/file/upload
Can fetch payroll report from : http://localhost:3000/api/report
-- Open postman
-- Select body and choose form-data
-- Add key = file and select the file to the values
-- click send
-- file will be uploaded to uploads folder inside src and data will be added to the db.
-- If file with only headers are added then api will send a message 'No data in the file to upload'
-- Api will send message 'This file cannot be uploaded' if existing file is added.



## How did you test that your implementation was correct?
  --
      -- API was developed by following module pattern and sevice-oriented Architecture.
      -- Each module was developed with Test Driven Development.
      -- Performed manual testing
      -- Used test data and unit test to perform the logic check
      -- Seperated test env from the dev environment
      -- By Testing postive and negative outcomes
      -- By tracking api responses using Postman (smoke testing)
  --  


## If this application was destined for a production environment, what would you add or change?
  -- 
      -- Security (Authentication, Authorization and encrytion)
      -- Mocking of api and database should have added
      -- Analyse api performance( load testing)
      -- Add versioning 
      -- Add error log
      -- Implementing CORS
      -- Explicitly send the content type headers
      -- Monitor api and iterate on feedback
      -- Writing api documentation
  --
 ## What compromises did you have to make as a result of the time constraints of this challenge?
  --
      -- Mocking database and api to perform testing (could have developed api with dependency injection)
      -- Load testing
      -- Sepration of caching layer
  --