const { exec } = require('../db/mysql')
const xss = require('xss')
const getList = (author, keyword) => {
    //先返回假数据 （格式正确）
    let sql = 'select * from blogs where 1=1 '
    if(author) {
        sql+= `and author = '${author}' `
    }
    if(keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`
    return exec(sql)
    // return [
    //     {
    //         id:1,
    //         title: '标题',
    //         content: '内容',
    //         createTime: '1575615500253',
    //         author: '张三'
    //     },
    //     {
    //         id:2,
    //         title: '标题B',
    //         content: '内容B',
    //         createTime: '1575615570177',
    //         author: '李四'
    //     }
    // ]
}

const getDetail = (id) => {
    //先返回假数据 （格式正确）
    let sql = `select * from blogs where id = ${id} `
    return exec(sql).then(rows => {
        return rows[0]
    })
    // return [
    //     {
    //         id:1,
    //         title: '标题',
    //         content: '内容',
    //         createTime: '1575615500253',
    //         author: '张三'
    //     }
    // ]
}

const newBlog = (blogData = {}) => {
    
    let {content,author} = blogData;
    title = xss(blogData.title)
    console.log(title)
    
    const createtime = Date.now()
    let sql = `insert into blogs(title,content,author,createtime)values('${title}','${content}','${author}','${createtime}')`
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
      
    })
    
    // blogData 是一个博客对象，包含title content 属性
    return {
        id: 3

    }
}
const updateBlog = (id,blogData = {})=> {
    // id 更新博客的 id
    // blogData 博客对象，包含title content 属性
    const {title,content} = blogData
    console.log(id)
    
    // update users set realname = '李四2' where username = 'lisi'
    let sql = `update blogs set title = '${title}',content= '${content}' where id = '${id}'`
    return exec(sql).then(updateData => {
        console.log(updateData)
        if(updateData.affectedRows>0) {
            return true

        }
        return false
    })

    return false
}
const delBlog = (id, author)=> {
    // id 删除博客的 id
    // blogData 博客对象，包含title content 属性
    const sql = `delete from blogs where id = '${id}' and author = '${author}'`
    return exec(sql).then(delData => {
        if(delData.affectedRows>0) {
            return true
        }
        return false
    })
    
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}