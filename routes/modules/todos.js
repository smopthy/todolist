const express = require('express')

const router = express.Router()

const Todo = require('../../models/todo')

// 新增一筆  new route 

router.get('/new' , (req , res)=>{
    res.render('new')
})


// 新增一筆  new route todos 儲存資料回數據庫並將頁面倒回index 

router.post('/' , (req,res)=>{
    const name = req.body.name 

    return Todo.create({name})
        .then(()=>res.redirect('/'))
        .catch(error => console.log(error))
})

// 瀏覽特定一筆哩要 detail route 

router.get('/:id' , (req , res)=>{
    const id = req.params.id
    return Todo.findById(id)
        .lean()
        .then(todo => res.render('detail' , {todo}) )
        .catch(error=>{console.log(error)})
})



// 新增 edit route

router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    return Todo.findById(id)
      .lean()
      .then((todo) => res.render('edit', { todo }))
      .catch(error => console.log(error))
  })

router.put('/:id' , (req , res)=>{
    const id = req.params.id
    const {name , isDone }= req.body
     
    return Todo.findById(id) 
        .then(todo => {
            todo.name = name 
            todo.isDone = isDone === 'on'
            return todo.save()
        } )
        .then(()=> res.redirect(`/todos/${id}`))
        .catch(error=>{console.log(error)})
})


//新增 detele route 

router.delete('/:id' , (req , res)=>{
    const id = req.params.id
    const name = req.body.name  
    return Todo.findById(id) 
        .then(todo => {
            return todo.remove()
        } )
        .then(()=> res.redirect(`/`))
        .catch(error=>{console.log(error)})
})

module.exports = router