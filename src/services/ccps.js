import api from "./api";

export const ccpsApi = {
  create: (data) => api.post('/ccp', data),
  read: () => api.get('/ccp'),
  readOne: (id) => api.get(`/ccp/${id}`),
  update: (data) => api.put('/ccp', data),
  delete: (id) => api.delete(`/ccp/${id}`)
}