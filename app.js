const express = require('express')
const app = express() 
const exphbs = require('express-handlebars');
const Todo = require('./models/todo')
const methodOverride = require('method-override')

const routes = require('./routes')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

// 引用 mongoose.js 的數據庫設定
require('./config/mongoose')

// // 設定連線 開始 
// const mongoose = require('mongoose') // 載入 mongoose
// mongoose.connect('mongodb://localhost/new_todolist',{ useNewUrlParser: true, useUnifiedTopology: true })
// //mongoose.connection('mongodb://[資料庫帳號][資料庫密碼]＠[mongodb位置]:[port]/[資料庫名稱]')



// const db = mongoose.connection
// db.on('error' , ()=>{
//     console.log('connect error')
// })

// db.once('open' , ()=>{
//     console.log('db connection ')

// })

//連線設定結束 

// hbs 設定
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// restful
app.use(methodOverride('_method'))


// // express-route
app.use(routes)

// index 路由設置 

// app.get('/' , (req , res)=>{   
//     Todo.find()
//         .lean()
//         .sort({_id:'asc'})
//         .then( todo =>{ res.render('index' , {todo})
//         })
//         .catch(error=>{
//             console.log('error')
//         })
// })



// 新增一筆  new route 

// // app.get('/todos/new' , (req , res)=>{
// //     res.render('new')
// // })



// // 新增一筆  new route todos 儲存資料回數據庫並將頁面倒回index 

// app.post('/todos' , (req,res)=>{
//     const name = req.body.name 

//     return Todo.create({name})
//         .then(()=>res.redirect('/'))
//         .catch(error => console.log(error))
// })

// // 瀏覽特定一筆哩要 detail route 

// app.get('/todos/:id' , (req , res)=>{
//     const id = req.params.id
//     return Todo.findById(id)
//         .lean()
//         .then(todo => res.render('detail' , {todo}) )
//         .catch(error=>{console.log(error)})
// })



// // 新增 edit route

// app.get('/todos/:id/edit', (req, res) => {
//     const id = req.params.id
//     return Todo.findById(id)
//       .lean()
//       .then((todo) => res.render('edit', { todo }))
//       .catch(error => console.log(error))
//   })



// app.put('/todos/:id' , (req , res)=>{
//     const id = req.params.id
//     const {name , isDone }= req.body
     
//     return Todo.findById(id) 
//         .then(todo => {
//             todo.name = name 
//             todo.isDone = isDone === 'on'
//             return todo.save()
//         } )
//         .then(()=> res.redirect(`/todos/${id}`))
//         .catch(error=>{console.log(error)})
// })


// //新增 detele route 

// app.delete('/todos/:id' , (req , res)=>{
//     const id = req.params.id
//     const name = req.body.name  
//     return Todo.findById(id) 
//         .then(todo => {
//             return todo.remove()
//         } )
//         .then(()=> res.redirect(`/`))
//         .catch(error=>{console.log(error)})
// })

const PORT = process.env.PORT || 3000
app.listen(PORT , ()=>{
    console.log("App is running on http://localhost:3000")
})

