import { ThemeProvider } from '@mui/material';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomSnackbar from './components/CustomSnackbar';
import SnackbarContext from './context/SnackbarContext';
import GlobalStyle, { AppContainer } from './globalStyle';
import DataPage from './pages/DataPage';
import ProductPage from './pages/ProductPage';
import { darkTheme } from './theme';
import { queryClient } from './utils/reactQuery';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <SnackbarContext>
            <AppContainer>
              <Routes>
                <Route path="/" element={<DataPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
              </Routes>
              <CustomSnackbar />
            </AppContainer>
          </SnackbarContext>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
