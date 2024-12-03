const mongoose = require("mongoose");

function connectTODb() {
    mongoose.connect(process.env.CONNECTION_STRING, ()=>{
        console.log("DB connected successfully");
    })
}