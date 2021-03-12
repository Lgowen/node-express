// 定义用户的模型

const mongoose = require("mongoose");

// 定义一个结构
const docSchema = new mongoose.Schema({
  filePath: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Doc", docSchema)
