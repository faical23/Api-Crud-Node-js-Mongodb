const mongoose = require('mongoose');

const TodoShema = new mongoose.Schema({
    Task:{type:String},
    Time:{type:Number},
},{timestamps:true})

module.exports = mongoose.model('MyTasks',TodoShema)