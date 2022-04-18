import useFetch from '@/hooks/useFetch'
import { ORGANIZATION_BY_ID } from '@/utils/endpoints'

export default function useOrganizationById() {
  const { response, error, loading } = useFetch(ORGANIZATION_BY_ID)
  return { response, error, loading }
}
