import { useEffect, useState } from 'react'

export function useFetch(fetcher, dependencies = []) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    Promise.resolve()
      .then(() => {
        if (active) setLoading(true)
      })
      .then(fetcher)
      .then((result) => {
        if (active) setData(result)
      })
      .catch((fetchError) => {
        if (active) setError(fetchError)
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
    // This helper intentionally lets callers choose when the fetch should rerun.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return { data, error, loading }
}
