import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';

const VITE_OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

console.log({ VITE_OMDB_API_KEY });

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <App />
          <ReactQueryDevtools initialIsOpen />
        </MantineProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
