import { useEffect, useMemo, useState } from 'react'
import { authService } from '../services/authService'
import { AuthContext } from './authContextValue'

export function AuthProvider({ children }) {
  const [user, setUserState] = useState(() => {
    return JSON.parse(localStorage.getItem('philoveey-user') || 'null')
  })

  const setUser = (nextUser) => {
    setUserState(nextUser)

    if (nextUser) {
      localStorage.setItem('philoveey-user', JSON.stringify(nextUser))
      return
    }

    localStorage.removeItem('philoveey-user')
  }

  useEffect(() => {
    if (!user?.token) return

    let active = true

    authService
      .getProfile()
      .then((profile) => {
        if (active) {
          setUserState((currentUser) => ({ ...currentUser, ...profile }))
        }
      })
      .catch(() => {
        if (active) setUser(null)
      })

    return () => {
      active = false
    }
    // Validate the saved token when it changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.token])

  const value = useMemo(() => ({ user, setUser }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
