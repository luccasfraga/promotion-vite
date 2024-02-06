import { AsideContent, List } from "./Aside.styles"
import { MELI_COUNTRY_CODE } from '../../configs/environment';
import { useCategory } from '../../hooks/useCategory/useCategory'
import { Fragment } from "react";
import { Link } from "react-router-dom";

export function Aside() {
  const { data, isFetching } = useCategory({
    id: MELI_COUNTRY_CODE,
  });

  
  if (isFetching) {
    return (
      <h1>carregando....</h1>
    )
  }

  return (
    <AsideContent>
      <List>
        {data?.map(item => (
          <Fragment key={item?.id}>
            <li>
              <Link to={`search/${item?.name}`}>
                {item?.name}
              </Link>
            </li>
          </Fragment>
        ))}
      </List>
    </AsideContent>
  )
}