import { Box, CircularProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { useSnackbarContext } from '../../context/SnackbarContext';
import { Product } from '../../types/product';
import config from '../../utils/config';
import { columns } from './DataTableDefinition';

export const TableContainer = styled.div`
  height: 640px;
  width: 90%;
  background: #1a1c28;
  margin-top: 30px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const DataTable = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery('products', () =>
    fetch(`${config.BASE_URL}/products`).then((res) => res.json())
  );
  const { updateSnackbar } = useSnackbarContext();

  if (isError) {
    updateSnackbar({
      show: true,
      severity: 'error',
      message: 'Error occurred while fetching data.',
    });
  }

  return isLoading ? (
    <Box sx={{ display: 'flex', mt: 10 }}>
      <CircularProgress />
    </Box>
  ) : (
    <TableContainer>
      <DataGrid
        rows={products as Product[]}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </TableContainer>
  );
};

export default DataTable;
