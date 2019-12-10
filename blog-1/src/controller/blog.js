const getList = (author, keyword) => {
    //先返回假数据 （格式正确）
    return [
        {
            id:1,
            title: '标题',
            content: '内容',
            createTime: '1575615500253',
            author: '张三'
        },
        {
            id:2,
            title: '标题B',
            content: '内容B',
            createTime: '1575615570177',
            author: '李四'
        }
    ]
}
const getDetail = (id) => {
    //先返回假数据 （格式正确）
    return [
        {
            id:1,
            title: '标题',
            content: '内容',
            createTime: '1575615500253',
            author: '张三'
        }
    ]
}
const newBlog = (blogData = {}) => {
    
    // blogData 是一个博客对象，包含title content 属性
    return {
        id: 3

    }
}
const updateBlog = (id,blogData = {})=> {
    // id 更新博客的 id
    // blogData 博客对象，包含title content 属性
    return false
}
const delBlog = (id = {})=> {
    // id 删除博客的 id
    // blogData 博客对象，包含title content 属性
    return false
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}