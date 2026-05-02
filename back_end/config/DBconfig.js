const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}`);
    console.log("DB connected successfully!");
  } catch (error) {
    console.log("error while connecting DB");
    console.log(error);
  }
};  
    
module.exports = connectDB;
