const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SucessModel, ErrorModel} = require('../model/resModel')
const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id
    // const url = req.url
    // const path = url.split('?')[0]
    // 获取博客列表
    if(method ==='GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getList(author,keyword)
        return new SucessModel(listData)
       
    }

     // 获取博客内容
     if(method ==='GET' && req.path === '/api/blog/detail') {
         const id = req.query.id;
         const data = getDetail(id);
        return new SucessModel(data)
    }

     // 新建博客
     if(method ==='POST' && req.path === '/api/blog/new') {
         const data = newBlog(req.body)
         console.log(req.body)
        return new SucessModel(data)
    }

     //更新博客
     if(method ==='POST' && req.path === '/api/blog/update') {
         const result = updateBlog(id,req.body)
         if(result) {
             return new SucessModel()
         } else {
             return new ErrorModel('更新博客失败')
         }
        //  return new SucessModel(result)
        // return {
        //     msg: '这是更新博客的的接口'
        // }
    }
     // 新建博客
     if(method ==='POST' && req.path === '/api/blog/del') {
         const result = delBlog(id)
         if(result) {
            return new SucessModel()
        } else {
            return new ErrorModel('删除博客失败')
        }
    }

}
module.exports = handleBlogRouter