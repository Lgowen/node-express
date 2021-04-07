const Comments = require("../models").Comments;
// const commetns = require("../jsons/comment.json")

// async function addComment() {
//     await Comments.create(commetns)
//     console.log("添加用户评论成功")
// }

// addComment()

// 1 10     skip:0   limit:10
// 2 10      skip: 10   limit:10
// 3 10     skip: 20    limit 10
// page  limit      skip: (page-1)*limit    limit:limit

// 查询新闻，按照发布日期降序排序
// page: 页码
// limit: 页容量
// keyword: 关键字，标题、内容、频道包含该关键字均可
// 返回：查询结果对象 {  total: 总数据量,  datas: 新闻数组 }
// exports.getNews = async function (page, limit, keyword) {
//   const reg = new RegExp(keyword);
//   const filter = {
//     $or: [{ title: reg }, { content: reg }, { channel: reg }],
//   };
//   // 条件
//   const datas = await News.find(filter, null, {
//     sort: "-pubDate",
//     skip: (page - 1) * limit,
//     limit: limit,
//   });
//   // 数量
//   const total = await News.countDocuments(filter);
//   return {
//     total: total,
//     datas: datas,
//   };
// };

// 获取评论
exports.getComments = async function () {
   const comment = await Comments.find()
   return comment
}

// 添加评论
exports.addComments = async function (comment) {
   const res = await Comments.create(comment)
   console.log(res)
   return res
}


// async function getComments () {
//     const result = await Comments.find()
//     console.log(result)
// }

// getComments()