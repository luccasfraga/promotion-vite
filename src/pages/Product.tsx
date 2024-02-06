import { useParams } from 'react-router-dom';
import { useItem } from '../hooks/useItem/useItem'
import { ItemFull }  from '../components/ItemFull/ItemFull'
import Skeleton from 'react-loading-skeleton'

export function Product() {
  const { searchItem } = useParams();

  const { data: { item } = {}, isFetching } = useItem({
    itemId: searchItem || '',
  });

  if (isFetching) {
    return (
      <div style={{ margin: '24px' }}>
        <Skeleton count={1} height={50} /><br />
        <Skeleton count={1} height={230} /><br />
        <Skeleton count={1} height={80} /><br />
        <Skeleton count={1} height={20} width={150} />
      </div>
    )
  }

  return (
    <ItemFull
      thumbnail={item?.pictures}
      title={item?.title}
      price={item?.price}
      description={item?.description}
    />
  )
}