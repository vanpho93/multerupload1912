var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.render('home'));
app.post('/xulydangky', require('./controller/xulydangky.js'));

app.get('/array', (req, res) => res.render('array'));
app.post('/xulymang', require('./controller/xulymang.js'));
