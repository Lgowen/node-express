// 针对评论的请求
const express = require("express")
const router = express.Router()
const services = require("../services")

router.get("/", async function (req, res) {
  const result = await services.commentService.getComments()
  console.log(result)
  res.send(result);
});


router.post("/addComment", async function (req, res) {
  try {
    console.log(req.body)
    const result = await services.commentService.addComments(req.body);
    res.send(result);
  } catch (err) {
    res.send({
      err: err.message,
    });
  }
});

module.exports = router;