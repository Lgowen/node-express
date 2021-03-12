// 针对md文件的请求

const express = require("express")
const router = express.Router()
const { readFolder, generateContents } = require("../utils/file")

// async function app () {
//     const filePaths = readFolder('markdown') // 读取markdown文件夹获取文件路径
//     const contents = await generateContents(filePaths)
//     console.log(contents)
// }

// app()
router.get("/", async function (req, res) {
//   const page = +req.query.page || 1; // 如果没有传递page，默认1
//   const limit = +req.query.limit || 10; //如果没有传递limit，默认10
//   const result = await services.newsService.getNews(page, limit, "");
  const filePaths = readFolder('markdown') // 读取markdown文件夹获取文件路径
  const contents = await generateContents(filePaths)
  console.log(contents)
  res.send(contents)
});

module.exports = router;
