## 安装express（使用脚手架）
1. npm install express-generator -g
2. express < project-name >(生成项目)
3. npm install
4. npm start

## 登录插件
1. express-session
2. connect-redis

## 存储日志的插件
 1. acess log 日志记录，直接使用脚手架推荐的morgan  morgan
 2. 自定义日志使用 console.log和console.error即可
 3. 日志文件拆分，日志内容分析。
## morgan 的使用
1. https://github.com/expressjs/morgan
2. 找到 Predefined Formats 

## 小知识 切换npm版本
 nvm use --delete-prefix 8.12.0

## 安装koa2（使用脚手架）
1. npm install koa-generator -g
2. Koa2 <项目名称>(初始化 创建文件夹)
3. npm install
4. npm run dev

## 登录插件
1. koa-generic-session
2. koa-redis