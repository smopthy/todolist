const express = require('express')
const app = express() 
const exphbs = require('express-handlebars');

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



app.get('/' , (req, res)=>{
    res.render('index')
})

app.listen(3000 , ()=>{
    console.log("port 3000 run log")
})