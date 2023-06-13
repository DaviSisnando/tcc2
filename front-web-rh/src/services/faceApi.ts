import axios from 'axios';

const faceApi = axios.create({
  baseURL: (import.meta.env.VITE_FACE_SERVICE_BASE_URL as string) ?? '',
});

export default faceApi;
