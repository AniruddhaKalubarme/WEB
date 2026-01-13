const mongoose = require('mongoose');

require('dotenv').config();


const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB ka connection is success"))
    .catch((error) => {
        console.error("Issue in DB connection:");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;