import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { TableContainer } from '../table/DataTable';
import ProductRow from './ProductRow';

const ProductDetailContainer = styled(TableContainer)`
  padding: 30px 0;
`;

const ProductDetail = () => {
  return (
    <ProductDetailContainer>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h5">Product Name</Typography>
        </Box>
        <Box lineHeight={2}>
          <Typography variant="h6">Locations</Typography>
          <Box>Warehouse: 50</Box>
          <Box>Warehouse: 50</Box>
        </Box>
      </Box>
      <hr />
      <Box
        display="flex"
        justifyContent="space-between"
        mt={3}
        sx={{ padding: '0 80px' }}
        lineHeight={2}
      >
        <Box>
          <ProductRow name="Internal name" value="Good" />
          <ProductRow name="Good Guesture" value="Fine" />
        </Box>
        <Box>
          <ProductRow name="Basket House" value={50} />
          <ProductRow name="maq" value={30} />
        </Box>
      </Box>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
