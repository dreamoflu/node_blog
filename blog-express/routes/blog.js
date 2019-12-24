var express = require('express');
var router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SucessModel, ErrorModel} = require('../model/resModel')

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
            author = req.session.username
        }
       
        const result = getList(author,keyword)
      return  result.then(listData => {
            res.json(new SucessModel(listData)) 
        })
});
router.get('/detail', function(req, res, next) {
  res.json({
      errno: 0,
      data: 'ok'
  });
});

module.exports = router;