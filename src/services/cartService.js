import { apiRequest } from './api'

export const cartService = {
  add: (productId, quantity = 1) =>
    apiRequest('/cart', {
      body: JSON.stringify({ productId, quantity }),
      method: 'POST',
    }),
  clear: () => apiRequest('/cart', { method: 'DELETE' }),
  get: () => apiRequest('/cart'),
  remove: (productId) => apiRequest(`/cart/${productId}`, { method: 'DELETE' }),
  update: (productId, quantity) =>
    apiRequest(`/cart/${productId}`, {
      body: JSON.stringify({ quantity }),
      method: 'PUT',
    }),
}
