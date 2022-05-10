import usePost from '@/hooks/usePost'
import { ADD_USERS } from '@/utils/endpoints'

export default function useAddUsers(methodName) {
  const { response, error, loading, sendPostData } = usePost(
    ADD_USERS,
    methodName
  )
  return { response, error, loading, [methodName]: sendPostData }
}
