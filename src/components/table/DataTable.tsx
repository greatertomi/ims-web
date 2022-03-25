import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import styled from 'styled-components';
import { people } from '../../mocks/data';
import { columns } from './DataTableDefinition';

export const TableContainer = styled.div`
  height: 650px;
  width: 80%;
  background: #1a1c28;
  margin-top: 30px;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
`;

const DataTable = () => {
  return (
    <TableContainer>
      <DataGrid
        rows={people}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </TableContainer>
  );
};

export default DataTable;
