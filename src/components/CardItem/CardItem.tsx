import { Container } from "./CardItem.styles"
import { formatCurrency } from '../../utils/formatCurrency'
import { Link } from "react-router-dom";

interface CardItemProps {
  thumbnail?: string,
  id?: string,
  title?: string,
  price?: string | number,
}


export function CardItem({ thumbnail, title, price, id }: CardItemProps) {
  return (
    <Link to={`/product/${id}`}>
      <Container>
        <img src={thumbnail} alt={title} />
        <span>{title}</span>
        <b>{formatCurrency(price)}</b>
      </Container>
    </Link>
  )
}