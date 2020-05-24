// 建立網路伺服器與資料庫伺服器之間的通訊模式 建立資料庫綱要(schema)

const mongoose = require('mongoose')

const Schema = mongoose.Schema
const todoSchema = new Schema({
    name :{
        type : String , 
        required : true // 是否為必要填寫項目 
    }
    ,month_pay :{
        type : Number , 
        required : false
    }
})
// collection  的名稱
module.exports = mongoose.model('apple' , todoSchema)

