const mysql = require('mysql');

// 创建链接对象

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lyj,1340705151',
    port: 3306,
    database: 'myblog'
})

// 开始连接
con.connect()

// 执行sql 语句
const sql = 'select * from users;'
con.query(sql,(err,result)=> {
    if(err) {
        console.log(err)
        return
    }
    
    console.log(result)
})
con.end()
