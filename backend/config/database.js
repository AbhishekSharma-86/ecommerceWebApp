const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect("mongodb+srv://Abhishek:cdrR5CWhyWLSnaj3@cluster0.kasjagt.mongodb.net/?retryWrites=true&w=majority").then((data)=>{
    console.log(`Mongodb connected with server: ${data.connection.host}`)
    })
}
module.exports = connectDatabase;

//cdrR5CWhyWLSnaj3