import api from "./api";

export const studentsApi = {
  create: (data) => api.post('/student', data),
  read: () => api.get('/student'),
  readOne: (id) => api.get(`/student/${id}`),
  update: (data) => api.put('/student', data),
  delete: (id) => api.delete(`/student/${id}`)
}