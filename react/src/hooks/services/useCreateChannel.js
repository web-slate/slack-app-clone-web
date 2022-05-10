import usePost from '@/hooks/usePost'
import { CREATE_CHANNEL } from '@/utils/endpoints'

export default function useCreateChannel(methodName) {
  const { response, error, loading, sendPostData } = usePost(
    CREATE_CHANNEL,
    methodName
  )
  return { response, error, loading, [methodName]: sendPostData }
}
