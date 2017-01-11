var upload = require('../upload.js')('hinhsanpham');
module.exports = (req, res) => {
  upload(req, res, err => {
    res.send('San pham: ' + req.body.tenSanPham + '\n'+req.file.filename)
  });
};
