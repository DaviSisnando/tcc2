const express = require('express');

const FaceController = require('../controllers/FaceController');

const routes = express.Router();

routes.post('/', async(req, res) => {
  const File1 = req.files.File1.tempFilePath
  const File2 = req.files.File2.tempFilePath
  const File3 = req.files.File3.tempFilePath
  const label = req.body.label
  let result = await FaceController.uploadLabeledImages([File1, File2, File3], label);

  if (result) {
      res.json({message:"Face data stored successfully"})
  } else {
      res.json({message:"Something went wrong, please try again."})
      
  }
});

routes.post('/check', async(req, res) => {
  const File = req.files.File.tempFilePath;
  let result = await FaceController.getDescriptorsFromDB(File);
  res.json({ result });
})

module.exports = routes;