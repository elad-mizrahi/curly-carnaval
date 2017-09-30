const getColors = require('get-image-colors');
const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

router.post('/', upload.any(), function (req, res) {
  getColors(req.files[0].path, req.files[0].mimetype).then(colors => {
    var hexColors = colors.map(color => color.css())
    res.send({ colors: { primaryColor: hexColors[0], secondaryColor: hexColors[1] } });
  });
});

module.exports = router;
