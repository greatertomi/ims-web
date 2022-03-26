import { Alert, Snackbar } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import styled from 'styled-components';
import { useProductContext } from '../../context/ProductContext';
import { products } from '../../mocks/data';
import { columns } from './DataTableDefinition';

export const TableContainer = styled.div`
  height: 650px;
  width: 90%;
  background: #1a1c28;
  margin-top: 30px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const DataTable = () => {
  const { showSnackbar, updateShowSnackbar } = useProductContext();

  return (
    <>
      <TableContainer>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </TableContainer>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => updateShowSnackbar(false)}
      >
        <Alert
          onClose={() => updateShowSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Data updated successfully
        </Alert>
      </Snackbar>
    </>
  );
};

export default DataTable;
