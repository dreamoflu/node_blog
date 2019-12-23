## 启动项目
1. 启动redis redis-server
2. 启动nginx
3. 启动node
4. 启动一个html（html-tels文件夹 ）服务 端口8080 在nginx 中做过反向代理的配置
## 数据库的基本用法（在workbench中操作）
## 数据库的增、删、改、查
## 使用sql语句
>修改数据库字段 在修改的表名上右键 选择 Alter Table
1. 要操作某个数据库
    ````
    use myblog
    ````
2. 插入和查询数据库
    ````
    insert into users(username,`password`,realname) values ('zhangsan', '123', '李四')  //新增数据  password 是mysql关键字 需要加``;
    select * from user   // 查询user中所有的列
    select id, username from user   // 查询user中的id 和 username
    select * from user where username = 'zhangsan'   // 查询user中username='zhangsan'的数据
    select * from user where username <> 'zhangsan'   // 查询user中username不等于'zhangsan'的数据
    select * from user where username = 'zhangsan'and `password` = '123'   // 查询user中username='zhangsan'并且password = '123'的数据 (or为或)
    select * from users where username like '%zhang%'; // like 关键字为模糊查询 '%zhang%' 查询username中含有zhang的数据
    select * from users where password like '%1%' order by id desc; // 查询排序 默认是正序 加上desc之后是倒序排列
    ````
3. 更新数据库数据
   > 第一次使用update或delete可能会报错 
   > Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
   > 执行 SET SQL_SAFE_UPDATES = 0

    ````
     update users set realname = '李四2' // users中所有的realname更新为 ‘李四2’
     update users set realname = '李四2' where username = 'lisi' // users中username='lisi'的realname数据更新为 ‘李四2’
    ````  
4. 删除数据库数据
> 注意生产上一般不用删除语句 而是每条数据加一个状态 用来判读数据是否可用
   ````
   delete from users where username = 'lisi'

   ````     
## nginx
1. nginx 在mac上的配置文件地址
 /usr/local/etc/nginx/nginx.conf
2. nginx 命令
   - 测试配置文件格式是否正确 nginx -t
   - 启动nginx; 重启 nginx -s reload
   - 停止 nginx -s stop
   - 重启报错 解决方法  指定Nginx文件  nginx -c /usr/local/etc/nginx/nginx.conf


# 原生node操作日志


## 写日志（utils文件中）


## 日志拆分

  #### linux系统设置定时任务 crontab
  1. 设置定时任务，格式：*****command
  2. 将access.log 拷贝并重命名为 2019-02-10.access.log
  3. 清空access.log文件，继续积累日志
  #### 配置 crontab
  1. crontab -e 创建并编辑任务
  2. 编辑任务 例如（每天的第0个小时开始执行脚本） * 0 * * * sh /Users/liyajun/Documents/慕课网学习/node_blog/blog-1/src/utils
  2. crontab -l 查看任务


## 日志分析
  1. 如针对 access.log 日志， 分析chrome的占比
  2. 日志是按行存储的，一行就是一条日志
  3. 使用nodejs的readline（给予stream，效率高）（readline逐行读取）
  4. 具体代码演示 在 utils/realine.js 中


  ## 预防sql注入
   使用mysql自带函数 escape （转译特殊字符）
   代码实例：contronller/user.js

  ## 预防xss攻击
  1. npm install xss --save  
  2. 使用xss 转译特殊符号
  代码实例：contronller/blogs.js