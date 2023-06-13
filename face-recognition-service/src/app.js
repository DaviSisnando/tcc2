require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require("express-fileupload");
const faceapi = require('face-api.js');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  fileUpload({ useTempFiles: true })
);

(async function LoadModels() {
  await faceapi.nets.faceRecognitionNet.loadFromDisk(__dirname + "/modelsFace");
  await faceapi.nets.faceLandmark68Net.loadFromDisk(__dirname + "/modelsFace");
  await faceapi.nets.ssdMobilenetv1.loadFromDisk(__dirname + "/modelsFace");
  await faceapi.nets.tinyFaceDetector.loadFromDisk(__dirname + "/modelsFace");
})()

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.connection.on('error', (err) => {
  console.log('Erro na conexão com o banco de dados: ' + err)
});

mongoose.connection.on('disconnect', () => {
  console.log('Desconectado do banco de dados')
})

mongoose.connection.on('connected', () => {
  console.log('Conectado ao banco de dados')
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
