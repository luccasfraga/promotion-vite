import { Container } from "./Header.styles"
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../../images/logo.webp'
import { Link } from "react-router-dom";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

interface CustomFormEvent extends React.FormEvent<HTMLFormElement> {
  currentTarget: HTMLFormElement & {
    elements: {
      search: {
        value: string;
      };
    };
  };
}

interface Params {
  searchTerm?: string | undefined;
}

export function Header() {
  const navigate = useNavigate();
  const { searchTerm }: Params = useParams();
  const [searchParam, setSearchParam] = useState<string>('');
  const debouncedSearchParam = useDebounce(searchParam, 900);

  useEffect(() => {
    if (searchTerm && !debouncedSearchParam) {
      navigate({
        pathname: `search/${searchTerm}`,
      });
    } else {
      navigate({
        pathname: debouncedSearchParam ? `search/${debouncedSearchParam}` : undefined,
      });
      setSearchParam('')
    }
    
  }, [debouncedSearchParam, navigate, searchTerm]);

  const onSubmit = (e: CustomFormEvent) => e.preventDefault(); 


  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Meli" className="logo" />
      </Link>

      <form onSubmit={onSubmit}>
        <input
          type="search"
          id="search"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Buscar produtos, marcas e muito mais…"
          className="search"
          role="search"
        />
      </form>
    </Container>
  );
}

export default Header;