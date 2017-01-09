var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home'));

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

var upload = multer({storage, fileFilter}).single('avatar');

app.post('/xulydangky', (req, res) => {
  upload(req, res, err => {
    if(err) return res.send('Loi upload ' + err);
    var {username} = req.body;
    var {filename, size, mimetype} = req.file;
    res.send(
      `Username: ${username}
      filename: ${filename}
      size: ${size}
      mimetype: ${mimetype}`
    );
  });
});
