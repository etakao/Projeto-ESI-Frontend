import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://projetoes1.herokuapp.com/',
});

api.interceptors.request.use(async config => {
  // const token = getToken();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibGV2ZWwiOiJhZG1pbiIsImlhdCI6MTYzMjM5NzQ4MSwiZXhwIjoxNjMyNDgzODgxfQ.V-_YsgiF6QgU2yBVU2jl7Bh3ujQ-gnt-p8eyQp8xMTQ";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;