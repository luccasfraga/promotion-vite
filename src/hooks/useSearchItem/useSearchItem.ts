import { useQuery } from "react-query";

import apiMeli from '../../api/api'
import { RequestSearch } from './types'

export function useSearchItem(data: RequestSearch) {
  return useQuery({
    queryKey: ['search', 'useSearchItem', data.siteId, data.search],
    queryFn: () => apiMeli.getSearchItems(data),
  });
}
