import { apiRequest } from './api'

export const adminAuthService = {
  register: (payload) =>
    apiRequest('/admin/register', {
      body: JSON.stringify(payload),
      method: 'POST',
    }),
  login: (payload) =>
    apiRequest('/admin/login', {
      body: JSON.stringify(payload),
      method: 'POST',
    }),
}
