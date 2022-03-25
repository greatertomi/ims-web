import { Box } from '@mui/material';
import React, { FC } from 'react';

interface ProductRowProps {
  name: string;
  value?: string | number;
}

const ProductRow: FC<ProductRowProps> = ({ name, value }) => {
  return (
    <Box display="flex" gap={1}>
      <Box>{name}:</Box>
      <Box>{value}</Box>
    </Box>
  );
};

export default ProductRow;
