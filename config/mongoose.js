// 設定連線 開始 
const mongoose = require('mongoose') // 載入 mongoose
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/new_todolist'
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.connection('mongodb://[資料庫帳號][資料庫密碼]＠[mongodb位置]:[port]/[資料庫名稱]')



const db = mongoose.connection
db.on('error' , ()=>{
    console.log('connect error')
})

db.once('open' , ()=>{
    console.log('db connection ')

})

module.exports = db