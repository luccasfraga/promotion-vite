import { useSearchItem } from '../hooks/useSearchItem/useSearchItem'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


import { formatCurrency } from '../utils/formatCurrency'

import { MELI_COUNTRY_CODE } from '../configs/environment';

export function Search() {
  const { searchTerm } = useParams();

  const { data: items, isFetching } = useSearchItem({
    limit: 20,
    offset: 0,
    search: searchTerm,
    siteId: MELI_COUNTRY_CODE,
  });

  if (isFetching) {
    return (
      <h1>carregando....</h1>
    )
  }

  return (
    <div>
      {items?.results?.map(item => (
        <div key={item.id}>
          <Link to={`/product/${item?.id}`}>
            <img src={item?.thumbnail} alt={item?.title} />
            <b>{item?.title}</b>
            <b>{formatCurrency(item?.price)}</b>
          </Link>
        </div>
      ))}
    </div>
  )
}