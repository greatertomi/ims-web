import { Button } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDialog from '../product/ProductDialog';

const renderActionButton = (params: any) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    console.log('button clicked', params);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
    onClick();
  };

  return (
    <>
      <Button onClick={handleModalOpen} variant="contained" size="small">
        Edit
      </Button>
      <Button
        component={Link}
        to={`/products/${params.id}`}
        variant="contained"
        size="small"
        sx={{ ml: 2 }}
      >
        View
      </Button>
      <ProductDialog open={open} onClose={handleModalClose} />
    </>
  );
};

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 180,
    sortable: false,
    renderCell: renderActionButton,
  },
];
