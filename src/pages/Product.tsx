import { useParams } from 'react-router-dom';
import { useItem } from '../hooks/useItem/useItem'
import { formatCurrency } from '../utils/formatCurrency'

export function Product() {
  const { searchItem } = useParams();

  const { data: { item } = {}, isFetching } = useItem({
    itemId: searchItem || '',
  });

  if (isFetching) {
    return (
      <h1>carregando....</h1>
    )
  }
  
  return (
    <div>
      <p>{item?.title}</p>
      <p>{item?.description}</p>
      <b>{formatCurrency(item?.price)}</b>

      <br />
      {item?.pictures?.map(img => <img src={img.url} alt="" />)}
    </div>
  )
}