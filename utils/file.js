const fs = require("fs")
const path = require("path")
const marked = require("marked")

    /** 
    * 读取文件夹下的所有文件 
    * @param {string} folderPath 文件夹路径
    * @return {array} 数组形式的路径
    */ 
function readFolder (folderPath) {
    const filePaths = []
    function traverse(folderPath){
        fs.readdirSync(folderPath).forEach((file)=>{
            // console.log(folderPath, file)
            const pathname=path.join(folderPath,file)
            // console.log(pathname)
            if(fs.statSync(pathname).isDirectory()){
                traverse(pathname)
            }else{
                // console.log(pathname)
                filePaths.push(pathname)
            }
        })
    }
    traverse(folderPath)
    // console.log(filePaths)
    return filePaths
}
const filePaths = readFolder('markdown')
// console.log(filePaths)
async function generateContents(arr) {
    const contents = []
    for(const path of arr) {
        const content = await mdTojs(path)
        contents.push(content)
    }
    // console.log(contents)
    return contents
}
// const file = generateContents(filePaths)

// console.log(file)
async function getasda() {
    const contents = await generateContents(filePaths)
    // console.log(contents);
}
// // console.log(contents)
getasda()
// console.log(files)
  /** 
    * 处理md文件 
    * @param {string} filePath md文件路径
    * @param {any} value 值 
    */ 
function mdTojs (filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function(err, data){
            if(err){
                console.log(err)
            }else{
                // console.log(data)
                const str = marked(data.toString())
                // console.log(str)
                // res.render('md',{str})
                resolve(str)
            }
        })
    })
}

module.exports = {
    readFolder,
    mdTojs,
    generateContents
}

