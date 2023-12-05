import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import ThemeProvider from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Weather from './features/weather/Weather';
import Cities from './features/cities/Cities';
import Map from './features/map/Map';
import Settings from './features/settings/Settings';
import Search from './features/search/Search';

import '@/styles/App.css';
import WeatherProvider from './contexts/WeatherContext';

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider>
        <WeatherProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='app' element={<AppLayout />}>
                <Route index element={<Navigate to='weather' />} />
                <Route path='weather' element={<Weather />} />
                <Route path='cities' element={<Cities type={1} />} />
                <Route path='Map' element={<Map />} />
                <Route path='settings' element={<Settings />} />
                <Route path='search' element={<Search />}>
                  <Route path=':city' element={<Search />} />
                </Route>
              </Route>
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </WeatherProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
