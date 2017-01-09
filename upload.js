var multer = require('multer');
var storage = multer.diskStorage({
  destination(req, file, cb){
    cb(null, './public');
  },
  filename(req, file, cb){
    cb(null, Date.now() + file.originalname)
  }
});

function fileFilter(req, file, cb){
  if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'){
    return cb(null, true);
  }
  cb(new Error('Khong dung dinh dang file'));
}
var limits = {
  fileSize: 10000
}
var upload = multer({storage, fileFilter, limits}).single('avatar');
module.exports = upload;
