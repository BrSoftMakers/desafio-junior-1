const mongoose = require("mongoose");
const { database_url } = require("../env");

const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(database_url, options)
    .then(() => {
        console.log("Database connected!");
    }, err => {
        console.log("Error connectionf Database due to: ", err);
    });
