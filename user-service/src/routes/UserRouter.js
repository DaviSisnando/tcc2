const express = require('express');
const multer = require("multer");

const UsersController = require('../controllers/UsersController');
const multerConfig = require('../config/multer');

const upload = multer(multerConfig);
const routes = express.Router();

routes.post('/', upload.single('file'), UsersController.create);
routes.get('/', UsersController.index);
routes.get('/:id', UsersController.show);
routes.put('/:id', UsersController.update);
routes.delete('/:id', UsersController.delete);

module.exports = routes;