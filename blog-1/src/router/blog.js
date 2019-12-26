const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SucessModel, ErrorModel} = require('../model/resModel')

// 统一的登录验证函数
const loginCheck = (req) => {
    if(! req.session.username ) {
        return Promise.resolve(
            new ErrorModel('尚未登录')
        )
    } 

}

const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id
    // const url = req.url
    // const path = url.split('?')[0]
    // 获取博客列表
    if(method ==='GET' && req.path === '/api/blog/list') {
        let author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author,keyword)
        // return new SucessModel(listData)
       
        if(req.query.isadmin) {
            console.log('is admin')
            // 管理界面
            const loginCheckResult = loginCheck(req)
            if(loginCheckResult) {
                return loginCheckResult
            }
            author = req.session.username
        }
       
        const result = getList(author,keyword)
      return  result.then(listData => {
            return new SucessModel(listData)
        })
       
    }

     // 获取博客内容
     if(method ==='GET' && req.path === '/api/blog/detail') {
         const id = req.query.id;
        //  const data = getDetail(id);
        // return new SucessModel(data)
        let result = getDetail(id)
        return result.then(data=> {
            return new SucessModel(data)
        })
    }

     // 新建博客
     if(method ==='POST' && req.path === '/api/blog/new') {
         const loginCheckResult = loginCheck(req)
         if(loginCheckResult) {
             return loginCheckResult
         }
        //  const data = newBlog(req.body)
        //  console.log(req.body)
        // return new SucessModel(data)
        const author = req.session.username // 假数据，待开发登录时再改成真数据
        req.body.author= author
        const result = newBlog(req.body)
       return result.then(data=> {
            return new SucessModel(data)
        })

    }

     //更新博客
     if(method ==='POST' && req.path === '/api/blog/update') {
        const loginCheckResult = loginCheck(req)
        if(loginCheckResult) {
            return loginCheck
        }
        //  console.log('=================')
        //  console.log(id)
         const result = updateBlog(id,req.body)
        return result.then(val => {
            if(val) {
                return new SucessModel()
            } else {
                return new ErrorModel('更新博客失败')
            }
         })
         
        //  return new SucessModel(result)
        // return {
        //     msg: '这是更新博客的的接口'
        // }
    }
     // 删除博客
     if(method ==='POST' && req.path === '/api/blog/del') {
        const loginCheckResult = loginCheck(req)
        if(loginCheckResult) {
            return loginCheckResult
        }
        //  const author = req.body.author
        const author = req.session.username // 假数据，待开发登录时再改成真数据
         const result = delBlog(id,author)
         return result.then(val => {
            if(val) {
                return new SucessModel()
            } else {
                return new ErrorModel('删除博客失败')
            }

         })
         
    }

}
module.exports = handleBlogRouter