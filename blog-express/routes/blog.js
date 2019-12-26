var express = require('express');
var router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SucessModel, ErrorModel} = require('../model/resModel')

const loginCheck = require('../middleware/loginCheck')
/* GET home page. */
router.get('/list', function(req, res, next) {
       let author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author,keyword)
        // return new SucessModel(listData)
       
        if(req.query.isadmin) {
            // 管理界面
            // const loginCheckResult = loginCheck(req)
            // if(loginCheckResult) {
            //     return loginCheckResult
            // }
            if(req.session.username == null) {
              res.json(new ErrorModel('未登录'))
              return
            }
            author = req.session.username
        }
       
        const result = getList(author,keyword)
      return  result.then(listData => {
            res.json(new SucessModel(listData)) 
        })
});
router.get('/detail', function(req, res, next) {
  let result = getDetail(req.query.id)
 
        return result.then(data=> {
          res.json(new SucessModel(data));
           
        })
  
});
router.post('/new', loginCheck, function(req, res, next) {
  
 

 req.body.author= req.session.username 
 const result = newBlog(req.body)
return result.then(data=> {
     res.json(new SucessModel(data)) 
 })
  
});
router.post('/update', loginCheck, function(req, res, next) {
  
 

  const result = updateBlog(req.query.id,req.body)
  return result.then(val => {
      if(val) {
          res.json(new SucessModel()) 
      } else {
          res.json(new ErrorModel('更新博客失败')) 
      }
   })
   
 });
 router.post('/del', loginCheck, function(req, res, next) {
  
 

  const author = req.session.username // 假数据，待开发登录时再改成真数据
         const result = delBlog(req.query.id,author)
         return result.then(val => {
            if(val) {
                res.json(new SucessModel()) 
            } else {
              res.json(new ErrorModel('删除博客失败'))
                
            }

         })
   
 });

module.exports = router;