import useFetch from '@/hooks/useFetch'
import { USERS_LIST } from '@/utils/endpoints'

export default function useUsersList() {
  const { response, error, loading } = useFetch(USERS_LIST)
  return { response, error, loading }
}
