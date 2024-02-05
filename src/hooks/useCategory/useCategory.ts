import { useQuery } from "react-query";

import apiMeli from '../../api/api'
import { RequestMeliApi } from './types'


export function useCategory(data: RequestMeliApi) {
  return useQuery({
    queryKey: ['category', 'useCategory', data.id],
    queryFn: () => apiMeli.getCategories(data),
  });
}
