import { useSearchItem } from '../hooks/useSearchItem/useSearchItem'
import { useParams } from 'react-router-dom';
import { CardItemList } from '../styles/global'
import { Fragment } from 'react';
import { CardItem } from '../components/CardItem/CardItem'
import Skeleton from 'react-loading-skeleton'
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
        <Fragment key={item.id}>
          <CardItem thumbnail={item.thumbnail} title={item.title} id={item.id} price={item.price} />
        </Fragment>
      ))}
    </CardItemList>
  )
}