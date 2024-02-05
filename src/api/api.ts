import axios from 'axios';
import { MELI_API_BASE_URL } from '../configs/environment';
import { RequestMeliApi, ResponseCategory } from '../hooks/useCategory/types'
import { ResponseSearch, RequestSearch } from '../hooks/useSearchItem/types'
import { RequestItem } from '../hooks/useItem/types'
import { Item, ItemDescription } from '../entities/Item';

const API = axios.create({
  baseURL: `${MELI_API_BASE_URL}`,
  timeout: 10000,
});

const getCategories = async ({id } : RequestMeliApi) : Promise<ResponseCategory[]> => {
  const { data } = await API.get(`/sites/${id}/categories`)

  return data
}

const getSearchItems = async ({
  limit,
  offset,
  search,
  siteId,
} : RequestSearch) : Promise<ResponseSearch> => {
  const { data } = await API.get<ResponseSearch>(`/sites/${siteId}/search`,
  {
    params: {
      q: search,
      offset,
      limit,
    },
  })

  return data
}

const getItem = async ({itemId } : RequestItem) : Promise<Item> => {
  const { data } = await API.get(`/items/${itemId}`)

  return data
}

const getItemDescription = async ({itemId } : RequestItem) : Promise<ItemDescription> => {
  const { data } = await API.get(`/items/${itemId}/description`)

  return data
}

export default {
  getCategories,
  getSearchItems,
  getItem,
  getItemDescription
}