import api from "./api";

export const teachersApi = {
  create: (data) => api.post('/teacher', data),
  read: () => api.get('/teacher'),
  readOne: (id) => api.get(`/teacher/${id}`),
  update: (data) => api.put('/teacher', data),
  delete: (id) => api.delete(`/teacher/${id}`)
}