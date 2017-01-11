var upload = require('../upload.js').getArrayUpload('hinhsanpham');
module.exports = (req, res) => {
  upload(req, res, err => {
    res.send('San pham: ' + req.body.tenSanPham + '\n'+req.files[0].filename)
  });
};
