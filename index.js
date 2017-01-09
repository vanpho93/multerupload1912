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
var upload = multer({storage});

app.post('/xulydangky', upload.single('avatar'), (req, res) => {
  
});
