const express = require('express');
const router = express.Router();
const upload = require('../../config/multer.config');

const { uploadFile, getReport } = require('../controllers/CsvController');

router.post('/api/file/upload', upload.single("file"), uploadFile, (error, req, res, next) => {
    res.status(400).send({error: error.message})
});
router.get('/api/report', getReport);



module.exports = router;
