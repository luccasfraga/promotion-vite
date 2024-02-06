import { render } from '@testing-library/react';
import { queryClient, QueryClientProvider as OriginalQueryClientProvider } from './mocks/react-query';

export const customRender = (ui, options) => {
  const Wrapper = ({ children }) => (
    <OriginalQueryClientProvider client={queryClient}>
      {children}
    </OriginalQueryClientProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};