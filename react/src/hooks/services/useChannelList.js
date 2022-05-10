import useFetch from '@/hooks/useFetch'
import { CHANNEL_LIST } from '@/utils/endpoints'

export default function useChannelList() {
  const { response, error, loading, refresh } = useFetch(CHANNEL_LIST)
  return { response, error, loading, refresh }
}
