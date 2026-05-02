const Message = require("../models/messageSchema");

const sendMsg = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required!!",
      });
    }
    const findExistingMsg=await Message.findOne({ email });
    if(findExistingMsg) {
      return res.status(400).json({
        success: false,
        message: "Message is already sent with this email",
      });
    }
    const newMsg = await Message.create({
      name,
      email,
      message,
    });

    //newMsg is saved in database
    //await newMsg.save();

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      msg: newMsg,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  sendMsg,
};