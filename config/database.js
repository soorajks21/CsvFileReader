const mongoose = require('mongoose')

const connectDB = async() => {
    try {
       
            
             await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
                
            }
            )
        }
      
    
    catch (err) {
        process.exit(1)
    }
}


const close = () => {
    return mongoose.disconnect();
}

module.exports = { connectDB, close };