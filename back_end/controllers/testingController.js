const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields required!!",
      });
    }
    const checkForExistingUser=await User.findOne({ email });
    
    if(checkForExistingUser) {
      return res.status(400).json({
        success: false,
        message: "user is already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    //await newUser.save();
    return res.status(201).json({
      success: true,  
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const helloUser = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "ernugey!!",   
  });
};

module.exports = {
  createUser,
  helloUser,
};
