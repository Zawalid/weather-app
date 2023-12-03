import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Weather from './features/weather/Weather';
import Cities from './features/cities/Cities';
import Map from './features/map/Map';
import Settings from './features/settings/Settings';

import '@/styles/App.css';
import ThemeProvider from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<Navigate to='weather' />} />
            <Route path='weather' element={<Weather />} />
            <Route path='cities' element={<Cities />} />
            <Route path='Map' element={<Map />} />
            <Route path='settings' element={<Settings />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
