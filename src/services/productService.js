import { apiRequest } from './api'

export const productService = {
  create: (payload) =>
    apiRequest('/products', {
      body: payload,
      method: 'POST',
    }),
  getAll: () => apiRequest('/products'),
  getById: (id) => apiRequest(`/products/${id}`),
}
