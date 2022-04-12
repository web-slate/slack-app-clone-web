import useFetch from '@/hooks/useFetch'
import { MESSAGES_LIST } from '@/utils/endpoints'

export default function useMessagesList(organizationId, channelId) {
  const MESSAGES_LIST_BY_CHANNEL_ID = `${MESSAGES_LIST}/${organizationId}/${channelId}`
  const { response, error, loading } = useFetch(
    MESSAGES_LIST_BY_CHANNEL_ID
  )
  return { response, error, loading }
}
