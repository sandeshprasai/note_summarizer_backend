const mongoose = require('mongoose');   
const Schema = mongoose.Schema;

const UserSchema =  new mongoose.Schema ({
    FullName :{
        type:String,
        required:true,
        trim:true,
        maxLength:100,
        match: [/^[a-zA-Z0-9\s]+$/, 'Full Name can only contain letters, numbers, and spaces']
    },
    UserName:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        maxLength:50,
        match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
    }, 
    Email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        maxLength:100,
         match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    Password:{
        type:String,
        required:true,
        minLength:8,
        maxLength:100,
    },
    lastLogin:{
        type:Date,
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }   


})

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;