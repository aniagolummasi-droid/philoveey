import { apiRequest } from './api'

export const orderService = {
  create: (payload) =>
    apiRequest('/orders', {
      body: JSON.stringify(payload),
      method: 'POST',
    }),
  getAll: () => apiRequest('/orders'),
  getMine: () => apiRequest('/orders/my-orders'),
}
