import { queryClient, QueryClientProvider } from '../tests/mocks/react-query';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders logo and searchbar', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App title="React" />
      </QueryClientProvider>
    );

    expect(screen.getByAltText('Meli')).toBeInTheDocument()
    expect(screen.getByRole('search')).toBeInTheDocument()
  });
});