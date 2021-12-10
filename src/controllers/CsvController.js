const { readCsvFile , fetchEmployee } = require('../services/CsvFileService');



const uploadFile = async (req, res) => {

    await readCsvFile(req, res).then((data) => {
        if (data.sucess) {
           
            res.status(200).send({msg: "File uploaded successfully"})
        }
        else {
            res.status(400).send({msg: "File has no data to upload"})
        }
   } )
    .catch((err) => res.status(400).send(err));
    

}


const getReport = async (req, res) => {


    await fetchEmployee(req).then((data) => res.status(200).json({
        "payrollReport": {
            "employeeReport" : data
    }}))
                        .catch((err) => res.status(400).send(err));
  
    }




module.exports = { uploadFile, getReport}


