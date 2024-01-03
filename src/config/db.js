//Import Area  
require("dotenv").config();
//DB => Database Service
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.j4tnhwo.mongodb.net/?retryWrites=true&w=majority`
  )
  .then((d) => {
    console.log("Connectecd Successfully");
  })
  .catch((e) => {
    console.log("Error", e);
  })
  .finally();

//Exports
exports.mongoose = mongoose;
