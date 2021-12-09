const multer = require('multer');
const fs = require('fs');


const pathDirectory = 'uploads';
const filePath = '/' + pathDirectory + '/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + '/uploads/')
    },
    filename: (req, file, cb) => {
        try {
            
    
            fs.stat(__basedir + filePath + file.originalname, (err, stat) => {
                if (err == null) {
                   
                    cb(new Error("This file cannot be uploaded"), file.originalname);
                }
                else if (err.code === 'ENOENT') {
                    cb(null, file.originalname)
                }
            })
        }
        catch (ex) {
            res.status(500).send({ error: ex })
        }
      
    }
});

const fileFilter =  (req, file, cb) => {    
    // Allowed ext
     const filetypes = /csv/;
  
   // Check ext
    const extname = filetypes.test((__basedir + filePath + file.originalname).toLowerCase());
   // Check mime
   const mimetype = filetypes.test(file.mimetype);
  
   if(mimetype && extname){
       return cb(null,true);
   } else {
       cb('Error: CSV file Only!');
   }
}
  

const upload = multer({
    storage: storage,
    fileFilter : fileFilter
});

module.exports = upload;