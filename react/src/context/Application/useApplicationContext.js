import { useContext } from 'react'
import ApplicationContext from './Context'

export default function useApplicationContext() {
  const context = useContext(ApplicationContext)
  if (!context) {
    throw new Error('useApplicationContext is not exist')
  }
  return context
}
