import { Box } from '@mui/material';
import React, { FC } from 'react';
import styled from 'styled-components';

const ProductRowContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

interface ProductRowProps {
  name: string;
  value?: string | number | null;
}

const ProductRow: FC<ProductRowProps> = ({ name, value }) => {
  return (
    <ProductRowContainer>
      <Box>{name}:&nbsp;</Box>
      <Box>{value || 'Null'}</Box>
    </ProductRowContainer>
  );
};

export default ProductRow;
