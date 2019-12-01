const mongoose = require("mongoose")
const {DATABASE_HOST, DATABASE_NAME, DATABASE_HOST_LIVE} = require("./environtment")

mongoose.connect(`${DATABASE_HOST}/${DATABASE_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser : true
}).then(() => {
    console.log("Connected to database");
}).catch(error => {
    console.log("Error cant connect to database");
    
});

const db  = mongoose.connection
module.exports = db