import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductContext from './context/ProductContext';
import GlobalStyle, { AppContainer } from './globalStyle';
import DataPage from './pages/DataPage';
import ProductPage from './pages/ProductPage';
import { darkTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <ProductContext>
          <AppContainer>
            <Routes>
              <Route path="/" element={<DataPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
            </Routes>
          </AppContainer>
        </ProductContext>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
