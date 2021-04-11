// 针对image的处理

const express = require("express")
const router = express.Router()
const fs = require('fs')
const path = require('path')

//上传图片的模板
const multer = require('multer');
//生成的图片放入uploads文件夹下
const upload = multer({dest:'images/'})
//图片上传必须用post方法
router.post('/', upload.single('test'), (req,res) => {
    //读取文件路径
    fs.readFile(req.file.path, (err,data)=>{
        //如果读取失败
        if(err){return res.send('上传失败')}
        //如果读取成功
        //声明图片名字为时间戳和随机数拼接成的，尽量确保唯一性
        let time = Date.now()+parseInt(Math.random()*999)+parseInt(Math.random()*2222);
        //拓展名
        let extname = req.file.originalname.split('.')[1]
        console.log(req.file)
        //拼接成图片名
        let keepname = time+'.'+extname
        console.log(keepname)
        //三个参数
        //1.图片的绝对路径
        //2.写入的内容
        //3.回调函数
        fs.writeFile(path.join(__dirname, '../markdown/md' + keepname), data, (err) => {
            if(err){return res.send('写入失败')}
            res.send({err:0,msg:'上传ok',data:'/images/'+keepname})
        })
    })
})

module.exports = router;