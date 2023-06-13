const express = require("express");

const FaceRouter = require('./FaceRouter');

const routes = express.Router();

routes.use("/face", FaceRouter);

module.exports = routes;
