const FaceModel = require('../models/Face')
const { Canvas, Image } = require("canvas");
const canvas = require("canvas");
const faceapi = require('face-api.js');
const sharp = require('sharp');
const api = require('../services/api');
faceapi.env.monkeyPatch({ Canvas, Image });

class FaceController {
  constructor () {
    this.getFaceMatcher().then(faceMatcher => this.faceMatcher = faceMatcher);
  }

  euclidean_dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  };

  async getFaceMatcher() {
    const faces = await FaceModel.find()

    if (faces.length === 0) return null;

    for (let i = 0; i < faces.length; i++) {
      for (let j = 0; j < faces[i].descriptions.length; j++) {
        faces[i].descriptions[j] = new Float32Array(Object.values(faces[i].descriptions[j]));
      }
      faces[i] = new faceapi.LabeledFaceDescriptors(faces[i].label, faces[i].descriptions);
    }
  
    return new faceapi.FaceMatcher(faces, 0.6);
  }

  async uploadLabeledImages(images, label) {
    try {
      const descriptions = [];
      
      for (let i = 0; i < images.length; i++) {
        const img = await canvas.loadImage(images[i]);
        const detections = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();
        descriptions.push(detections.descriptor);
      }
      const createFace = new FaceModel({
        label,
        descriptions,
      });
      await createFace.save();

      this.getFaceMatcher().then(faceMatcher => this.faceMatcher = faceMatcher);

      return true;
    } catch (error) {
      console.log(error);
      return (error);
    }
  }

  async getDescriptorsFromDB(image) {
    try {
      console.log('imageeeeee', image)
      // const imgConverted = await sharp(image).toFormat('png').toBuffer({resolveWithObject: true})
      // console.log('adshuijhdasuihdasdsa')
      // console.log(imgConverted)

      const img = await canvas.loadImage(image);
      let temp = faceapi.createCanvasFromMedia(img);
      const displaySize = { width: img.width, height: img.height };
      faceapi.matchDimensions(temp, displaySize);
    
      const detection = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();
      const resizedDetection = faceapi.resizeResults(detection, displaySize);

      const result = this.faceMatcher 
        ? this.faceMatcher.findBestMatch(resizedDetection.descriptor)
        : { message: 'No face registred in database'}

      const label = result?._label; 

      if (label && label !== 'unknown') {
        const usersReq = await api.get('users', { params: { exact: label }})
        const users = usersReq.data.data

        if (users.length === 0) return false;

        const status = users[0].status

        if (status === 'Ativo') return { label, pass: true}

        return false;
      }

      return result;
    } catch (e) {
      console.error(e)
      return false
    }
  }
}

module.exports = new FaceController()