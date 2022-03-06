const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
      name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
});

module.exports = mongoose.models.User || mongoose.model('User' , userSchema);