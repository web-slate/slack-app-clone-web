import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(url, methodName = 'refresh') {
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const refresh = async () => {
    if (!url || url.trim() === '') return
    const obj = { response, error }
    try {
      setLoading(true)
      const result = await axios.get(url)
      setResponse(result.data)
      obj.response = result.data
    } catch (err) {
      setError(err)
      obj.error = err
    } finally {
      setLoading(false)
    }
    return obj
  }

  useEffect(async () => await refresh(), [url])

  return { response, error, loading, [methodName]: refresh }
}
