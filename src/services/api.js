const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  "/api"

export async function apiRequest(path, options = {}) {
  const user = JSON.parse(localStorage.getItem('philoveey-user') || 'null')
  const isFormData = options.body instanceof FormData
  const headers = {
    ...options.headers,
  }

  if (!isFormData) {
    headers["Content-Type"] = "application/json"
  }

  if (user?.token) {
    headers.Authorization = `Bearer ${user.token}`
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers,
    ...options,
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong")
  }

  return data
}
