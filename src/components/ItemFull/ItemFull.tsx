import { Container, ContentImage } from "./ItemFull.styles"
import { formatCurrency } from '../../utils/formatCurrency'

interface Thumbnail {
  id: string;
  url: string;
}
interface ItemFullProps {
  thumbnail?: Thumbnail[],
  id?: string,
  title?: string,
  description?: string,
  price?: string | number,
}


export function ItemFull({ thumbnail, title, price, description }: ItemFullProps) {
  return (
    <Container>
      <b>{title}</b>
      <ContentImage>
        {thumbnail?.map(img => <img src={img.url} alt="" />)}
      </ContentImage>
      <span>{description || 'Produto sem descrição...'}</span>
      <strong>Preço: {formatCurrency(price)}</strong>
    </Container>
  )
}