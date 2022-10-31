const app = require('./app');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary');
const Razorpay = require('razorpay');
const connectDatabase = require('./config/database')
dotenv.config({path:"backend/config/config.env"});

//Handling uncaught exception 
process.on('uncaughtException', err=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandles caught exception`);
    process.exit(1);
})

connectDatabase();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.instance = new Razorpay({
    key_id : process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
    
})

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is up and runing on port : ${process.env.PORT}`);
})


//Unhandled Promise Rejection
process.on("unhandledRejection", err=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandles promise rejection`);
    server.close(()=>{
        process.exit(1);
    });
});