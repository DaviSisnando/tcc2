const multer = require('multer');
const path = require('path');

module.exports = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext).replace(/ /g, '_');

      return cb(null, `${Date.now()}-${name}${ext}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const [fileType] = file.mimetype.split('/');

    if (fileType !== 'image') {
      return cb(new multer.MulterError('File must be an image'));
    }

    return cb(null, true);
  },
};