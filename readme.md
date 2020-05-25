## 啟動 mongodb 
`
cd  ~/mongodb/bin/
./mongod --dbpath /Users/[你的使用者名稱]/mongodb-data
`

## 啟動 node express 

`
npm inti -u 

npm install express 
`
## 連線資料庫並建立model 
專案裡用 JavaScript 撰寫 Mongoose 提供的語法，而 Mongoose 會在幫我們把這些語法翻譯成資料庫的操作語言
`
npm install mongoose 
`
建立連線

建立model ( 這裡可以新增儲存數據庫的字段）

建立種子資料庫

建立handlebars  
    views 資料夾
    在 views 底下新增 layouts 資料夾
    在 layouts 底下新增 main.hbs 檔案

##  初步設置 crud 

# 將種子資料顯示

新增 route '/' 

# 建立新增數據 與建立中間除取數據頁面

新增 post :route '/todos'
    解析input value 儲存資料 並且重新導向網頁回 index 
    解析input value需要 body-parser 
    修改數據庫需要利用post 
    npm install body-parser 
    name = req.body.name 
    Todo.create(name)

新增 get : route '/todos/new'
建立新頁面 new 
    當按入 新增鈕 導向 oute '/todos' 後再重新倒回 ‘/'


## 查看某一筆資料
新增 get : /todos/:id/ route 
     獲取物件id = req.params.id
     Todo.findById(req.params.id)


## 修改特定資資料

新增 edit 頁面 
新增 get : '/todos/:id/edit' route  
    進入 edite 頁面 
新增 post : '/todos/:id/edit' route 
    name = req.body.name 
    todo.name = name 
    todo.save()
    重新導入 detail 頁面



## 刪除特定資料 

新增 '/todos/:id/delete' route 
    todo.remove()
 
## 切換狀態 

在detail , index , edit 頁面 新增 checkbox html 
在edit route 裡面 抓取  isDone 並且修改 isDone 的狀態

## 排序資料 

在‘/' 路由上面 新增
    .sort({_id:'asc'})

## 遇到無法使用 nodemon 
npm uninstall nodemon 
sudo npm install -g --force nodemon 
