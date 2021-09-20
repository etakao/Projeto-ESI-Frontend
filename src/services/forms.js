import api from "./api";

export const formsApi = {
  create: (data) => api.post('/forms', data),
  read: () => api.get('/forms'),
  readOne: (id) => api.get(`/forms/${id}`),
  update: (data) => api.put('/forms', data),
  delete: (id) => api.delete(`/forms/${id}`)
}