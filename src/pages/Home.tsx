import { useSearchItem } from '../hooks/useSearchItem/useSearchItem'
import { useLocation } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency'

import { MELI_COUNTRY_CODE } from '../configs/environment';

export function Home() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const valorDaBusca = queryParams.get('search');

  const { data: items, isFetching } = useSearchItem({
    limit: 20,
    offset: 0,
    search: valorDaBusca || 'Promoções',
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
        <div>
          <img src={item?.thumbnail} alt={item?.title} />
          <b>{item?.title}</b>
          <b>{formatCurrency(item?.price)}</b>
        </div>
      ))}
    </div>
  )
}