const mongoose = require('mongoose');
const connect = require('../DataBase/Connect')
const TodoShema = require('../Models/Todo')
const UsersShema = require('../Models/Usres')

const GetData = async (req, res, next) => {
    try{
        let NewTask =await TodoShema.find()
        return res.status(200).json(NewTask)
    }catch(err){
        console.log(err)
    }
};
const GetOneData = async (req, res, next) => {
    try{
        let task = req.params.task
        let NewTask =await TodoShema.find({Task:task})
        return res.status(200).json(NewTask)
    }catch(err){
        console.log(err)
    }
};
const InsertData = async (req, res, next) => {
    try{
        const {task,time} = req.body;
        let NewTask =await new TodoShema({Task:task,Time:time,test:time}).save()
        return res.status(201).json(NewTask)
    }catch(err){
        console.log(err)
    }
};
const UpdateData = async (req, res, next) => {
    try{
        const {id,task,time} = req.body;
        let NewTask =await new TodoShema.findOneAndUpdate({id:'612d686d21fef29241e71b9d'},{$set:{Task:'New MongoDB Tutorial'}})
        return res.status(201).json(NewTask)
    }catch(err){
        console.log(err)
    }
};
const DeleteData = async(req, res, next) => {
    try{
        let idTask = req.params.id
        let NewTask =await TodoShema.deleteOne({id:idTask})
        return res.status(200).json("success")
    }catch(err){
        console.log(err)
    }
};

module.exports ={GetData,GetOneData,InsertData,UpdateData,DeleteData}