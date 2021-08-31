
const express = require('express')
const router = express.Router(); 
const Todo = require('../Controller/Todo');

router.get('/Todo',Todo.GetData)
router.get('/Todo/SingleTask/:task',Todo.GetOneData)
router.post('/Todo',Todo.InsertData)
router.put('/Todo',Todo.UpdateData)
router.delete('/Todo/:id',Todo.DeleteData)

module.exports = router; 