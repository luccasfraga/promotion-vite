import { AsideContent } from "./Aside.styles"
import { MELI_COUNTRY_CODE } from '../../configs/environment';
import { useCategory } from '../../hooks/useCategory/useCategory'
import { Fragment } from "react";
import { Link } from "react-router-dom";


export function Aside() {
  const { data, isFetching } = useCategory({
    id: MELI_COUNTRY_CODE,
  });

  if (!data) {
    return null;
  }
  
  if (isFetching) {
    return (
      <AsideContent>
        <h1>carregando....</h1>
      </AsideContent>
    )
  }
  
  return (
    <AsideContent>
      <ul>
        {data?.map(item => (
          <Fragment key={item?.id}>
            <li>
              <Link to={`search/${item?.name}`}>
                {item?.name}
              </Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </AsideContent>
  )
}