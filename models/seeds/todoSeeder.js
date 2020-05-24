const mongoose = require('mongoose') 
const Todo =require('../todo')
mongoose.connect('mongodb://localhost/new_todolist',{ useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection 
db.on('error',()=>{
  console.log('connect errror')
})

db.once('open' , ()=>{
    for(let i =0 ; i <10 ; i++){
        Todo.create({name :'name-'+ i ,month_pay : 0})
    }

    console.log('connecting')
})

