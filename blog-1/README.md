## 数据库的基本用法（在workbench中操作）
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
## 数据库的增、删、改、查
## 使用sql语句