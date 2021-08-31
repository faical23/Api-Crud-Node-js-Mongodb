const mongoose = require('mongoose');

const UsersShema = new mongoose.Schema({
    Task:{type:String},
    Time:{type:Number},
},{timestamps:true})

module.exports = mongoose.model('MyUserss',UsersShema)