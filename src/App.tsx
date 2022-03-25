import { ThemeProvider } from '@mui/material';
import React from 'react';
import GlobalStyle, { PageContainer } from './globalStyle';
import DataPage from './pages/DataPage';
import { darkTheme } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <PageContainer>
        <DataPage />
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
