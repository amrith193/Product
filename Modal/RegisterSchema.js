const mongoose = require("mongoose");
const { Schema } = mongoose;
const RegisterSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:false,
    },
    email:{
        type:String,
        require:true,
    },
    passward:{
        type:String,
        require:true,
    },
})
module.exports = mongoose.model("Register", RegisterSchema);