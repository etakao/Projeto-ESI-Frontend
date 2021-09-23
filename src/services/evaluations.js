import api from "./api";

export const evaluationsApi = {
  create: (data) => api.post('/evaluation', data),
  read: () => api.get('/evaluation'),
  readOne: (id) => api.get(`/evaluation/${id}`),
  update: (data) => api.put('/evaluation', data),
  delete: (id) => api.delete(`/evaluation/${id}`)
}