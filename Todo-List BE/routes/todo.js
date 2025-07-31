const express = require('express')
const router = express.Router()

const Todo = require('../model/schema')

//Create 
router.post('/',async (req,res)=>{
  const newTodo = new Todo(req.body)
  const saveTodo =  await newTodo.save()
  res.json(saveTodo)
})

//Fetch
router.get('/',async(req,res)=>{
  const todo = await Todo.find();
  res.json(todo);
})
//Update
router.put('/:id' , async(req,res)=>{
  const updated = await Todo.findByIdAndUpdate(req.params.id , req.body , {new:true})
  res.json(updated)
})
//Delete
router.delete('/:id' , async(req,res)=>{
  await Todo.findByIdAndDelete(req.params.id)
  res.json({message:'Deleted'})
})

module.exports = router