import useFetch from '@/hooks/useFetch'
import { MESSAGES_LIST } from '@/utils/endpoints'

export default function useMessagesList() {
  const { response, error, loading } = useFetch(
    MESSAGES_LIST
  )
  return { response, error, loading }
}
