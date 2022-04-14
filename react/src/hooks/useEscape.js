import React, { useEffect } from 'react'

const useEscape = (onEscape) => {
  useEffect(() => {
    const controller = new AbortController()
    const handleEsc = (e) => {
      if (e.key === 'Escape' || e.code === 27) {
        onEscape()
      }
    }
    window.addEventListener('keydown', handleEsc, {
      signal: controller.signal,
    })

    return () => {
      controller.abort()
    }
  }, [])
}

export default useEscape
