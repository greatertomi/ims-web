import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { productLocations, products } from '../../mocks/data';
import { TableContainer } from '../table/DataTable';
import ProductRow from './ProductRow';

const ProductDetailContainer = styled(TableContainer)`
  padding: 30px 0;
`;

const ProductDetail = () => {
  const product = products[0];
  const locations = productLocations;
  return (
    <ProductDetailContainer>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mb={3}
      >
        <Box>
          <Typography variant="h5">{product.internalTitle}</Typography>
        </Box>
        <Box lineHeight={2}>
          <Typography variant="h6">Locations</Typography>
          {locations.map(({ warehouse, location, quantity }) => (
            <Box>
              {warehouse} ({location}): {quantity}
            </Box>
          ))}
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
          <ProductRow name="Core Number" value={product.coreNumber} />
          <ProductRow name="Vendor" value={product.vendor} />
          <ProductRow name="Vendor Title" value={product.vendorTitle} />
          <ProductRow name="Vendor SKU" value={product.vendorSku} />
          <ProductRow name="Backup Vendor" value={product.backupVendor} />
          <ProductRow
            name="Backup Vendor SKU"
            value={product.backupVendorSKU}
          />
          <ProductRow name="restockable" value={String(product.restockable)} />
          <ProductRow
            name="Vendor Order Unit"
            value={product.vendorOrderUnit}
          />
          <ProductRow name="Vendor Case Pack" value={product.vendorCasePack} />
          <ProductRow name="Minimum Order Quantity" value={product.moq} />
          <ProductRow name="Buffer Days" value={product.bufferDays} />
          <ProductRow name="Minimum Level" value={product.minimumLevel} />
        </Box>
        <Box>
          <ProductRow name="Product URL" value={product.productUrl} />
          <ProductRow
            name="Note for Next Order"
            value={product.noteForNextOrder}
          />
          <ProductRow name="Case Pack" value={product.casePack} />
          <ProductRow
            name="Pieces Per Box"
            value={product.piecesPerInternalBox}
          />
          <ProductRow name="Boxes Per Case" value={product.boxesPerCase} />
          <ProductRow name="Tag 1" value={product.tag1} />
          <ProductRow name="Tag 2" value={product.tag2} />
          <ProductRow name="Tag 3" value={product.tag3} />
          <ProductRow name="Tag 4" value={product.tag4} />
          <ProductRow name="Hamzat" value={product.hamzat} />
          <ProductRow name="Ignore Until" value={product.ignoreUntil} />
          <ProductRow name="Notes" value={product.notes} />
          <ProductRow name="Active" value={String(product.active)} />
        </Box>
      </Box>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
