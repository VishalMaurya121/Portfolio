const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const msgSchema=new Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,"Please enter a valid email address"],  
        trim:true,
    },
    message:{
        type:String,
        required:true,
        trim:true,
    }
 },{ timestamps:true})

const Message=mongoose.model("Message",msgSchema);

module.exports=Message;
