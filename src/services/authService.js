import { apiRequest } from './api'

export const authService = {
  getProfile: () => apiRequest('/auth/profile'),
  login: (payload) =>
    apiRequest('/auth/login', {
      body: JSON.stringify(payload),
      method: 'POST',
    }),
  register: (payload) =>
    apiRequest('/auth/register', {
      body: JSON.stringify(payload),
      method: 'POST',
    }),
}
