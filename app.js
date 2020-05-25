const express = require('express')
const app = express() 
const exphbs = require('express-handlebars');
const Todo = require('./models/todo')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
// 設定連線 開始 
const mongoose = require('mongoose') // 載入 mongoose
mongoose.connect('mongodb://localhost/new_todolist',{ useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.connetion('mogodb://[資料庫帳號][資料庫密碼]＠[mongodb位置]:[port]/[資料庫名稱]')

const db = mongoose.connection
db.on('error' , ()=>{
    console.log('connect error')
})

db.once('open' , ()=>{
    console.log('db connection ')
})

//連線設定結束 

// hbs 設定
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')



// index 路由設置 

app.get('/' , (req , res)=>{   
    Todo.find()
        .lean()
        .then( todos =>{ res.render('index' , {todos:todos})
        })
        .catch(error=>{
            console.log('error')
        })
})


// 新增一筆  new route 

app.get('/todos/new' , (req , res)=>{
    res.render('new')
})



// 新增一筆  new route todos 儲存資料回數據庫並將頁面倒回index 

app.post('/todos' , (req,res)=>{
    const name = req.body.name 

    return Todo.create({name})
        .then(()=>res.redirect('/'))
        .catch(error => console.log(error))
})

// 瀏覽特定一筆哩要 detail route 

app.get('/todos/:id' , (req , res)=>{
    const id = req.params.id
    return Todo.findById(id)
        .lean()
        .then(todo => res.render('detail' , {todo}) )
        .catch(error=>{console.log(error)})
})



// 新增 edit route

app.get('/todos/:id/edit', (req, res) => {
    const id = req.params.id
    return Todo.findById(id)
      .lean()
      .then((todo) => res.render('edit', { todo }))
      .catch(error => console.log(error))
  })

app.post('/todos/:id/edit' , (req , res)=>{
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

app.post('/todos/:id/delete' , (req , res)=>{
    const id = req.params.id
    const name = req.body.name  
    return Todo.findById(id) 
        .then(todo => {
            return todo.remove()
        } )
        .then(()=> res.redirect(`/`))
        .catch(error=>{console.log(error)})
})


app.listen(3000 , ()=>{
    console.log("port 3000 run log")
})

