import { Box, styled as muiStyled } from '@mui/material';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export const PageContainer = muiStyled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  minHeight: '100vh',
  width: '100%',
  color: theme.palette.text.primary,
  padding: '5px 10px',
}));

export default GlobalStyle;
