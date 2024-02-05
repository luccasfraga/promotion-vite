import { Container } from "./Header.styles"
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  // Outros parâmetros da rota, se houver
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
      <h1>Header</h1>

      <form onSubmit={onSubmit}>
        <input
          type="search"
          id="search"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Buscar item"
        />
      </form>
    </Container>
  );
}

export default Header;