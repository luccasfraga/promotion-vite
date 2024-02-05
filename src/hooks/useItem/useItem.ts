import { useQuery } from "react-query";

import apiMeli from '../../api/api'
import { RequestItem } from './types'

export function useItem(data: RequestItem) {
  return useQuery(['combinedData', data.itemId], async () => {
    const itemResult = await apiMeli.getItem(data);
    const itemDescription = await apiMeli.getItemDescription(data);
    return { item: { ...itemResult, description: itemDescription.plain_text }};
  });
}