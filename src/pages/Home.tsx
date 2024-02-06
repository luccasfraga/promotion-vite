import { useSearchItem } from '../hooks/useSearchItem/useSearchItem'
import { useLocation } from 'react-router-dom';
import { CardItem } from '../components/CardItem/CardItem'
import { CardItemList } from '../styles/global'
import { MELI_COUNTRY_CODE } from '../configs/environment';
import Skeleton from 'react-loading-skeleton'
import { Fragment } from 'react';

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
      <div style={{ margin: '24px' }}>
        <Skeleton height={190} /><br />
        <Skeleton height={190} /><br />
        <Skeleton height={190} /><br />
      </div>
    )
  }

  return (
    <CardItemList>
      {items?.results?.map(item => (
        <Fragment key={item.title}>
          <CardItem thumbnail={item.thumbnail} title={item.title} id={item.id} price={item.price} />
        </Fragment>
      ))}
    </CardItemList>
  )
}

export default Home