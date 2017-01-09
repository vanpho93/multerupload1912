var upload = require('./upload.js');
module.exports = (req, res) => {
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
};
