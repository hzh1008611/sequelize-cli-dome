const fs = require('fs')
const path = require('path')

module.exports = class Upload {
  // 上传
  static async uploadFile (ctx) {
    const file = ctx.request.files.file
    if (file) {
      try {
        const reader = fs.createReadStream(file.path);
        let myDate = new Date();
        let newFilename = myDate.getTime()+'.'+file.name.split('.')[1];
        let targetPath = path.join(__dirname, '../public/upload/') + `/${newFilename}`;
        let filePath = path.join(__dirname, '../public/upload/');
        if(!fs.existsSync(filePath)) {
          fs.mkdir(filePath)
        }
        let upstream = fs.createWriteStream(targetPath);
        reader.pipe(upstream);  
        ctx.body = {
          code: 200,
          url: '/public/upload/' + newFilename
        }
      } catch (err) {
        ctx.body = {
          code: 1,
          msg: '服务器错误'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '未上传任何文件'
      }
    }
  }
}