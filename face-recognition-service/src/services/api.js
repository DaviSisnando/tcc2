const axios = require('axios');

const api = axios.create({
  baseURL: process.env.USER_SERVICE_URL ?? '',
});

module.exports = api;
