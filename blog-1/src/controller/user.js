  
    const { exec, escape} = require('../db/mysql')
    const { genPassword } = require ('../utils/cryp')
const login = (username, password) => {

    // 未进行依赖注入
    // const sql = `select username, realname from users where username = ${username} and password = ${password}`
    
    // 生成加密密码
    password = genPassword(password)

    // 预防sql 注入
    username = escape(username)
    password = escape(password)

    const sql = `select username, realname from users where username = ${username} and password = ${password}`
    return exec(sql).then(data=> {
        return data[0] || {}
    })
    // if (username === 'zhangsan' && password === '123') {
    //     return true
    // }
    // return false
}
module.exports = {
    login
}