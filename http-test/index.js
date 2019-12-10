const http = require('http')
// get 请求演示
const queryString = require('querystring')
// const server = http.createServer((req,res)=> {
//     console.log(req.method)
//     const url = req.url
//     console.log('url:', url)
//     req.query = queryString.parse(url.split('?')[1])
//     console.log('query:',req.query)
//     res.end(JSON.stringify(req.query))
// })

// post 请求显示
//  const server = http.createServer((req, res)=> {
//    if(req.method==='POST') {
//        console.log('req content-type:', req.headers['content-type'])
//        let postData = '';
//        req.on('data',chunk => {
//            postData += chunk.toString()
//        })
//        req.on('end',()=> {
//            console.log('postData',postData)
//            res.end('hello word!')
//        })
//    }
//  })

// 综合演示
const server = http.createServer((req,res)=> {
   const method = req.method;
   const url =req.url;
   const path = url.split('?')[0]
   const query = queryString.parse(url.split('?')[1])
   res.setHeader('Content-type','application/json')
   const resData = {
       method,
       url,
       path,
       query
   }
   
   if(method === 'GET') {
       res.end(
           JSON.stringify(resData)
       )
   }
   if(method === 'POST') {
       let postData = ''
       req.on('data',chunk => {
           postData += chunk.toString()
       })
       req.on('end',()=> {
           resData.postData = postData
           res.end(JSON.stringify(resData))
       })
       
   }
})
server.listen(8000)
console.log('ok')